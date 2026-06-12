# Mémoire de Stanoze

Projet Mémoire de Stanoze : accès au PDF, à la cagnotte et à la vidéo.

## Fichiers

- `index.html` : document HTML principal
- `styles.css` : styles visuels
- `script.js` : liens de la cagnotte, du PDF et menu mobile
- `assets/archive-hero.png` : visuel d'archive utilisé en haut de l'écran

## Visualiser en local

Pour visualiser le projet sur votre ordinateur, ouvrez un terminal dans ce dossier :

```bash
cd <PATH>/SiteWeb
python3 -m http.server 4173 --bind 127.0.0.1
```

Puis ouvrez cette adresse dans votre navigateur :

```text
http://127.0.0.1:4173/
```

Pour arrêter le serveur local, revenez dans le terminal et faites `Ctrl+C`.

Il est aussi possible d'ouvrir directement `index.html`, mais le serveur local évite les différences de comportement selon les navigateurs.

## Liens du projet

Les liens sont dans `script.js` :

```js
cagnotte: "https://app.lacagnottedesproches.fr/cagnotte/histoire-des-armeniens-de-stanoze/",
livrePdf: "https://memoire-stanoze.org/wp-content/uploads/2026/06/Garabed-Terzian-Stanoze-version-complete-avec-photos-beta.pdf"
```

## Vidéo

La vidéo intégrée est `https://youtu.be/lPQADpsjyA0`.
