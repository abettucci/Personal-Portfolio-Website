export default function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <a href={project.link} className="text-blue-600">Ver más</a>
    </div>
  );
}
