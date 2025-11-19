import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import React from "react";
import "./styles.css";
import LogoSvg from "../../../public/logo.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Mobile() {
    const contLogoRef = useRef(null);
    const logoRef = useRef(null);
    const buttonRef = useRef(null);

    const containerRef = useRef(null);

    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    const box4Ref = useRef(null);
    const box5Ref = useRef(null);
    const box6Ref = useRef(null);
    const box7Ref = useRef(null);

    const box4p1Ref = useRef(null);
    const box4p2Ref = useRef(null);
    const box4h1Ref = useRef(null);


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        
            const el = containerRef.current;
            const logoTl = gsap.timeline({ paused: true });
            
            const tl = gsap.timeline({ paused: true });

            const loopAnim = gsap.timeline({
                repeat: -1,
                ease: "power1.inOut",
                paused: true
            });

            gsap
            .fromTo(contLogoRef.current,{ opacity: 0,y: "45vh", x: "35vw", },{ opacity: 1, duration: 1,scale: 2, });


            logoTl
                .to(contLogoRef.current,{duration:2 })
                .to(contLogoRef.current,{y: 0,x: 0,scale: 0.6,duration: 0.8,ease: "power1.inOut"});


            loopAnim
            .fromTo(logoRef.current,{ scale: 1.2, opacity: 1 },{ scale: 1, duration: 1.5 })
                .to(logoRef.current, { scale: 1.2, duration: 1.5 })
                .to(logoRef.current, { scale: 1, duration: 1.5 })
                .to(logoRef.current, { scale: 1.2, duration: 1.5 })
                .to(logoRef.current, { scale: 0, opacity: 0, duration: 1.5 })

            .fromTo(buttonRef.current,{ opacity: 0, scale: 0.5 },{ opacity: 1, scale: 1.2, duration: 1.5 })
                .to(buttonRef.current, { scale: 1, duration: 1.5 })
                .to(buttonRef.current, { scale: 1.2, duration: 1.5 })
                .to(buttonRef.current, { scale: 0, opacity: 0, duration: 1.5 })

            .fromTo(logoRef.current,{ opacity: 0, scale: 0 },{ opacity: 1, scale: 1.2, duration: 1.5 });


            tl
            .fromTo([box7Ref.current,box6Ref.current,box5Ref.current,box4Ref.current,box3Ref.current,box2Ref.current,box1Ref.current],{ opacity: 0, scale: 0.5 },{ opacity: 1, scale: 1, stagger: 0.1 })
                .to([box7Ref.current,,box6Ref.current,box5Ref.current,box4Ref.current,box3Ref.current,box2Ref.current,box1Ref.current],{ y: '100%',opacity: 0, scale: 0, stagger: 0.1, },)

            // .to(box4Ref.current, {scale: 0, opacity:0, })
                .to([box7Ref.current,box1Ref.current,box6Ref.current,box2Ref.current,box5Ref.current,box3Ref.current],{ display: "none" })
            .to([box4h1Ref.current, box4p1Ref.current, box4p2Ref.current],{display:'flex'},'<')
                .to(box4Ref.current, {y:0 ,scale: 1,opacity: 1,borderRadius: "50px",height: "100%"},)

            .fromTo(box4p1Ref.current,{ opacity: 0, y: "-300%" },{ opacity: 1, y: 0 })
            .fromTo(box4p2Ref.current,{ opacity: 0, y: "300%" },{ opacity: 1, y: 0 })
            .fromTo(box4h1Ref.current,{ opacity: 0, scale: 0.7 },{ opacity: 1, scale: 2 });

            const scrl = gsap.timeline({
                repeat: -1,
                ease: "power1.inOut",
                paused: true
            });


            tl.eventCallback("onComplete", () => {
                scrl.play();
            });

            scrl
            .to(box4Ref.current, {y:-20, filter:'blur(2px)'},)
            .to(box4Ref.current, {y:0, filter:'blur(0px)'},)
            .to(box4Ref.current, {y:-20, filter:'blur(2px)'},)
            .to(box4Ref.current, {y:0, filter:'blur(0px)'},)
            .to({},{duration:5})

            
            
            

            ScrollTrigger.create({
                trigger: el,
                start: "top center",
                once: true,
                onEnter: () => {
                    setTimeout(() => {
                        logoTl.play();
                        loopAnim.play();
                    }, 150);
                }
            });

            logoTl.eventCallback("onComplete", () => {
                tl.play();
            });

        }, containerRef); 

    return () => ctx.revert(); 
  }, []);

    return (
        <div className="o-wrapper">

            <header className="header">
                <div ref={contLogoRef} className="contLogo">
                    <div className="boxLogo">
                        <img src={LogoSvg} ref={logoRef} className="logo" />
                    </div>

                    <a
                        href="https://api-mir-kvestov.ru/api/v3/quests/1350?city_id=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        ref={buttonRef}
                        className="but"
                    >
                        Забронировать
                    </a>
                </div>
            </header>

            <div ref={containerRef} className="container">
                <div className="cont-quest">

                    <div className="box-group-1">
                        <div ref={box1Ref} className="box1 box"></div>
                        <div ref={box2Ref} className="box2 box"></div>
                    </div>

                    <div ref={box3Ref} className="box3 box"></div>

                    <div ref={box4Ref} className="box4 box">
                        <div className="contBox4p">
                            <p ref={box4p1Ref} className="box4p1">КВЕСТ</p>
                            <p ref={box4p2Ref} className="box4p2">ПЕРФОМАНС</p>
                        </div>
                        <h1 ref={box4h1Ref} className="box4h1">ПИЛА</h1>
                    </div>

                    <div ref={box5Ref} className="box5 box"></div>

                    <div className="box-group-2">
                        <div ref={box6Ref} className="box6 box"></div>
                        <div ref={box7Ref} className="box7 box"></div>
                    </div>

                </div>
            </div>

        </div>
    );
}
