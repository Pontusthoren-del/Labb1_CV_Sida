const username = "Pontusthoren-del";
const projectsContainer = document.getElementById("github-projects");
const loading = document.getElementById("loading");

async function fetchProjects() {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos`,
        );
        const repos = await response.json();

        loading.style.display = "none";

        repos.forEach((repo) => {
            if (!repo.fork) {
                const li = document.createElement("li");
                li.innerHTML = `
                <div class="project">
                        <h2>${repo.name}</h2>
                        <p>${repo.description || "Ingen beskrivning tillgänglig"}</p>
                        <a href="${repo.html_url}" target="_blank" class="btn github">Se på GitHub</a>
                    </div>`;
                projectsContainer.appendChild(li);
            }
        });
    } catch (error) {
        loading.innerText = "Kunde inte ladda projekt.";
    }
}
fetchProjects();
