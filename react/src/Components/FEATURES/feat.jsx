import React from 'react';
import './feat.css'

export default function Feat(){
    return(
        <>
            <div className='container'>

                <div className='features'>
                    <h1>Особенности</h1>
                </div>

                <div className='features-container'>

                    <div className='left-info'>
                        <h2 className='left-title-card'>Вас ждет:</h2>
                        <div className='left-card1'>– более 5 локаций;</div>
                        <div className='left-card2'>– уникальные головоломки и механизмы;</div>
                        <div className='left-card3'>– игра актеров;</div>
                        <div className='left-card4'>– иммерсивное шоу-представление в процессе игры;</div>
                        <div className='left-card5'>– до 10 участников( стоимость игры за одного игрока от 4500 - 5500 рублей, за каждого дополнительного игрока от 500 - 1000 рублей) ;</div>
                        <div className='left-card6'>– на сеансы необходима предоплата 2000 рублей;</div>
                        <div className='left-card7'>– сопровождение юных участников квеста аниматором (обязательно для детей до 14 лет) - 1500 рублей.</div>
                        <div className='left-card8'>Возрастные ограничения: 14+</div>
                    </div>

                    <div className='right-info'>
                        <h2 className='right-title-card'>Режим:</h2>
                        <div className='right-card1'>12+: без контакта;</div>
                        <div className='right-card2'>16+: актер может взять за руку, дотронуться до плеча, отвести в другую комнату;</div>
                        <div className='right-card3'>18+: безболезненный сюжетный контакт в рамках сценария, исключающий риск причинения вреда здоровью.</div>
                    </div>
                    

                </div>

            </div>
        </>
    )
}