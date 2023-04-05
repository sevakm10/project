import './style.scss'
import messi from '../../../assets/images/messi.jpg';
import travel from '../../../assets/images/travel.jpg';
import music from '../../../assets/images/music.jpg';
import { useState, useEffect, useRef } from 'react';

function Interests() {
    const [clas1, setClas1] = useState('');
    const [clas2, setClas2] = useState('');
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    useEffect(() => {
        
        function handleScroll() {
            
            const { top } = myRef1.current.getBoundingClientRect();
            if (top < 700) {
                setClas1('interests-h2')

            }

        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        function handleScroll() {
            const { top } = myRef2.current.getBoundingClientRect();
            if (top < 600) {
                setClas2('pictures')

            } 
            


        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{backgroundColor:'snow'}}>
            <div className='interests' id='interests' ref={myRef1}>
            <h2 className={'interests-h2'} style={{ animationName: clas1 }}>
                INTERESTS
            </h2>
            <div className='interests-part2' ref={myRef2}>
                <div className='pictures' style={{animationName: clas2  }}>
                    <div className="style-black" style={{ backgroundImage: `url(${messi})`}}></div>
                    <h3 className="pictures-h3">Football</h3>
                    <p className="pictures-p">I have been a passionate football fan since childhood. My favorite team is Barcelona, ​​my favorite player is Ronaldinho.</p>
                </div>
                <div className='pictures' style={{animationName: clas2  }}>
                    <div className="style-black" style={{ backgroundImage: `url(${travel})`}}></div>
                    <h3 className="pictures-h3">Travel</h3>
                    <p className="pictures-p">This is a new hobby that I discovered in recent years. I prefer both domestic and international tourism.
                    </p>
                </div>
                <div className='pictures' style={{animationName: clas2  }}>
                    <div className="style-black" style={{ backgroundImage: `url(${music})`}}></div>
                    <h3 className="pictures-h3">Music</h3>
                    <p className="pictures-p">Probably there is not a single person in the world who does not like to listen to music. Therefore, I am no exception. And I listen to everything, the genre depends on the mood.
                    </p>
                </div>

            </div>

        </div>
        </div>
        
    )
}

export default Interests;