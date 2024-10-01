// app/projects/[slug]/page.js

// Esto debe ser un Componente del Servidor
export async function generateStaticParams() {
  // Aquí defines los slugs disponibles para tu proyecto
  const slugs = ['my-project', 'project-2', 'project-3']; // Simula obtener los slugs de algún lugar
  return slugs.map(slug => ({ slug })); // Devuelve un array de objetos con el slug
}

// Componente del Cliente
const ProjectPage = ({ params }) => {
  const { slug } = params; // Ahora estás obteniendo el slug desde los parámetros

  const projectData = {
    "my-project": {
      title: "Mi Proyecto",
      description: "Descripción de mi proyecto.",
      imageUrl: "URL de la imagen"
    },
    "project-2": {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2.",
      imageUrl: "URL de la imagen 2"
    },
    "project-3": {
      title: "Proyecto 3",
      description: "Descripción del proyecto 3.",
      imageUrl: "URL de la imagen 3"
    }
  };

  const project = projectData[slug];

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.imageUrl} alt={project.title} />
    </div>
  );
};

export default ProjectPage;
