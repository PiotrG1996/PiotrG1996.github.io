var arrLang = {
  PL: {
    navBar1: "Start",
    navBar2: "O mnie",
    navBar3: "Umiejętności",
    navBar4: "Projekty",
    navBar5: "Kontakt",
    about1: "X",
    about2: "Moje strony cechuje",
    "about2.1": "Przejrzystość",
    "about2.1.1": "Przyjemne dla oka",
    "about2.2": "Dokładność",
    "about2.2.1": "Dopracowane do wszystkich urządzeń",
    "about2.3": "Prostota",
    "about2.3.1": "Intuicyjne i łatwe w obsłudze",
    "about2.4": "Funkcjonalność",
    "about2.4.1": "Spełniające swoją rolę",
    project1: ""
  },
  EN: {
    navBar1: "Start",
    navBar2: "About",
    navBar3: "Skills",
    navBar4: "Projects",
    navBar5: "Contact",
    about1: ".",
    about2: "Features of my websites",
    "about2.1": "Clarity",
    "about2.1.1": "Pleasant for eye",
    "about2.2": "Accuracy",
    "about2.2.1": "Perfect for all devices",
    "about2.3": "Simplicity",
    "about2.3.1": "Intuitive and easy to use",
    "about2.4": "Functional",
    "about2.4.1": "Fulfilling their role",
    project1: ""
  }
};

document
  .getElementById("language")
  .addEventListener("click", function changeLanguage() {
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
  });

function HighlightLanguageEN() {
  document.getElementById("en_").style.color = "gold";
  document.getElementById("pl_").style.color = "white";
  document.getElementById("ger_").style.color = "white";
}
function HighlightLanguagePL() {
  document.getElementById("en_").style.color = "white";
  document.getElementById("pl_").style.color = "gold";
  document.getElementById("ger_").style.color = "white";
}
function HighlightLanguageGER() {
  document.getElementById("en_").style.color = "white";
  document.getElementById("pl_").style.color = "white";
  document.getElementById("ger_").style.color = "gold";
}

// document.getElementById("pl_").addEventListener("click", function() {
//   document.getElementById("pl_").style.color = "#ffd152";
//   document.getElementById("en_").style.color = "white";
// });
// function HighlightLanguagePL() {
//   document.getElementById("pl_").style.color = "#ffd152";
//   document.getElementById("en_").style.color = "white";
// }

// function HighlightLanguageEN() {
//   document.getElementById("pl_").style.color = "white";
//   document.getElementById("en_").style.color = "#ffd152";
// }
