import './Footer.scss';
export default () => {
    
    const nav = [
        {
            text: 'Buy Pimpl',
            link: '#'
        },
        {
            text: 'X/Twitter',
            link: 'https://x.com/'
        },
        {
            text: 'Telegram',
            link: 'https://web.telegram.org/k/'
        },
        {
            text: 'Dexscreener',
            link: 'https://dexscreener.com/'
        }
    ]

    return (
    <div className='Footer'>
        <div className='Footer_wrapper container'>
            {
                nav.map((el, index) => (
                    <a href={el.link} key={`footer_nav_${index}`}>{el.text}</a>
                ))
            }
        </div>
    </div>
)}