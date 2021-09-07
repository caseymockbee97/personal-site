import MainView from "./Views/MainView";

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(#637081, #CEE5F2)",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        overflow: "scroll",
      }}
    >
      <MainView />
    </div>
  );
}

export default App;
