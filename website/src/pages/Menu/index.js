import React from 'react';

import Logo from '../../assets/logo.png';
import Banner from '../../assets/banner.png';

export default function Menu(){
    return(
        <div className="container-menu">
                <section>
                    <img src={Logo} alt="selfcare"/>
                </section>
                <h1>MENU</h1>

                <img src={Banner} alt="banner"/>
        </div>
    );
}