import React from 'react';

import styles from '../css/Body.module.css';

//IMAGENS

import sobre1 from '../components/imgs/sobre1.jpeg';
import sobre2 from '../components/imgs/sobre2.jpeg';
import sobre3 from '../components/imgs/sobre3.jpeg';
import sobre4 from '../components/imgs/sobre4.jpeg';
import sobre5 from '../components/imgs/sobre5.jpeg';


const Sobre = () => (
    <div class={`container w-100 ${styles.customContainer}`}>
        
        <h1>SOBRE</h1>
        <p className={styles.text}>Da nossa casa para a sua, com afeto 🧡</p>
        <p className={styles.text1}>Sejam todos muito bem-vindos e muito bem-vindas à nossa Casa!
Muito prazer! Nós somos Luana e Cristina.
Aqui nos apresentamos e contamos um pouquinho do que nos levou a abrir a Casa Angelo!</p><br/>

        <img src={sobre1} className={styles.sobreImg}/>
        <img src={sobre2} className={styles.sobreImg}/>
        <img src={sobre3} className={styles.sobreImg}/>
        <img src={sobre4} className={styles.sobreImg}/>
        <img src={sobre5} className={styles.sobreImg}/>

        <p className={styles.sobrep}><br/>
Velas aromáticas artesanais e livres de parafina🕯️ <br/>
RJ, Zona Oeste📍 <br/>
Entregas para todo Brasil.</p>
    </div>
)

export default Sobre;