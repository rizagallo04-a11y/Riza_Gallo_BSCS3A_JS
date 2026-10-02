const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');
const palitan1 = document.getElementById('changeBackground');
const palitan2 = document.getElementById('profile');
const palitan3 = document.getElementById('toggleDetails');
const palitan4 = document.getElementById('details');
let palitandin = false;

buttonname.addEventListener("click", function(){
        studentname.textContent = "Maria Santos";
    }
)

palitan1.addEventListener("click", function(){
        if (palitandin == false){
            palitan2.style.backgroundColor = "#abece1e1";
            palitandin = true;
        }
        else{
            palitan2.style.backgroundColor = "";
            palitandin = false;
        }
    }
)

palitan3.addEventListener("click", function(){
        if (palitan4.style.display === "none"){
            palitan4.style.display = "block";
        }
        else{
            palitan4.style.display = "none";
        }
    }
)