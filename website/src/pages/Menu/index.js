import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import Logo from '../../assets/logo.png';
import Banner from '../../assets/banner.png';

export default function Menu({ name, sobrenome , valor}){
    
    return(
        <div className="container-menu">
                <section>
                    <img src={Logo} alt="selfcare"/><FaFacebook  size={30}/><FaInstagram size={30} color="green" />
                </section>
                <h1>Olá, {name} {sobrenome} R$ {valor}</h1>

                <img src={Banner} alt="banner"/>
        </div>
    );
}