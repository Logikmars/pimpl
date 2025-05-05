import './Gallery.scss';
import GalleryItem from './GalleryItem/GalleryItem';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);


export default () => {

    // const galleryRef = useRef(null);

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.from(galleryRef.current, {
    //             y: 100,
    //             opacity: 0,
    //             duration: 1,
    //             ease: 'power3.out',
    //             scrollTrigger: {
    //                 trigger: galleryRef.current,
    //                 start: 'top 90%',
    //                 toggleActions: 'play none none none'
    //             }
    //         });
    //     }, galleryRef);

    //     return () => ctx.revert(); // clean up
    // }, []);
    
    const firstLine = [
        {
            img: '/img/gallery/1.webp'
        },
        {
            img: '/img/gallery/2.webp'
        },
        {
            img: '/img/gallery/3.webp'
        },
        {
            img: '/img/gallery/4.webp'
        }
    ]

    const secondLine = [
        {
            img: '/img/gallery/5.webp'
        },
        {
            img: '/img/gallery/6.webp'
        },
        {
            img: '/img/gallery/7.webp'
        }
    ]

    const thirdLine = [
        {
            img: '/img/gallery/8.webp'
        },
        {
            img: '/img/gallery/9.webp'
        },
        {
            img: '/img/gallery/10.webp'
        },
        {
            img: '/img/gallery/11.webp'
        }
    ]
    
    return (
    <div className='Gallery'>
        <div className='Gallery_video' id='Video'>
            <img src="/img/galleryVideo.png" alt="" />
        </div>
        <div className='Gallery_wrapper container'>
            <div className='Gallery_items' id='Wall'>
                <div className='Gallery_items_left'>
                    {
                        firstLine.map((el, index) => (
                            <GalleryItem img={el.img} key={`GalleryItemFirst_${index}`} />
                        ))
                    }
                </div>
                <div className='Gallery_items_center'>
                    {
                        secondLine.map((el, index) => (
                            <GalleryItem img={el.img} key={`GalleryItemSecond_${index}`} />
                        ))
                    }
                </div>
                <div className='Gallery_items_right'>
                    {
                        thirdLine.map((el, index) => (
                            <GalleryItem img={el.img} key={`GalleryItemthird_${index}`} />
                        ))
                    }
                </div>
            </div>
            <div className='Gallery_text'>
                Pimpl is not just a duck — it’s a statement. Calm above the water, a storm of ideas below.
            </div>
        </div>
    </div>
)}