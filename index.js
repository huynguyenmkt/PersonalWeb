const header = document.getElementsByClassName("tr-header");
const sec2 = document.getElementById('sec2');
const sec3 = document.getElementById("sec5");
const navbar = document.getElementsByClassName('navbar-nav')

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

window.addEventListener('scroll',()=>{
    const scroll = window.pageYOffset;
    const sec2Y = sec2.getBoundingClientRect();
    const sec5Y = sec5.getBoundingClientRect().y;

    if (sec2Y.y <= 200){
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css2));
        }
        document.getElementsByTagName("head")[0].appendChild(style);
    }else{
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css1));
        }
        document.getElementsByTagName("head")[0].appendChild(style);
    }

    if (sec5Y <= 500){
        for (let i = 0; i< lengthOfProgress_bar;i++){
            progress_bar[i].style.width = `${valueOfProgress_bars[i]}%`;
        }
    }
})