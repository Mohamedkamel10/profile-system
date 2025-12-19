const parts = window.location.pathname.split("/").filter(Boolean);
const username = parts.length > 1 ? parts[parts.length - 1] : "mohamed";

fetch(`data/${username}.json`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").innerText = data.name;
    document.getElementById("job").innerText = data.job;
    document.getElementById("place").innerText = data.place;

    document.getElementById("avatar").src = data.avatar;
    document.getElementById("cover").style.backgroundImage = `url(${data.cover})`;

    document.getElementById("phone").href = `tel:${data.phone}`;
    document.getElementById("email").href = `mailto:${data.email}`;

    document.getElementById("whatsapp").href = data.socials.whatsapp;
    document.getElementById("facebook").href = data.socials.facebook;
    document.getElementById("instagram").href = data.socials.instagram;
    document.getElementById("tiktok").href = data.socials.tiktok;
  })
  .catch(() => {
    document.body.innerHTML = "<h2 style='text-align:center'>User not found</h2>";
  });
