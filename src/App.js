import react from "react";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import './index.css'
import Homescreen from "./screens/Homescreen";

const App = () => {
    return (
      <div className="App">
        <Navbar />
        <Homescreen />
      </div>
    )
}

export default App;