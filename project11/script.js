const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".link-list");
    const navlinks =document.querySelectorAll(".link-list li");
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        navlinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation ="";
            }
            else{
        link.style.animation =`linklistfade .5s ease forwards ${index/7 + 0.8}s`;
    }
    link.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    link.style.animation ="";
}
    );

    });
    })

}
navSlide();