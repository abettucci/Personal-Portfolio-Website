// app/projects/[slug]/page.server.js

export async function generateStaticParams() {
  const slugs = ['my-project', 'project-2', 'project-3']; // Simula obtener los slugs de algún lugar
  return slugs.map(slug => ({
    slug: slug,
  }));
}

// Aquí podrías definir otras funciones o lógicas del servidor si es necesario
