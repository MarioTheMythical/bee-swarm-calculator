import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Link to="/calculator">
        <div>Calculator</div>
      </Link>
      <Link to="/planner">
        <div>Planner</div>
      </Link>
    </div>
  );
}

export default App;
