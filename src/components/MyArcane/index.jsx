import './style.css';

import cardback from './../../assets/img/card-back.jpg';
import { useState } from 'react';
import DatePicker from 'react-date-picker';

export const MyArcane = () => {
    const [date, setDate] = useState(new Date());
    const [arcaneNum, setArcaneNum] = useState(0);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('Insira sua data de nascimento no campo acima, e vire a carta para descobrir seu arcano pessoal');

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

    function discoverPersonalArcane(birthdate) {
        getPersonalArcaneNum(birthdate);
        setTitle(`[ Arcano ${arcaneNum} ]`);
    }

    return (
        <section className="full-section myarcane-section">
            <div className="container">
                <DatePicker className="date-picker" onChange={setDate} value={date}/>
                <div className='tarot-card'>
                    <img className="tarot-card-img" onClick={()=>discoverPersonalArcane(date)} src={cardback} alt="A Tarot card" />
                    <div className='tarot-card-desc'>
                    <p className='tarot-card-desc-title'>{title}</p>
                        <p className='tarot-card-desc-p'>{desc}</p>

                    </div>
                </div>
            </div>
        </section>
    );
}