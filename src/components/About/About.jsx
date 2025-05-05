import './About.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const textRef = useRef(null);

    useEffect(() => {
        const el = textRef.current;
        const fullText = el.innerHTML;
        el.innerHTML = '';

        gsap.to({}, {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress; // значение от 0 до 1
                    const charCount = Math.floor(fullText.length * progress);
                    el.innerHTML = fullText.slice(0, charCount);
                },
            },
        });
    }, []);

    return (
        <div className='About container' id='About'>
            <div ref={textRef}>
                <span className='About_orange_1'>Pimpl</span> emerged as a mascot at the very beginning, created by an <span className='About_orange'>exceptionally </span>gifted artist.
            </div>
        </div>
    );
};
