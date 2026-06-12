const SITE = {
  fr: {
    name: "La Bibliotheque Partagee",
    tagline: "Traduction communautaire, archives vivantes et conversations ouvertes.",
    nav: { home: "Accueil", translation: "Traduction", gallery: "Galerie", forum: "Forum", donate: "Cagnotte", account: "Compte" },
    routes: { home: "", translation: "traduction", chapter: "traduction/introduction", gallery: "galerie", upload: "galerie/depot", forum: "forum", donate: "cagnotte", account: "compte" },
    home: {
      title: "Lire, documenter et discuter ensemble",
      intro: "Un espace sobre pour publier une traduction de livre, recueillir les contributions visuelles et organiser les echanges de la communaute.",
      cta: ["Lire la traduction", "Deposer une photo", "Ouvrir le forum"],
      cards: [
        ["Traduction en cours", "Les chapitres publies restent accessibles avec un fallback vers le francais quand une traduction manque."],
        ["Archives partagees", "Les photos deposees sont moderees avant publication et classees pour rester faciles a consulter."],
        ["Conversation multilingue", "Les sujets restent dans leur langue d'origine avec un acces simple aux autres langues."]
      ]
    },
    pages: {
      translation: ["Traduction", "Chapitres publies du livre.", "Aucun chapitre complet n'est encore publie dans cette version statique."],
      chapter: ["Introduction", "Exemple de page chapitre.", "Ce texte est un emplacement pret a remplacer par le contenu final de la traduction."],
      gallery: ["Galerie", "Photos approuvees par la moderation.", "La galerie statique est prete a recevoir des images dans `assets/`."],
      upload: ["Deposer une photo", "Formulaire de contribution statique.", "Sur GitHub Pages, ce formulaire sert de maquette et ne soumet pas de fichier."],
      forum: ["Forum", "Categories et derniers sujets.", "Le forum dynamique a ete remplace par une page statique compatible GitHub Pages."],
      donate: ["Cagnotte", "Aidez le projet a rester accessible et maintenu.", "Objectif indicatif : 2 500 EUR."],
      success: ["Merci", "Votre soutien est note.", "Cette page remplace le retour de paiement dynamique."],
      cancel: ["Paiement annule", "Aucun paiement n'a ete confirme.", "Vous pouvez revenir a la cagnotte a tout moment."],
      account: ["Compte", "Espace compte statique.", "La connexion et les profils demandent un backend, donc cette page sert de point d'information."],
      admin: ["Administration", "Tableau de bord statique.", "Les outils de moderation demandent un backend; cette route est conservee comme placeholder GitHub Pages."],
      legal: ["Page legale", "Contenu legal a adapter.", "Cette page est un placeholder a finaliser avant publication."]
    },
    legal: { privacy: "Confidentialite", terms: "CGU", copyright: "Droits d'auteur", report: "Signalement" },
    footer: ["CGU", "Confidentialite", "Droits d'auteur", "Signalement"]
  },
  en: {
    name: "The Shared Library",
    tagline: "Community translation, living archives, and open discussion.",
    nav: { home: "Home", translation: "Translation", gallery: "Gallery", forum: "Forum", donate: "Fundraiser", account: "Account" },
    routes: { home: "", translation: "translation", chapter: "translation/introduction", gallery: "gallery", upload: "gallery/upload", forum: "forum", donate: "donate", account: "account" },
    home: {
      title: "Read, document, and discuss together",
      intro: "A restrained space to publish a book translation, collect visual contributions, and organize community discussion.",
      cta: ["Read the translation", "Upload a photo", "Open the forum"],
      cards: [
        ["Translation in progress", "Published chapters stay available with a French fallback when a translation is missing."],
        ["Shared archives", "Uploaded photos are moderated before publication and organized for browsing."],
        ["Multilingual conversation", "Topics keep their original language while remaining easy to reach from every locale."]
      ]
    },
    pages: {
      translation: ["Translation", "Published chapters of the book.", "No complete chapter is published in this static version yet."],
      chapter: ["Introduction", "Sample chapter page.", "This is a ready-to-replace placeholder for the final translated content."],
      gallery: ["Gallery", "Photos approved by moderation.", "The static gallery is ready for images stored in `assets/`."],
      upload: ["Upload a photo", "Static contribution form.", "On GitHub Pages, this form is a mockup and does not submit files."],
      forum: ["Forum", "Categories and latest topics.", "The dynamic forum has been replaced by a GitHub Pages compatible static page."],
      donate: ["Fundraiser", "Help keep the project accessible and maintained.", "Indicative goal: EUR 2,500."],
      success: ["Thank you", "Your support is noted.", "This page replaces the dynamic payment return."],
      cancel: ["Payment cancelled", "No payment was confirmed.", "You can return to the fundraiser at any time."],
      account: ["Account", "Static account area.", "Sign-in and profiles require a backend, so this page is informational."],
      admin: ["Administration", "Static dashboard.", "Moderation tools require a backend; this route is kept as a GitHub Pages placeholder."],
      legal: ["Legal page", "Legal content to adapt.", "This page is a placeholder to finalize before publication."]
    },
    legal: { privacy: "Privacy", terms: "Terms", copyright: "Copyright", report: "Report" },
    footer: ["Terms", "Privacy", "Copyright", "Report"]
  },
  es: {
    name: "La Biblioteca Compartida",
    tagline: "Traduccion comunitaria, archivos vivos y conversacion abierta.",
    nav: { home: "Inicio", translation: "Traduccion", gallery: "Galeria", forum: "Foro", donate: "Donaciones", account: "Cuenta" },
    routes: { home: "", translation: "traduccion", chapter: "traduccion/introduccion", gallery: "galeria", upload: "galeria/subir", forum: "foro", donate: "donaciones", account: "cuenta" },
    home: {
      title: "Leer, documentar y conversar juntos",
      intro: "Un espacio sobrio para publicar una traduccion de libro, recoger aportes visuales y organizar conversaciones de la comunidad.",
      cta: ["Leer la traduccion", "Subir una foto", "Abrir el foro"],
      cards: [
        ["Traduccion en curso", "Los capitulos publicados quedan disponibles con fallback al frances cuando falta una traduccion."],
        ["Archivos compartidos", "Las fotos subidas se moderan antes de publicarse y se organizan para consulta."],
        ["Conversacion multilingue", "Los temas conservan su idioma original y siguen accesibles desde cada locale."]
      ]
    },
    pages: {
      translation: ["Traduccion", "Capitulos publicados del libro.", "Aun no hay un capitulo completo publicado en esta version estatica."],
      chapter: ["Introduccion", "Pagina de capitulo de ejemplo.", "Este texto esta listo para reemplazarse por el contenido final de la traduccion."],
      gallery: ["Galeria", "Fotos aprobadas por la moderacion.", "La galeria estatica esta lista para imagenes guardadas en `assets/`."],
      upload: ["Subir una foto", "Formulario estatico de contribucion.", "En GitHub Pages, este formulario es una maqueta y no envia archivos."],
      forum: ["Foro", "Categorias y temas recientes.", "El foro dinamico fue reemplazado por una pagina estatica compatible con GitHub Pages."],
      donate: ["Donaciones", "Ayuda a mantener el proyecto accesible y actualizado.", "Objetivo indicativo: 2.500 EUR."],
      success: ["Gracias", "Tu apoyo queda anotado.", "Esta pagina reemplaza el retorno dinamico de pago."],
      cancel: ["Pago cancelado", "No se confirmo ningun pago.", "Puedes volver a donaciones cuando quieras."],
      account: ["Cuenta", "Area de cuenta estatica.", "El acceso y los perfiles requieren backend, asi que esta pagina es informativa."],
      admin: ["Administracion", "Panel estatico.", "Las herramientas de moderacion requieren backend; esta ruta se conserva como placeholder GitHub Pages."],
      legal: ["Pagina legal", "Contenido legal por adaptar.", "Esta pagina es un placeholder que debe finalizarse antes de publicar."]
    },
    legal: { privacy: "Privacidad", terms: "Condiciones", copyright: "Derechos de autor", report: "Reportar" },
    footer: ["Condiciones", "Privacidad", "Derechos de autor", "Reportar"]
  }
};

