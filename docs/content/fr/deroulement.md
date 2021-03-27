---
title: Exemple d’Action
description: Tuto GitHub Actions - un petit exemple d'Action
position: 2
category: Introduction
---

<tuto-video :link="'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'" :title="'Rick Astley - Never Gonna Give You Up'"></tuto-video>

## Déclaration

Chaque GitHub Action doit être composée au minimum d’un nom, d’une liste d'événement(s) et d’une liste d’action(s), déclarés dans leur balise réspective : `name`, `on` et `jobs`.

```yaml
# file: linting.py.yml
name: Linting
on: [push]
jobs:
  styles: # job key
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@master
      - uses: actions/setup-python@v1
      - uses: whynothugo/python-linting@master
```

## Les jobs

Les jobs sont composés d’une clé (nom unique), d’un environnement (balise `runs-on`) et d’une liste d’étapes à réaliser (balise `steps`).

Dans cet exemple, le job `styles` utilise un environnement linux (`ubuntu`) et est composé de 3 étapes.

Chaque étape n’est en réalité qu’un appel à une autre GitHub Actions, identifiable sous cette forme : `<nom du créateur⋅rice>`/`<répo d’origine>`@`<version ou branche>` . Les Actions avec comme créateur `actions` sont mis à disposition directement par GitHub et sont en général un bon terrain de départ pour composer vos propres Actions. Il existe aussi des Actions faites par des tiers et certifiées par GitHub.

Ici, nous pouvons voir que la troisième étape est une Action composée par WhyNotHugo, disponible dans son répo python-linting.
