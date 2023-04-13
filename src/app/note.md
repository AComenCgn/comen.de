1. Bilder einfügen als Variable und mit animation
2. Overlay und Titel einfügen
    2.1 Neue Div anlegen und 2. CSS klasse für Overlay definieren: transparent machen.
        und einen p Text schreiben
    2.2 Google Fonts Open sans wählen und downloaden. Dann LINK kopieren und in die index.html einbinden.
        Und den CSS Link in die style.css einbinden bei body
3. Text als Array anlegen (headlines) in ts  und Titel einfügen als String. und im html als Var einfügen: {{headlines}}
    Weil currentImage mit Modulu durchzählt ebenfalls einfügen
4. Für p animation mit FadeIn mit keyframes. Damit die Animation nicht nur beim ersten, sondern auch beim Rest gespielt werden soll:
    *ng if einfügen. 
5. Jetzt aufräumen: Neue Componente erstellen: Slide-Show und alles hinzufügen, was damit zu tun hat: Dafür bei
    app.comonent.html alles löschen und schreiben: <app-slideshow></app-slideshow>
    (Dabei können weitere erstellt werden wie z.B. <app-header></app-header>)
    Jetzt im Terminal neue app erstellen lassen: > ng g c slideshow (ENTER)
    ACHTUNG: bei import noch onInit hinzufügen: import { Component, OnInit } from '@angular/core';
    (LÖSCHEN GEHT SO: Orner Löschen, bei import löschen und bei declaration löschen)