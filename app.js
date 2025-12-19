const path = window.location.pathname.replace("/", "");
const username = path === "" ? "mohamed" : path;

fetch(`data/${username}.json`)
.then(res => {
  if (!res.ok) throw new Error();
  return res.json();
})
.then(data => {
  document.getElementById("name").innerText = data.name;
  document.getElementById("job").innerText = data.job;
  document.getElementById("place").innerText = data.place;
  document.querySelector(".profile-pic").style.backgroundImage = `url(${data.avatar})`;
  document.querySelector(".header-img").style.backgroundImage = `url(${data.cover})`;
})
.catch(() => {
  document.body.innerHTML = "<h2>User not found</h2>";
});
