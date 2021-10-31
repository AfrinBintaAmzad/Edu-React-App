import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Home from './components/Home/Home';
import Educators from './components/Educators/Educators';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Admission from './components/Admission/Admission';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import EducatorDetail from './components/EducatorDetail/EducatorDetail';



function App() {
  useEffect(()=>{
    fetch('./tools.JSON')
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])
  return (
    <div className="App">
      
     
     <Router>
     <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
            <Educators></Educators>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/admission">
            <Admission></Admission>
          </Route>
          
          <Route path="/educators">
            <Educators></Educators>
          </Route>

          <Route path="/educator/:educatorPhone">
            <EducatorDetail></EducatorDetail>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
     

      
    </div>
  );
}

export default App;
