import Link from 'next/link';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Mi Proyecto",
      description: "Descripción de mi proyecto.",
      slug: "my-project" // Asegúrate de que coincida con el nombre de la carpeta
    },
    // Otros proyectos...
  ];

  return (
    <div>
      <h2>Mis Proyectos</h2>
      <ul>
        {projectData.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link href={`/projects/${project.slug}`}>
              Ver proyecto
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
