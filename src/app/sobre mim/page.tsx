import Link from 'next/link';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-800 text-white flex flex-col items-center">
      <header className="flex justify-between items-center p-4 w-full">
        <h1 className="text-4xl font-bold text-blue-300">Sobre Mim</h1>
        <Link href="/" className="text-blue-300 hover:text-blue-500">
          Voltar para Home
        </Link>
      </header>

      <div className="flex flex-col items-center justify-center mt-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Olá, meu nome é Yngred</h2>
        <p className="text-lg text-center mb-4">
          Sou estudante de Ciência da Computação na Universidade Federal Tecnológica do Paraná e sou apaixonada por tecnologia.
        </p>
      </div>