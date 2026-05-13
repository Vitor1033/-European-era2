import { defineConfig } from "vite";
import { resolve } from "node:path";

const pagesDir = resolve(__dirname, "pages");

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        home: resolve(pagesDir, "home.html"),
        about: resolve(pagesDir, "about.html"),
        opportunities: resolve(pagesDir, "opportunities.html"),
        services: resolve(pagesDir, "services.html"),
        partners: resolve(pagesDir, "partners.html"),
        testimonials: resolve(pagesDir, "testimonials.html"),
        blog: resolve(pagesDir, "blog.html"),
        faq: resolve(pagesDir, "faq.html"),
        contact: resolve(pagesDir, "contact.html"),
        apply: resolve(pagesDir, "apply.html"),
        "how-it-works": resolve(pagesDir, "how-it-works.html"),
        "opportunity-detail": resolve(pagesDir, "opportunity-detail.html"),
        "blog-post": resolve(pagesDir, "blog-post.html"),
        resources: resolve(pagesDir, "resources.html"),
        privacy: resolve(pagesDir, "privacy.html"),
        terms: resolve(pagesDir, "terms.html"),
        cookies: resolve(pagesDir, "cookies.html"),
        gdpr: resolve(pagesDir, "gdpr.html"),
        "404": resolve(pagesDir, "404.html")
      }
    }
  }
});
