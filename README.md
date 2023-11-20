[![Netlify Status](https://api.netlify.com/api/v1/badges/bc68f9f5-1aa3-4dc4-a1ac-2ff2682d59c2/deploy-status)](https://wonderful-youtiao-ded459.netlify.app/)

## Création d'un petit jeu sur navigateur web à l'aide du DOM.

---

![dice-game](https://user-images.githubusercontent.com/44428775/111074974-ed630980-84e5-11eb-8253-fa3f90d9e88c.gif)

---

### Règles du jeu
Le jeu comprend 2 joueurs sur un seul et même écran.
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
A chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d'un lancer est ajouté au ROUND.

Lors de sont tour, le joueur peut décider à tout moment de: 
- Cliquer sur l'option "Hold",qui permet d'envoyer les points du ROUND vers le GLOBAL. Ce sera alors le tour de l'autre joueur.
- Lancer le dé. S'il obtient un 1, son score ROUND est perdu et c'est la fin de son tour.

Le premier joueur qui atteint les 100 points sur global gagne le jeu.

---

### Technologies: 

- [html 5](https://developer.mozilla.org/fr/docs/Web/HTML)
- [CSS 3](https://developer.mozilla.org/fr/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- Le framework [Bootstrap](https://getbootstrap.com/)
- [google Fonts](https://fonts.google.com/?query=lato)
- [Nelify](https://www.netlify.com/) pour la mise en ligne.