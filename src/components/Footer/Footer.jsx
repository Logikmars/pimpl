import './Footer.scss';
import media from '../../media';


export default () => {



    return (
        <div className='Footer'>
            <div className='Footer_wrapper container'>
                {
                    media.map((el, index) => (
                        <a href={el.link} key={`footer_nav_${index}`}>{el.text}</a>
                    ))
                }
            </div>
        </div>
    )
}