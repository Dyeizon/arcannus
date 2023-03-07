import './style.css';

export const ServiceItem = ({background, href, title}) => {
    return (
        <a className="service" href={href}>
            <div className="service-icon" style={{backgroundImage: `url(${background})`}}></div>

            <div className="service-desc">
                <h4>{title}</h4>
            </div> 
        </a>
    );
}