"use client";

import { FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const phrases = [
    "Olá, sou a Yngred",
    "Sou estudante de ciência da computação",
    "Sou da Hakenej"
  ];
  
  const curiosities = [
    "A primeira programadora da história foi Ada Lovelace, no século XIX.",
    "O primeiro computador digital eletrônico foi o ENIAC, construído em 1945.",
    "Mais de 90% de todas as informações do mundo foram criadas nos últimos dois anos.",
    "O primeiro vírus de computador foi criado em 1986 e se chamava Brain.",
    "O termo 'bug' para se referir a erros em programas vem de um incidente real, quando uma mariposa causou um problema em um computador em 1947.",
    "404 O famoso erro 404 Not Found foi inspirado em uma sala de servidores em que os criadores da web costumavam trabalhar.",
    "O primeiro mouse foi inventado em 1964 por Douglas Engelbart e era feito de madeira, não de plástico. Ele foi chamado de mouse por causa do cabo que se parecia com a cauda de um rato!",
    "Em 2021, estimou-se que existiam cerca de 26 milhões de programadores no mundo. Isso representa um aumento significativo, com uma previsão de que esse número chegue a 45 milhões até 2030.",
    "O primeiro e-mail foi enviado em 1971 por Ray Tomlinson, um engenheiro que também inventou o símbolo “@” para separar o nome do usuário do nome do computador.",
    " A tecnologia Wi-Fi foi inicialmente desenvolvida para ser usada em um projeto de sistema de segurança de uma empresa chamada CSIRO, na Austrália",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showLinks, setShowLinks] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showHakenLinks, setShowHakenLinks] = useState(false);
  const [showCuriosity, setShowCuriosity] = useState(false);
  const [currentCuriosity, setCurrentCuriosity] = useState("");

  useEffect(() => {
    if (charIndex < phrases[currentPhraseIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(phrases[currentPhraseIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }
  }, [charIndex, currentPhraseIndex, phrases]);

  const handleCuriosityClick = () => {
    const randomIndex = Math.floor(Math.random() * curiosities.length);
    setCurrentCuriosity(curiosities[randomIndex]);
    setShowCuriosity(!showCuriosity);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-800 text-white">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img
            src="euAnime.jpeg"
            alt="Logo Haken"
            className="h-10 w-10"
          />
          <h1 className="text-4xl font-bold text-blue-300">H A K E N</h1>
        </div>

        <div className="flex space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowLinks(!showLinks)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition duration-300"
            >
              Contate me 
            </button>
            {showLinks && (
              <div className="absolute right-0 mt-2 bg-gray-800 rounded-md shadow-lg p-2">
                <a
                  href="https://github.com/Yngred"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-lg text-blue-300 hover:text-blue-500"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href="https://www.instagram.com/yngred_ini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-lg text-blue-300 hover:text-blue-500 mt-2"
                >
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowSkills(!showSkills)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition duration-300"
            >
              Conhecimentos
            </button>
            {showSkills && (
              <div className="absolute right-0 mt-2 bg-gray-800 rounded-md shadow-lg p-2">
                <p className="text-lg text-blue-300">Python</p>
                <p className="text-lg text-blue-300 mt-2">JavaScript</p>
                <p className="text-lg text-blue-300 mt-2">HTML</p>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowHakenLinks(!showHakenLinks)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition duration-300 flex items-center"
            >
              <FaPhone className="mr-2" /> Haken
            </button>
            {showHakenLinks && (
              <div className="absolute right-0 mt-2 bg-gray-800 rounded-md shadow-lg p-2">
                <a
                  href="https://www.instagram.com/hakenej/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-lg text-blue-300 hover:text-blue-500"
                >
                  <FaInstagram className="mr-2" /> Instagram
                </a>
                <a
                  href="mailto:contato@haken.com"
                  className="flex items-center text-lg text-blue-300 hover:text-blue-500 mt-2"
                >
                  <FaEnvelope className="mr-2" /> Email
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center mt-12 relative">
        <div className="absolute rounded-full h-56 w-56 bg-gradient-to-r from-blue-500 to-blue-300 opacity-50 blur-lg -z-10" />

        {/* IMAGEM AQUI */}

        <h1 className="text-4xl font-bold mb-4 text-center">
          {displayedText}
          <span className="bg-blue-300 w-1 h-6 inline-block animate-pulse ml-1"></span>
        </h1>

        <p className="text-lg text-center mb-4 max-w-lg mx-4">
          Sou desenvolvedora backend com foco em criar soluções eficientes e bem estruturadas.
        </p>

        <h2 className="text-3xl font-bold mt-6">Sobre mim</h2>
        <p className="text-lg text-center mt-2 mb-8 max-w-lg mx-4">
          Oi, um pouquinho sobre mim. Então, meu nome é Yngred Kaline e atualmente sou estudante de Ciência da Computação na Universidade Tecnológica Federal do Paraná. Sou completamente apaixonada por tecnologia, mas atualmente atuo na área de marketing na Haken.
        </p>

        {/* Botão "Você sabia?" */}
        <button
          onClick={handleCuriosityClick}
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition duration-300"
        >
          Você sabia?
        </button>
        
        {/* Exibir curiosidade */}
        {showCuriosity && (
          <div className="mt-4 p-4 bg-gray-800 rounded-md shadow-lg">
            <p className="text-lg text-blue-300">{currentCuriosity}</p>
          </div>
        )}
      </div>
    </div>
  );
}  









