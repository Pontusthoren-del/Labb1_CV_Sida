const dot = document.getElementById("easter-egg-dot");
const color = ["#cabd7294", "#c4a882", "#d4b896", "#b8967a", "#e8d5b7"];
let colorIndex = 0;

dot.addEventListener("click", () => {
    console.log("klickad!");
    colorIndex = (colorIndex + 1) % color.length;
    document.body.style.background = color[colorIndex];
});
