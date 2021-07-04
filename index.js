const header = document.getElementById("header");
const sec2 = document.getElementById('sec2');
const sec3 = document.getElementById("sec3");
const sec4 = document.getElementById("sec4");
const sec5 = document.getElementById("sec5");
const sec6 = document.getElementById("sec6");
const sec7 = document.getElementById("sec7");
const navbar = document.getElementsByClassName('navbar-nav');
const contact = document.getElementsByClassName("contact")[0].children[1].children[0];
const home = document.getElementById("id_home");
const about = document.getElementById("id_about");
const works = document.getElementById("id_works");
const resume = document.getElementById("id_resume");
const skills = document.getElementById("id_skills");
const id_contact = document.getElementById("id_contact");
const logo = document.getElementById("logoid");
const footer = document.getElementById("footer");
const footerHeight = document.getElementById("footer-height");
const imgfooter = document.getElementById("imgfooter");

var css1 = ".menu-items li a:hover{ border: 2px solid rgba(255,255,255,1);} .tr-header {background: rgba(189, 188, 188,0.3); border-bottom: 1px solid rgba(255,255,255,0.4);} .menu-items li a{color: #fff !important;} .menu-items li:first-child a{border: 2px solid rgba(255,255,255,1);}";
var css2 = ".menu-items li a:hover{ border: 2px solid rgba(39, 39, 39,.3);} .tr-header {background: rgba(255, 255, 255,1); -webkit-box-shadow: 4px 7px 17px 5px rgba(0,0,0,0.27); box-shadow: 4px 7px 17px 5px rgba(0,0,0,0.27);} .menu-items li a{color: #181818 !important;} .menu-items li:first-child a{border: 2px solid rgba(39, 39, 39,.3);}";
var style = document.createElement("style");
const progress_bar = document.getElementsByClassName('progress-bar')

const lengthOfProgress_bar = progress_bar.length;
let valueOfProgress_bars = [];

for (let i = 0; i< lengthOfProgress_bar;i++){
    progress_bar[i].style.width = "0%";
    valueOfProgress_bars.push(progress_bar[i].getAttribute("aria-valuenow"));
}

const lengthOfContact = contact.children.length;

for (let i =1;i<lengthOfContact;i++){
    contact.children[i].style.opacity = `${1-(0.1*i)}`;
}

home.addEventListener('click',()=>scroll(1));
about.addEventListener('click',()=>scroll(2));
works.addEventListener('click',()=>scroll(3));
resume.addEventListener('click',()=>scroll(4));
skills.addEventListener('click',()=>scroll(5));
id_contact.addEventListener('click',()=>scroll(6));

window.addEventListener('scroll',()=>{
    const scroll = window.pageYOffset;
    const sec2Y = sec2.getBoundingClientRect();
    const sec5Y = sec5.getBoundingClientRect().y;
    const heightOfFooter = footer.offsetHeight;
    footerHeight.style.height = `${heightOfFooter}px`;

    if (sec2Y.y <= 200){
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css2));
        }
        document.getElementsByTagName("head")[0].appendChild(style);
        logo.src = "./img/logo-black.png";
    }else{
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css1));
        }
        document.getElementsByTagName("head")[0].appendChild(style);
        logo.src = "./img/logo.png";
    }

    if (sec5Y <= 500){
        for (let i = 0; i< lengthOfProgress_bar;i++){
            progress_bar[i].style.width = `${valueOfProgress_bars[i]}%`;
        }
    }
})

window.addEventListener('resize',()=>{
    const winWidth = window.innerWidth;
    if (winWidth < 768){
        imgfooter.style.width = "50%";
    }else{
        imgfooter.style.width = "100%";
    }
})

function scroll(stt){
    const winY = window.pageYOffset;
    const heightHeader = header.offsetHeight;
    const yAbout = sec2.getBoundingClientRect().y;
    const yWorks = sec3.getBoundingClientRect().y;
    const yResume = sec4.getBoundingClientRect().y;
    const ySkills = sec5.getBoundingClientRect().y;
    const yContact = sec7.children[1].getBoundingClientRect().y;
    switch(stt){
        case 1:
            window.scrollTo(0,0);
            break;
        case 2:
            window.scrollTo(0,(winY+yAbout)-heightHeader);
            break;
        case 3:
            window.scrollTo(0,(winY+yWorks)-heightHeader);
            break;
        case 4:
            window.scrollTo(0,(winY+yResume)-heightHeader);
            break;
        case 5:
            window.scrollTo(0,(winY+ySkills)-heightHeader);
            break;
        case 6:
            window.scrollTo(0,(winY+yContact)-heightHeader);
            break;
        default:
            break;
    }
}