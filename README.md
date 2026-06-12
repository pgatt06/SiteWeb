# Mémoire de Stanoze

Site simple, sans multilingue, inspiré de `memoire-stanoze.org`.

## Fichiers

- `index.html` : page principale
- `styles.css` : mise en page et style
- `script.js` : liens configurables et menu mobile
- `assets/archive-hero.png` : image générée pour le hero

## Visualiser en local

Pour voir le site sur votre ordinateur sans passer par GitHub, ouvrez un terminal dans ce dossier :

```bash
cd <PATH>/SiteWeb
python3 -m http.server 4173 --bind 127.0.0.1
```

Puis ouvrez cette adresse dans votre navigateur :

```text
http://127.0.0.1:4173/
```

Pour arrêter le serveur local, revenez dans le terminal et faites `Ctrl+C`.

Il est aussi possible d'ouvrir directement `index.html`, mais le serveur local est plus proche du comportement réel du site.

## Liens configurés

Les liens sont dans `script.js` :

```js
donation: "https://app.lacagnottedesproches.fr/cagnotte/histoire-des-armeniens-de-stanoze/",
pdf: "https://memoire-stanoze.org/wp-content/uploads/2026/06/Garabed-Terzian-Stanoze-version-complete-avec-photos-beta.pdf"
```

## Vidéo

La vidéo intégrée est `https://youtu.be/lPQADpsjyA0`.
