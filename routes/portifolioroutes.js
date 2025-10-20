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

let projetos = [
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

router.get("/", (req, res) => res.render("index", { title: "Início", estudante }));

router.get("/sobre", (req, res) => res.render("sobre", { title: "Sobre Mim", estudante }));

router.get("/disciplinas", (req, res) => res.render("disciplinas", { title: "Disciplinas", estudante, disciplinas }));

router.get("/contato", (req, res) => {
  const contato = {
    email: "mariaf.laboissiere@gmail.com",
    linkedin: "https://www.linkedin.com/in/maria-fernanda-laboissiere-25362b353/",
    github: "https://github.com/mariaflbss"
  };
  res.render("contato", { title: "Contato", estudante, contato });
});

router.get("/dashboard", (req, res) => {
  const stats = {
    totalDisciplinas: disciplinas.length,
    totalProjetos: projetos.length,
    tecnologias: ["HTML", "CSS", "Node.js", "EJS", "JavaScript", "TypeScript", "React", "Tailwind", "Bootstrap", "Mysql", "Python", "Flask", "Git",]
  };
  res.render("dashboard", { title: "Dashboard", estudante, stats });
});

// CRUD de projetos

// GET para listar todos os projetos e renderizar a página "projetos.ejs"
router.get("/projetos", (req, res) => {
  res.render("projetos", { title: "Projetos", estudante, projetos });
});

// POST para adicionar um novo projeto à lista
router.post("/projetos", (req, res) => {
  const novoProjeto = req.body;
  projetos.push(novoProjeto);
  res.status(201).json({ mensagem: "Projeto adicionado com sucesso!", projeto: novoProjeto });
});

// PUT para atualizar um projeto existente, identificado pelo índice "id"
router.put("/projetos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= projetos.length) {
    return res.status(404).json({ erro: "Projeto não encontrado" });
  }
  projetos[id] = req.body;
  res.json({ mensagem: "Projeto atualizado com sucesso", projeto: projetos[id] });
});

// DELETE para remover um projeto, identificado pelo índice "id"
router.delete("/projetos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= projetos.length) {
    return res.status(404).json({ erro: "Projeto não encontrado" });
  }
  const projetoRemovido = projetos.splice(id, 1);
  res.json({ mensagem: "Projeto removido com sucesso", projeto: projetoRemovido });
});

module.exports = router;