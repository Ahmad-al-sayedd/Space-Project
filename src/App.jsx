import { Route, Routes } from "react-router-dom";
import Launches from "./components/Launches";
import VrGlasses from "./components/VrGlasses";
import "./App.scss";
import Nav from "./components/Nav";
import SingleLaunch from "./components/SingleLaunch";
import { useState, useEffect } from "react";
function App() {




  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) => setLaunches(data));
  }, []);









  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<VrGlasses />} />
          <Route path="launches" element={<Launches launches={launches} />} />
          <Route path="launches/:launch" element={<SingleLaunch launches={launches} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
