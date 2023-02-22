import './style.css';

export const CarouselItem = ({src, posY}) => {
    return (
        <div className="carousel-item" style={{backgroundImage:`url(${src})`, backgroundPositionY:`${posY}`}}>
            <div className='carousel-item-content'>
                
            </div>
        </div>
    );
}