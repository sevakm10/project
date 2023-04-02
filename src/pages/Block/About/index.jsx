
import Hexagons from '../../../components/Hexagons';
import './style.scss';
import { faTachometer, faMobile, faLightbulb, faRocket } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import html_pic from '../../../assets/images/html.png';
import css_pic from '../../../assets/images/css.png';
import js_pic from '../../../assets/images/js.png';
import bt_pic from '../../../assets/images/bt.png';
import sass_pic from '../../../assets/images/sass.png';
import react_pic from '../../../assets/images/react.png';
import redux_pic from '../../../assets/images/redux.png';



function About() {
    // напиши код появления элемента когда он в поле видимости в react
    const [clas1, setClas1] = useState('');
    const [clas2, setClas2] = useState('');
    const [clas3, setClas3] = useState('');
    const [clas2_opacity, setClas2_opacity] = useState('0');
   

    const myRef = useRef(null);
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);
    
  
      useEffect(() => {
        function handleScroll() {
          const { top } = myRef.current.getBoundingClientRect();
          if( top < 500){
            setClas1('about-h2')
            
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      useEffect(() => {
        function handleScroll() {
          const { top } = myRef1.current.getBoundingClientRect();
          
          if( top < 450){
            setClas2('skill-anim')
            setClas2_opacity('1')
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

    const [obj, setObj] = useState([
        {
            key: 1,
            picture: faTachometer,
            text_1: 'Fast',
            text_2: 'Fast load times and lag free interaction, my highest priority.',
            anim_delay: '0.4s',
        },
        {
            key: 2,
            picture: faMobile,
            text_1: 'Intuitive',
            text_2: 'Strong preference for easy to use, intuitive UX/UI.',
            anim_delay: '0.8s',
        },
        {
            key: 3,
            picture: faLightbulb,
            text_1: 'Responsive',
            text_2: 'My layouts will work on any device, big or small.',
            anim_delay: '1s',
        },
        {
            key: 4,
            picture: faRocket,
            text_1: 'Dynamic',
            text_2: "Websites don't have to be static, I love making pages come to life.",
            anim_delay: '1.2s',
        }
    ])
    return (
      <div style={{backgroundColor:'snow'}}>
        <div className='about' id='about' ref={myRef}>
            <div className="about-part1"  style={{paddingTop:clas3}}>
                <h2 className="about-h2" style={{animationName:clas1}}>ABOUT</h2>
            </div>

            <div className="about-part2" >
                <div className='about-hexagons' >
                    {obj.map(item => <Hexagons key={item.id} item={item} />)}
                </div>
                <div  ref={myRef1}>
                    
                        <div className="skills"  >
                            <div className={`skill ${clas2}`} style={{ backgroundImage: `url(${html_pic})`,opacity: clas2_opacity }}></div>
                            <div className={`skill ${clas2}`} style={{ backgroundImage: `url(${js_pic})`,opacity: clas2_opacity }}></div>
                            <div className={`skill ${clas2}`} style={{ backgroundImage: `url(${css_pic})`,opacity: clas2_opacity }}></div>
                            <div className={`skill ${clas2}`} style={{ backgroundImage: `url(${bt_pic})`,opacity: clas2_opacity }}></div>
                        </div>
                        <div className="skills" >
                            <div className={`skill ${clas2}`} style={{ backgroundImage: `url(${sass_pic})`,opacity: clas2_opacity }}></div>
                            <div className={`skill ${clas2}`} style={{ backgroundImage: `url(${react_pic})`,opacity: clas2_opacity }}></div>
                            <div className={`skill ${clas2}`} style={{ backgroundImage: `url(${redux_pic})`,opacity: clas2_opacity }}></div>
                        </div>
                    

                </div>

            </div>


        </div>
      </div>
        
    )
}

export default About;

