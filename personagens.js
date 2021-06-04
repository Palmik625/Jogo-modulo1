
function escolha(personagem){
    
    personagem = prompt("Escolha o seu personagem:\n1.dr.Zangado\n2.Srta.Cachinhos\n3.Povao");

    while (personagem != 1 && personagem != 2 && personagem != 3) {
        alert("O personagem que você escolheu não existe.");
        personagem = prompt("Escolha o seu personagem:\n1.dr.Zangado\n2.Srta.Cachinhos\n3.Povao");
    }

    if(personagem == 1){
        document.write(`
            <h1> <style> h1{text-align: center;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                margin: 150px;
                color: lightskyblue} </style>Você escolheu o dr.Zangado.</h1>
            <a href="eris/Eureka.html">Começar</a>`)
}

    else if(personagem == 2){
        document.write(`
            <h1> <style> h1{text-align: center;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                margin: 150px;
                color: lightgreen} </style>Você escolheu a Srta.Cachinhos.</h1>
            <a href="Srta.Cachinhos/A porta voz.html">Começar</a>`)
    }

    else if(personagem == 3){
        document.write(`
            <h1> <style> h1{text-align: center;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                margin: 150px;
                color: mediumpurple;} </style>Você escolheu o Povao.</h1>
            <a href="Povao/povao.html">Começar</a>`)
    }
}

escolha();
