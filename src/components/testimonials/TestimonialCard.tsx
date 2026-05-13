import type { Testimonial } from "@/content/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <blockquote className="text-sm leading-relaxed text-slate-700">“{testimonial.quote}”</blockquote>
      <figcaption className="mt-5">
        <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
        <p className="text-xs text-slate-600">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}

