export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  kind: "student" | "partner" | "success";
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sofia M.",
    role: "Student — Internship in Lisbon",
    kind: "student",
    quote:
      "The process felt clear from day one. European Era helped me match with the right role and prepared me for interviews and onboarding."
  },
  {
    id: "t2",
    name: "Daniel K.",
    role: "Student — Erasmus placement in Berlin",
    kind: "success",
    quote:
      "I didn’t just get an opportunity — I got structure and support. The checklist and preparation calls made the move much easier."
  },
  {
    id: "t3",
    name: "Partner Coordinator",
    role: "Company Partner — Barcelona",
    kind: "partner",
    quote:
      "European Era sends well-prepared candidates and communicates proactively. The matching process is efficient and professional."
  },
  {
    id: "t4",
    name: "Ana L.",
    role: "Student — Remote internship",
    kind: "student",
    quote:
      "The guidance was practical and not generic. I knew exactly what was expected and how to succeed in the first weeks."
  }
];

