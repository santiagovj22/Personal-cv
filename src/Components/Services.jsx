import React from 'react';
import '../Styles/ServicesStyle.css';

const Services=()=>{
    return(

<section>
<div className="container" id="services">

        <h1 className="text-center text-white">Services</h1>
		<div className="row mbr-justify-content-center">

            <div className="col-lg-6 mbr-col-md-10">
                <div className="wrap">
                    <div className="ico-wrap">
                        <span className="mbr-iconfont fas fa-search"></span>
                    </div>
                    <div className="text-wrap vcenter">
                        <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5 text-white">Analytical <span> Testing</span></h2>
                        <p className="mbr-fonts-style text1 mbr-text display-6 text-white">Experience in tester and process analysis, software.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mbr-col-md-10">
                <div className="wrap">
                    <div className="ico-wrap">
                        <span className="mbr-iconfont fas fa-desktop"></span>
                    </div>
                    <div className="text-wrap vcenter">
                        <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5 text-white">Web
                            <span> Development</span>
                        </h2>
                        <p className="mbr-fonts-style text1 mbr-text display-6 text-white">Web Development Services, Responsive Design, using the latest technologies for your idea</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mbr-col-md-10">
                <div className="wrap">
                    <div className="ico-wrap">
                        <span className="mbr-iconfont fas fa-mobile-alt"></span>
                    </div>
                    <div className="text-wrap vcenter">
                        <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5 text-white">Mobile
                            <span> Development</span>
                        </h2>
                        <p className="mbr-fonts-style text1 mbr-text display-6 text-white">App development with standard Material design</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mbr-col-md-10">
                <div className="wrap">
                    <div className="ico-wrap">
                        <span className="mbr-iconfont fas fa-code"></span>
                    </div>
                    <div className="text-wrap vcenter">
                        <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5 text-white">Backend<span> Development</span></h2>
                        <p className="mbr-fonts-style text1 mbr-text display-6 text-white">Software service in Backend with databases, servers, etc.</p>
                    </div>
                </div>
            </div>

            

            
        </div>

</div>

</section>
    );
}

export default Services;
