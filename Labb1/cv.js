

fetch("cv.json")
    .then((response) => response.json())
    .then((data) => {
        const educationContainer = document.getElementById("education");
        const experienceContainer = document.getElementById("experience");

        data.education.forEach((item) => {
            educationContainer.innerHTML += `
        <div class="cv-item">
          <h4>${item.title}</h4>
          <p class="year">${item.year}</p>
          <p>${item.description}</p>
        </div>
      `;
        });

        data.experience.forEach((item) => {
            experienceContainer.innerHTML += `
        <div class="cv-item">
          <h4>${item.title}</h4>
          <p class="year">${item.year}</p>
          <p>${item.description}</p>
        </div>
      `;
        });
    })
    .catch((error) => console.error("Fel vid laddning av CV:", error));
