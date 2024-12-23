let voice=new SpeechSynthesisUtterance();
let v=[];
let differentVoice =document.querySelector("select");
window.speechSynthesis.onvoiceschanged =()=>{
    v=window.speechSynthesis.getVoices();
    voice.v=v[0];
    v.forEach((v,i) => {
        differentVoice.options[i]=new Option(v.name,i)
    });
}

let b = document.querySelector("img");
b.addEventListener("click",()=>{
    voice.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(voice);
})