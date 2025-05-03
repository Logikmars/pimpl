import './Header.scss';
export default () => {return (
    <div className='Header'>
        <div className='Header_wrapper container'>
            <div className='Header_left'>
                <div className='Header_left_title'>
                    Pimpl
                </div>
                <div className='Header_left_nav'>
                    {
                        ['About', 'Video', 'Wall'].map((el) => (
                            <a href="#">{el}</a>
                        ))
                    }
                </div>
            </div>
            <div className='Header_right'>
                {
                    ['x', 'tg', 'dex'].map((el) => (
                        <a href="#" className='Header_right_link'>
                            <img src={`/img/${el}.svg`} alt="" />
                        </a>
                    ))
                }
            </div>
        </div>
    </div>
)}