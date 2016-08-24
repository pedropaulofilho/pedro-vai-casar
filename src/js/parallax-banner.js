function scrollBanner() {
  var scrollPos;
  var bannerContent = document.querySelector('.main-banner .content');
  scrollPos = window.scrollY;

  if (scrollPos <= 600) {
    bannerContent.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
    bannerContent.style.opacity = 1 - (scrollPos/600);
  }
}

window.addEventListener('scroll', scrollBanner);
