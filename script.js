const date = new Date();
var hour = date.getHours();
var minu = date.getMinutes();

/* mostra p horario  */
function main(){
    
    var imagem = document.getElementById("iImgHora"), 
        mostraHora = document.getElementById("iHora"),
        corpoCor = document.body;

        mostraHora.innerText = "Agora são "+hour+" horas";

    /* 
    Manhã: geralmente considerado entre 6:00 e 11:59
    Tarde: geralmente considerado entre 12:00 e 17:59
    Noite: geralmente considerado entre 18:00 e 23:59
    Madrugada: geralmente considerado entre 00:00 e 5:59 

    cores
        mhn rgb(190 174 133);
        trd 166 122 99
        noi 67 70 69
    */
    
    if(hour >= 6 && hour <= 11){
        console.log('manhã');
        imagem.src = "fotos/manha.jpg";
        corpoCor.style.backgroundColor = "#f0dba5";
    }
    else if(hour >= 12 && hour <= 17){
        console.log("Tarde");
        imagem.src = "fotos/tarde.jpg";
        corpoCor.style.backgroundColor = "#c07e5a";
    }
    else if(hour >= 18 && hour <= 23){
        console.log("Noite");
        imagem.src = "fotos/noite.jpg";
        corpoCor.style.backgroundColor = "#3c3e46";
    }
    else{
        console.log("Madrugada");
        imagem.src = "fotos/madrugada.jpg";
        corpoCor.style.backgroundColor = "#282736";
    }
}

function mudaHorario(){
    hour+=5;
    console.log(hour);
    if(hour > 23)
        hour = 0;
    console.log(hour);
    main();
}

main();