import React from 'react'
import '../Styles/SkillsStyle.css';
const Skills=()=>{
    return(
        <div className="container" id="skills">
            <h1 className="text-center text-white">Skills</h1>
            <div class="row">
                    <div className="col-sm-1">
                        <div className="round round-lg purple">
                            <span className="fab fa-bootstrap"></span>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="round round-lg orange">
                            <span className="fab fa-html5"></span>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="round round-lg blue">
                            <span className="fab fa-css3-alt"></span>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="round round-lg rose">
                            <span className="fab fa-sass"></span>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="round round-lg blue">
                            <span className="fab fa-react"></span>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="round round-lg yellow">
                            <span className="fab fa-js"></span>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="round round-lg red">
                            <span className="fab fa-java"></span>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="round round-lg green">
                            <span className="fab fa-python"></span>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="round round-lg purple">
                            <span className="fab fa-ubuntu"></span>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="round round-lg blue">
                            <span className="fab fa-github"></span>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="round round-lg green">
                            <span className="fab fa-node"></span>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Skills;