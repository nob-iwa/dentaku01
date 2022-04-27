function clickbutton(button){
  let result = document.getElementById('result');
  let button_value=button.innerHTML;
  if (button_value === "AC"){
    result.innerHTML="0";
  } else if(button_value === "="){
    result.innerHTML=eval(result.innerHTML);
  } else{
     if (result.innerHTML=="0"){
       if(button_value=="."){
         result.innerHTML+=button_value;
       } else if(button_value=="00"){
         result.innerHTML="0";
       } else{ 
         result.innerHTML=button_value;}
     }else{
    result.innerHTML+=button_value;
     }
  }
}

function calcubutton(button){
  let result = document.getElementById('result');
  let button_value=button.innerHTML;
  let operator=["+","-","*","/"];
  let lastnumber=result.innerHTML.slice(-1);
  if (operator.includes(result.innerHTML.slice(-1))==true){
    result.innerHTML=result.innerHTML.replace(lastnumber,button_value);
  }else{
   result.innerHTML+=button_value;
  }
}
