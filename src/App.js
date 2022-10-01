import "./App.css";
import PhotoGraph from "./components/Photograph";

document.addEventListener("click", photoIsClicked);
function photoIsClicked(event) {
  if (event.target.id == "photo") {
    document.getElementById("target-box").classList.add("active");

    const topForTargetBox = event.clientY - 7;
    const leftForTargetBox = event.clientX - 7;
    const topForSelectTarget = event.clientY + 15;
    const leftForSelectTarget = event.clientX + 15;
    document.getElementById("target-box").style.top = `${topForTargetBox}px`;
    document.getElementById("target-box").style.left = `${leftForTargetBox}px`;
    document.getElementById(
      "dropdown-select"
    ).style.top = `${topForSelectTarget}px`;
    document.getElementById(
      "dropdown-select"
    ).style.left = `${leftForSelectTarget}px`;
  }
}

function App() {
  return <PhotoGraph />;
}
export default App;
