import './style.scss';
import { useState, useEffect, useRef } from 'react';
import p1 from '../../../assets/images/p1.png';
import m1 from '../../../assets/images/m1.png';
import m2 from '../../../assets/images/m2.png';
import m3 from '../../../assets/images/m3.png';





function Project() {
    const [stp, setStp] = useState('anim-p');
    const [st1, setSt1] = useState('');
    const [st11, setSt11] = useState('');
    const [st2, setSt2] = useState('');
    const [st22, setSt22] = useState('');
    const [st3, setSt3] = useState('');
    const [st33, setSt33] = useState('');
    const myRef = useRef(null);
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const { top } = myRef.current.getBoundingClientRect();
      if( top < 500){
        setStp('project-h2')
      }
    //   else{
    //     setStp('')
    //   }
      
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    function handleScroll() {
      const { top } = myRef1.current.getBoundingClientRect();
      
      if( top < 500){
        setSt1('anim');
        setSt11('anim-p')
      }
    //   else{
    //     setSt1('')
    //     setSt11('')
    //   }
      
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    function handleScroll() {
      const { top } = myRef2.current.getBoundingClientRect();
      
      if( top < 500){
        setSt2('anim')
        setSt22('anim-p')
      }
    //   else{
    //     setSt2('')
    //     setSt22('')
    //   }
      
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    function handleScroll() {
      const { top } = myRef3.current.getBoundingClientRect();
      
      if( top < 500){
        setSt3('anim')
        setSt33('anim-p')
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

    return (
      <div style={{backgroundColor:'rgb(240, 240, 240)'}}>
        <div className="projects" id='projects' ref={myRef}>
            <h2 className="projects-h2" style={{animationName: stp}}>PROJECTS</h2>


            <div className='project' ref={myRef1} >
                <div className={`page-1 ${st1}`} style={{ backgroundImage: `url(${m1})`}}></div>
                <div className={`project-text ${st11}`} >
                    <h2 className='project-text-h2'>Interior Design</h2>
                    <p className="project-text-p">The site helps to resolve issues in terms of arranging an apartment and private houses from the best interiors.</p>
                </div>
            </div>

            <div className='project'ref={myRef2} >
                <div className={`page-1 ${st2}`} style={{ backgroundImage: `url(${m2})`}}></div>
                <div className={`project-text ${st22}`} >
                    <h2 className='project-text-h2'>Hotel</h2>
                    <p className="project-text-p">The project is aimed at travelers. The site resembles the world famous booking.com</p>
                </div>
            </div>
            <div className='project' ref={myRef3}>
                <div className={`page-1 ${st3}`} style={{ backgroundImage: `url(${m3})`}}></div>
                <div className={`project-text ${st33}`} >
                    <h2 className='project-text-h2'>Pizza Restaurant</h2>
                    <p className="project-text-p">On this site you can quickly, easily and in one click order a fast pizza delivery!</p>
                </div>
            </div>


        </div>
      </div>
        
    )
}

export default Project;