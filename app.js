(() => {
  "use strict";

  const content = window.portfolioContent;
  if (!content) return;

  const create = (tag, { className, text, attributes } = {}) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (typeof text === "string") element.textContent = text;
    if (attributes) {
      Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
    }
    return element;
  };

  const asList = (value) => (Array.isArray(value) ? value : []);
  const asText = (value) => (typeof value === "string" ? value.trim() : "");

  const safeUrl = (value, fallback = "#") => {
    const candidate = asText(value);
    if (!candidate) return fallback;

    try {
      const url = new URL(candidate, window.location.href);
      return ["http:", "https:", "mailto:"].includes(url.protocol) ? url.href : fallback;
    } catch {
      return fallback;
    }
  };

  const applyLink = (element, value, fallback) => {
    const href = safeUrl(value, fallback);
    element.href = href;
    const parsed = new URL(href, window.location.href);
    if (["http:", "https:"].includes(parsed.protocol) && parsed.origin !== window.location.origin) {
      element.target = "_blank";
      element.rel = "noreferrer";
    }
  };

  const addTags = (parent, tags) => {
    const tagList = create("div", { className: "tags" });
    asList(tags).map(asText).filter(Boolean).forEach((tag) => tagList.append(create("span", { text: tag })));
    parent.append(tagList);
  };

  const addFeaturedArt = (parent) => {
    const art = create("div", { className: "project-art system-map", attributes: { "aria-hidden": "true" } });
    [["events", "map-node node-a"], ["process", "map-node node-b"], ["validate", "map-node node-c"], ["insight", "map-node node-d"]]
      .forEach(([label, className]) => art.append(create("span", { className, text: label })));
    ["line-a", "line-b", "line-c"].forEach((line) => art.append(create("i", { className: `map-line ${line}` })));
    parent.append(art);
  };

  const renderProjects = () => {
    const container = document.querySelector("#projects-list");
    if (!container) return;

    asList(content.projects).forEach((project, index) => {
      const title = asText(project.title);
      if (!title) return;

      const article = create("article", { className: project.featured ? "project project-featured" : "project" });
      article.append(create("div", { className: "project-index", text: String(index + 1).padStart(2, "0") }));

      const main = create("div", { className: "project-main" });
      main.append(create("p", { className: "project-type", text: asText(project.type) }));
      main.append(create("h3", { text: title }));
      main.append(create("p", { className: "project-description", text: asText(project.description) }));
      addTags(main, project.tags);
      article.append(main);

      if (project.featured) {
        addFeaturedArt(article);
      } else {
        const arrow = create("a", { className: "project-arrow", text: "↗", attributes: { "aria-label": `Open ${title}` } });
        applyLink(arrow, project.url, "#contact");
        article.append(arrow);
      }

      container.append(article);
    });
  };

  const renderExperience = () => {
    const section = document.querySelector("#experience");
    const container = document.querySelector("#experience-list");
    const entries = asList(content.experience).filter((entry) => asText(entry.role));
    if (!section || !container) return;
    if (!entries.length) {
      section.hidden = true;
      return;
    }

    entries.forEach((entry) => {
      const item = create("article", { className: "timeline-item" });
      item.append(create("p", { className: "timeline-period", text: asText(entry.period) }));
      const copy = create("div", { className: "timeline-copy" });
      copy.append(create("h3", { text: asText(entry.role) }));
      copy.append(create("p", { className: "timeline-org", text: asText(entry.organization) }));
      copy.append(create("p", { className: "timeline-description", text: asText(entry.description) }));
      addTags(copy, entry.focus);
      item.append(copy);
      container.append(item);
    });
  };

  const renderLearningList = (entries, containerSelector, panelSelector, fieldName) => {
    const container = document.querySelector(containerSelector);
    const panel = document.querySelector(panelSelector);
    const validEntries = asList(entries).filter((entry) => asText(entry.name));
    if (!container || !panel) return;
    if (!validEntries.length) {
      panel.hidden = true;
      return;
    }

    validEntries.forEach((entry) => {
      const item = create("article", { className: "learning-item" });
      const name = create("h3", { text: asText(entry.name) });
      const url = safeUrl(entry[fieldName]);
      if (url !== "#") {
        const link = create("a", { className: "learning-link", attributes: { "aria-label": `Open ${asText(entry.name)}` } });
        applyLink(link, url, "#");
        link.append(name, document.createTextNode(" ↗"));
        item.append(link);
      } else {
        item.append(name);
      }
      item.append(create("p", { text: [asText(entry.provider || entry.issuer), asText(entry.year)].filter(Boolean).join(" · ") }));
      container.append(item);
    });
  };

  const renderLearning = () => {
    const section = document.querySelector("#learning");
    const courses = asList(content.courses).filter((entry) => asText(entry.name));
    const certifications = asList(content.certifications).filter((entry) => asText(entry.name));
    if (section && !courses.length && !certifications.length) section.hidden = true;
    renderLearningList(courses, "#courses-list", "#courses-panel", "url");
    renderLearningList(certifications, "#certifications-list", "#certifications-panel", "credentialUrl");
  };

  const renderContact = () => {
    const contact = content.contact || {};
    const email = asText(contact.email);
    const emailLink = document.querySelector("#email-link");
    if (emailLink && email) {
      emailLink.href = safeUrl(`mailto:${email}`, "#contact");
      emailLink.firstChild.textContent = `${email} `;
    }

    [["#github-link", contact.github], ["#linkedin-link", contact.linkedin], ["#resume-link", contact.cvUrl], ["#resume-download-link", contact.cvUrl]]
      .forEach(([selector, value]) => {
        const link = document.querySelector(selector);
        if (!link) return;
        if (!asText(value)) {
          link.hidden = true;
          return;
        }
        applyLink(link, value, "#");
      });
  };

  renderProjects();
  renderExperience();
  renderLearning();
  renderContact();
})();
