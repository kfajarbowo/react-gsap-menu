import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import tokyo from '../image/tokyo.webp'
import kyoto from '../image/kyoto.webp'
import osaka from '../image/osaka.webp'
import shibuya from '../image/shibuya.webp'
import yokohama from '../image/yokohama.webp'
import fujiyoshida from '../image/fujiyoshida.webp'

const cities = [
    {name: 'Tokyo', image: tokyo},
    {name: 'Kyoto', image: kyoto},
    {name: 'Osaka', image: osaka},
    {name: 'Shibuya', image: shibuya},
    {name: 'Yokohama', image: yokohama},
    {name: 'Fujiyoshida', image: fujiyoshida}
]

function Menu({ state }) {
    //variabel untuk animation dom
    let menu = useRef(null)
    let revealMenu = useRef(null)
    let revealMenuBackground = useRef(null)
    let cityBackground = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let info = useRef(null)

    useEffect(() => {
        if (state.clicked === false) {
            //close our menu   
            gsap.to([revealMenu, revealMenuBackground], {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }
            });
            gsap.to(menu, {
                duratin: 1,
                css: { display: "none" }
            });
        } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
             gsap.to(menu, {
                duratin: 0,
                css: { display: "block" }
            });
            gsap.to([revealMenuBackground, revealMenu],{
                duration:0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(revealMenuBackground, revealMenu);
            fadeInUp(info);
            staggerText(line1,line2,line3)
        }
    }, [state]);

    const staggerReveal = (node1,node2)=>{
        gsap.from([node1,node2],{
            duration: .8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: "power3.inOut",
            stagger:{
                amount: 0.1
            }
        });
    }

    const staggerText = (node1,node2,node3)=>{
        gsap.from([node1,node2,node3],{
            duration: .8,
            y:100,
            delay: .1,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }
        });
    }
    
    const fadeInUp = (node)=>{
        gsap.from(node,{
            y: 60,
            duration: 1,
            delay: .2,
            opacity: 0,
            ease: 'power3.inOut'
        });
    }


    const handleCity = city => {
        gsap.to(cityBackground, {
            duration: 0,
            background: `url(${city}) center center`
        });
        gsap.to(cityBackground, {
            duration: 0.4,
            opacity: 1,
            ease: "power3.inOut"
        });
        gsap.from(cityBackground, {
            duration: 0.4,
            skewY: 2,
            transformOrigin: "right top"
        });
    }

    const handleCityReturn = () =>{
        gsap.to(cityBackground,{
            duration: 0.4,
            opacity: 0
        })
    }
    return (
        <div ref={el => (menu = el)} className='menu-navigate'>
            <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"></div>
            <div ref={el => (revealMenu = el)} className="menu-layer">
                <div ref={el =>(cityBackground = el)} className="menu-city-background">

                </div>
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li>
                                        <Link ref={el => (line1 = el)} to='/about'>About</Link>
                                    </li>
                                    <li>
                                        <Link ref={el => (line2 = el)} to='/solutions'>Solutions</Link>
                                    </li>
                                    <li>
                                        <Link ref={el => (line3 = el)} to='/contact-us'>Contact us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div ref={el => (info = el)} className="info">
                                <h3>Our Promise</h3>
                                <p>
                                Don't build your project in another company because noob & bad,
                                 build your project in our company because pro & good
                                </p>
                            </div>
                            <div className="locations">
                                Locations :
                                {cities.map(el =>(
                                    <span key={el.name} onMouseEnter={() => handleCity(el.image)} onMouseOut={handleCityReturn}>
                                        {el.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Menu;
