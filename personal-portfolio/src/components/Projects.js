import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import YoutubeIFrame from "./YoutubeIFrame.tsx";

// programming / sites
import lpVermelhoVertente from "../assets/img/vermelhoVertendeLandingPage.png";
import mathPlots from "../assets/img/mathPlots.png";
import miniBlog from "../assets/img/miniBlog.png";
import casaDoEletricista from "../assets/img/casaDoEletricista.png";
import barretoMetais from "../assets/img/barretoMetais.png";

import laptop from "../assets/img/laptop.webp";

// design
import socialMedia from "../assets/img/socialMediaBanner.png";
import SiteBanner from "../assets/img/bannerSite.png";
import studioIdentity from "../assets/img/studioIdentity.png";
import pxCards from "../assets/img/mockupCartãoPX.png";
import idvVermelhoVertente from "../assets/img/vermelhoVertenteIdentity.png";

import colorSharp2 from "../assets/img/color-sharp2.png";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const videoId = "oA3TkT6f9Vc";
  const videoTitle = "Projeto Motion Design - Parallax Design";

  const programmingProjects = [
    {
      title: "MiniBlog",
      description:
        "Um blog funcional, construido com ReactJS e Firebase, com cadastro e login de usuário. Permite a criação de novos posts, visíveis a qualquer visitante do blog, além de contar com um dashboard administrativo onde pode-se excluir e editar posts autorais.",
      imgUrl: miniBlog,
      projUrl: "https://github.com/kaikbarreto/parallaxminiblog",
    },
    {
      title: "Parallax Math Plots",
      description:
        "Uma aplicação que combina lógica de programação com álgebra. Trata-se de um programa que recebe como entrada uma expressão matemática (uma função do segundo grau) e retorna um gráfico relativo à função algébrica.",
      imgUrl: mathPlots,
      projUrl: "https://github.com/kaikbarreto/parallaxmathplots",
    },
    {
      title: "Cadastro e Consulta de Usuários com Python e SQL",
      description:
        "Um programa escrito em linguagem Python e SQL, o qual permite cadastrar e consultar usuários de uma base de dados.",
      imgUrl: laptop,
      projUrl: "https://www.youtube.com/watch?v=68_SeJlJvCk",
    },
    {
      title: "Site Casa do Eletricista",
      description:
        "Uma página institucional para uma empresa brasileira de artigos elétricos, localizada na Zona Oeste do Rio de Janeiro",
      imgUrl: casaDoEletricista,
      projUrl: "https://www.github.com/kaikbarreto/casadoeletricista",
    },
    {
      title: "Site Institucional Barreto Metais",
      description:
        "Uma página profissional, concisa e sofisticada para uma empresa brasileira de reciclagem, situada na Zona Oeste do Rio de Janeiro",
      imgUrl: barretoMetais,
      projUrl: "https://www.barretometais.com",
    },
    {
      title: "Landing Page Vermelho Vertente",
      description:
        "Uma landing page focada na conversão em vendas de um curso online sobre cura espiritual.",
      imgUrl: lpVermelhoVertente,
      projUrl: "https://landingpagevermelhovertente.netlify.app",
    },
  ];

  const designProjects = [
    {
      title: "Identidade Visual Studio Chaider",
      description:
        "Uma identidade visual completa, incluindo: Logotipo, padrão, paleta de cores, tipografia, cartão de visita, entre outros elementos gráficos e impressos.",
      imgUrl: studioIdentity,
      projUrl:
        "https://www.instagram.com/p/CoaHkwZuFiQ/?utm_source=ig_web_copy_link",
    },
    {
      title: "Identidade Visual Parallax Design",
      description:
        "Cartão de visita com frente e verso, utilizando a paleta de cores e estilo da identidade visual da agência de design Parallax Design.",
      imgUrl: pxCards,
      projUrl: "https://www.instagram.com/parallax_dsgn",
    },
    {
      title: "Dezenas de posts para redes sociais",
      description:
        "Mais de um ano de experiência produzindo criativos para redes sociais",
      imgUrl: socialMedia,
      projUrl:
        "https://www.instagram.com/stories/highlights/18233929711180864/",
    },
    {
      title: "Banner para E-commerce",
      description:
        "Um banner minimalista e moderno para um e-commerce de moda masculina",
      imgUrl: SiteBanner,
      projUrl: "https://www.instagram.com/parallax_dsgn",
    },
    {
      title: "Identidade Visual Vermelho Vertente",
      description:
        "Uma identidade visual concisa, completa, riquíssima em detalhes e elementos para reforçar a credibilidade e autoridade da marca.",
      imgUrl: idvVermelhoVertente,
      projUrl: "https://landingpagevermelhovertente.netlify.app",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p className="text-gradient">
              Aqui você pode ver <strong>um pouco do meu trabalho</strong>,
              tanto como programador quanto como designer gráfico.
            </p>
            <Tab.Container id="projets-tabs" defaultActiveKey="design">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="design" className="categoria">
                    Design Gráfico
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="programming" className="categoria">
                    Programação / Sites
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <p className="clique">
                <span>
                  Passe o dedo/mouse por cima para ver detalhes. Clique na
                  descrição de qualquer projeto para ver o projeto na íntegra.
                </span>
              </p>
              <Tab.Content>
                <Tab.Pane eventKey="programming">
                  <Row>
                    {programmingProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="design">
                  <Row>
                    {designProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
        <Row>
          <h2 className="text-gradient" id="videoTitle">
            {videoTitle}
          </h2>
          <YoutubeIFrame videoId={videoId} videoTitle={videoTitle} />
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="color sharp"
      />
    </section>
  );
};
export default Projects;
