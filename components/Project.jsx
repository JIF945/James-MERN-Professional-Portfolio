const Project = ({Title, deployedLink, githubLink, resumeLink}) => {
    return(
        <div className="project">
            <h3>{Title}</h3>
        {/* // linke to app and github repo */}

        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            Profolio
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
            Github
        </a>

        <a href={resumeLink} target="_blank" rel="noonener noreferrer">
            resume
        </a>
        </div>
    );

}
export default Project;



