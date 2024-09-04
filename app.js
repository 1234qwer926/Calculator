let ans=document.querySelector("#ans");
let btns=document.querySelectorAll("button");

for(let btn of btns){
    btn.addEventListener("click",function(event){
        buttonhandler(this.innerText);
        // ans.value+=this.innerText;
        console.log(`${this.innerText} is clicked`);
    })
}
function buttonhandler(val){
    if(val=="="){
        try {
            ans.value = eval(ans.value); 
        } catch {
            ans.value = "Error";
        }
    }
    else if(val=="sin" || val=="cos" || val=="tan" ||val=="sqrt"){
        updater(val);
    }
    else if(val=="AC"){
        ans.value="";
    }
    else if(val=="DE"){
        let del=ans.value;
        ans.value=del.slice(0,del.length-1);
    }
    else if(val=="+/-"){
        ans.value*=-1;
    }
    else{
        ans.value+=val;
    }
}
function updater(val){
    let radians=ans.value*(Math.PI)/180;
    try{
        if(val=="sin"){
            ans.value=Math.sin(radians);
        }else if(val=="cos"){
            ans.value=Math.cos(radians);
        }else if(val=="tan"){
            ans.value=Math.tan(radians);
        }else if(val=="sqrt"){
            ans.value=Math.sqrt(ans.value);
        }
    }catch{
        ans.value = "Error";
    }
}