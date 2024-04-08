import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home></Home>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
