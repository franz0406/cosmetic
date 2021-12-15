window.addEventListener("load", function(){

    // 헤더 검색 폼
    const srchForm = this.document.querySelector(".search_form");
    const srchBtn = this.document.getElementById("search_btn");

    srchBtn.onclick = () => { srchForm.classList.toggle("on") }
    
    
    // 네비게이터
    const menuBtn = this.document.getElementById("menu_btn");
    const closeNavBtn = this.document.getElementById("close_nav");
    const navBar = this.document.querySelector(".navbar");

    menuBtn.addEventListener("click", () => navBar.classList.toggle("on")); // 네비게이터 열기
    closeNavBtn.addEventListener("click", () => navBar.classList.remove("on")); // 네비게이터 닫기
    
    
    // 홈 영역 슬라이드 
    const bannerSlide = this.document.querySelectorAll("#home > .slide");
    const nextSlideBtn = this.document.querySelectorAll(".fa-angle-right");
    const prevSlideBtn = this.document.querySelectorAll(".fa-angle-left");
    let slideIdx = 0;

    nextSlideBtn.forEach(item => { // 다음 슬라이드
        item.addEventListener("click", () => {
            bannerSlide[slideIdx].classList.remove("on");
            slideIdx = (slideIdx + 1) % bannerSlide.length;
            bannerSlide[slideIdx].classList.add("on");
        });
    })
    prevSlideBtn.forEach(item => { // 이전 슬라이드
        item.addEventListener("click", () => {
            bannerSlide[slideIdx].classList.remove("on");
            slideIdx = (slideIdx - 1 + bannerSlide.length) % bannerSlide.length;
            bannerSlide[slideIdx].classList.add("on");
        });
    })

    // 어바웃 & 블로그 영역 공통 슬라이더    
    const swiper = new Swiper(".swiper", {
        
        loop:true,        

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        autoplay: {
            delay: 3000,
        },
        
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
        }
        
    });
    
    // 갤러리 영역 라이트박스
    const lightBox = this.document.querySelector(".light_box");
     
    lightGallery(lightBox,{
        thumbnail: true,
    });

    // 리뷰 영역 슬라이더
    const reviewSwiper = new Swiper(".reviews_slider", {
        
        loop:true,

        autoplay: {
            delay: 5000,
        },    

        grabCursor: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
        }
        
    });
    
    window.addEventListener("scroll", () => {
        navBar.classList.remove("on");
        srchForm.classList.remove("on"); 
    }) 

})