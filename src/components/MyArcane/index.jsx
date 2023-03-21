import './style.css';

import { useEffect, useState, useRef } from 'react';
import DatePicker from 'react-date-picker';
import {majorarcana} from '../../assets/data/majorarcana';

export const MyArcane = () => {
    const [date, setDate] = useState(new Date());
    const [arcaneNum, setArcaneNum] = useState();
    const [title, setTitle] = useState('Arcano Pessoal');
    const [desc, setDesc] = useState('Insira sua data de nascimento no campo acima, e vire a carta para descobrir seu arcano pessoal');

    const cardImageRef = useRef();

    useEffect(() => {        
        var cardFound = majorarcana.find(element => element.number === arcaneNum);
        
        if(cardFound === undefined) {
            setDesc('Insira sua data de nascimento no campo acima, e vire a carta para descobrir seu arcano pessoal');
        } else {
            setTitle(arcaneNum + " - " + cardFound.name);
            setDesc(cardFound.desc);

            cardImageRef.current.style.backgroundImage = `url(${cardFound.img})`;

        }            
    }, [arcaneNum]);

    function getPersonalArcaneNum(birthdate) {
        let count = 0;

        let birthDay = birthdate.getDate();
        let birthMonth = birthdate.getMonth() + 1;
        let birthYear = birthdate.getFullYear();

        String(birthDay).split('').forEach(num => {
            count += parseInt(num);
        });

        String(birthMonth).split('').forEach(num => {
            count += parseInt(num);
        });

        String(birthYear).split('').forEach(num => {
            count += parseInt(num);
        });

        if(count > 22) {
            let tempCount = 0;
            String(count).split('').forEach(num => {
                tempCount += parseInt(num);
            });
            count = tempCount;
        }
        console.log(count);
        setArcaneNum(count);
    }

    return (
        <section className="full-section myarcane-section">
            <div className="container">
                <DatePicker className="date-picker" onChange={setDate} value={date}/>
                <div className='tarot-card'>
                    <div ref={cardImageRef} className="tarot-card-img" onClick={()=>getPersonalArcaneNum(date)} alt="A Tarot card" />
                    <div className='tarot-card-desc'>
                        <p className='tarot-card-desc-title'>{title}</p>
                        <div className="tarot-card-desc-organizer">
                            <p className='tarot-card-desc-p'>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}