const msg= document.querySelector('.msg');
const guess= document.querySelector('input');
const btn= document.querySelector('.btn');
let play=false;
let newWords="";
let ranWords="";

let wordS=['python', 'javascript','html','php', 'vscode', 'sql', 'nodejs', 'c++', 'java'];
const createNewWords=() =>{
        let ranNum= Math.floor(Math.random()*wordS.length);

        let newTemp= wordS[ranNum];
        return newTemp;

}
const scrambleWords =(arr)=>{
       for(let i=arr.length-1; i>=0; i--){
           let temp = arr[i];
           let j = Math.floor(Math.random()*(i+1));
           arr[i]=arr[j];
           arr[j]=temp;


       }
       return arr;
}
 
btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML="Guess";
        guess.classList.toggle('hidden');

       newWords= createNewWords();
       ranWords=scrambleWords(newWords.split(""));
       msg.innerHTML =` Guess the word : ${ ranWords} `;

    }
    else{
          let tempWords =guess.value;
          if(tempWords===newWords){
              play=false;
              msg.innerHTML= `Awesome its correct. It is ${newWords}`;
              btn.innerHTML="Start Again";
              guess.classList.toggle('hidden');
              guess.value="";
          }
          else{
              msg.innerHTML=`Sorry Incorrect. It is ${ranWords}`;
          }
    }
})