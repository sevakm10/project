import './style.scss';
import React from 'react';
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';




function Navigation() {
    const myRef = useRef(null);
    const [menuAnim, setMenuAnim] = useState('none')



    return (
        <div ref={myRef} className='sticky-nav' >
            <div className={menuAnim}>
                <ul className='menu' >
                    <button className='menu-btn-x' onClick={()=>{
                        setMenuAnim('none')
                    }}>X</button>
                    
                    <li className='nav-li'><Link onClick={()=>{
                        setMenuAnim('none')
                    }}
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000} >ABOUT</Link>
                    </li>
                    <li className='nav-li'><Link onClick={()=>{
                        setMenuAnim('none')
                    }}
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}>PROJECTS</Link>
                    </li>
                    <li className='nav-li'><Link onClick={()=>{
                        setMenuAnim('none')
                    }}
                        activeClass="active"
                        to="interests"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}>INTERESTS</Link>
                    </li>
                    <li className='nav-li'><Link onClick={()=>{
                        setMenuAnim('none')
                    }}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}>CONTACT</Link>
                    </li>
                </ul>
            </div>
            <div className="navigation"  >
                <ul className='nav-ul'>
                    <li className='nav-li'><Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000} >ABOUT</Link>
                    </li>
                    <li className='nav-li'><Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}>PROJECTS</Link>
                    </li>
                    <li className='nav-li'><Link
                        activeClass="active"
                        to="interests"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}>INTERESTS</Link>
                    </li>
                    <li className='nav-li'><Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}>CONTACT</Link>
                    </li>
                </ul>
                <div className="ul-2">
                    <button className='ul-2-btn' onClick={() => {
                        setMenuAnim('menu-anim')
                    }}>&#8801;</button>
                </div>



            </div>
        </div>

    )
}

export default Navigation;