import './style.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef} from 'react';

function Hexagons(props){
    let item = props.item
    const [clas1, setClas1] = useState('none');
    const [clas2, setClas2] = useState('none');
    const myRef = useRef(null);


    useEffect(() => {
        function handleScroll() {
          const { top } = myRef.current.getBoundingClientRect();
          if( top < 500){
            setClas1('')
            setClas2('')
          }
        //   else{
        //     setClas1('none')
        //     setClas2('none')
        //   }
          
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <div className='hexagons-div' ref={myRef}>
            <div className="hexagon" style={{animationDelay: item.anim_delay, display: clas1}}><div className="hexagon-picture"><FontAwesomeIcon icon={item.picture}></FontAwesomeIcon></div></div>
            <h2 className='hexagon-h2' style={{animationDelay: item.anim_delay,display: clas2}}>{item.text_1}</h2>
            <p className="hexagon-p" style={{animationDelay: item.anim_delay,display:clas2}}>{item.text_2}</p>
        </div>
        
    )
}

export default Hexagons;