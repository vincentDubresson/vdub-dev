if (document.querySelector(".main-site")) {

    const mainSite = document.querySelector(".main-site");
    const mobileHeader = document.querySelector('.mobile-header');
    const presentationTitleFr = document.querySelector('.presentation-title-fr');
    const presentationTitleEn = document.querySelector('.presentation-title-en');
    const presentationContent = document.querySelector('.presentation-content');
    const frenchPresentation = document.querySelector('.presentation-content-description-fr');
    const englishPresentation = document.querySelector('.presentation-content-description-en');
    const careerTitleFr = document.querySelector('.career-title-fr');
    const careerTitleEn = document.querySelector('.career-title-en');
    const careerContent = document.querySelector('.career-content');
    const portfolioTitleFr = document.querySelector('.portfolio-title-fr');
    const portfolioTitleEn = document.querySelector('.portfolio-title-en');
    const portfolioContent = document.querySelector('.portfolio-content');
    const contactTitleFr = document.querySelector('.contact-title-fr');
    const contactTitleEn = document.querySelector('.contact-title-en');
    const contactContent = document.querySelector('.contact-content');

    const mainSitePosition = mainSite.offsetTop;
    
    window.onscroll = () => { 
        console.log(window.scrollY);
        stickyBurger();
        presentationDisplay();
        careerDisplay();
        portfolioDisplay();
        contactDisplay();
    };
    
    // Function used to display burger-menu
    function stickyBurger() {
        if (window.scrollY >= mainSitePosition) {
            mobileHeader.classList.add("sticky");
            mobileHeader.style.transition = "0.5s";
        } else {
            mobileHeader.classList.remove("sticky");
            mobileHeader.style.transition = "0.1s";
        }
    }

    // Function used to display presentation content
    function presentationDisplay() {
        if (window.scrollY >= 400) {
            presentationTitleFr.classList.add('presentation-title-fr-display');
            presentationTitleFr.style.transition = "0.8s";
            presentationTitleFr.style.transitionTimingDelay = "cubic-bezier(0.075, 0.82, 0.165, 1)";
            presentationTitleEn.classList.add('presentation-title-en-display');
            presentationTitleEn.style.transition = "0.8s";
            presentationTitleFr.style.transitionTimingDelay = "cubic-bezier(0.075, 0.82, 0.165, 1)";
            presentationTitleEn.style.transitionDelay = "0.3s";
        } else {
            presentationTitleFr.classList.remove('presentation-title-fr-display');
            presentationTitleFr.style.transition = "0.5s";
            presentationTitleEn.classList.remove('presentation-title-en-display');
            presentationTitleEn.style.transition = "0.5s";
            presentationTitleEn.style.transitionDelay = "0.3s";
        }
        if (window.scrollY >= 600) {
            presentationContent.classList.add('opacity-display');
            presentationContent.style.transition = "1s";
            presentationContent.style.transitionDelay = "1s";
        } else {
            presentationContent.classList.remove('opacity-display');
            presentationContent.style.transition = "1s";
            frenchPresentation.classList.remove('display-none');
            englishPresentation.classList.add('display-none');
        }
    }

    // Function used to display career content
    function careerDisplay() {
        if (window.scrollY >= 800) {
            careerTitleFr.classList.add('career-title-fr-display');
            careerTitleFr.style.transition = "0.8s";
            careerTitleFr.style.transitionTimingDelay = "cubic-bezier(0.075, 0.82, 0.165, 1)";
            careerTitleEn.classList.add('career-title-en-display');
            careerTitleEn.style.transition = "0.8s";
            careerTitleFr.style.transitionTimingDelay = "cubic-bezier(0.075, 0.82, 0.165, 1)";
            careerTitleEn.style.transitionDelay = "0.3s";
        } else {
            careerTitleFr.classList.remove('career-title-fr-display');
            careerTitleFr.style.transition = "0.5s";
            careerTitleEn.classList.remove('career-title-en-display');
            careerTitleEn.style.transition = "0.5s";
            careerTitleEn.style.transitionDelay = "0.3s";
        }
        if (window.scrollY >= 950) {
            careerContent.classList.add('opacity-display');
            careerContent.style.transition = "1s";
            careerContent.style.transitionDelay = "1s";
        } else {
            careerContent.classList.remove('opacity-display');
            careerContent.style.transition = "1s";
        }
    }

    // Function used to display portfolio content
    function portfolioDisplay() {
        if (window.scrollY >= 2070) {
            portfolioTitleFr.classList.add('portfolio-title-fr-display');
            portfolioTitleFr.style.transition = "0.8s";
            portfolioTitleFr.style.transitionTimingDelay = "cubic-bezier(0.075, 0.82, 0.165, 1)";
            portfolioTitleEn.classList.add('portfolio-title-en-display');
            portfolioTitleEn.style.transition = "0.8s";
            portfolioTitleFr.style.transitionTimingDelay = "cubic-bezier(0.075, 0.82, 0.165, 1)";
            portfolioTitleEn.style.transitionDelay = "0.3s";
        } else {
            portfolioTitleFr.classList.remove('portfolio-title-fr-display');
            portfolioTitleFr.style.transition = "0.5s";
            portfolioTitleEn.classList.remove('portfolio-title-en-display');
            portfolioTitleEn.style.transition = "0.5s";
            portfolioTitleEn.style.transitionDelay = "0.3s";
        }
        if (window.scrollY >= 2200) {
            portfolioContent.classList.add('opacity-display');
            portfolioContent.style.transition = "1s";
            portfolioContent.style.transitionDelay = "0.5s";
        } else {
            portfolioContent.classList.remove('opacity-display');
            portfolioContent.style.transition = "0.5s";
        }
    }

    // Function used to display contact content
    function contactDisplay() {
        if (window.scrollY >= 4410 && window.innerWidth < 994) {
            contactTitleFr.classList.add('contact-title-fr-display');
            contactTitleFr.style.transition = "0.8s";
            contactTitleFr.style.transitionTimingDelay = "cubic-bezier(0.075, 0.82, 0.165, 1)";
            contactTitleEn.classList.add('contact-title-en-display');
            contactTitleEn.style.transition = "0.8s";
            contactTitleFr.style.transitionTimingDelay = "cubic-bezier(0.075, 0.82, 0.165, 1)";
            contactTitleEn.style.transitionDelay = "0.3s";
        } else if (window.scrollY >= 3500 && window.innerWidth > 994) {
            contactTitleFr.classList.add('contact-title-fr-display');
            contactTitleFr.style.transition = "0.8s";
            contactTitleFr.style.transitionTimingDelay = "cubic-bezier(0.075, 0.82, 0.165, 1)";
            contactTitleEn.classList.add('contact-title-en-display');
            contactTitleEn.style.transition = "0.8s";
            contactTitleFr.style.transitionTimingDelay = "cubic-bezier(0.075, 0.82, 0.165, 1)";
            contactTitleEn.style.transitionDelay = "0.3s";
        } else {
            contactTitleFr.classList.remove('contact-title-fr-display');
            contactTitleFr.style.transition = "0.5s";
            contactTitleEn.classList.remove('contact-title-en-display');
            contactTitleEn.style.transition = "0.5s";
            contactTitleEn.style.transitionDelay = "0.3s";
        }
        if (window.scrollY >= 4560 && window.innerWidth < 994) {
            contactContent.classList.add('opacity-display');
            contactContent.style.transition = "1s";
            contactContent.style.transitionDelay = "0.5s";
        } else if (window.scrollY >= 3650 && window.innerWidth > 994) {
            contactContent.classList.add('opacity-display');
            contactContent.style.transition = "1s";
            contactContent.style.transitionDelay = "0.5s";
        } else {
            contactContent.classList.remove('opacity-display');
            contactContent.style.transition = "0.5s";
        }
    }
    
}

