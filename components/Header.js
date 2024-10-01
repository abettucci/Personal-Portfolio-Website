import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">Mi Portafolio</h1>
        <nav>
          <Link href="/">
            <a className="mr-4">Inicio</a>
          </Link>
          <Link href="/projects">
            <a className="mr-4">Proyectos</a>
          </Link>
          <Link href="/about">
            <a>Sobre mí</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
