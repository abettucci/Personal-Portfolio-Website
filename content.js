/*
 * This is the only file you need to edit to update the portfolio.
 * Duplicate an object in a list, change its text, save, and refresh the page.
 */
window.portfolioContent = {
  contact: {
    email: "bettucci.agustin@gmail.com",
    github: "https://github.com/abettucci",
    linkedin: "https://www.linkedin.com/in/abettucci",
    cvUrl: "assets/cv.pdf", // Put the PDF in assets/cv.pdf or use a public HTTPS URL.
  },

  projects: [
    {
      type: "Financial data platform · Professional work",
      title: "From batch reporting to near-real-time financial visibility.",
      description: "Helped evolve a Profit & Loss data product into a near-real-time flow while protecting reconciliation, traceability, and safe reprocessing. The difficult part was not moving data faster—it was keeping financial data correct when events arrived late, twice, or out of order.",
      tags: ["Event-driven", "Data quality", "Observability", "Idempotency"],
      featured: true,
      url: "",
    },
    {
      type: "Independent product · AWS serverless",
      title: "Expense intelligence from inbox to usable data.",
      description: "An event-driven ETL that turns receipt PDFs and payment reports into clean, categorized expense data. Built around raw-data preservation, orchestration, schema normalization, and idempotent loads.",
      tags: ["Python", "Lambda", "Step Functions", "BigQuery"],
      url: "",
    },
    {
      type: "Independent product · Real-time application",
      title: "A copilot that keeps up with a live Twitch chat.",
      description: "A real-time moderation and assistance workflow built with FastAPI, PostgreSQL, Redis, WebSockets, and a TypeScript dashboard. Designed to respond quickly without turning a busy chat into noise.",
      tags: ["FastAPI", "Redis", "WebSockets", "React"],
      url: "",
    },
    {
      type: "Independent product · Automation",
      title: "A job scout that finds signal before the search becomes a job.",
      description: "An automated job-discovery workflow that aggregates listings from multiple sources, scores relevance with AI assistance, maintains states, and sends a focused digest instead of another noisy feed.",
      tags: ["Playwright", "Lambda", "DynamoDB", "Next.js"],
      url: "",
    },
  ],

  experience: [
    {
      period: "Current",
      role: "Backend & Data Engineer",
      organization: "Large-scale marketplace ecosystem",
      description: "Working on financial and operational data products where correctness, traceability, and reliable processing are essential. Recent work includes helping move a critical reporting flow toward near-real-time visibility.",
      focus: ["Python", "SQL", "Distributed data", "Observability"],
    },
    {
      period: "Independent",
      role: "Product builder",
      organization: "Personal software projects",
      description: "Designing and shipping small, useful products across automation, finance, media, and information workflows—from the first idea to cloud deployment and iteration.",
      focus: ["FastAPI", "AWS", "React", "AI workflows"],
    },
  ],

  courses: [
    // Copy this object to add a course:
    // { name: "Course name", provider: "Provider", year: "2026", url: "https://example.com" },
  ],

  certifications: [
    // Copy this object to add a certification:
    // { name: "Certification name", issuer: "Issuer", year: "2026", credentialUrl: "https://example.com" },
  ],
};
