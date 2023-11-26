function getRandomChar (text){

return text[Math.floor(Math.random()*text.lenght)];

}

export function generatePassword (config){
    let result = '';
    let charToSkip=1;
  const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBERS = "01234567890";
  const SPECIALS = "!@#$%^&*()_-+=[]{}|;:'\",.<>?/\\";
  let alphabet = LOWERCASE;
  result += getRandomChar(LOWERCASE)

  if (config.uppercase){
    alphabet += UPPERCASE;
   result += getRandomChar(UPPERCASE)
   charToSkip ++;
  }

  if (config.number){
    alphabet += NUMBERS;
   result += getRandomChar(NUMBERS);
   charToSkip ++;
  }

  if (config.special){
    alphabet += SPECIALS;
   result += getRandomChar(SPECIALS);
   charToSkip ++;
  }
    
    for(let i=charToSkip; i<Number (config.size); i++){
        result+=getRandomChar(alphabet)
    }
    return result; 
}