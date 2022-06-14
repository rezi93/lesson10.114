let forelement = document.getElementById('main');

forelement.addEventListener('submit', function(event){
    event.preventDefault();
    let errors={};
    let form=event.target;

    let username=document.getElementById('user').value;
    if(username.length <7 || username==""){
        errors.username='username can not be empty and must be then 7 charaqters';
    }

    let password=document.getElementById('pas').value;
    let password2=document.getElementById('pass').value;

    if(password!=password2){
        errors.password2='password do not match';
    }

    let gender =false;
    form.querySelectorAll('[name="gender"]').forEach(y => {
        if(y.Checked){
            gender=true;
        }
        if(!gender){
            errors.gender='must be select';
        }
        form.querySelectorAll('.errors-text').forEach(Element => {
            Element.innerText='';
        })
    })

    let agree = document.getElementById('agree').Checked;
    if(!agree){
        errors.agree='you must agree';
    }

    for(let item in errors){
        let errorsspan = document.getElementById('errors_'+ item);
        if(errorsspan){
            errorsspan.innerText=errors[item];
        }
    }
    if(Object.keys(errors).length==0){
        form.submit();
    }
   console.log(errors);
})