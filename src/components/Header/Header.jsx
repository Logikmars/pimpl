import './Header.scss';
import media from '../../media';

export default () => {
    return (
        <div className='Header'>
            <div className='Header_wrapper container'>
                <div className='Header_left'>
                    <div className='Header_left_title'>
                        Pimpl
                    </div>
                    <div className='Header_left_nav'>
                        {
                            ['About', 'Video', 'Wall'].map((el) => (
                                <a href={`#${el}`} key={`header_link_${el}`}>{el}</a>
                            ))
                        }
                    </div>
                </div>
                <div className='Header_right'>
                    {
                        media.map((el) => {
                            if (el.notForHeader) return
                            return <a href={el.link} className='Header_right_link' key={`header_link_right_${el.img}`}>
                                <img src={`/img/${el.img}.svg`} alt="" />
                            </a>
                        })
                    }
                </div>
            </div>
        </div>
    )
}