import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Calgary" />
        <footer className="text-center">
          This project was coded by{" "}
          <a href="https://loycekalen.io" target="_blank" rel="noreferrer">
            Loyce Kalen
          </a>{" "}
          and is{" "}
          <a
            href="https://www.github.com/loycekalen/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
