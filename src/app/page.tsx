import imagem from "@/assets/euAnime.jpeg"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-blue-100">
      <img src={imagem.src} className="rounded-2xl h-48"  alt="" />         
      <h1 className="text-4xl font-bold mb-4 text-center">Olá, sou a Yngred</h1>
    
      <p className="text-lg text-center">
        Sou desenvolvedora backend com foco em criar soluções eficientes e bem estruturadas. 
      </p>
    </div>
  );
}
