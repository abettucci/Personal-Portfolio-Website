import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Aquí puedes obtener la información del proyecto según el slug
  // Por ejemplo, podrías tener un objeto con datos de tus proyectos
  const projectData = {
    "my-project": {
      title: "Mi Proyecto",
      description: "Descripción de mi proyecto.",
      imageUrl: "URL de la imagen"
    },
    // Agrega más proyectos aquí
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
