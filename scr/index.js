const player1 = {
    Nome: "Moranguinho",
    Velocidade: 5,
    Ataque: 2,
    Defesa: 3,
};

const player2 = {
    Nome: "Limãozinha",
    Velocidade: 4,
    Ataque: 3,
    Defesa: 2,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function  playRaceEngine(character1, characater2) {
    for (let round = 1; round < 5; round++) {
        console.log(`🏁 Rodada`)
    }
}

(async function  main() {
    console.log(
        `🏁🚨 Corrida entre ${player1.Nome} e ${player2.Nome} começando...`
    )
} )


async function  main() {
    console.log("hello");
};

main();


async function  getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
      case random <0.33:
        result = "RETA"
        break;
    case random <0.66:
        result = "RETA"
       default:
        break;
    }
}

async function PlayRaceEngine(Characteri1, Characteri2) {
 for(let round = 1; round<5; round++){
    console.log(
        "🏁🚨Rodada ${round}"
    );
}};
  

(async function main() {
    console.log(
        `Corrida entre  ${player1.NOME} e ${player2.NOME} começando em...\n 
    `);
        await playRaceEngine(player1, player2);
})();






