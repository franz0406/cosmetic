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
    const slides = this.document.querySelectorAll(".slide");
    const nextSlideBtn = this.document.querySelectorAll(".fa-angle-right");
    const prevSlideBtn = this.document.querySelectorAll(".fa-angle-left");
    let slideIdx = 0;

    nextSlideBtn.forEach(item => { // 다음 슬라이드
        item.addEventListener("click", () => {
            slides[slideIdx].classList.remove("on");
            slideIdx = (slideIdx + 1) % slides.length;
            slides[slideIdx].classList.add("on");
        });
    })
    prevSlideBtn.forEach(item => { // 이전 슬라이드
        item.addEventListener("click", () => {
            slides[slideIdx].classList.remove("on");
            slideIdx = (slideIdx - 1 + slides.length) % slides.length;
            slides[slideIdx].classList.add("on");
        });
    })

        
    
    
    window.addEventListener("scroll", () => {
        navBar.classList.remove("on");
        srchForm.classList.remove("on"); 
    }) 

})