import './HeroSection.scss';
export default () => {return (
    <div className='HeroSection container'>
        <div className='HeroSection_decor'>
            <div className='HeroSection_decor_container free_img'>
                {/* <div className='HeroSection_decor_black_Top HeroSection_decor_black free_img'></div> */}
                <div className='HeroSection_decor_img free_img'>
                    <img src="/img/heroImg.webp" alt="" />
                </div>
                {/* <div className='HeroSection_decor_black_Bottom HeroSection_decor_black free_img'></div> */}
            </div>
        </div>
        <div className='HeroSection_btn'>
            <div className='HeroSection_btn_el'>
                <img src="/img/shoto.svg" alt="" />
                Buy now
            </div>
        </div>
    </div>
)}