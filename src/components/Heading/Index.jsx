import React, { useEffect } from 'react';
import './style.css';
import ContactButton from '../ContactButton/Index';
import gsap from 'gsap';

const Heading = () => {
    useEffect(() => {

        // Cursor Effect
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

        const handleMouseEnter = () => {
            cursor.innerHTML = 'Pixel Perfect';
            cursor.style.color = 'white';
            gsap.to(cursor, {
                scale: 3,
                backgroundColor: '#7573706d',
            });
        };

        const handleMouseLeave = () => {
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
        }

        // Cleanup
        return () => {
            // clearInterval(intervalId);
            document.removeEventListener('mousemove', moveCursor);
            document.body.removeChild(cursor);
        };
    }, []);

    return (
        <div className="main-container" id="main-container">
            <h1>
                Welcome
                <br />
                Shubham's
                <br />
                Portfolio
            </h1>
            <ContactButton />
        </div>
    );
};

export default Heading;
