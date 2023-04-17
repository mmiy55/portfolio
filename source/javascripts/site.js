 // Create a function to change
    // the hash value of the page
    console.log("hello")

    // Define the language reload anchors
    let language = {
      it: {
        greet: "Ciao, mi chiamo Miriam",
        about: "Sono una programmatrice di back-end italiana, vivo e lavoro ad Osaka, in Giappone. Amo le lingue , risolvere enigmi e disegnare",
      },
      en: {
        greet: "Hello, I'm Miriam",
        about: "I'm a back-end developer, italian based in Osaka, Japan. I love languages, solving puzzles and drawing.",
      },
      es: {
        greet: "¡Hola! Me llamo Miriam",
        about: "Soy una programadora italiana, vivo y trabajo en Osaka, Japón. Me encantan los idiomas, resolver acertijos y dibujar. ",
      },
      jp : {
         greet: "初めまして、ミリアムです。",
         about: "イタリア人のバックエンド開発者です。現在大阪に住んでいます。外国語を学ぶことや、パズルの解決や、描を描くのが大好きです。",
       }
    };

    function changeLanguage(lang) {

      console.log(lang)
      key = lang
      console.log(key)
      id = document.querySelector(".translate").id

      document.querySelectorAll(".translate").forEach(function(element) {
        console.log(element.textContent);
        const id = element.id;
        element.innerText = language[key][id];
      }
      )
    }

    if (!window.location.hash) {
      changeLanguage("en")
    }


    // Check if a hash value exists in the URL
    // if (window.location.hash) {

  // Set the content of the webpage
  // depending on the hash value
//   if (window.location.hash == lang) {
//     document.querySelector("#aboutContent").innerText = language[lang].about;
//   }
//   else if (window.location.hash == "#jp") {
//     document.querySelector("#aboutContent").innerText = language.jp.about;
//   }
//   else if (window.location.hash == "#en") {
//     document.querySelector("#aboutContent").innerText = en.about;
//   }
//   else if (window.location.hash == "#it") {
//     document.querySelector("#aboutContent").innerText = language.it.about;
//   }
// }
