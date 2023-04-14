 // Create a function to change
    // the hash value of the page
    console.log("hello")

    // Define the language reload anchors
    let language = {
      it: {
        about: "Back-end developer | Ruby on Rails | HTML5 | CSS | Javascript | PostgreSQL | Figma | Github | Heroku",
        banner: "banner"
      },
      en: {
        about: "Back-end developer | Ruby on Rails | HTML5 | CSS | Javascript | PostgreSQL | Figma | Github | Heroku",
        banner: "banner"
      },
      es: {
        about: "Hola!Mi nombre es Miriam",
        banner: "el baner"
      },
      jp : {
         about: "こんにちは、ミリアムです。",
         banner: "バナー"
      }
    };

    function changeLanguage(lang) {

      location.hash = lang;
      let key = lang.replace("#","")
      console.log(key)
      id = document.querySelector(".translate").id

      document.querySelectorAll(".translate").forEach(function(element) {
        console.log(element.textContent);
        const id = element.id;
        element.innerText = language[key][id];
      }
      )

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

}
