
document.addEventListener('mousemove',function(e){
    let body =document.querySelector('body');
    let heart=document.createElement('span');
    let x=e.offsetX;
    let y=e.offsetY;
    heart.style.left=x+'px';
    heart.style.top=y+'px';

    body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },1000)
});

let count=0;
const maxWidth=window.innerWidth;
const maxHeight=window.innerHeight;

const cuteResponses = [
    "Please?",
    "You Sure?",
    "I know you actually mean Yes",
    "Come on..........",
    "Click \"yes\"",
    "Pretty please? 🥺",
    "Are you sure, cutie? 🥹",
    "But... but... I picked you 😖",
    "I'll give you a cookie 🍪💛",
    "You're my favorite human 🥰",
    "I’ll be the happiest person ever! 😍",
    "Even the stars want you to say Yes ✨",
    "No? But I made this just for you... 😢",
    "Imagine how cute we'd be together! 😘",
    "I'll share my snacks with you! 🍫",
    "Even puppies would say Yes! 🐶",
    "One yes = one happy me! 😊",
    "Okay... but I’m still sending virtual hugs 🤗",
    "You’re my dream Valentine 💖",
    "I pinky promise it’ll be fun! 🤞💞",
    "Are you sure? You’re breaking my heart 😔",
    "I promise it’ll be worth it! 😉",
    "You complete my puzzle piece 🧩",
    "Every ‘Yes’ brings us closer! 🌼",
    "I’d do anything for a Yes! 💖",
    "I believe in us! Let's make it happen ✨",
    "A simple Yes from you and I’m over the moon! 🌙",
    "Please, pretty please? 🥺",
    "You know you want to! 😘"
];

document.addEventListener("DOMContentLoaded",()=>{
     let btnNo=document.getElementById("btnNo");

     btnNo.addEventListener("mouseover",()=>{
 if(count<cuteResponses.length){
        btnNo.innerHTML=cuteResponses[count];
        count++;
    }else{
        count=0;
    }

   btnNo.style.top=Math.floor(Math.random()*(maxHeight-100))+'px';
   btnNo.style.left=Math.floor(Math.random()*(maxWidth-100))+'px';
    

     });

    });
function saidYes(){
    

   let displayMessage= ` 
   <div class="text-center gif"><img src="https://media.giphy.com/media/ok3mfHbhzFVQWca9Rt/giphy.gif?cid=790b7611eu4fn06dv9wovwcx9f5dcw86udsj8e3tivsxt1xt&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="Flower Bouquet" class="bouquet">   </div>

   <div class="text-center">
        <h2>
            YAYY!!!
        </h2>
        <h1>
            You're My Valentine! 💖💖💖
        </h1><br>
        <h6 id="typewriterText">Catch 💞 to fill the love meter...</h6>
    </div>
    
    <div id="loveMeterContainer">
  <div id="loveMeter" style="width: 0%;"><br></div>
</div>

    `;
    document.getElementById("body").innerHTML=displayMessage;
  
    setInterval(flowerFall, 300);
}
let loveMeter = 0;
let loveMeterFull = false;

function increaseLoveMeter() {
    if (loveMeterFull) return;
    loveMeter += 10; 
    document.getElementById("loveMeter").style.width = loveMeter + "%";
    document.getElementById("loveMeter").innerHTML=loveMeter+"%";
  
    if(loveMeter==100){
        loveMeterFull = true;
        celebration();
    }
    
  
}

function flowerFall(){
    const flower1=document.createElement("div");
    const flower2=document.createElement("div");
    const pinkHeart=document.createElement("div");

    flower2.classList.add("flower2");
    flower1.classList.add("flower1");
    pinkHeart.classList.add("pinkHeart");

    flower1.innerHTML="🌸";
    flower2.innerHTML="💮";
    pinkHeart.innerHTML="💞";

    
    flower1.style.left = Math.random() * (window.innerWidth - 50) + "px";
    flower1.style.top = "-30px";
    flower1.style.fontSize = Math.random() * 20 + 15 + "px";

    flower2.style.left = Math.random() * (window.innerWidth - 50) + "px";
    flower2.style.top = "-30px";
    flower2.style.fontSize = Math.random() * 20 + 15 + "px";

    pinkHeart.style.left = Math.random() * (window.innerWidth - 50) + "px";
    pinkHeart.style.top = "-30px";
    pinkHeart.style.fontSize = Math.random() * 20 + 15 + "px";
    
    document.body.appendChild(flower1);
    document.body.appendChild(flower2);
    document.body.appendChild(pinkHeart);

    pinkHeart.addEventListener("click", () => {
        increaseLoveMeter();
        pinkHeart.remove(); 
      });

    setTimeout(() => {
        flower1.remove();
        flower2.remove();
        pinkHeart.remove();
    }, 5000); 
}

function celebration() {
   
    const message = document.createElement("div");
    message.innerHTML = `
    <div class="celebrate">
      <h1>I’m all yours 🥰💖</h1>
      <h2>100% Love Achieved! Thank You for Catching My Heart 🥰</h2>
      </div>
    `;
    message.style.textAlign = "center";
    message.style.fontSize = "30px";
    message.style.fontFamily = "Emilys Candy, cursive";
    message.style.position = "absolute";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.opacity = "0";
    document.body.appendChild(message);
  
    message.classList.add("popIn");
    triggerConfetti();
  
  }
  
  function triggerConfetti() {
    const numberOfConfetti = 30; 
    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "absolute";
        confetti.style.top = Math.random() * -200 + "px"; 
        confetti.style.left = Math.random() * window.innerWidth + "px"; 
        confetti.style.fontSize = Math.random() * 20 + 30 + "px"; 
        confetti.style.opacity = Math.random() * 0.5 + 0.5; 
        confetti.classList.add("fallConfetti");
        
       
        setTimeout(() => confetti.remove(), 5000);
    }
}
