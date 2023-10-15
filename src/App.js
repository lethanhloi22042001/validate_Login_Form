
import './App.css';
import Home from './Home/Home';
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom"
import Chicken from './Todo/Chicken';
import Dog from './Todo/Dog';
import Duck from './Todo/Duck';
import Cps_Home from './Components/Cps_Home';
// import About from './Navigation/About';
 

function App() {
  return (
    <div  className="App">
      <BrowserRouter>
        <Routes> 
              <Route path="/"  element={<Home/>}>
                {/* OUTLET */}
                  <Route path ="/input"  element={<Cps_Home/>}></Route>
                  <Route path="/dog"  element={<Dog/>}></Route>
                  <Route path="/chicken"  element={<Chicken/>}></Route>
                  <Route path="/duck"  element={<Duck/>}></Route>
                  {/* <Route path="/duck"  element={<About/>}></Route> */}
              </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 