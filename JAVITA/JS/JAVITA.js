if (confirm("¿Quieres cambiar el idioma a español? / Do you want to switch to Spanish?")) {
   
    console.log("Cambiando a español...");
} else {
   
    console.log("Idioma mantenido en inglés.");
}

//{ }



var vida = 100;



var enemigoVida = 50;
var EnemigoAtaque = 20;
var enemigoDefensa = 0;

function calcular() { 
    var ataque = document.getElementById("PlayerAtaque").value;
    var defensa = document.getElementById("PlayerDefensa").value;
    console.log(ataque)
    
    enemigoVida -= ataque - enemigoDefensa;
    if(enemigoVida <= 0){
        alert("win")
        
    }

    var isEnemigo = Math.random()
    console.log = (isEnemigo);
    if(isEnemigo >= 0.5){ 

        vida -= EnemigoAtaque - defensa
        console.log(vida)
    }
    if (vida <= 0){ 
    alert("Muerto")
    }
   
}