const LOCALES = Object.keys(SITE);

function segments() {
  return location.pathname.split("/").filter(Boolean).filter((part) => part !== "index.html");
}

function localeFromPath(parts) {
  return LOCALES.find((locale) => parts.includes(locale)) || "fr";
}

function relativeRoot(parts, locale) {
  const localeIndex = parts.indexOf(locale);
  if (localeIndex === -1) return "";
  return "../".repeat(parts.length - localeIndex);
}

function link(locale, route = "") {
  const parts = segments();
  const root = relativeRoot(parts, localeFromPath(parts));
  return `${root}${locale}/${route ? `${route}/` : ""}`;
}

function pageKey(locale, parts) {
  const local = parts.slice(parts.indexOf(locale) + 1).join("/");
  const routes = SITE[locale].routes;
  const translationRoutes = ["traduction", "translation", "traduccion"];
  const galleryRoutes = ["galerie", "gallery", "galeria"];
  const uploadRoutes = galleryRoutes.flatMap((base) => [`${base}/depot`, `${base}/upload`, `${base}/subir`]);
  const forumRoutes = ["forum", "foro"];
  const donateRoutes = ["cagnotte", "donate", "donaciones"];
  const accountRoutes = ["account", "compte", "cuenta"];
  if (!local) return "home";
  if (translationRoutes.includes(local)) return "translation";
  if (local === routes.chapter) return "chapter";
  if (galleryRoutes.includes(local)) return "gallery";
  if (uploadRoutes.includes(local)) return "upload";
  if (forumRoutes.includes(local) || forumRoutes.some((base) => local.startsWith(`${base}/`))) return "forum";
  if (donateRoutes.includes(local)) return "donate";
  if (donateRoutes.some((base) => local === `${base}/success`)) return "success";
  if (donateRoutes.some((base) => local === `${base}/cancel`)) return "cancel";
  if (accountRoutes.includes(local)) return "account";
  if (local.startsWith("admin")) return "admin";
  if (local.startsWith("legal/")) return "legal";
  return "home";
}

