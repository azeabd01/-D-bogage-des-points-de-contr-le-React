	Erreur rencontrée :
J’ai rencontré une erreur dans mon application React. J'avais supprimé par erreur la prop compteur dans le composant Parent, ce qui faisait que le composant Enfant ne recevait plus la valeur du compteur.
Dans Parent.jsx, j’avais écrit un mauvais code volontairement pour tester :
<Enfant />

	Identification de l’erreur avec React Developer Tools :
Voici les étapes que j’ai suivies pour identifier l’erreur avec l’extension React Developer Tools dans le navigateur :
1.	J’ai lancé l’application avec npm run dev.
2.	J’ai ouvert les outils de développement (F12 ou clic droit > Inspecter).
3.	Je suis allé dans l’onglet React.
4.	J’ai cliqué sur le composant Enfant.
5.	Dans le panneau de droite, j’ai vu que la prop compteur était undefined.

	Correction du problème :
Pour corriger cette erreur, j’ai réajouté la prop manquante dans Parent.jsx :
<Enfant compteur={compteur} />

	Résultat après correction :
Après avoir enregistré le fichier et rechargé la page :
•	Le composant Enfant affiche maintenant correctement la valeur du compteur.
•	Dans React Developer Tools, la prop compteur est bien définie et mise à jour à chaque clic.



PLUS DE DETAILLE VOIR LE DOCUMENT EN WORD .docx

