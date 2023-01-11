import React from "react";

import promocapim from './imgs/promo-capim.png';
import promolaranja from './imgs/promo-laranja.png';
import promoalecrim from './imgs/promo-alecrim.png';

import alecrim from './imgs/alecrim.jpeg';
import capim from './imgs/capim.jpeg';
import laranja from './imgs/laranja.jpeg';

import styles from '../css/Body.module.css';

const Body = () => {
  return (
    <div class={`container w-100 ${styles.customContainer}`}>
      <h1>Casa Angelo</h1>
      <p className={styles.text}>Da nossa casa para a sua, com afeto 🧡</p>

      <section id="carousel">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={promocapim} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={promolaranja} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={promoalecrim} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </section>

      <h6 className={styles.h6}>MAIS VENDIDOS</h6>

      <section id="cards">
      <div class="row justify-content-center g-5">
        <div class="col-12 col-sm-6 col-lg-4 mb-5 d-flex align-items-stretch">
          <div class={`card ${styles.card}`}>
          <img className={styles.cardImage} src={alecrim} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Lata 90g - Alecrim e Hortelã-pimenta</h5>
              <p class="card-text">Um aroma marcante, refrescante, com toque de menta, que remete à sensação de ar puro do campo.</p>
              <a href="#" class="btn btn-primary">BRL 35,00</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 mb-5 d-flex align-items-stretch">
          <div class={`card ${styles.card}`}>
          <img className={styles.cardImage} src={capim} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Lata 90g - Capim-limão</h5>
              <p class="card-text">Um cheirinho delicado, aconchegante e relaxante, como uma xícara de chá em uma tarde chuvosa.</p>
              <a href="#" class="btn btn-primary">BRL 35,00</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 mb-5 d-flex align-items-stretch">
          <div class={`card ${styles.card}`}>
          <img className={styles.cardImage} src={laranja} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Lata 90g - Tangerina e Laranja</h5>
              <p class="card-text">Um cheirinho cítrico, alegre, bem verão, que lembra uma tarde de férias na casa da vó.</p>
              <a href="#" class="btn btn-primary">BRL 35,00</a>
            </div>
          </div>
        </div>
        
      </div>
      </section>


      
       
      
    </div>
  );
};

export default Body;
