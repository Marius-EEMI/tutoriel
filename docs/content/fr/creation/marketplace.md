---
title: Depuis le marketplace
description: Création d'une Action depuis la marketplace
position: 4
category: Création
raisons:
- soit votre projet est petit ou simple
- soit vous avez la flemme
---

<alert>
    tkt la vraie vidéos arrive soon™
</alert>

<tuto-video :link="'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'" :title="'Rick Astley - Never Gonna Give You Up'"></tuto-video>

## Choisissez la simplicité

Pour la plupart des projets, faire soit même ses Actions n'est pas forcément la meilleure solution pour deux raisons :

<list :items="raisons" type="primary" icon="IconArrowRight"></list>

Dans les deux cas, il existe surement des Actions déjà faites, répondant à vos besoin.

## Le marketplace

Comme tout écosystème open-source qui se respecte, GitHub dispose d'un [marketplace <IconExternalLink class="h-4 w-4 inline-flex"></IconExternalLink>](https://github.com/marketplace?type=actions) où vous pourrez chercher tout ce dont vous avez besoin.

Nous avons vu qu'il existe des Actions officielles <IconGithub class="list-success h-4 w-4 inline-flex"></IconGithub> ou certifiées <IconBadgeCheck class="list-success h-4 w-4 inline-flex"></IconBadgeCheck>, ces Actions couvrent les cas de figure les plus courants (linting, tests, ...) dans les languages les plus utilisés (python, Js, ...).

## Méthode 1 : copier coller

Pour utiliser une Action depuis le marketplace, qu'elle soit certifiée <IconBadgeCheck class="list-success h-4 w-4 inline-flex"></IconBadgeCheck> ou non, il vous suffit de se rendre sur la page de l'action en question.

Il est généralement indiqué le code `yaml` pour les utilisations les plus courantes, vous n'avez plus qu'à le copier coller dans le dossier `.github/workflows`.

## Méthode 2 : depuis votre répo

Une autre façon de créer une Action, rendez-vous sur la page GitHub de votre répo. Avez-vous déjà remarqué l'onglet "<IconActions class="h-4 w-4 inline-flex"></IconActions> Actions" ?

<tuto-img :src="'/assets/actions_tab.png'" :alt="'onglet des Actions'"></tuto-img>

En fonction de votre projet, GitHub vous propose des suggestions ainsi que les Actions en lien avec votre projet les plus utilisées. Une fois une Action sélectionnée, la suite coule de source.

<tuto-img :src="'/assets/existing_action.png'" :alt="'utiliser cette Action'"></tuto-img>

Si jamais vous ne trouvez pas votre bonheur, vous pouvez toujours vous référer à la <a href="scratch">partie précédente</a> ou à la [documentation officielle <IconExternalLink class="h-4 w-4 inline-flex"></IconExternalLink>](https://docs.github.com/en/actions/quickstart) <IconGithub class="h-4 w-4 inline-flex"></IconGithub> avant de vous lancer de zéro (ou presque 😉).

<tuto-img :src="'/assets/diy_action.png'" :alt="'modifier une Action existante'"></tuto-img>

### Éditeur d'Actions

Dans tous les cas, les deux options précédentes vous emmènent à un éditeur d'Action. Comparé à la méthode 100% manuelle, l'avantage est que GitHub vous fournis un template ainsi que de précieux conseils pour mener a bien votre projet.

Une fois satisfait par votre Action, il ne reste plus qu'à commit le fichier et au prochain évènement que vous avez définie, vous pourrez suivre son status depuis l'onglet "<IconActions class="h-4 w-4 inline-flex"></IconActions> Actions".

<tuto-img :src="'/assets/commit_button.png'" :alt="'commit les changements'"></tuto-img>
