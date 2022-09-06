
//글자 지워졌다가 생겼다가
(function(){
    const spanEl = document.querySelector("main h2 span");
const txtArr= ['To Sunrise UMC', 'Nice to Meet you'];
let index = 0;
let currentTxt = txtArr[index].split("");
// " " space가 seperator 이면 띄어쓰기 기준으로 자르겟다는 뜻
console.log(currentTxt);
function writeTxt(){
spanEl.textContent +=currentTxt.shift();
if(currentTxt.length !==0){
    setTimeout(writeTxt, Math.floor(Math.random()*500));
}else{
    currentTxt = spanEl.textContent.split("");
    setTimeout(deleteTxt, 3000);
 
}

}
writeTxt();
console.log(spanEl);

function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length!==0){
        setTimeout(deleteTxt, 400);
     }else{
        index= (index+1)%txtArr.length;
        currentTxt= txtArr[index].split("");
        writeTxt();
     }
 

}
})()
//글자 지워졌다가 생겼다가

//헤더 active 클래스 스크롤 이벤트 시 임의생성
const headerEl= document.querySelector("header");
window.addEventListener("scroll", ()=>{
 scrollCheck();
});

function scrollCheck(){
    console.log("스크롤 이벤투 발생");
    const browserScrollY = window.pageYOffset;
    if(browserScrollY>0){
        headerEl.classList.add('active');
    }else{
        headerEl.classList.remove('active');
    }
    //스크롤 이벤트 발생하면 헤더에 액티브 클래스 생성
}
//헤더 active 클래스 스크롤 이벤트 시 임의생성

(function(){

})();


//헤더 버튼 클릭 시 스무스한 이동 애니메이션
const animationMove = function(selector){
    const target= document.querySelector(selector);// id 값인 #main 이 들올거임
const browserScrollY = window.pageYOffset; // +값
const targetScrollY = target.getBoundingClientRect().top+browserScrollY; //-값
console.log(`browserScrollY ${browserScrollY} +getBoundClientRect${target.getBoundingClientRect().top}, targetScrollY ${targetScrollY}`);
window.scrollTo({
    top: targetScrollY,
    behavior: 'smooth'
});
}

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
console.log(`scrollMoveEl=${scrollMoveEl}`);
for(let i = 0; i<scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener("click", function(e){
       //this= e.target= 해당 버튼
        // animationMove(this.dataset.target);// target#id 값
    console.log(this.dataset.target); 
    animationMove(this.dataset.target);
    })
}
//헤더 버튼 클릭 시 스무스한 이동 애니메이션

// Title  가로이동 애니메이션
let mainText = document.querySelectorAll("section .container .title");

for(let i=0; i<mainText.length ; i++){
    window.addEventListener('scroll',()=>{
        let value= window.scrollY;
        let targetValue= mainText[i].getBoundingClientRect().top;
        
    
        console.log(`scrollY = ${value}/getBoundingClientRect${targetValue}`);
    if(targetValue>0 && targetValue<800){
      
        mainText[i].style.animation= "slide 1s ease-out"
        console.log("나타난다");
       }
       else{
        mainText[i].style.animation= "disappear 1s ease-out forwards";
        console.log("사라진다");
       }
    
    
       
    });
}

// let mainText = document.querySelectorAll("section .container .title");
// console.log(mainText);
// for(let i=0; i<mainText.length ; i++){

// }

//Title  가로이동 애니메이션

