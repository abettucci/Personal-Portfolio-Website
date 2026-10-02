/*
 * Update this file to change the portfolio content.
 * Copy an object in a list, edit its values, save, and refresh the page.
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
      title: "Moving financial reporting closer to real time.",
      description: "Helped move a Profit & Loss data product from batch reporting toward near-real-time processing. Reconciliation, traceability, and safe reprocessing had to hold when events arrived late, twice, or out of order.",
      tags: ["Event-driven", "Data quality", "Observability", "Idempotency"],
      featured: true,
      url: "",
    },
    {
      type: "Independent product · AWS serverless",
      title: "Turning receipts and payment reports into expense data.",
      description: "An event-driven ETL that reads receipt PDFs and payment reports, then produces categorized expense data. It preserves raw inputs, normalizes schemas, orchestrates the flow, and loads data idempotently.",
      tags: ["Python", "Lambda", "Step Functions", "BigQuery"],
      url: "",
    },
    {
      type: "Independent product · Real-time application",
      title: "Moderation and assistance for live Twitch chat.",
      description: "A real-time workflow built with FastAPI, PostgreSQL, Redis, WebSockets, and a TypeScript dashboard. It responds quickly enough for a live chat without adding more noise to it.",
      tags: ["FastAPI", "Redis", "WebSockets", "React"],
      url: "",
    },
    {
      type: "Independent product · Automation",
      title: "A job search workflow that filters the noise.",
      description: "An automated workflow that collects listings from several sources, uses AI to score relevance, tracks each listing, and sends a focused digest.",
      tags: ["Playwright", "Lambda", "DynamoDB", "Next.js"],
      url: "",
    },
  ],

  experience: [
    {
      period: "2025–2026",
      role: "Software Engineer",
      organization: "Large-scale marketplace ecosystem",
      description: "Built backend and data services for financial reporting and business operations. Helped move a Profit & Loss workflow from scheduled batches toward near-real-time processing, with idempotent updates, safe retries, late-event handling, and reconciliation.",
      focus: ["Python", "Go", "AWS", "Distributed systems"],
    },
    {
      period: "2024–2025",
      role: "Semi Senior Data Engineer",
      organization: "Financial-services platform",
      description: "Built ETL pipelines with GCP, Python, SQL, and BigQuery for fraud-prevention data. Improved complex queries used by the team for data processing and analysis.",
      focus: ["Python", "SQL", "GCP", "BigQuery"],
    },
    {
      period: "2022–2024",
      role: "Semi Senior Data Analyst",
      organization: "Consumer-goods company",
      description: "Analyzed sales, distribution, geolocation, and socioeconomic data for customer segmentation and product-recommendation work.",
      focus: ["Python", "Data analysis", "Machine learning"],
    },
    {
      period: "Independent",
      role: "Product builder",
      organization: "Personal software projects",
      description: "Building products for automation, finance, media, and information workflows, from the first sketch through cloud deployment and iteration.",
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
