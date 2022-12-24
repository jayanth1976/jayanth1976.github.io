let textDiv = document.querySelector(".type");
let content = textDiv.innerHTML;

let len = content.length;

i = 0;
const id = setInterval(() => {
    textDiv.innerHTML = content.substring(0, i++);
    if (i === len + 2) {
        clearInterval(id);
    }
}, 100);

const view = document.querySelectorAll(".fa-eye");
view.forEach((item) => {
    item.addEventListener("click", () => {
        window.location("https://bugreportingsys.000webhostapp.com/index.html");
    });
});

const changeImg = ()=>{
    const random = Math.floor(Math.random()*6)
    document.querySelector('.img').style.background = `url(./images/hello${random}.svg) center/contain no-repeat`
}
if(document.querySelector('.sub-main'))setInterval(changeImg,3000)
setInterval(id,len*100)