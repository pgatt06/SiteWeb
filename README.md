# Mémoire de Stanoze - GitHub Pages

Site statique simple, sans multilingue, inspiré de `memoire-stanoze.org`.

## Fichiers

- `index.html` : page principale
- `styles.css` : mise en page et style
- `script.js` : liens configurables, menu mobile et forum local
- `assets/archive-hero.png` : image générée pour le hero
- `.nojekyll` : compatibilité GitHub Pages

## Liens configurés

Les liens sont dans `script.js` :

```js
donation: "https://app.lacagnottedesproches.fr/cagnotte/histoire-des-armeniens-de-stanoze/",
pdf: "https://memoire-stanoze.org/wp-content/uploads/2026/06/Garabed-Terzian-Stanoze-version-complete-avec-photos-beta.pdf"
```

## Forum

Le forum fonctionne sans serveur grâce à `localStorage`.
Les messages sont donc conservés dans le navigateur de chaque visiteur.
Pour un forum public partagé, il faudra brancher GitHub Discussions ou Giscus.

## Publication

Dans GitHub : `Settings > Pages`, choisir la branche `main` et le dossier racine.
