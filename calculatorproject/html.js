var input=document.getElementById('insert');
var buttons=document.querySelectorAll('button');

let string="";
let array=Array.from(buttons);
/*

The Array.from() method in JavaScript is used to convert an array-like or iterable object into an actual array. 
This is useful when you have an object that is similar 
to an array, but you need to use array methods like forEach(), map(), filter(), or other array methods on it.
*/

array.forEach(button =>{
    button.addEventListener('click',(elem)=>{
        if(elem.target.innerHTML == '='){
             string=eval(string);
             input.value=string;     
        }
        else if(elem.target.innerHTML=='Ac'){
            string="";
            input.value=string;
        }
        else if(elem.target.innerHTML=="Del"){
            string=string.substring(0,string.length-1);
            input.value=string;
    
        }
         else{  
            string+=elem.target.innerHTML;
            input.value=string;
         }
        


    })
    
})