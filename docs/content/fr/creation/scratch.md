---
title: From scratch
description: Création d'une Action à la main
position: 3
category: Création
requirements:
- faire tourner notre code sur Linux
- tester le code apres chaque modification
---

<alert type="info">
    Si vous ne voulez pas faire vos propres Actions et souhaitez seulement utiliser des Actions pré-faites, je vous invite a passer directement à la <a href="marketplace">section suivante</a>
</alert>

<alert>
    tkt les vraies vidéos arrivent soon™
</alert>

<tuto-video :link="'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'" :title="'Rick Astley - Never Gonna Give You Up'"></tuto-video>

## Avant de commencer

Vous avez peut-être déjà remarqué le bouton <IconGithub class="h-4 w-4 inline-flex"></IconGithub> en haut a droite du site, il mène au répo du projet que nous allons utilisez dans cet exemple. N'hésitez pas à y jeter un œil pour voir le fruit de nos dures labeurs 😉

Le project que nous allons utiliser dans la suite de ce tutoriel est une simple API réalisée avec `NodeJs/Express`.

Dans cette partie, nous allons créer nous même notre Action qui aura pour but de lancer des tests afin de valider notre code.

## La main à la pâte

Avec tout ce que nous avons vu précédemment, nous pouvons maintenant nous attaquer au vif du sujet.

Nous allons commencer par créer le dossier `.github/workflows` à la racine de notre projet puis y placer un fichier `node_js.test.yml`.

Avant de commencer à écrire dans ce fichier, nous devons établir de quoi nous avons besoin, dans un premier temps nous allons simplement tester notre code.

Comme il s'agit de tester un API, notre Action doit donc :

<list :items="requirements" type="primary" icon="IconArrowRight"></list>

Nous allons donc nous retrouver avec une Action plutôt similaire à celle vue dans l'<a href="../exemple#déclaration">exemple</a> de la partie précédente :

```yaml
# file: node_js.test.yml
name: Testing API
on: [push, pull_request]
jobs:
  test_requests:
    runs-on: ubuntu-latest
    steps:steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 14.x
      - run: yarn install --immutable
      - run: yarn test
```

Un petit commit suivi d'un push sur notre répo et hop le tour est joué.

Apres cela il ne nous reste plus qu'à écrire nos tests et lors du prochain push la CI devrai être opérationnelle 👌

<alert>
    <p>Notez que par défaut dans un projet NodeJs la commande de test renvoie une erreur car aucun test n'est présent.</p>
    <p>Dans notre cas notre Action doit donc nous indiquer une erreur lors du tout premier push car nous avons volontairement omis les tests.</p>
</alert>

## Branche de test

Maintenant que notre CI est prête grace à notre Action, nous pouvons maintenant créer une nouvelle branche dans laquelle nous allons ajouter nos tests.

Une fois nos tests ajoutés, une première Actions devrait se lancer lors du push, suivie de près par une deuxième car nous devons maintenant créer une pull request. 

Par défaut lors d'une pull request, il est impossible de merge les changements si une des Actions retourne une erreur (comportement assez logique 🤷‍♂️).

<alert type="warning">
    <p>Il est important de noter qu'une CI n'est là que pour apliquer une validation.</p>
    <p>Il est de votre ressort de faire des tests les plus complets possible afin de garantir la qualité de votre code.</p>
</alert>
