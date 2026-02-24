const secretCode = "1337";
let input = "";

document.addEventListener("keydown", (e) => {
    input += e.key;
    if (input.length > secretCode.length) {
        input = input.slice(-secretCode.length);
    }
    if (input == secretCode) {
        document.getElementById("easter-egg-modal").style.display = "flex";
        input = "";
    }
});
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("easter-egg-modal").style.display = "none";
});
