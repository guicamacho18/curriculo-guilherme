
const cv = {
  nome: "Guilherme da Luz Camacho",
  cargo: "Estudante de Análise e Desenvolvimento de Sistemas",

  resumo: `Tenho 19 anos, sou dedicado, proativo e tenho vontade
  de crescer profissionalmente. Busco uma oportunidade para
  aplicar meus conhecimentos, aprender e contribuir com
  responsabilidade e comprometimento.`,

  contatos: [
    {
      texto: "Suzano - SP",
      link: null
    },
    {
      texto: "19 anos",
      link: null
    },
    {
      texto: "(11) 95044-8650",
      link: "tel:+5511950448650"
    },
    {
      texto: "guilherme.luz.camacho@gmail.com",
      link: "mailto:guilherme.luz.camacho@gmail.com"
    }
  ],

  experiencia: [
    {
      cargo: "Estética Automotiva",
      periodo: "1 ano de experiência",
      atividades: [
        "Lavagem técnica e detalhamento automotivo",
        "Higienização interna e externa de veículos",
        "Polimento e acabamento",
        "Aplicação de produtos de proteção e conservação",
        "Organização do ambiente de trabalho",
        "Atendimento aos clientes",
        "Trabalho em equipe, seguindo padrões de qualidade e atenção aos detalhes"
      ]
    }
  ],

  formacao: [
    {
      curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
      situacao: "Em andamento"
    },
    {
      curso: "Ensino Médio",
      situacao: "Completo"
    }
  ],

  habilidades: [
    "Comprometimento",
    "Organização",
    "Responsabilidade",
    "Pontualidade",
    "Facilidade de aprendizado",
    "Trabalho em equipe",
    "Boa comunicação",
    "Informática básica",
    "Pacote Office",
    "AutoCAD",
    "Facilidade para aprender novas tecnologias e processos"
  ],

  conhecimentos: [
    {
      titulo: "Inglês",
      descricao: "2 anos de estudos (não concluído)"
    },
    {
      titulo: "AutoCAD",
      descricao: "Conhecimentos adquiridos por meio de prática e utilização da ferramenta"
    }
  ],

  perfil: [
    {
      titulo: "Focado em Resultados",
      descricao: "Foco e dedicação ao cumprimento de metas."
    },
    {
      titulo: "Trabalho em Equipe",
      descricao: "Excelente relacionamento interpessoal."
    },
    {
      titulo: "Vontade de Aprender",
      descricao: "Aberto a novos conhecimentos e desafios."
    }
  ],

  adicionais:
    "Disponibilidade para novos desafios e aprendizado contínuo."
};

// ELEMENTO PRINCIPAL
const principal = document.getElementById("cv");
principal.className = "curriculo";

// CRIAR ELEMENTOS
function criarElemento(tag, classe = "", texto) {
  const elemento = document.createElement(tag);

  if (classe) {
    elemento.className = classe;
  }

  if (texto !== undefined) {
    elemento.textContent = texto;
  }

  return elemento;
}

// CRIAR SEÇÕES
function criarSecao(titulo) {
  const secao = document.createElement("section");

  secao.appendChild(
    criarElemento("h2", "", titulo)
  );

  document.querySelector(".conteudo").appendChild(secao);

  return secao;
}

// CRIAR LISTAS
function criarLista(itens) {
  const lista = document.createElement("ul");

  itens.forEach(item => {
    lista.appendChild(
      criarElemento("li", "", item)
    );
  });

  return lista;
}

// ==================================
// CABEÇALHO
// ==================================

const cabecalho = criarElemento("header", "cabecalho");

// FOTO DO GUILHERME
const foto = document.createElement("img");

foto.className = "foto";
foto.alt = "Foto de Guilherme da Luz Camacho";

// TENTAR DIFERENTES NOMES DA FOTO
const nomesFotos = [
  "foto.jpeg",
  "foto.jpeg.jpeg",
  "foto.jpg",
  "foto.jpg.jpeg",
  "foto.png",
  "foto.jpeg.jpg",
  "foto.jpg.jpg"
];

