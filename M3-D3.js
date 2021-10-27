window.onload = () => {};

const loadImages = () => {
  fetch("https://api.pexels.com/v1/search?query=forest", {
    headers: {
      Authorization: "563492ad6f91700001000001f8aad667e1dc4c36b6963f98bdd6e0cf",
    },
  })
    .then((jsonData) => {
      console.log(jsonData);
      return jsonData.json();
    })
    .then((body) => {
      // DOM MANIPULATION
      console.log(body);
      const row = document.querySelector(".album .row");

      console.log(body.photos.length);
      console.log(Boolean(0 < body.photos.length));

      row.innerHTML = "";

      for (let i = 0; i < body.photos.length; i++) {
        const photo = body.photos[i];

        // for (const photo of body.photos) {

        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
            
            <div class="card">
                <img src="${photo.src.medium}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${photo.photographer}</h5>
                    <p class="card-text">${photo.photographer_id}€</p>
                </div>
            </div>
            `;

        `
        <div class="card mb-4 shadow-sm">
<svg
  class="bd-placeholder-img card-img-top"
  width="100%"
  height="225"
  xmlns="${photo.src.medium}"
  preserveAspectRatio="xMidYMid slice"
  focusable="false"
  role="img"
  aria-label="Placeholder: Thumbnail"
>
  <title>Placeholder</title>
  <rect width="100%" height="100%" fill="#55595c" />
  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
    Thumbnail
  </text>
</svg>
<div class="card-body">
  <p class="card-text">
  <title>${photo.photographer}</title>

  </p>
  <div
    class="d-flex justify-content-between align-items-center"
  >
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-sm btn-outline-secondary"
      >
        View
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-secondary"
      >
        Edit
      </button>
    </div>
    <small class="text-muted">${photo.photographer_id}</small>
  </div>
</div>
</div>
</div>`;

        row.appendChild(col);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const loadSecondaryImages = () => {
  fetch("https://api.pexels.com/v1/search?query=music", {
    headers: {
      Authorization: "563492ad6f91700001000001f8aad667e1dc4c36b6963f98bdd6e0cf",
    },
  })
    .then((jsonData) => {
      console.log(jsonData);
      return jsonData.json();
    })
    .then((body) => {
      // DOM MANIPULATION
      console.log(body);
      const row = document.querySelector(".album .row");

      console.log(body.photos.length);
      console.log(Boolean(0 < body.photos.length));

      row.innerHTML = "";

      for (let i = 0; i < body.photos.length; i++) {
        const photo = body.photos[i];

        // for (const photo of body.photos) {

        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
            
            <div class="card">
                <img src="${photo.src.medium}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${photo.photographer}</h5>
                    <p class="card-text">${photo.photographer_id}€</p>
                </div>
            </div>
            `;

        row.appendChild(col);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
