import {MenuIconSVG} from './MenuIconSVG.jsx';
import './../style.css';

export const MenuIcon = () => {
    return (
        <button className='menu-icon-button' onClick={e => console.log(e)}>
            <MenuIconSVG/>
        </button>
    );
}
