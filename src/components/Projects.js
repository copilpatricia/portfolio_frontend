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
                    <li>{project.technologies[0]}</li>
                    <li>
                    {project.technologies[1]}
                    </li>
                    
                </ul>
                </>
            )
           })}
        </>
      
    )
}

export default Projects