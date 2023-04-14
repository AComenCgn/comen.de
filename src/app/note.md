1. Bilder einfügen als Variable und mit animation
2. Overlay und Titel einfügen
   2.1 Neue Div anlegen und 2. CSS klasse für Overlay definieren: transparent machen.
   und einen p Text schreiben
   2.2 Google Fonts Open sans wählen und downloaden. Dann LINK kopieren und in die index.html einbinden.
   Und den CSS Link in die style.css einbinden bei body
3. Text als Array anlegen (headlines) in ts und Titel einfügen als String. und im html als Var einfügen: {{headlines}}
   Weil currentImage mit Modulu durchzählt ebenfalls einfügen
4. Für p animation mit FadeIn mit keyframes. Damit die Animation nicht nur beim ersten, sondern auch beim Rest gespielt werden soll:
   \*ng if einfügen.
5. Jetzt aufräumen: Neue Componente erstellen: Slide-Show und alles hinzufügen, was damit zu tun hat: Dafür bei
   app.comonent.html alles löschen und schreiben: <app-slideshow></app-slideshow>
   (Dabei können weitere erstellt werden wie z.B. <app-header></app-header>)
   Jetzt im Terminal neue app erstellen lassen: > ng g c slideshow (ENTER)
   ACHTUNG: bei import noch onInit hinzufügen: import { Component, OnInit } from '@angular/core';
   (LÖSCHEN GEHT SO: Orner Löschen, bei import löschen und bei declaration löschen)
6. menu erstellen:
   - Terminal
   - in app einbinden
     ACHTUNG on init einfügen:
     constructor(){ }
     ngOnInit(): void{}
7. Link designen: In CSS NEU: & nicht vergessen.
8. Neue Component für Impressum erstellen: Es soll aber erst angezeigt werden, wenn /imprint im Pfad steht.
   Dafür in app-routing.module.ts öffnen und die Route bestimmen: { path: 'imprint', component: ImprintComponent};
   (Von angular-page kopiert und angepasst)
   UND: Wenn kein Pfad angegeben: also "" immer slideshow anzeigen. Automatische oben bei import eingefügt.
   dann bei app.component.html den Router einbinden und die slideshow löschen.
   dann dem a einen router Link einfügen.
9. Weitere Linkt mit router Links verbinden z.B. img und START mit /
10. Dark-Mode bei Site Wechsel: Einfach eine Variable definieren. dark-Mode = true;
    die Div soll die class nur bekommen, wenn darkMode = true ist. Dann in SCSS class darkLinks definieren.
11. DarkMode soll von aussen gesetzt werden: menu.ts bei der Var vorschreiben: @Input() schreiben und in app.component
    auch bei app- eintragen, dass eine Var bestimmen soll currentRoute
12. Die neue Variable bei app.component.ts anlegen und leeren String initialisieren.
13. Dann durch einen constructor Eigenschaften ziehen (public router: Router) und ALT ENTER drücken
    und instalieren/ importieren. Dann Init darunter einfügen (von angular seite kopiert)

14. Impressum einfügen: Text einfügen. Da nun für alle Unterseiten eine Formatierung gewünscht ist, kann bei app.html um den
    router einfach eine div mit einer class= container erstellt werden. Dies gilt dann für alle unterseiten. in der app.css bestimmen

15. Das Problem ist, dass die Start Seite auch sich verschiebt, d.h. es soll nur angewendet werden, wenn nicht / also bei app.html
    [class.contaiener] eintragen
16. Nun Datenschutzerklärung. Neu im Terminal erstellen. und im app-routing eintragen und bei menu.html link hinzufügen
17. Seite veröffentlichen: Terminial: ng build --configuration production
