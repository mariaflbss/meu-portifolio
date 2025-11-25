const express = require("express");
const router = express.Router();

// models do Sequelize
const Disciplina = require("../models/Disciplina");
const Projeto = require("../models/Projeto");

const estudante = {
  nome: "Maria Fernanda Laboissiere",
  curso: "Desenvolvimento de Software Multiplataforma",
  instituicao: "FATEC Jessen Vidal",
  ano: 2025
};

router.get("/", (req, res) => {
  res.render("index", { title: "Início", estudante });
});

router.get("/sobre", (req, res) => {
  res.render("sobre", { title: "Sobre Mim", estudante });
});

router.get("/contato", (req, res) => {
  const contato = {
    email: "mariaf.laboissiere@gmail.com",
    linkedin: "https://www.linkedin.com/in/maria-fernanda-laboissiere-25362b353/",
    github: "https://github.com/mariaflbss"
  };

  res.render("contato", { title: "Contato", estudante, contato });
});

//disicplinas

router.get("/disciplinas", async (req, res) => {
  const disciplinas = await Disciplina.findAll();
  res.render("disciplinas", { title: "Disciplinas", estudante, disciplinas });
});

// projetos

// GET 
router.get("/projetos", async (req, res) => {
  const projetos = await Projeto.findAll();
  res.render("projetos", { title: "Projetos", estudante, projetos });
});

// POST 
router.post("/projetos", async (req, res) => {
  try {
    const novoProjeto = await Projeto.create(req.body);
    res.status(201).json({ mensagem: "Projeto criado!", projeto: novoProjeto });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// PUT 
router.put("/projetos/:id", async (req, res) => {
  try {
    const projeto = await Projeto.findByPk(req.params.id);

    if (!projeto) {
      return res.status(404).json({ erro: "Projeto não encontrado" });
    }

    await projeto.update(req.body);
    res.json({ mensagem: "Projeto atualizado!", projeto });

  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// DELETE 
router.delete("/projetos/:id", async (req, res) => {
  try {
    const projeto = await Projeto.findByPk(req.params.id);

    if (!projeto) {
      return res.status(404).json({ erro: "Projeto não encontrado" });
    }

    await projeto.destroy();
    res.json({ mensagem: "Projeto removido!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

//dashboard

router.get("/dashboard", async (req, res) => {
  const totalDisciplinas = await Disciplina.count();
  const totalProjetos = await Projeto.count();

  const stats = {
    totalDisciplinas,
    totalProjetos,
    tecnologias: [
      "HTML", "CSS", "Node.js", "EJS", "JavaScript",
      "TypeScript", "React", "Tailwind", "Bootstrap",
      "MySQL", "Python", "Flask", "Git"
    ]
  };

  res.render("dashboard", { title: "Dashboard", estudante, stats });
});

module.exports = router;
