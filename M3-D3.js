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
        <div class="card mb-4 shadow-sm">
<img src="${photo.src.medium}" class="img-card">
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

      row.innerHTML = "";

      for (let i = 0; i < body.photos.length; i++) {
        const photo = body.photos[i];
        // for (const photo of body.photos) {

        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
        <div class="card mb-4 shadow-sm">
<img src="${photo.src.medium}" class="img-card">
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
        class="btn btn-sm btn-outline-secondary" onclick="buttonHide()"
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

      // 3. Replace the **Edit** buttons on the cards with a **Hide** button.

      const buttonValue = document.querySelectorAll(".btn-group:last-child");
      for (let i = 0; i < buttonValue.length; i++) {
        buttonValue.innerHTML = "Hide";
      }

      //  4. When pressed, this button should make the whole card disappear.
      const buttonHide = function () {
        const hide = document.querySelectorAll(".row .col-md-4 .card");
        for (let i = 0; i < body.photos.length - 1; i++) {
          hide.innerHTML = "";
        }
      };
      // 5. Replace the **9 mins** string in the cards with the ID of the image
    }) //end of .then
    .catch((error) => {
      console.log(error);
    });
};
