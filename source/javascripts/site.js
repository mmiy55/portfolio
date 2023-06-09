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
         greet: "初めまして",
         about: "イタリア人のバックエンド開発者、ミリアムと申します。現在大阪に住んでいます。外国語を学ぶことや、パズルの解決や、絵を描くのが大好きです。",
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
