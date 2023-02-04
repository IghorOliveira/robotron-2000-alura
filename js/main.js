//const robotron = document.querySelector("#robotron");
//const subtrair = document.querySelector("#subtrair");
//const somar = document.querySelector("#somar");

//aqui criamos um array para poder manipular todos os botãoes de ajuste
const controle = document.querySelectorAll("[data-controle]");

const estatistica = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//aqui utilizamos as propriedados do elemento para saber qual operação usar
//com o foreach atribuimos uma função a cada botão 
controle.forEach( function(elemento){
    //aqui colocamos um eventlistener para haver uma ação ao clicar no botão
    elemento.addEventListener("click", function(evento) {
        //logs de verificação
        console.log(evento.target.dataset.controle);
        console.log(evento.target.parentNode);
        //aqui mandamos o simbolo da operação junto de toda a tag diretamente acima do botão de ajuste, desa forma podemos acessar o input e mudar o valor
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        //aqui mandamos o elemento que iremos atualizar
        atualizaEstatistica(evento.target.dataset.peca);
        
    });
});

function manipulaDados(operacao, controlador){
    //aqui selecionei o elemento usando o atributo data como filtro
    const peca = controlador.querySelector("[data-contador]");
    
    //no momento que o elementoo é selecionado posso manipulalo como se fosse filtrado por tag/classe/id
    console.log(peca.value);

    //logica para saber se o valor sera somado ou subtraido
    if(operacao === '-'){
        //primeiro subtraimos
        peca.value = parseInt(peca.value) - 1;
        //aqui fazemos o tratamento para que entre 0 e 9 o input mantenha o padrão de dois caracteres
        if(parseInt(peca.value) >= 0 && parseInt(peca.value) < 10){
            peca.value = '0'+parseInt(peca.value);
        } else if(parseInt(peca.value) < 0) {
            //essa condição impede que o valor do input seja menor do que 0
            peca.value = '00';
        }
    } else if(operacao === '+'){
        //primeiro somamos
        peca.value = parseInt(peca.value)+1;
        //aqui fazemos o tratamento para que entre 0 e 9 o input mantenha o padrão de dois caracteres
        if(parseInt(peca.value) >= 0 && parseInt(peca.value) < 10){
            peca.value = '0'+parseInt(peca.value);
        }
    } else {
        console.log('Função indisponivel');
    }


    console.log(peca.value);
    
}

function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}