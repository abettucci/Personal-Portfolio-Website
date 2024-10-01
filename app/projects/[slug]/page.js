// app/projects/[slug]/page.js

"use client";

import { useRouter } from 'next/navigation';

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Aquí puedes obtener la información del proyecto según el slug
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
