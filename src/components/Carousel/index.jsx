import 'bootstrap';

import { CarouselItem } from './CarouselItem';

import carousel1 from './../../assets/img/carousel-1.png';
import carousel2 from './../../assets/img/carousel-2.jpg';
import carousel3 from './../../assets/img/carousel-3.png';

export const Carousel = () => {
    return (
<section className='carousel-section'>
  <div id="carouselControllers" className="carousel slide" data-bs-ride="true">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselControllers" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselControllers" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselControllers" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <CarouselItem src={carousel1} href="#" posY='center' title="Receba aconselhamento" subtitle="Realize uma consulta com um dos nossos tarólogos" buttonText="Quero uma consulta" active/>
      <CarouselItem src={carousel2} href="#" posY='bottom' title="Estude Tarologia"  subtitle="Mais de 10 métodos de tiragem exclusivos para você" buttonText="Quero aprender"/>
      <CarouselItem src={carousel3} href="#" posY='top' title="Visite a lojinha"  subtitle="Diversos itens para sua ascenção no Tarot" buttonText="Quero comprar"/>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselControllers" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Próximo</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselControllers" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
  </div>
</section>
    );
}