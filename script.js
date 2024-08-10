document.getElementById('hamburger').addEventListener('click', function() { /* Fügt dem Hamburger-Icon einen Klick-Event-Listener hinzu */
    document.querySelector('.nav-links').classList.toggle('active'); /* Schaltet die Klasse "active" für das Navigationsmenü ein/aus */
    document.querySelector('.social-icons').classList.toggle('active'); /* Schaltet die Klasse "active" für die Social-Media-Icons ein/aus */
    this.classList.toggle('active'); /* Schaltet die Klasse "active" für das Hamburger-Icon selbst ein/aus */
});

document.addEventListener('scroll', function() { /* Fügt ein Event hinzu, das bei jedem Scrollen ausgeführt wird */
    const posts = document.querySelectorAll('.post'); /* Wählt alle Elemente mit der Klasse "post" aus */
    const scrollPosition = window.scrollY + window.innerHeight; /* Berechnet die aktuelle Scrollposition und die Fensterhöhe */

    posts.forEach((post, index) => { /* Iteriert über alle Beiträge */
        if (post.getBoundingClientRect().top + window.scrollY < scrollPosition) { /* Prüft, ob der Beitrag sichtbar ist */
            setTimeout(() => { /* Verzögert die Anzeige des Beitrags */
                post.classList.add('visible'); /* Macht den Beitrag sichtbar */
                if (index % 2 === 0) { /* Prüft, ob der Index des Beitrags gerade ist */
                    post.classList.add('slide-in-left'); /* Fährt den Beitrag von links ein */
                } else {
                    post.classList.add('slide-in-right'); /* Fährt den Beitrag von rechts ein */
                }
            }, index * 200); /* Verzögerung zwischen den Animationen */
        }
    });
});



let lastScrollTop = 0;
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Beim Scrollen nach unten: Header wird transparent
        header.classList.add('header-transparent');
    } else if (scrollTop === 0) {
        // Wenn bis ganz nach oben gescrollt: Header wird wieder sichtbar
        header.classList.remove('header-transparent');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // ScrollTop darf nicht negativ werden
});


