window.onload = () => {
  loadImages();
};

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
        const obj = body.photos[i];

        // for (const obj of body.photos) {

        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
            
            <div class="card">
                <img src="${obj.src.medium}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${obj.photographer}</h5>
                    <p class="card-text">${obj.photographer_id}€</p>
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
