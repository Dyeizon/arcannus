import './../style.css';
import { Context } from "./../../../contexts/MenuContext";
import { useContext } from 'react';

export const MenuIcon = () => {
    const {closeMenu, setCloseMenu} = useContext(Context);

    return (
        <button className='menu-icon-button' onClick={() => setCloseMenu(!closeMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" stroke="#7a36be">
                <line fill="black" x1="3" x2="21" y1="6" y2="6" />
                <line fill="black" x1="3" x2="21" y1="12" y2="12" />
                <line fill="black" x1="3" x2="21" y1="18" y2="18" />
            </svg>
        </button>
    );
}
