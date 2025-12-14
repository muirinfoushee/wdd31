let goal = localStorage.getItem("goal") || 0;
let runs = JSON.parse(localStorage.getItem("runs")) || [];

updateProgress();

/* SET GOAL */
function setGoal() {
  goal = Number(document.getElementById("goalInput").value);
  localStorage.setItem("goal", goal);
  updateProgress();
}

/* ADD RUN */
const form = document.getElementById("runForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const miles = Number(document.getElementById("miles").value);
    const date = document.getElementById("date").value;
    const notes = document.getElementById("notes").value;

    runs.push({ miles, date, notes });
    localStorage.setItem("runs", JSON.stringify(runs));

    document.getElementById("message").textContent = "Run added!";
    form.reset();
  });
}

/* UPDATE PROGRESS */
function updateProgress() {
  const totalMiles = runs.reduce((sum, run) => sum + run.miles, 0);

  const progressText = document.getElementById("progressText");
  const progressBar = document.getElementById("progressBar");

  if (progressText && progressBar) {
    progressText.textContent = `${totalMiles} / ${goal} miles`;
    const percent = goal > 0 ? (totalMiles / goal) * 100 : 0;
    progressBar.style.width = `${Math.min(percent, 100)}%`;
  }
}
