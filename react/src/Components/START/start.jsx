import React from 'react';

import './start.css'

export default function Start(){
    return(
        <>
            <div className="containerStart">
            <div className="contBox1">
                <div className='video-container'>
                    <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="auto"
                    poster="poster.jpg"
                    className="wrapper-video"
                    >
                        <source className='video' src="SAWPC.mp4" type="video/mp4" />
                    </video>
                </div>
                
            </div>
            </div>
            {/* <div className="container"> */}

                {/* <div className='card-container-grid'>
                    
                    <div className='title-container'>
                        
                        <div className='title-button'>
                            <a  href="https://api-mir-kvestov.ru/api/v3/quests/1350?city_id=1" target="_blank" rel="noopener noreferrer">
                                <button className='image-button'>Забронировать</button>
                            </a>
                        </div>
                        
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

                    </div>

                </div> */}

            {/* </div> */}
        </>
    )
}