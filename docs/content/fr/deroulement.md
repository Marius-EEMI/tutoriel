---
title: Déroulement d’une Action
description: Une Action, comment ça marche ?
position: 1
category: Introduction
---

<tuto-video :link="'https://www.youtube-nocookie.com/embed/vwsmzyWzQDs'" :title="'Déroulement d’une Action - Tuto GitHub Actions'"></tuto-video>

## Quand est-ce qu’une Action se déclenche ?

Comme indiqué précédemment, les Actions sont parfaitement intégrées à GitHub, une Action peut donc être déclenchée en même temps que n’importe quel autre événement.

Cela inclut les événements classiques de Git (`push`, `merge`, …) mais aussi les événements propres à GitHub, comme lors de `pull request`, `release` et bien d’autres…

Il est même possible de déclencher des Actions lors de sous-événements, par exemple quand un⋅e contributeur⋅rice poste un commentaire dans une `pull request`, ou quand une `issue` est taguée comme étant résolue.

## Comment déclare t-on une Action ?

Les Actions sont déclarées dans un fichier `yaml` (un par Action). Ces fichiers doivent être placés dans un dossier `.github/workflows`, lui-même placé a la racine du répo.

Les noms des fichiers sont au choix du développeur⋅se, il n’y a pas de convention fixe, du moment qu’ils finissent bien par l'extension `.yaml` ou `.yml`.
