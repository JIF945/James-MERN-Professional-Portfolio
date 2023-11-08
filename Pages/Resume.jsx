import Resume from "../components/Project";

function Reseum () {

    const resume =[
        {
            title: 'resume 1',
            resumeLink:'https://www.resume.com'
        },
    ];

    return (
        <section>
           <h2> Resume </h2>
            <div className="container">
                <div className="row">
                    {resume.map((project, index) => (
                        <Resume key = {index} { ...project}/>
                    ))}
                    <div className="col-md-15">
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reseum;