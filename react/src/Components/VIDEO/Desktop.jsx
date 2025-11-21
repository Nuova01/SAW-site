import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect} from "react";
gsap.registerPlugin(ScrollTrigger);
import React from 'react';
import './style.css'

export default function Desktop(){
    const containerStart = useRef(null)
    const title = useRef(null)
    const item2 = useRef(null)
    const item3 = useRef(null)
    const item4 = useRef(null)
    const item5 = useRef(null)
    const video = useRef(null)
    const contBox1 = useRef(null)


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const start = gsap.timeline({paused:true});


            start
            .fromTo(item2.current,{opacity:0, x:0, y:'20vh',},{x:0, y:'20vh', opacity:1, scale:5,duration:1,textShadow:'3px 3px 5px red'})
            .fromTo(item3.current,{opacity:0, x:0, y:'40vh',},{x:0,y:'40vh',opacity:1, scale:5,duration:1,textShadow:'3px 3px 5px red'},)
            .fromTo(item4.current,{opacity:0, x:0, y:'60vh', scale:0.3},{x:0, y:'60vh',opacity:1, scale:5,duration:1,textShadow:'3px 3px 5px red',},)
            .fromTo(item5.current,{scale:12,rotationZ:'0deg', opacity:0, x:0, y:'40vh', },{opacity:1, scale:5,rotationZ:'40deg', textShadow:'3px 3px 3px white'})
                .to([ item2.current, item3.current, item4.current], {textShadow:'4px 4px 6px white', scale:4.5, color:'black'},)
                .to([ item2.current, item3.current, item4.current],{scale:5.2})
                .to([ item2.current, item3.current, item4.current],{scale:5})
                .to(item5.current,{ scale:7,rotationZ:'0deg', textShadow:'1px 1px 8px white',duration:1,})
                .to(contBox1.current,{border:'none'},'<')
                .to({},{})

    ScrollTrigger.create({
        trigger: containerStart.current,
        start: "top center",
        once: true,
        onEnter: () => {
          start.play();
        },
      });

        }, containerStart); 

        return () => ctx.revert(); 
    }, []);


    return(
        
        <>
            <div ref={containerStart} className="containerStart">
                <div ref={contBox1}  className="contBox1">
                    <div  className='video-container'>
                        <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        preload="auto"
                        poster="poster.jpg"
                        className="wrapper-video"
                        ref={video}
                        >
                            <source className='video' src="SAWPC.mp4" type="video/mp4" />
                        </video>
                    </div>
                    
                    <div className="blurSlide"></div>

                    <div ref={item2} className='okak'><h3>ПОЛНОЕ</h3></div>
                    
                    <div ref={item3} className='okak'><h3>ПОГРУЖЕНИЕ</h3></div>
                    
                    <div ref={item4} className='okak'><h3>В</h3></div>

                    <div ref={item5} className='okak'><h3>ИСТОРИЮ</h3></div>
                    
                </div>
        </div>
    </>
    )
}