import './styles/app.scss';

const siteHeader = () => {
    const header = document.querySelector('.site-header');
    if( !header ) return; // kraj

    let lastScroll = window.pageYOffset;
    console.log(lastScroll);

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        // 7 6
        if( currentScroll > lastScroll ) {
            header.classList.add('is-hidden');
        }
        else {
            header.classList.remove('is-hidden');
        }

        // 6 0

        lastScroll = currentScroll;
    })
}
const getStartedListener = () => {
    // siteHeader();
}

// el-heading__cta
const getStarted = document.querySelector('.el-heading__cta');
getStarted.addEventListener('click', getStartedListener)


const siteHamburger = () => {
    const hamburger = document.querySelector('.site-hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
    })
}


document.addEventListener('DOMContentLoaded', () => {
    siteHeader();
    siteHamburger();
})