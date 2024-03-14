let btnAdd  = document.querySelector('.btnAdd');
let btnDel  =  document.querySelector('.btnDel');

function blockTask () 
{   
    let inputTask        = document.getElementById('task');
    let el_Li            = document.createElement('li');  
    el_Li.textContent    = inputTask.value;
    inputTask.value      = "";
    el_Li.style.fontSize = "40px";
    el_Li.style.color    = "brown"
    el_Li.style.cursor   = "pointer";
    el_Li.className      = "";

    el_Li.onclick        = () => {
        el_Li.classList.toggle('active');
    }
    
    document.querySelector('ol').append(el_Li);
}

function delTask(){
    let delLi = document.querySelectorAll('li');
    
    for(let i=0; i<delLi.length; i++){
        if (delLi[i].className == "active") {
            console.log(delLi[i].textContent);
            delLi[i].remove();
        }
    }
}

btnAdd.addEventListener('click', blockTask);
btnDel.addEventListener('click', delTask);

 
