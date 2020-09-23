import React from 'react';

import Visa from '../../assets/visa.png';
import Master from '../../assets/master.png';
import Pay from '../../assets/pay.png';


export default function Footer() {
    return (
        <div className="container-footer">
            <section>
                <form>
                    <label>
                        <h1> Newsletter </h1>
                        <input type="text" size={40} color="green" />
                    </label>
                    <input type="submit" value="Pesquisar" alt="lupa" />
                </form>
                <img src={Visa} alt="visa" />
                <img src={Master} alt="visa" />
                <img src={Pay} alt="visa" />

            </section>

        </div>
    );
}