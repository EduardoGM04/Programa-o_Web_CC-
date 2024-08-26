const diaSemana = document.getElementById("dia-semana");
const dataAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");
const btnRegistrarponto = document.getElementById("btn-registrar-ponto");

btnRegistrarponto.addEventListener("click",)

diaSemana.textContent = getWeekDay();
dataAtual.textContent = getCurrentDate();

function register(){
    alert.
}



function updateContentHour(){


    
    horaAtual.textContent = getCurrentTime();

}






function getCurrentTime(){
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
function getCurrentDate(){
    const date = new Date();

    const mounth = date.getMonth() + 1;

    return date.getDate() + "/" + mounth + "/" + date.getFullYear();

}

function getWeekDay(){
    const date = new Date()
    const day = date.getDay()
    const daynames = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    return daynames[day]



    return"";
}

setInterval(updateContentHour, 1000);
console.log(getCurrentTime());
console.log(getCurrentDate());