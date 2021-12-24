var slideIndex = 1;

function navigateSlide(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var elCurCount = document.querySelector('.currentSlideCount')
  var elCounts = document.querySelector('.countsSlider')
  var x = document.getElementsByClassName("slider-single");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  elCurCount.innerText = slideIndex > 10 ? slideIndex : '0' + slideIndex
  elCounts.innerText = x.length > 10 ? x.length : '0' + x.length
  x[slideIndex-1].style.display = "block";
}

showDivs(slideIndex);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function openMenu() {
    document.querySelector('.nav-menus-item').style.left = '0px'
}
function closeMenu() {
    document.querySelector('.nav-menus-item').style.left = '-100vw'
}
function selectMenu(link) {
    location.href = link
    closeMenu()
}