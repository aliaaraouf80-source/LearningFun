const greeting: string = "Welcome to LearningFun!";
const app = document.getElementById("app");
if (app) {
    app.innerHTML = `
        <h1>${greeting}</h1>
        <p>Explore coloring books and fun stories!</p>
        <button onclick="showStory()">Open an Interactive Story</button>
    `;
}

function showStory(): void {
    alert("Ready for a new adventure?");
}
