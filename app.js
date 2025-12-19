// Get path parts
const parts = window.location.pathname.split("/").filter(Boolean);

// لو شغال على GitHub Pages
// parts = ["profile-system", "mohamed"]
// آخر عنصر هو اسم اليوزر
const username = parts.length > 1 ? parts[parts.length - 1] : "mohamed";

fetch(`data/${username}.json`)
  .then(res => {
    if (!res.ok) throw new Error("User not found");
    return res.json();
  })
  .then(data => {
    document.getElementById("name").innerText = data.name;
    document.getElementById("job").innerText = data.job;
    document.getElementById("place").innerText = data.place;

    document.querySelector(".profile-pic").style.backgroundImage =
      `url(${data.avatar})`;

    document.querySelector(".header-img").style.backgroundImage =
      `url(${data.cover})`;
  })
  .catch(() => {
    document.body.innerHTML = "<h2 style='text-align:center'>User not found</h2>";
  });
