function checkName(event){
    if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || event.keyCode == 8)
        return true;
    else
     {
        if(event.target.id === "fName"){
            document.getElementById("fNameError").innerHTML = "Enter only characters";
            setTimeout(function(){
                document.getElementById("fNameError").innerHTML = " ";   
            },2000);
        }
        else if(event.target.id === "lName"){
            document.getElementById("lNameError").innerHTML = "Enter only characters";
            setTimeout(function(){
                document.getElementById("lNameError").innerHTML = " ";   
            },2000);
        }
        return false;
    }
}

function checkPhone(event){
    if ((event.keyCode > 47 && event.keyCode < 58) || event.keyCode == 43 || event.keyCode == 8)
        return true;
    else
     {
        document.getElementById("phoneError").innerHTML = "Enter only numbers";
        setTimeout(function(){
            document.getElementById("phoneError").innerHTML = " ";   
        },2000);
        return false;
    }
}

function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
    return (false)
}

function mandatory(e){
    var blind = document.querySelector(".blind");
    if(e.target.checked){
      blind.style.display="inline-block";
    }
}

function notMandatory(e){
    var blind = document.querySelector(".blind");
    if(e.target.checked){
        blind.style.display="none";
    }
}
function toastify(text,status){
    var toast = document.querySelector('.toast');
    toast.style.right="1%";
    toast.childNodes[1].textContent=text;
    
    if(status==="failed")
    toast.childNodes[0].style.background="red";
    else
    toast.childNodes[0].style.background="green";    

    toast.childNodes[0].style.animation="timer 3s linear forwards";
    var time= setTimeout(()=>{
        toast.style.right="-50%";
        toast.childNodes[0].style.animation="none";
    },3000)
}

function FormValidation(e) {
    e.preventDefault();
    var inputs = document.querySelectorAll('.textbox');
    var accept = document.querySelector('#yes');
    var radio = document.querySelector('input[type=radio][name=check]:checked');
    var isEmpty = 0;
    var isEmail;
    
    inputs.forEach((input)=>{
        if(!input.value){
            if(accept.checked && input.name==="url"){
                input.style.border="2px solid red";
                isEmpty++;
                var timer = setTimeout(()=>{
                    input.style.border="2px solid #b1b1b1";
                },3000)
            }else if(input.name!=="url"){
                input.style.border="2px solid red";
                isEmpty++;
                var timer = setTimeout(()=>{
                    input.style.border="2px solid #b1b1b1";
                },3000)
            }
        }  
        if(input.name==="email"){
            isEmail=ValidateEmail(input.value);
        }    
    })

    if(isEmpty != 0){
        toastify("Please fill all *marked fields","failed");
    }else if(!isEmail){
        toastify("Invalid email","failed");
    }else{
        toastify("Form submitted successfully!","success");
        radio.checked = false;
        inputs.forEach((inp)=>{
            inp.value="";
        })
        alert("Form submitted successfully!");
    }
}
