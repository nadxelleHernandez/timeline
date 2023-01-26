import "./App.css";
import timelineData from "./data/timeline.json";
import TimeLine from "./components/TimeLine";

function App() {
  return (
    <main className="App-main">
      <h1 className="App-title App-header">
        {timelineData.person}'s social media feed
      </h1>
      <TimeLine data={timelineData}></TimeLine>
    </main>
  );
}

export default App;
