import React, { useEffect } from 'react';
import ContactButton from '../ContactButton/Index'
import gsap from 'gsap';
import AboutMe from '../AboutMe/Index';
import { Plus } from 'react-feather';

const Heading = () => {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.id = 'cursor';
        document.body.appendChild(cursor);

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: 'power2.out',
            });
        };

        // Event handlers for hover effects
        const handleMouseEnter = () => {
            cursor.innerHTML = 'Pixel Perfect';
            cursor.style.color = 'white';
            gsap.to(cursor, {
                scale: 3,
                backgroundColor: '#7573706d',
            });
        };

        const handleMouseLeave = () => {
            console.log('Mouse left h1'); // Debugging
            cursor.innerHTML = '';
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: '#7d7b7b',
            });
        };

        document.addEventListener('mousemove', moveCursor);

        const h1 = document.querySelector('h1');
        if (h1) {
            h1.addEventListener('mouseenter', handleMouseEnter);
            h1.addEventListener('mouseleave', handleMouseLeave);
        } else {
            console.error('h1 element not found'); // Debugging
        }

        // Cleanup on component unmount
        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.body.removeChild(cursor);
        };
    }, []);
    return (
        <div className='outer-container'>
            <div className="outer-container-2">
                <div className="main-container" id="main-container">
                    <h1>
                        Welcome
                        <br />
                        Shubham's
                        <br />
                        Portfolio
                    </h1>
                    <ContactButton content="Contact Me"
                        className="contact-me-button" style={{ position: 'absolute', right: '10vw', bottom: '25vh' }}
                        onClick={() => console.log('Contact button clicked!')} />
                </div>
            </div>
            <AboutMe />
        </div>
    )
}

export default Heading