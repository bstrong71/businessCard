let data = {
  "login": "bstrong71",
  "id": 29932703,
  "avatar_url": "https://avatars2.githubusercontent.com/u/29932703?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/bstrong71",
  "html_url": "https://github.com/bstrong71",
  "followers_url": "https://api.github.com/users/bstrong71/followers",
  "following_url": "https://api.github.com/users/bstrong71/following{/other_user}",
  "gists_url": "https://api.github.com/users/bstrong71/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/bstrong71/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/bstrong71/subscriptions",
  "organizations_url": "https://api.github.com/users/bstrong71/orgs",
  "repos_url": "https://api.github.com/users/bstrong71/repos",
  "events_url": "https://api.github.com/users/bstrong71/events{/privacy}",
  "received_events_url": "https://api.github.com/users/bstrong71/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Bernard Strong",
  "company": "The Iron Yard | Atlanta",
  "blog": "https://github.com/bstrong71",
  "location": "Alpharetta, GA",
  "email": "bstrong71@gmail.com",
  "hireable": null,
  "bio": "My background is in management and also IT, mostly network and desktop support. Now I'm starting intensive training to become a developer.",
  "public_repos": 20,
  "public_gists": 0,
  "followers": 2,
  "following": 0,
  "created_at": "2017-07-05T22:38:00Z",
  "updated_at": "2017-08-07T18:31:19Z"
}

let headerName = document.querySelector(".header");
let basics = document.querySelector(".basics");
let story = document.querySelector(".story");
let pic = document.querySelector(".pic");

headerName.innerHTML += `<h1>${data.name}</h1>`;
basics.innerHTML += `
  <p>Name: ${data.name}</p>
  <p>Github URL: ${data.blog}</p>
  <p>Email: ${data.email}</p>
  <p>Company: ${data.company}</p>
  <p>Website: ${data.html_url}</p>`;
story.innerHTML += `<p>${data.bio}</p>`;
pic.innerHTML += `<img src="https://avatars2.githubusercontent.com/u/29932703?v=4" alt="Bernie Strong">`

// GitHub stopped live access to our data, so copied it to object above. Request initially worked and then was blocked soon after.
function reqListener() {
  let data = JSON.parse(this.responseText);
  console.log(data);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/bstrong71");
req.addEventListener("load", reqListener);
req.send();
