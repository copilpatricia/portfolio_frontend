function Projects({projects}) {
    return (
        <>
           {projects.map((project) => {
            return (
                <>
                
                <h1>{project.title}</h1>
                <img src={project.image} alt="Website view" />
                <ul>
                    {project.technologies.map((technology, index) => (
                        <li key={index}>{technology}</li>
                        
           ))}       
                </ul>
                <p><a href={project.site}>See project</a></p>
                </>
            )
           })}
        </>
      
    )
}

export default Projects