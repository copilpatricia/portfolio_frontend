function Projects({projects}) {
    return (
        <>
           {projects.map((project) => {
            return (
                <>
                
                <h1>{project.title}</h1>
                <img src={project.image} alt="Website view" />
                <ul>
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