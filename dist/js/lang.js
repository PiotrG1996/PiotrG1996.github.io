var arrLang = {
  PL: {
    navBar1: "Start",
    navBar2: "O mnie",
    navBar3: "Umiejętności",
    navBar4: "Projekty",
    navBar5: "Kontakt",
    about1:
      "Nazywam się Krystian Wojtkowski, mam 23 lata i mieszkam w okolicy Warszawy.<br>Z Programowaniem mam doczynienia już od pierwszych lat gimnazjum.<br>Przez ten czas próbowałem swoich sił w programowaniu aplikacji na systemy Android, a także aplikacji desktopowych (C#, Visual Basic).<br><br>Ostatecznie na dłużej zostałem przy tworzeniu stron w języku PHP z wykorzystaniem baz danych (MySQL).<br>Właśnie w tym kierunku chciałbym poszerzać swoje umiejętności.",
    about2: "Moje strony cechuje",
    "about2.1": "Przejrzystość",
    "about2.1.1": "Przyjemne dla oka",
    "about2.2": "Dokładność",
    "about2.2.1": "Dopracowane do wszystkich urządzeń",
    "about2.3": "Prostota",
    "about2.3.1": "Intuicyjne i łatwe w obsłudze",
    "about2.4": "Funkcjonalność",
    "about2.4.1": "Spełniające swoją rolę",
    project1:
      'Projekt stworzony dla graczy "NosTale", do którego początkowo używałem gotowego szablonu.<br>Z biegiem czasu i samodzielnej nauki uznałem, że zaprojektować własny styl to nic trudnego!<br><br>Strona w dużej części opiera się na bazie MySQL, tworząc odpowiednio wygenerowane informacje, ukazywane użytkownikowi w czytelny sposób. Zawiera również wiele kalkuklatorów stworzonych w języku JavaScript, a także w pewnych sytuacjach zastosowana jest metoda AJAX.'
  },
  EN: {
    navBar1: "Start",
    navBar2: "About",
    navBar3: "Skills",
    navBar4: "Projects",
    navBar5: "Contact",
    about1:
      "My name is Krystian Wojtkowski, I'm 23 years old and I live close to Warsaw.<br>I've been intreseted in programming since first years of middle school.<br>In this time I tried my skills at programming on Android and desktop applications (C#, Visual Basic).<br><br>Finally, I liked the most PHP language with MySQL database using.<br>I would like to increase my skills in this way.",
    about2: "Features of my websites",
    "about2.1": "Clarity",
    "about2.1.1": "Pleasant for eye",
    "about2.2": "Accuracy",
    "about2.2.1": "Perfect for all devices",
    "about2.3": "Simplicity",
    "about2.3.1": "Intuitive and easy to use",
    "about2.4": "Functional",
    "about2.4.1": "Fulfilling their role",
    project1:
      'The project created for "NosTale" players, that I orginally used ready template.<br>Over time and self-study I admitted, that design my own style is nothing difficult!<br><br>The site is based on MySQL database, creating properly generated information, shown to user in clearly way. It also contains many calculators created in JavaScript and in certain situations is used AJAX method.'
  }
};

function changeLanguage() {
  if (document.getElementById("flag").getAttribute("sLang") == "PL") {
    document.getElementById("flag").setAttribute("sLang", "EN");
    document.getElementById("flag").src = "img/EN.jpg";
  } else {
    document.getElementById("flag").setAttribute("sLang", "PL");
    document.getElementById("flag").src = "img/PL.jpg";
  }

  var list = document.getElementsByClassName("lang");
  for (i = 0; i < list.length; i++) {
    list[i].innerHTML =
      arrLang[document.getElementById("flag").getAttribute("sLang")][
        list[i].getAttribute("key")
      ];
  }
}

let polishLanguage = document.getElementsByClassName("pl");
let englishLanguage = document.getElementsByClassName("en");

polishLanguage.on("click", function(e) {
  document.getElementsByClassName("pl").style.color = "gold";
});
