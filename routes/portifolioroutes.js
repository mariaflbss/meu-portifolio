const express = require("express");
const router = express.Router();

const estudante = {
  nome: "Maria Fernanda Laboissiere",
  curso: "Desenvolvimento de Software Multiplataforma",
  instituicao: "FATEC Jessen Vidal",
  ano: 2025
};

const disciplinas = [
  "Algoritmos e Lógica de Programação",
  "Desenvolvimento Web I",
  "Design Digital",
  "Banco de Dados",
  "Engenharia de Software I",
  "Sistemas Operacionais",
  "Desenvolvimento Web II",
  "Técnica de Programação I",
  "Matemática para Computação",
  "Banco de Dados Relacional",
  "Engenharia de Software II",
  "Estrutura de Dados"
];

const projetos = [
  {
    titulo: "API - Crows",
    semestre: "1º Semestre",
    objetivo: "Desenvolver uma plataforma web interativa que permita a análise de desempenho dos municípios do Estado de São Paulo com base em dados de exportação e importação.",
    resumo: "Criamos um site com foco em visualizações gráficas, destacando informações de exportações e importações realizadas pelos municípios paulistas. A ferramenta possui filtros como valor agregado, valor FOB, peso líquido (kg), tipo de carga e município de origem/destino. O objetivo é fornecer aos especialistas em logística uma forma clara e interativa de analisar dados reais para tomada de decisões estratégicas.",
    atuacao: "Atuei como desenvolvedora front-end, sendo responsável pela criação da página de feedback do usuário, responsividade geral do site e otimização da exibição dos gráficos no back-end. Foquei fortemente na experiência do usuário, clareza dos dados e na funcionalidade visual da aplicação.",
    tecnologias: ["GitHub", "Figma", "VS Code", "HTML", "CSS", "Python", "Flask", "Google Colab", "MySQL", "Jira", "Git"],
    link: "https://github.com/arthur-oliver/API-Crows",

  },
  {
    titulo: "Movin - INOVA CPS",
    semestre: "1º Semestre",
    objetivo: "Dar autonomia a pessoas com diferentes tipos de deficiência no transporte público, fornecendo informações em tempo real sobre trajetos e paradas de ônibus.",
    resumo: "Movin é um aplicativo inovador, adaptado para deficiências visuais, auditivas e cognitivas, fornecendo alertas sonoros, textos claros, ícones visuais de alto contraste e interface simplificada para garantir inclusão social e maior independência.",
    link: "#",
  },

    {
    titulo: "API - Kingfisher",
    semestre: "2º Semestre",
    objetivo: "Desenvolver uma plataforma web para resolver o problema da fragmentação de processos e informações na empresa NEWE, unificando a gestão administrativa, comercial e operacional em uma única plataforma.",
    resumo: "A plataforma unifica e padroniza processos que atualmente são realizados em ferramentas distintas como Microsoft Lists, Google Forms e planilhas. Isso reduz retrabalho, inconsistência de dados e facilita a análise de resultados.",
    atuacao: "Atuei como desenvolvedora front-end, sendo responsável pela criação de algumas páginas do projeto.",
    tecnologias: ["GitHub", "Figma", "VS Code", "HTML", "CSS", "JS", "TS", "React", "MySQL", "Jira", "Git"],
    link: "https://github.com/gustasvos/kingfisher-fatec-api",

  },

  ];
const contato = {
  email: "mariaf.laboissiere@gmail.com",
  linkedin: "https://www.linkedin.com/in/maria-fernanda-laboissiere-25362b353/",
  github: "https://github.com/mariaflbss"
};


router.get("/", (req, res) => res.render("index", { title: "Início", estudante }));

router.get("/sobre", (req, res) => res.render("sobre", { title: "Sobre Mim", estudante }));

router.get("/disciplinas", (req, res) => res.render("disciplinas", { title: "Disciplinas", estudante, disciplinas }));

router.get("/projetos", (req, res) => {
  console.log("Projetos que vou enviar para o template:");
  projetos.forEach(proj => console.log(proj.titulo));
  res.render("projetos", { 
    title: "Projetos",           
    estudante,
    projetos
  });
});

router.get("/contato", (req, res) => res.render("contato", { title: "Contato", estudante, contato }));

router.get("/dashboard", (req, res) => {
  const stats = {
    totalDisciplinas: disciplinas.length,
    totalProjetos: projetos.length,
    tecnologias: ["HTML", "CSS", "Node.js", "EJS", "JavaScript", "TypeScript", "React", "Tailwind", "Bootstrap", "Mysql", "Python", "Flask", "Git"]
  };

  console.log(stats.tecnologias);
  res.render("dashboard", { title: "Dashboard", estudante, stats });
});


module.exports = router;