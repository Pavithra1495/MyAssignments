//Write a JavaScript program to check string is panlindrome or not
let word="madam"
let reverse=""
for(let i=word.length;i>=0;i--){
    let c=word.charAt(i)
    reverse+=c
}
console.log("Reverse string is:"+reverse)
if(word===reverse){
    console.log("It’s a palindrome!")
}else{
    console.log("Not a palindrome!")
}