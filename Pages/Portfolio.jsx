import Project from '../components/Project';

function Portfolio() {
    const projects = [
        {
            title: 'Professional Portfolio',
            deployedLink: 'https://polite-cannoli-952c90.netlify.app',
            
        },
        {
            title: 'GitHub',
            githubLink: 'https://github.com/JIF945?tab=repositories'
            
        }
        // Add more projects as needed
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className='portfolio-portfolio-expand-lg'>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
