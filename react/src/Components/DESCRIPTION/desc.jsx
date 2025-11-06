import React from 'react';
import './desc.css'

export default function Desc(){
    return(
        <>
            <div className='container'>

                <div className='desc-back-container'>
                    <div className="desc-back">
                        <div className='description'>
                            <h1>Описание</h1>
                        </div>
                    </div>
                </div>

                <div className='desc-container-grid'>

                    <div className='desc-left'>
                        <div className='slide-left'>
                            <h2>В городе творится хаос, на улицах появился новый маньяк конструктор, Пила</h2>
                        </div>
                    </div>

                    <div className='desc-right'>
                        <div className='slide-right'>
                            <h2>Люди в страхе</h2>
                        </div>
                    </div>

                    <div className='desc-left'>
                        <div className='slide-left'>
                            <h2>Полиция всеми силами пытается расследовать серию запутанных убийств</h2>
                        </div>
                    </div>

                    <div className='desc-right'>
                        <div className='slide-right'>
                            <h2>Капитан Бренда возглавила операцию по расследованию, но неожиданно пропадает детектив Тео ее напарник</h2>
                        </div>
                    </div>

                    <div className='desc-left'>
                        <div className='slide-left'>
                            <h2>Она пытается найти своего коллегу, но ее отстраняют от этого дела</h2>
                        </div>
                    </div>

                    <div className='desc-right'>
                        <div className='slide-right'>
                            <h2>В этот же день она получает загадочную посылку с адресом заброшенного бизнес центра</h2>
                        </div>
                    </div>

                </div> 

            </div>
        </>
    )
}