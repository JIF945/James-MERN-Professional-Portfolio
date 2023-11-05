const Project = ({Title, deployedLink, githubLink}) => {
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
        </div>
    );

}
export default Project;



