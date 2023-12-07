import Project from '../components/Project';

function Portfolio() {
    const projects = [
        {
            title: 'Professional Portfolio',
            description: 'yada yada yada',
            image: '',
            githubLink: '',
            deployedLink: 'https://polite-cannoli-952c90.netlify.app',
            
        },
        {
            title: 'GitHub',
            githubLink: 'https://github.com/JIF945?tab=repositories'
            
        },
        {
            title: 'Car-Rental-Project'

        }
        
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
