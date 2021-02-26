import React from 'react';
import background from '../bg2.svg'
import '../Styles/FirstPage.css'
const FirstPage = () => {
    return (
        <div>
            <img src={background} className='background'/>
      <p className="tagline-2 ">
      <span>{"{"}<br/></span>
      <span><p>{"innovate:"}<span className='objstyle'>{"'Begin the Build', "}</span><br/></p></span>
      <span><p>{"build:"}<span className='objstyle'>{"'Contribute in Real-world projects', "}</span><br/></p></span>
      <span><p>{"grow:"}<span className='objstyle'>{"'Gain hands-on experience', "}</span><br/></p></span>
      <span>{"}"}<br/></span>

      </p>
    <p className="tagline-1">Innovate.Build.Grow.</p>
    <svg style={{  objectFit:'inherit'}}className="svg-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#536DFE" fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,176C640,192,800,256,960,266.7C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <div style={{backgroundColor:'#536DFE',top:'420px',position:'relative'}}>
             <div className="container-1" style={{color:'#0a2239',padding:'15px 0px'}}>
             <h2 className="tagline"> Let's<span style={{color:'#ffffff'}} className="start">&nbsp;START&nbsp;</span>building projects with us,</h2>
                <h2 className="tagline"> It's time to make your hands dirty with Open-Source.</h2>
            </div>
        </div>
        </div>
    );
};

export default FirstPage;