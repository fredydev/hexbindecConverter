const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
export const encrypt=(plaintext,offset)=>{
    let finalString = ""
    for(let i=0;i<plaintext.length;i++){
        let index=null;
        if(alphabet.indexOf(plaintext[i])===-1){
            finalString+=plaintext[i]
        }
        else{
            for(let j=0;j<alphabet.length;j++){
                if(plaintext[i]===alphabet[j]){
                    index=j
                } 
            }
            finalString+=alphabet[(index+offset)%25]
        }
    }
    return finalString
}

export const decrypt=(ciphertext,offset)=>{
    let finalString=""
    for(let i=0;i<ciphertext.length;i++){
        let index=null
        if(alphabet.indexOf(ciphertext[i])===-1){
            finalString+=ciphertext[i]
        }
        else{
            for(let j=0;j<alphabet.length;j++){
            if(ciphertext[i]===alphabet[j]){
                index=j
            }
        }
         finalString+=alphabet[((index-offset)+25)%25]
        }
        
    }
    return finalString
}
