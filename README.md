# Roteiro de Viagens — Projeto Integrador

Projeto desenvolvido para a disciplina de **Desenvolvimento Front-end para Web**, com o objetivo de colocar em prática conceitos de HTML5, HTML semântico, acessibilidade, formulários, tabelas e elementos multimídia.

## Sobre o projeto

O **Roteiro de Viagens** é uma página web criada para apresentar diferentes destinos turísticos de forma simples e organizada. A página reúne informações sobre **Lisboa, Kyoto e Cartagena**, acompanhadas de imagens, avaliações e uma dica de viagem. Também foi desenvolvido um formulário que permite ao usuário sugerir novos destinos, trabalhando conceitos de interação e estruturação de dados em páginas web.O projeto busca demonstrar não apenas a construção visual de uma página, mas também a utilização correta dos elementos HTML de acordo com sua função, priorizando uma estrutura semântica e acessível.

## Tecnologias

* HTML5
* CSS3
* JavaScript
* Git e GitHub

## Semântica e acessibilidade

Foram utilizados elementos como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`, além de `<label>`, `<fieldset>` e `<legend>` no formulário. As imagens também possuem textos alternativos.

## Estrutura

```text id="x6f2k1"
assets/
├── images/
└── videos/
css/
└── style.css
js/
└── main.js
index.html
README.md
```

## Como executar

Clone o repositório:

```bash id="e4xq7p"
git clone https://github.com/thiagojbsteotonio/projeto-integrador-frontend.git
```

Depois, abra o `index.html` no navegador ou utilize o **Live Server** no VS Code.

## Versionamento

O desenvolvimento utiliza **Git e GitHub**, com commits, branches e Pull Requests para organização e controle das alterações.

## Autor

**Thiago Teotônio** — Projeto desenvolvido para fins acadêmicos.


-- Dei uma olhada no projeto e o formulário e a parte de semântica já tão bem legais. Só achei umas coisinhas pra ajustar:

Aula 2:
- Tem uma imagem (viagem.jpg) que não existe na pasta assets/images, então dá 404. Deve ter esquecido de subir ela.
- Os nomes das fotos tão meio bagunçados (Kyoto.jpg.jpg, Lisboa.jpg.jpg, Cartagena.jpg.webp), com maiúscula e extensão repetida. Acho melhor deixar tudo minúsculo, tipo kyoto.jpg
- Não achei link pra um site de fora com target="_blank", que era um dos pedidos

Aula 3:
- Só não achei o Pull Request na branch feature/html-semantica-formulario, que era o nome que o professor pediu pra essa entrega
- Vale abrir o DevTools (aba Accessibility) só pra confirmar que nenhum campo aparece como role generic, mas pelo código parece que tá tudo certo

O formulário e o fieldset/legend ficaram ótimos, sinceramente! No geral tá bem encaminhado, só esses ajustes que faltam!
Avaliado por Débora Lima, 27/08/2026 as 18:06.

---

## Correções realizadas após a avaliação

Itens apontados no feedback acima e o que foi feito:

**Aula 2**
- [x] **Imagem `viagem.jpg` com erro 404:** o HTML não usa mais essa imagem. A seção de dicas foi reformulada em formato de lista, então não há mais requisição quebrada.
- [x] **Nomes das fotos bagunçados:** os arquivos foram renomeados para `lisboa.jpg`, `kyoto.jpg` e `cartagena.webp`, tudo em minúsculo e sem extensão repetida. O vídeo também foi padronizado como `video-viagem.mp4`.
- [x] **Link externo com `target="_blank"`:** cada destino agora tem um link "Saiba mais" para a Wikipédia, com `target="_blank"` e `rel="noopener noreferrer"`.

**Aula 3**
- [x] **Pull Request da branch `feature/html-semantica-formulario`:** aberto e mesclado no PR #5.
- [ ] **Conferência no DevTools (aba Accessibility):** confirmar que nenhum campo aparece como `role generic`.

## Atualizações do projeto

- **CSS:** tema azul escuro com variáveis CSS, layout geral com Grid, grade de cards responsiva com `auto-fit`/`minmax`, menu fixo com Flexbox, estados de `:hover` e `:focus-visible` e ajuste para telas estreitas (PR #6).
- **JavaScript:** classificação de cada destino pela nota, painel de resumo calculado com `map`, `filter` e `reduce`, e validação simples do formulário de sugestão (PR #6).
- **Novos destinos:** Paris, Roma e Rio de Janeiro, totalizando seis cards, cada um com link "Saiba mais".
- **Seção de vídeo própria:** o vídeo saiu do card de Lisboa e ganhou a seção "Nossas Viagens em Vídeo" (PR #8).
- **Dicas de viagem:** a seção foi ampliada, de uma dica para uma lista de cinco.
- **Revisão:** a avaliação do colega foi registrada nas issues do repositório.
