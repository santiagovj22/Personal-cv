import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import Page from './Components/Page';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Footer from './Components/Footer';

class App extends React.Component{
  render(){
    return(
    <div>
       
      <div className="bg">
          <Navbar/>
          <Page/>
          <About/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Projects/>
          <br/>
          <Services/>
          <Skills/>
          <br/>
          <br/>
          <br/>
          <Footer/>
      </div>
         
         
    </div>
    );
  }
}


export default App;



