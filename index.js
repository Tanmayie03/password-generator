let btnOne = document.getElementById("passWord");
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength=6
function btn_one(){
    for (let i = 0; i < passwordLength; i++){
        let random = Math.floor(Math.random()*characters.length)
    btnOne.textContent +=(characters[random])
    } 
    
}
function copyText(ev){
  let copy = document.getElementById("passWord");
  let text = copy.innerText;
  let copiedText  = document.getElementById("input");
  copiedText.value = text;
  copiedText.select();
  document.execCommand("input");   
}
