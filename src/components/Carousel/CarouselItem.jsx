import './style.css';

export const CarouselItem = ({src, posY, active, title, subtitle, buttonText, href}) => {
    return (
        <div className={`carousel-item carousel-item-div ${active ? "active" : ""}`} style={{backgroundImage:`url(${src})`, backgroundPositionY:`${posY}`}}>
            <div className='carousel-item-organizer'>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <button><a href={href}>{buttonText}</a></button>
            </div>
        </div>
    );
}