import './style.scss';
import React from 'react';
import { Link } from 'react-scroll';

function Header() {
    
    return (
        <div className="header" id='header'>
            <div className="header-h2-all">
                <h2 className='header-h2'>Hello, I'am <span className="header-p"> Sevak Manverlyan.</span></h2>
                <h2 className='header-h2'>I'm a web-developer.</h2>
                {/* <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1000}>
                        <button className='header-btn' >
                            <p>View my work</p>  
                            <p className="pp">&#10148;</p>
                        </button>
                </Link> */}
            </div>

            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    )
}

export default Header