document.addEventListener("DOMContentLoaded", function() {
    console.log("Radhe Radhe");
    var outline=document.querySelector("#outline");
        
    window.addEventListener("mousemove",function(dets){
        // console.log(dets);
        var posx=dets.x;
        var posy=dets.y;
        outline.style.left=posx+"px";
        outline.style.top=posy+"px";
    })

});

const Words = ['Developer.', 'Programer.', 'Youtuber.', 'Designer.'];
const dynamicText = document.querySelector(".content h1 span");


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {

    const currentWords = Words[wordIndex];
    const currentChar = currentWords.substring(0, charIndex);
    // console.log(currentWords, currentChar);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add('stop-blinking');
    
    if (!isDeleting && charIndex < currentWords.length) {
        charIndex++;
        console.log('Typing:', charIndex);
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        console.log('Deleting:', charIndex);
        setTimeout(typeEffect, 100);
    }else{
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % Words.length : wordIndex;
        setTimeout(typeEffect, 1100)
        dynamicText.classList.remove('stop-blinking');
    }
}

typeEffect();
