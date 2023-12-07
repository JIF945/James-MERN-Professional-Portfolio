const Project = ({ title, deployedLink, githubLink, resumeLink }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            {/* Links to app, GitHub repo, and resume */}
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                Portfolio
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                Resume
            </a>
        </div>
    );
};

export default Project;



