import React from 'react';

const About=()=>{
    return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mb-5 text-white">
                            <h2>What Can I Do</h2>
                            <hr/>
                            <p>I am a Software Developer with experience in front-end / Back-end areas, i am able to identify customer needs and create innovate alternatives for their projects and i have the ability to provide solutions in the area of software development </p>
                            <a className="btn btn-primary btn-lg" href="https://wa.me/573133461897?text=Me%20gustaría%20saber%20mas%20de%20sus%20servicios"><i className="fab fa-whatsapp"> Start Now!!</i></a>
                        </div>
                    <div className="col-md-4 mb-3 text-white">
                        <h2>Contact Me</h2>
                        
                        
                        <address>
                        <div className="btn-group ">
                            <a className="btn btn-outline-info" href="https://www.linkedin.com/in/santiago-valle-216a2818a/"><i className="fab fa-linkedin-in fa-3x"></i></a>
                            <a className="btn btn-outline-secondary" href="https://github.com/pechuga22"><i className="fab fa-github fa-3x"></i></a>
                            <a className="btn btn-outline-info" href="https://www.instagram.com/santiagovj19/"><i className="fab fa-instagram fa-3x"></i></a>
                        </div>
                            <br/>
                            <a href="https://www.gmail.com/">iefaz.santiagovalle@gmail.com</a>
                            <p className="text-white">UserName = Pechuga22</p>
                            <p className="text-white">Medellin, Colombia</p>

                        </address>
                   </div>
                </div>
            </div>
        </div>   
    );
}
export default About;