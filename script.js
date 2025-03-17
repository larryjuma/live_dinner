const year = document.getElementById("fullYear")

function fullYear(){
    let now = new Date();
    let currentYear = now.getFullYear()
    year.innerText = currentYear;
}

fullYear()
    


