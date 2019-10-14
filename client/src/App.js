import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./Routes/PrivateRoute"
import BubblesPage from "./components/BubblePage"

function App() {
  //const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubbles" component={BubblesPage}/>
      </div>
    </Router>
  );
}

export default App;