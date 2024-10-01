import Link from 'next/link';

const Projects = () => {
  return (
    <div>
      <h1>Proyectos</h1>
      {/* Lista de proyectos aquí */}
      
      <Link href="/" className="button">
        Volver al Home
      </Link>
    </div>
  );
};

export default Projects;
