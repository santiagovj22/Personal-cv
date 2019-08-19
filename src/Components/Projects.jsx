import React from 'react';
import Rigctus from '../Images/logoRigctus.png';
import Tienda from '../Images/1.jpg';
import Geek from '../Images/2.png';
import Conf from '../Images/speaker1.jpg';
import Eco from '../Images/ecorecarga.png';
const Projects=()=>{
    return(
        <div className="container" id="projects">
          <h1 className="text-center text-white">Projects</h1>
          <div className="row">
          <div className="col-md-4 mb-5">
              <div className="h-70">
                <a href="https://ecorecarga.netlify.com/" rel="noopener noreferrer"><img className="card-img-top" src={Eco} alt=""/></a>
                  <div className="card-body">
                    <h4 className="text-white">Ecorecargas</h4>
                    <p className="card-text text-white">initiative for young people from schools to recycle the packaging, store them and not give them to us, in return they will receive recharges to their cell phone</p>
                  </div>
               </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="h-70">
                <a href="a"><img className="card-img-top" src={Rigctus} alt=""/></a>
                  <div className="card-body">
                    <h4 className="text-white">Rigctus</h4>
                    <p className="card-text text-white">Would you like to water your crop and have all the information about it in one click? Rigctus is a mobile app that will help you in whatever you need</p>
                  </div>
               </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="h-70">
                <a href="https://tienda-virtual-geek.firebaseapp.com/" rel="noopener noreferrer"><img className="card-img-top" src={Tienda}  alt=""/></a>
                <div className="card-body">
                  <h4 className="text-white">Furniture</h4>
                  <p className="card-text text-white">Furniture gallery shop, everything you need for your home, rooms, dining rooms and alcoves at great price come now and find out the best promotions</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="h-70">
              <a href="https://academiageek.netlify.com/" rel="noopener noreferrer"><img className="card-img-top" src={Geek}alt="" height="350"/></a>
                <div className="card-body">
                  <h4 className="text-white">Academia Geek </h4>
                  <p className="card-text text-white">Learn how to build web applications with our 8-week face-to-face course. You will be able to access the world of work and work with our allies.</p>
                </div> 
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="h-70">
                <a href="https://geek-conf1.netlify.com/" rel="noopener noreferrer"><img className="card-img-top" src={Conf} alt=""/></a>
                  <div className="card-body">
                    <h4 className="text-white">Geek Conf</h4>
                    <p className="card-text text-white">Geek conf performs its first Demo Day with the line cohort of Line 1: FrontEnd, DOnde expose a project with what we learned in the academic geek course</p>
                  </div>
               </div>
            </div>
</div>


</div>

         
        
    );
}

export default Projects;