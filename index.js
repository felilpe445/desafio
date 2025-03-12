let nomeHeroi = "alek";
let xpHeroi = 8772;
let nivelHeroi;

if (xpHeroi <= 1000){

    nivelHeroi = "ferro"
    console.log(nomeHeroi + " é nível " + nivelHeroi);

} else if (xpHeroi >= 1001 && xpHeroi <= 2000){
    
    nivelHeroi = "bronze"
    console.log(nomeHeroi + " é nível " + nivelHeroi);

} else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    
    nivelHeroi = "prata"
    console.log(nomeHeroi + " é nível " + nivelHeroi);

} else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    
    nivelHeroi = "ouro"
    console.log(nomeHeroi + " é nível " + nivelHeroi);

} else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    
    nivelHeroi = "platina"
    console.log(nomeHeroi + " é nível " + nivelHeroi);

} else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    
    nivelHeroi = "ascendente"
    console.log(nomeHeroi + " é nível " + nivelHeroi);

} else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    
    nivelHeroi = "imortal"
    console.log(nomeHeroi + " é nível " + nivelHeroi);

} else if (xpHeroi >= 10001){
    
    nivelHeroi = "radiante"
    console.log(nomeHeroi + " é nível " + nivelHeroi);

}

console.log("O Herói de nome " + nomeHeroi, " está no nível " + nivelHeroi);