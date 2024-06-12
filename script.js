
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vamos ver se você entende sobre os vingadores?",
        alternativas: [
            {
                texto: "Hulk?",
                afirmacao: "Muito nerfado."
            },
            {
                texto: "Capitão America?",
                afirmacao: "Aí sim o homem e brabo."
            }
        ]
    },
    {
        enunciado: "Qual vc prefere para uma luta ?",
        alternativas: [
            {
                texto: "Gavião arqueiro ?",
                afirmacao: "Não muito fraquinho."
            },
            {
                texto: "Viúva negra?",
                afirmacao: "Simmm , ela é bolada. "
            }
        ]
    },
    {
        enunciado: "Quem é melhor?",
        alternativas: [
            {
                texto: "Feiticeira escarlate ?",
                afirmacao: "Não, nutelaaa demais."
            },
            {
                texto: "Homem-aranha ?",
                afirmacao: "Simm , muito melhor ."
            }
        ]
    },
    {
        enunciado: "Quem é mais forte ?",
        alternativas: [
            {
                texto: "Homem de ferro ?",
                afirmacao: "Não,  só tem armadura ."
            },
            {
                texto: "Thor ?",
                afirmacao: "Claro né."
            }
        ]
    },
    {
        enunciado: "Quem foi o vilão do filme vingadores ultimato?",
        alternativas: [
            {
                texto: "Valdemor?",
                afirmacao: "Não né, tá confundindo os mundos aí."
            },
            {
                texto: "Thanos ?",
                afirmacao: "Simmm , aquele bicho roxo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();