let indiceFoto = 0;

foto.onerror = function () {
  indiceFoto++;

  if (indiceFoto < nomesFotos.length) {
    foto.src = "./" + nomesFotos[indiceFoto];
  } else {
    const iniciais = criarElemento(
      "div",
      "iniciais",
      "GC"
    );

    foto.replaceWith(iniciais);
  }
};

// PRIMEIRA TENTATIVA
foto.src = "./" + nomesFotos[indiceFoto];

cabecalho.appendChild(foto);

// NOME E CARGO
const apresentacao = document.createElement("div");

apresentacao.appendChild(
  criarElemento("h1", "", cv.nome)
);

apresentacao.appendChild(
  criarElemento("p", "cargo", cv.cargo)
);

cabecalho.appendChild(apresentacao);
principal.appendChild(cabecalho);

// ==================================
// CONTEÚDO DO CURRÍCULO
// ==================================

const conteudo = criarElemento("div", "conteudo");
principal.appendChild(conteudo);

// SOBRE MIM
const sobre = criarSecao("Sobre Mim");

sobre.appendChild(
  criarElemento("p", "", cv.resumo)
);

// CONTATO
const contato = criarSecao("Contato");

const listaContatos = criarElemento("div", "contatos");

cv.contatos.forEach(item => {
  const bloco = criarElemento("div", "contato");

  if (item.link) {
    const link = document.createElement("a");

    link.href = item.link;
    link.textContent = item.texto;

    bloco.appendChild(link);
  } else {
    bloco.textContent = item.texto;
  }

  listaContatos.appendChild(bloco);
});

contato.appendChild(listaContatos);

// FORMAÇÃO ACADÊMICA
const formacao = criarSecao("Formação Acadêmica");

cv.formacao.forEach(item => {
  formacao.appendChild(
    criarElemento("h3", "", item.curso)
  );

  formacao.appendChild(
    criarElemento("p", "periodo", item.situacao)
  );
});

// EXPERIÊNCIA PROFISSIONAL
const experiencia = criarSecao("Experiência Profissional");

cv.experiencia.forEach(item => {
  experiencia.appendChild(
    criarElemento("h3", "", item.cargo)
  );

  experiencia.appendChild(
    criarElemento("p", "periodo", item.periodo)
  );

  experiencia.appendChild(
    criarLista(item.atividades)
  );
});

// HABILIDADES
const habilidades = criarSecao("Habilidades");

const etiquetas = criarElemento("div", "etiquetas");

cv.habilidades.forEach(habilidade => {
  etiquetas.appendChild(
    criarElemento("span", "etiqueta", habilidade)
  );
});

habilidades.appendChild(etiquetas);

// CONHECIMENTOS COMPLEMENTARES
const conhecimentos = criarSecao(
  "Conhecimentos Complementares"
);

cv.conhecimentos.forEach(item => {
  conhecimentos.appendChild(
    criarElemento("h3", "", item.titulo)
  );

  conhecimentos.appendChild(
    criarElemento("p", "", item.descricao)
  );
});

// PERFIL PROFISSIONAL
const perfil = criarSecao("Perfil Profissional");

cv.perfil.forEach(item => {
  const bloco = criarElemento("div", "perfil");

  bloco.appendChild(
    criarElemento("strong", "", item.titulo)
  );

  bloco.appendChild(
    criarElemento("p", "", item.descricao)
  );

  perfil.appendChild(bloco);
});

// INFORMAÇÕES ADICIONAIS
const adicionais = criarSecao("Informações Adicionais");

adicionais.appendChild(
  criarElemento("p", "", cv.adicionais)
);

// RODAPÉ
principal.appendChild(
  criarElemento(
    "footer",
    "rodape",
    "Currículo Online | Guilherme da Luz Camacho"
  )
);
