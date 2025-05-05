import { useState } from 'react';
import './GalleryItem.scss';
export default ({ img }) => {
    
    const [opengallery, setopengallery] = useState(false);
    const [scale, setscale] = useState(1);

    const handleclickopengallery = () => {
        setopengallery(prev => !prev);
    }
    
    return (
        <>
            <div className='GalleryItem' onClick={handleclickopengallery}>
                <img src={img} alt="" />
            </div>
            <div className={`GalleryItem_bigImg ${opengallery && 'GalleryItem_bigImg_opened'}`}>
                <div className='GalleryItem_bigImg_top'>
                    <div className='GalleryItem_bigImg_top_close' onClick={handleclickopengallery}>
                        <span className='GalleryItem_bigImg_top_close_span_1 GalleryItem_bigImg_top_close_span'></span>
                        <span className='GalleryItem_bigImg_top_close_span_2 GalleryItem_bigImg_top_close_span'></span>
                    </div>
                    <div className='GalleryItem_bigImg_top_download'>
                        download
                    </div>
                </div>
                <div className='GalleryItem_bigImg_middle'>
                    <img src={img} alt="" style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 300ms',
                    willChange: `transform`
                }} onClick={(e) => {
                    e.stopPropagation()
                }} />
                </div>
                <div className='GalleryItem_bigImg_bottom'>
                    <div className='GalleryItem_bigImg_bottom_inc' onClick={(e) => {
                        e.stopPropagation()
                        setscale(prev => Math.min(prev + .5, 2))
                    }}>
                        <img src="/img/plus.svg" alt="" />
                    </div>
                    <div className='GalleryItem_bigImg_bottom_dec' onClick={(e) => {
                        e.stopPropagation()
                        setscale(prev => Math.max(prev - .5, .5))
                    }}>
                        <img src="/img/minus.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
)}