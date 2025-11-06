import React from 'react';

import './start.css'

export default function Start(){
    return(
        <>
            <div className="container">

                <video autoPlay loop muted playsInline className="wrapper-video">
                    <source className='video' src="../../public/IMG_5195.MP4" type="video/mp4" />
                </video>

                <div className='card-container-grid'>
                    
                    <div className='title-container'>
                        <div className='title-1'>
                            <h3>КВЕСТ ПЕРФОМАНС</h3>
                        </div>
                        
                        <div className='title-2'>
                            <h1>ПИЛА</h1>
                        </div>
                        
                        <div className='title-3'>
                            <h2>Возрастные ограничения: 14+</h2>
                        </div>
                    </div>

                    <div className='image-container'>
                        <div className='border-image'>
                            <div className='img-1'></div>
                        </div>
                        <div className='border-image'>
                            <div className='img-2'></div>
                        </div>
                        <div className='border-image'>
                            <div className='img-3'></div>
                        </div>
                        <div className='border-image'>
                            <div className='img-4'></div>
                        </div>
                        <div className='border-image'>
                            <div className='img-5'></div>
                        </div>
                        <button className='image-button'>Забронировать</button>
                    </div>

                </div>

            </div>
        </>
    )
}