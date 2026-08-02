# Electro-Shop 221

Site vitrine statique d'une boutique fictive de vente d'appareils électroniques et
d'accessoires, basée à Dakar (Sénégal). Projet réalisé en binôme dans le cadre du
module **Versioning** — ESITEC, Licence 1 Génie Informatique.

## Sujet

Electro-Shop 221 vend des smartphones, ordinateurs portables, produits audio et
accessoires. Le site présente le catalogue, la boutique et un moyen de contact.

## Structure des fichiers

```
electro-shop-221/
├── index.html       # Page d'accueil : présentation, rayons, sélection du moment
├── produits.html     # Catalogue complet avec filtre par catégorie (JavaScript)
├── apropos.html      # Histoire de la boutique et présentation du binôme
├── contact.html      # Formulaire de contact avec validation JavaScript
├── style.css         # Feuille de style commune à toutes les pages
├── script.js         # Menu responsive + filtre produits + validation formulaire
├── .gitignore
└── README.md
```

## Fonctionnalités JavaScript

- **Menu responsive** : le bouton hamburger ouvre/ferme la navigation sur mobile (toutes les pages).
- **Filtre de produits** : sur `produits.html`, les boutons de catégorie affichent ou masquent les fiches produits sans recharger la page.
- **Validation de formulaire** : sur `contact.html`, le formulaire vérifie le nom, l'email et le message avant l'envoi et affiche des messages d'erreur clairs.

## Répartition des rôles

| Membre A | Membre B |
|---|---|
| `index.html` (accueil) | `apropos.html` |
| `produits.html` (catalogue) | `contact.html` |
| Structure HTML globale + navigation | `style.css` (CSS global + responsive) |
| `script.js` | `README.md` |

Chaque membre a travaillé sur sa propre branche (`feature/prenom-a` et `feature/prenom-b`)
avant fusion dans `main`.

## Lancer le site

Ouvrir simplement `index.html` dans un navigateur, aucune installation n'est nécessaire.
