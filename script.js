const CONFIG = {
  donation: "https://app.lacagnottedesproches.fr/cagnotte/histoire-des-armeniens-de-stanoze/",
  pdf: "https://memoire-stanoze.org/wp-content/uploads/2026/06/Garabed-Terzian-Stanoze-version-complete-avec-photos-beta.pdf"
};

const STORAGE_KEY = "memoire-stanoze-forum-v1";

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const topicForm = document.querySelector("#topic-form");
const topicsElement = document.querySelector("#topics");
const searchInput = document.querySelector("#forum-search");
const exportButton = document.querySelector("#export-forum");
const clearButton = document.querySelector("#clear-forum");

function hydrateLinks() {
  document.querySelectorAll("[data-link]").forEach((link) => {
    const key = link.dataset.link;
    if (CONFIG[key]) {
      link.href = CONFIG[key];
    }
  });
}

function loadTopics() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(value) ? value : seedTopics();
  } catch {
    return seedTopics();
  }
}

function saveTopics(topics) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(topics));
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function seedTopics() {
  const topics = [
    {
      id: createId(),
      author: "Équipe Mémoire",
      title: "Bienvenue sur le forum",
      message: "Vous pouvez laisser ici une question, une information familiale ou une piste documentaire.",
      createdAt: new Date().toISOString(),
      replies: []
    }
  ];
  saveTopics(topics);
  return topics;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function currentQuery() {
  return searchInput.value.trim().toLowerCase();
}

function filterTopics(topics) {
  const query = currentQuery();
  if (!query) return topics;

  return topics.filter((topic) => {
    const haystack = [
      topic.author,
      topic.title,
      topic.message,
      ...topic.replies.flatMap((reply) => [reply.author, reply.message])
    ].join(" ").toLowerCase();

    return haystack.includes(query);
  });
}

function renderTopics() {
  const topics = filterTopics(loadTopics());

  if (topics.length === 0) {
    topicsElement.innerHTML = '<p class="empty-state">Aucun sujet ne correspond à la recherche.</p>';
    return;
  }

  topicsElement.innerHTML = topics.map(renderTopic).join("");
}

function renderTopic(topic) {
  const replies = topic.replies
    .map((reply) => `
      <article class="reply">
        <div class="reply-meta">${escapeHtml(reply.author)} · ${formatDate(reply.createdAt)}</div>
        <p>${escapeHtml(reply.message)}</p>
      </article>
    `)
    .join("");

  return `
    <article class="topic" data-topic-id="${topic.id}">
      <div class="topic-header">
        <div>
          <h3 class="topic-title">${escapeHtml(topic.title)}</h3>
          <div class="topic-meta">${escapeHtml(topic.author)} · ${formatDate(topic.createdAt)}</div>
        </div>
        <div class="topic-meta">${topic.replies.length} réponse${topic.replies.length > 1 ? "s" : ""}</div>
      </div>
      <p class="topic-message">${escapeHtml(topic.message)}</p>
      <div class="reply-list">${replies || '<p class="empty-state">Aucune réponse pour le moment.</p>'}</div>
      <form class="reply-form">
        <input name="author" type="text" maxlength="50" placeholder="Nom" required>
        <input name="message" type="text" maxlength="700" placeholder="Répondre" required>
        <button type="submit">Envoyer</button>
      </form>
    </article>
  `;
}

function addTopic(event) {
  event.preventDefault();

  const formData = new FormData(topicForm);
  const author = String(formData.get("author") || "").trim();
  const title = String(formData.get("title") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!author || !title || !message) return;

  const topics = loadTopics();
  topics.unshift({
    id: createId(),
    author,
    title,
    message,
    createdAt: new Date().toISOString(),
    replies: []
  });

  saveTopics(topics);
  topicForm.reset();
  renderTopics();
}

function addReply(event) {
  const form = event.target.closest(".reply-form");
  if (!form) return;

  event.preventDefault();

  const topicElement = form.closest(".topic");
  const topicId = topicElement.dataset.topicId;
  const formData = new FormData(form);
  const author = String(formData.get("author") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!author || !message) return;

  const topics = loadTopics();
  const topic = topics.find((item) => item.id === topicId);
  if (!topic) return;

  topic.replies.push({
    id: createId(),
    author,
    message,
    createdAt: new Date().toISOString()
  });

  saveTopics(topics);
  form.reset();
  renderTopics();
}

function exportForum() {
  const blob = new Blob([JSON.stringify(loadTopics(), null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "forum-memoire-stanoze.json";
  link.click();
  URL.revokeObjectURL(url);
}

function clearForum() {
  const confirmed = window.confirm("Supprimer les sujets enregistrés dans ce navigateur ?");
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  renderTopics();
}

function setupMenu() {
  menuToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

hydrateLinks();
setupMenu();
topicForm.addEventListener("submit", addTopic);
topicsElement.addEventListener("submit", addReply);
searchInput.addEventListener("input", renderTopics);
exportButton.addEventListener("click", exportForum);
clearButton.addEventListener("click", clearForum);
renderTopics();
