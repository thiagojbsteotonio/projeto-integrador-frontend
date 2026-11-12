
function classificarDestino(nota) {
  if (nota >= 9) return "Imperdível";
  if (nota >= 7) return "Muito bom";
  if (nota >= 5) return "Vale a visita";
  return "Pode esperar";
}


const calcularMedia = (notas) =>
  notas.reduce((soma, nota) => soma + nota, 0) / notas.length;


const CLASSES_DA_FAIXA = {
  "Imperdível": "faixa-imperdivel",
  "Muito bom": "faixa-muito-bom",
  "Vale a visita": "faixa-vale-visita",
  "Pode esperar": "faixa-pode-esperar",
};


function lerDestinoDoCard(card) {
  return {
    cidade: card.dataset.cidade,
    pais: card.dataset.pais,
    nota: Number(card.dataset.nota),
  };
}


function exibirClassificacao(card) {
  const destino = lerDestinoDoCard(card);
  const faixa = classificarDestino(destino.nota);

  const paragrafo = document.createElement("p");
  paragrafo.className = "classificacao";
  paragrafo.textContent = `Nota ${destino.nota} · ${faixa}`;

  card.classList.add(CLASSES_DA_FAIXA[faixa]);
  card.querySelector("h3").after(paragrafo);
}


function montarResumo(lista) {
  const notas = lista.map((destino) => destino.nota);
  const mediaGeral = calcularMedia(notas);


  const melhor = lista.reduce((atual, destino) =>
    destino.nota > atual.nota ? destino : atual
  );


  const imperdiveis = lista.filter(
    (destino) => classificarDestino(destino.nota) === "Imperdível"
  );

  const linhas = [
    ["Destinos visitados", lista.length],
    ["Nota média", mediaGeral.toFixed(1)],
    ["Melhor avaliado", `${melhor.cidade} (${melhor.nota})`],
    ["Destinos imperdíveis", imperdiveis.length],
  ];

  const painel = document.createElement("section");
  painel.className = "resumo-destinos";

  const titulo = document.createElement("h3");
  titulo.textContent = "Resumo das viagens";

  const itens = document.createElement("ul");
  linhas.forEach(([rotulo, valor]) => {
    const item = document.createElement("li");
    item.textContent = `${rotulo}: ${valor}`;
    itens.append(item);
  });

  painel.append(titulo, itens);
  return painel;
}


const cards = document.querySelectorAll(".card-destino");
const tituloDestinos = document.querySelector("#destinos h2");


if (cards.length > 0 && tituloDestinos) {
  cards.forEach(exibirClassificacao);


  const destinos = Array.from(cards, lerDestinoDoCard);
  tituloDestinos.after(montarResumo(destinos));
}


const formulario = document.querySelector("form");

if (formulario) {
  const mensagem = document.createElement("p");
  mensagem.setAttribute("role", "status");
  formulario.append(mensagem);

  function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
  }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); 

    const cidade = document.querySelector("#cidade").value.trim();
    const pais = document.querySelector("#pais").value.trim();
    const nome = document.querySelector("#nome").value.trim();
    const textoNota = document.querySelector("#nota").value;

    if (textoNota !== "") {
      const nota = Number(textoNota);
      if (Number.isNaN(nota) || nota < 0 || nota > 10) {
        mostrarMensagem("A nota precisa ficar entre 0 e 10.", "erro");
        return;
      }
    }

    mostrarMensagem(
      `Obrigado, ${nome}! Sua sugestão (${cidade}, ${pais}) foi enviada.`,
      "sucesso"
    );
    formulario.reset();
  });
}
