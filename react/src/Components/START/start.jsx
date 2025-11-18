import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect} from "react";
gsap.registerPlugin(ScrollTrigger);
import React from 'react';
import './start.css'

export default function Start(){
    const containerStart = useRef(null)
    const title = useRef(null)
    const item2 = useRef(null)
    const item3 = useRef(null)
    const item4 = useRef(null)
    const item5 = useRef(null)
    const video = useRef(null)
    const contBox1 = useRef(null)


    useEffect(() => { 
        const mm = gsap.matchMedia();
            ////////////////////////
            //////////PC////////////
            ////////////////////////
        mm.add("(min-width: 1024px)", () => {
            const ctx = gsap.context(() => {

                const start = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerStart.current,
                        start: "top top",
                        end: "+=4000 top",
                        scrub: true,
                        pin: true,
                        // markers: true
                    }
                });


                start
                .fromTo(title.current,{opacity:0,scale:0,  x:0,}, {opacity:1,scale:1, x:0 ,color:'grey'})
                .fromTo(item2.current,{opacity:0, x:0, y:'20vh',},{x:0, y:'20vh', opacity:1, scale:6,duration:5,textShadow:'3px 3px 5px red'},'> 0.5')
                .fromTo(item3.current,{opacity:0, x:0, y:'40vh',},{x:0,y:'40vh',opacity:1, scale:6,duration:5,textShadow:'3px 3px 5px red'},)
                .fromTo(item4.current,{opacity:0, x:0, y:'60vh', scale:0.3},{x:0, y:'60vh',opacity:1, scale:6,duration:5,textShadow:'3px 3px 5px red',},)
                .fromTo(item5.current,{scale:15,rotationZ:'0deg', opacity:0, x:0, y:'40vh', },{opacity:1, scale:5,rotationZ:'40deg',duration:5, textShadow:'3px 3px 3px white'},'> 0.5')
                    .to([ item2.current, item3.current, item4.current], {textShadow:'4px 4px 6px white', color:'red'})
                    .to({},{duration:4})
                    .to([item4.current,item3.current,title.current, item2.current], {opacity:0, duration:5},)
                    .to({},{duration:5})
                    .to(item5.current,{opacity:0, scale:10,rotationZ:'0deg', textShadow:'1px 1px 8px white',duration:5,})
                    .to(video.current,{opacity:1,duration:20})

                    .to(contBox1.current,{border:'none'},'<')
                    .to({},{})

            });

        return () => ctx.revert();
        });

                ///////////////////////////
                ////////MOBILE/////////////
                ///////////////////////////
        mm.add("(max-width: 767px)", () => {
            const ctx = gsap.context(() => {

                    const start = gsap.timeline({
                        scrollTrigger: {
                            trigger: containerStart.current,
                            start: "top top",
                            end: "+=4000 top",
                            scrub: true,
                            pin: true,
                            // markers: true
                        }
                    });


                start
                .fromTo(title.current,{opacity:0,scale:0,  x:0,}, {opacity:1,scale:1, x:0 ,color:'grey'})
                .fromTo(item2.current,{opacity:0, x:0, y:'20vh',},{x:0, y:'20vh', opacity:1, scale:'1.4% 1.4%',duration:5,textShadow:'3px 3px 5px red'},'> 0.5')
                .fromTo(item3.current,{opacity:0, x:0, y:'40vh',},{x:0,y:'40vh',opacity:1, scale:'1.4% 1.4%',duration:5,textShadow:'3px 3px 5px red'},)
                .fromTo(item4.current,{opacity:0, x:0, y:'60vh', scale:0.3},{x:0, y:'60vh',opacity:1, scale:'1.4% 1.4%',duration:5,textShadow:'3px 3px 5px red',},)
                .fromTo(item5.current,{scale:0,rotationZ:'0deg', opacity:0, x:0, y:'40vh', },{opacity:1, scale:'2% 2%',rotationZ:'40deg',duration:5, textShadow:'3px 3px 3px white'},'> 0.5')
                    .to([ item2.current, item3.current, item4.current], {textShadow:'4px 4px 6px white', color:'red'})
                    .to({},{duration:4})
                    .to([item4.current,item3.current,title.current, item2.current], {opacity:0, duration:5},)
                    .to(item5.current,{opacity:0, scale:0,rotationZ:'0deg', textShadow:'1px 1px 8px white',})
                    .to(contBox1.current,{border:'none',},'<')

                    .to(video.current,{opacity:1},)
                    .to({},{duration:10})

                        
                    });
                
            return () => ctx.revert();
        });

        return () => mm.revert(); // очищает группы медиазапросов
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

                    <div ref={title} className='theStartTitle'><h1>ВАС ЖДЕТ</h1></div>
                    
                    <div ref={item2} className='okak'><h3>ПОЛНОЕ</h3></div>
                    
                    <div ref={item3} className='okak'><h3>ПОГРУЖЕНИЕ</h3></div>
                    
                    <div ref={item4} className='okak'><h3>В</h3></div>

                    <div ref={item5} className='okak'><h3>ИСТОРИЮ</h3></div>
                    
                </div>
        </div>
    </>
    )
}