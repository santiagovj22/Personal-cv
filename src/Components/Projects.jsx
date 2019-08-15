import React from 'react';
import Rigctus from '../Images/logoRigctus.png';
import Tienda from '../Images/1.jpg';
import Geek from '../Images/2.png';

const Projects=()=>{
    return(
        <div className="container" id="projects">
          <h1 className="text-center text-white">Projects</h1>
          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="h-70">
                <img className="card-img-top" src={Rigctus} alt=""/>
                  <div className="card-body">
                    <h4 className="text-white">Rigctus<a href="a" className="btn btn-primary float-right">Visit</a></h4>
                    <p className="card-text text-white">Would you like to water your crop and have all the information about it in one click? Rigctus is a mobile app that will help you in whatever you need</p>
                  </div>
               </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="h-70">
                <img className="card-img-top" src={Tienda}alt=""/>
                <div className="card-body">
                  <h4 className="text-white">Furniture<a href="https://tienda-virtual-geek.firebaseapp.com/" rel="noopener noreferrer" className="btn btn-primary float-right">Visit</a></h4>
                  <p className="card-text text-white">Furniture gallery shop, everything you need for your home, rooms, dining rooms and alcoves at great price come now and find out the best promotions</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="h-70">
                <img className="card-img-top" src={Geek}alt="" height="350"/>
                <div className="card-body">
                  <h4 className="text-white">Academia Geek <a href="https://academiageek.netlify.com/" rel="noopener noreferrer" className="btn btn-primary float-right">Visit</a></h4>
                  <p className="card-text text-white">Learn how to build web applications with our 8-week face-to-face course. You will be able to access the world of work and work with our allies.</p>
                </div> 
              </div>
            </div>
</div>


</div>

         
        
    );
}

export default Projects;