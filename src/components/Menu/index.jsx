import './style.css';
import { Context } from "./../../contexts/MenuContext";
import { useContext } from 'react';

export const Menu = () => {
    const {closeMenu, setCloseMenu} = useContext(Context);

    return (
        <aside className={`menu ${closeMenu ? 'hide-menu': ''}`}>
            <div className="close-area">
                <button className={`close-button`} onClick={() => setCloseMenu(!closeMenu)}/>
            </div>
            <div className="list">
                <ul>
                    <ul>
                        <a href=""><li>Agendar consulta</li></a>
                        <a href=""><li>Aprendizagem</li></a>
                        <a href=""><li>Lojinha</li></a>
                    </ul>
                    <hr/>
                    <ul>
                        <a href=""><li>Meu arcano</li></a>
                        <a href=""><li>Carta do dia</li></a>
                        <a href=""><li>Leituras</li></a>
                    </ul>
                </ul>
            </div>
        </aside>
    );
}