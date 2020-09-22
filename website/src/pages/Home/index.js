import React from 'react';


import Menu from '../Menu';
import Footer from '../Footer';

export default function Home(){
    return(
        <div className="container-home">
            <Menu name="José Afranio" sobrenome="Volpato" valor={5+3}/>
        
            <h3>HOME</h3>
        
            <Footer />
        </div>
    );
}