import './HeroSection.scss';
export default () => {
    return (
        <div className='HeroSection container'>
            <div className='HeroSection_decor'>
                <div className='HeroSection_decor_imgWrapper'>
                    <img src="/img/heroImg.webp" alt="" />
                </div>
            </div>
            <div className='HeroSection_btn'>
                <div className='HeroSection_btn_el'>
                    <img src="/img/shoto.svg" alt="" />
                    Buy now
                </div>
            </div>
        </div>
    )
}