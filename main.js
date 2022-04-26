function clickbutton(button){
  let result = document.getElementById('result');
  let button_value=button.innerHTML;
  if (button_value==='AC'){
    result.innerHTML=0;
  } else if(button_value==='='){
     result.innerHTML=12;
  } else{
    console.log(button_value);
    result.innerHTML=33;
  }
}
