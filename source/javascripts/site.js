// This is where it all goes :)
// fetch('https://github.com/mmiy55')
// .then(response=> console.log)

console.log('This is site.js')
const user = "mmiy55"

fetch(`https://api.github.com/users/${user}/repos`)
.then(response => response.json())
.then((data) => {
  data.forEach(function(element) {
    const git_url = element.git_url;
    console.log(git_url)
  });
  // data.forEach((repo) =>{
  //   console.log(repo.name)
  // })
  console.log(data)
  // data.Search.forEach()
})


// const results = document.querySelector(".title")

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     data.Search.forEach((result) => {
//       console.log(result)
//       // const movieTag = `<li class="list-inline-item">
//       //   <img src="${result.Poster}" alt="">
//       //   <p>${result.Title}</p>
//       // </li>`
//       // results.insertAdjacentHTML("beforeend", movieTag)
//     })
//   })


// const query = `{
//   query PinnedRepos {
//     viewer {
//       pinnedItems(first: 6) {
//         edges {
//           node {
//             ... on Repository {
//               name
//               description
//             }
//           }
//         }
//       }
//     }
//   }
// }`;

// fetch("https://api.github.com/graphql",{
//   method; "POS"

//   }
// )