function nav(locale, key) {
  const t = SITE[locale];
  const items = [
    ["home", t.nav.home, t.routes.home],
    ["translation", t.nav.translation, t.routes.translation],
    ["gallery", t.nav.gallery, t.routes.gallery],
    ["forum", t.nav.forum, t.routes.forum],
    ["donate", t.nav.donate, t.routes.donate],
    ["account", t.nav.account, t.routes.account]
  ];
  return items.map(([id, label, route]) => `<a class="${key === id ? "active" : ""}" href="${link(locale, route)}">${label}</a>`).join("");
}

function languageLinks(locale) {
  return LOCALES.map((item) => `<a class="${item === locale ? "active" : ""}" href="${link(item)}">${item.toUpperCase()}</a>`).join("");
}

function header(locale, key) {
  const t = SITE[locale];
  return `<header class="site-header"><nav class="nav"><a class="brand" href="${link(locale)}"><strong>${t.name}</strong><span>${t.tagline}</span></a><div class="nav-links">${nav(locale, key)}</div><div class="language-links">${languageLinks(locale)}</div></nav></header>`;
}

function footer(locale) {
  const t = SITE[locale];
  const legalRoutes = {
    fr: ["legal/cgu", "legal/confidentialite", "legal/droits-auteur", "legal/signalement"],
    en: ["legal/terms", "legal/privacy", "legal/copyright", "legal/report"],
    es: ["legal/condiciones", "legal/privacidad", "legal/derechos-autor", "legal/reportar"]
  };
  return `<footer class="site-footer"><div class="footer-inner"><span>${t.name}</span><span>${t.footer.map((label, index) => `<a href="${link(locale, legalRoutes[locale][index])}">${label}</a>`).join("")}</span></div></footer>`;
}

function home(locale) {
  const t = SITE[locale];
  return `<main class="home-main"><section class="hero"><div class="hero-inner"><span class="eyebrow">${t.name}</span><h1>${t.home.title}</h1><p>${t.home.intro}</p><div class="actions"><a class="button primary" href="${link(locale, t.routes.translation)}">${t.home.cta[0]}</a><a class="button" href="${link(locale, t.routes.upload)}">${t.home.cta[1]}</a><a class="button" href="${link(locale, t.routes.forum)}">${t.home.cta[2]}</a></div></div></section><section class="section feature-band"><div class="section-inner"><h2>${t.tagline}</h2><div class="grid">${t.home.cards.map(([title, body]) => `<article class="card"><h3>${title}</h3><p>${body}</p></article>`).join("")}</div></div></section></main>`;
}

function standardPage(locale, key) {
  const t = SITE[locale];
  const [title, intro, body] = t.pages[key] || t.pages.legal;
  const form = ["upload", "forum", "account", "legal"].includes(key)
    ? `<form class="form-grid"><label>${key === "account" ? "Email" : "Titre"}<input type="text" placeholder="${title}"></label><label>Message<textarea></textarea></label><button class="primary" type="button">OK</button></form>`
    : "";
  const progress = key === "donate" ? `<div class="notice"><p>${body}</p><div class="progress"><span></span></div></div>` : `<p class="notice">${body}</p>`;
  const chapterList = key === "translation" ? `<div class="list"><a class="list-item" href="${link(locale, t.routes.chapter)}"><strong>${t.pages.chapter[0]}</strong><span>${t.pages.chapter[1]}</span></a></div>` : "";
  return `<main><span class="eyebrow">${t.name}</span><h1>${title}</h1><p class="intro">${intro}</p>${chapterList}${progress}${form}</main>`;
}

function render() {
  const parts = segments();
  const locale = localeFromPath(parts);
  const key = pageKey(locale, parts);
  const t = SITE[locale];
  document.documentElement.lang = locale;
  document.title = `${key === "home" ? t.name : (t.pages[key]?.[0] || t.pages.legal[0])} | ${t.name}`;
  document.body.innerHTML = `${header(locale, key)}${key === "home" ? home(locale) : standardPage(locale, key)}${footer(locale)}`;
}

render();
