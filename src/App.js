import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Calgary" />
        <footer className="text-center mb-5">
          This project was coded by{" "}
          <a href="https://loycekalen.io" target="_blank" rel="noreferrer">
            Loyce Kalen
          </a>{" "}
          and is{" "}
          <a
            href="https://www.github.com/loycekalen/weather-application-react"
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
