import Project from '../components/Project';

function Portfolio() {
    const project = [

    ];

    return (
        <section>
            <h2> Portfolio </h2>
            <div className='portfolio'>
                {project.map(( project, index) => (
                    <Project key = {index} {...Project}/>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
