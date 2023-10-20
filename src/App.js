import "./App.css";
import Homepage from "./Pages/Homepages";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} exact />
          {/* Define more routes as needed */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
