import React from 'react';
import Logo  from '../img/logo.png';

const Footer = () => {
    return (
        <footer className="bck_blue"
        style={{backgroundColor:'#2460A7FF'}}>
            <div className="img_cover"
                    style={{
                        background: `url(${Logo})`,
                        height: '100px',
                        width: '100px'
                    }}
            >
            </div>
            <div className="footer_discl">
                ESTE 2020. All rights reserved.
            </div>
            
        </footer>
    );
};

export default Footer;