"use client";

import imagem from "@/assets/euAnime.jpeg";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const phrases = [
    "Olá, sou a Yngred",
    "Sou estudante de BCC",
    "Sou da Haken"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showLinks, setShowLinks] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-800 text-white">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-4xl font-bold text-blue-300">H A K E N</h1>
        {/* Botão para mostrar links de redes sociais */}
        <div className="relative">
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition duration-300"
          >
            Contatos
          </button>

          {/* Links das redes sociais aparecem apenas se showLinks for true */}
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
      </header>

      <div className="flex flex-col items-center justify-center mt-12 relative">
        <div className="absolute rounded-full h-56 w-56 bg-gradient-to-r from-blue-500 to-blue-300 opacity-50 blur-lg -z-10" />

        <img
          src={imagem.src}
          className="rounded-full h-48 w-48 mb-8"
          alt="Yngred"
        />

        <h1 className="text-4xl font-bold mb-4 text-center">
          {displayedText}
          <span className="bg-blue-300 w-1 h-6 inline-block animate-pulse ml-1"></span>
        </h1>

        <p className="text-lg text-center mb-4 max-w-lg mx-4">
          Sou desenvolvedora backend com foco em criar soluções eficientes e bem estruturadas.
        </p>

        {/* Seção "Sobre Mim" */}
        <h2 className="text-3xl font-bold mt-6">Sobre mim</h2>
        <p className="text-lg text-center mt-2 mb-8 max-w-lg mx-4">
          Meu nome é Yngred Kaline e atualmente sou estudante de Ciência da Computação na Universidade Tecnológica Federal do Paraná. Sou completamente apaixonada por tecnologia, mas atualmente atuo na área de marketing na Haken.
        </p>
      </div>
    </div>
  );
}