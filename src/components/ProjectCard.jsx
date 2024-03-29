import PropTypes from "prop-types";

export default function ProjectCard({
  projectName,
  projectType,
  projectDescription,
  technologiesUsed,
  projectLink,
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md mb-8">
      <h1 className="text-2xl font-bold mb-2">{projectName}</h1>
      <p className="text-gray-600">{projectType}</p>
      <p className="text-gray-800 my-4">{projectDescription}</p>
      <h2 className="text-lg font-semibold mb-2">
        Technologies Used:{" "}
        <span className="text-blue-500">{technologiesUsed}</span>
      </h2>
      <a href={projectLink} className="text-blue-500 hover:underline">
        The project can be viewed here
      </a>
    </div>
  );
}

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  technologiesUsed: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};
