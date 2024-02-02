let paragraph = document.getElementById("paragraph");
let paraValue = document.querySelector(".paraValue");
paragraph.addEventListener("input",function(){
    paraValue.innerText = paragraph.value;
});

let wordsPerPara = document.getElementById("wordsperpara");
let wordsPerParaValue = document.querySelector(".wordsperparaValue");
wordsPerPara.addEventListener("input",function(){
    wordsPerParaValue.innerText = wordsPerPara.value;
});
let selectTags = document.getElementById("selctfortags");
let showTag = document.querySelector(".showTagHere");
selectTags.addEventListener("click",function(){
    showTag.innerText = selectTags.value;
})

let dumydisplaybtn = document.querySelector(".generatedumytext");
let diplyText = document.querySelector(".displaytext");

// code for generating Lorem Ipsam (dumy Text)
const latin_words = ["Lorem","Ipsum","Dolor","Sit","Amet","Consectetur","Adipiscing","Elit","Sed","Do",
"Eiusmod","Tempor","Incididunt","Ut","Labore","Enim","Minim","Quis","Aliqua","Magna"];

// we are generating a random number here .
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// btn functions 
var store_lorem = []; 
let generatorBtn = document.querySelector(".generatedumytext");
generatorBtn.addEventListener("click",function(){
    for (let i=0;i<wordsPerParaValue.innerText;i++){
                let randomNum =getRandomInt(19);
                store_lorem.push(latin_words[randomNum]);
            }
            var finalTextwithoutcomma = store_lorem.join(' ');
            const tag = document.createElement(showTag.innerText);
            diplyText.append(tag);
            for(let i=0;i<paraValue.innerText;i++){
                        tag.innerHTML += `${finalTextwithoutcomma}<br>`;
                    }
});




