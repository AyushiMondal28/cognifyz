var time= new Date();
var hours = time.getHours();
var message;
var btn= document.getElementById("btn");

var btn2= document.getElementById("addbtn");

btn.addEventListener('click',function(){
    if (hours<12){
        btn.style.backgroundColor= "lightpink";
        message="Good Morning!";
    }
    else if(hours<16){
        btn.style.backgroundColor= "lightpink";
        message="Good Afternoon!";
    }
    else{
        btn.style.backgroundColor= "lightpink";
        message="Good Evening!";
    }
    btn.style.backgroundColor= "lightpink";
    setTimeout(function() {
        alert(message);
        btn.style.backgroundColor= "cadetblue";
    }, 200);
})

btn2.addEventListener('click',function(){
    btn2.style.backgroundColor="lightpink";
    let num1= parseFloat(document.getElementById('num1').value);
    let num2= parseFloat(document.getElementById('num2').value);
    var result= document.getElementById("result");
    console.log(num1 , num2);
    var sum= num1+num2;
    result.innerText = ` ${sum}`;
    setTimeout(function(){
        btn2.style.backgroundColor="cadetblue";
    },200);
})
