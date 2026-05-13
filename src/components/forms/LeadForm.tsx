"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Label, Select, Textarea } from "@/components/ui/Field";

type Kind = "contact" | "student" | "company" | "partner";

const endpointByKind: Record<Kind, string> = {
  contact: "/api/contact",
  student: "/api/apply/student",
  company: "/api/apply/company",
  partner: "/api/apply/partner"
};

export function LeadForm({
  kind,
  title,
  subtitle
}: {
  kind: Kind;
  title: string;
  subtitle?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage(null);
    const form = new FormData(e.currentTarget);

    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(endpointByKind[kind], {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Request failed.");
      }

      setStatus("success");
      setMessage("Thanks — we’ll get back to you shortly.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      {subtitle ? <p className="mt-2 text-sm text-slate-600">{subtitle}</p> : null}

      <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="fullName">Full name</Label>
            <Input id="fullName" name="fullName" placeholder="Your name" autoComplete="name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@email.com" autoComplete="email" required />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="country">Country</Label>
            <Input id="country" name="country" placeholder="e.g. Portugal" autoComplete="country-name" />
          </div>
          <div>
            <Label htmlFor="timeline">Timeline</Label>
            <Select id="timeline" name="timeline" defaultValue="">
              <option value="" disabled>
                Select a timeframe
              </option>
              <option value="0-1 months">0–1 months</option>
              <option value="1-3 months">1–3 months</option>
              <option value="3-6 months">3–6 months</option>
              <option value="6+ months">6+ months</option>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="Tell us what you’re looking for..." required />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            By submitting, you agree to be contacted about your request. See{" "}
            <a className="text-brand-700 hover:text-brand-800" href="/legal/privacy-policy">
              Privacy policy
            </a>
            .
          </p>
          <Button type="submit" disabled={status === "sending"} className="justify-center">
            {status === "sending" ? "Sending..." : "Submit"}
          </Button>
        </div>

        {message ? (
          <div
            className={
              status === "success"
                ? "rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                : "rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-800"
            }
            role="status"
          >
            {message}
          </div>
        ) : null}
      </form>
    </div>
  );
}

