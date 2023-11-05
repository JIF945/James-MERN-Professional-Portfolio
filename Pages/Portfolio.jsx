import Project from '../components/Project';

function Portfolio() {
    const project = [
        {
            title: 'project 1',
            deployedLink: 'https://polite-cannoli-952c90.netlify.app',
            githubLink: 'https://github.com/JIF945?tab=repositories'
        },
    ];

    return (
        <section>
            <h2> Portfolio </h2>
            <div className='portfolio'>
                {project.map((project, index) => (
                    <Project key = {index} {...project}/>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
