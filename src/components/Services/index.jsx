import { ServiceItem } from "./ServiceItem";

import service1 from './../../assets/img/service-1.jpg';
import service2 from './../../assets/img/service-2.jpg';
import service3 from './../../assets/img/service-3.jpg';

export const Services = () => {
    return (
        <section className="services-section">
            <div className="container">  
                <h1>Nossos serviços</h1>
                <div className="services">
                    <ServiceItem title="Meu arcano" background={service1} href="my-arcane"/>
                    <ServiceItem title="Carta do dia" background={service2} href="cotd"/>
                    <ServiceItem title="Leituras" background={service3} href="spreads"/>
                </div>
            </div>
        </section>
    );
}