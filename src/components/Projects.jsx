import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Projects = () => {


    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch data from the projects.json file
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.log("Error fetching project data:", error));
    }, []);


    return (
        <div>
            <div className="py-16 sm:py-20"> {/* Adjusted padding for better mobile experience */}
                <div className="w-11/12 sm:w-10/12 mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted width & padding for responsiveness */}
                    <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 md:mb-10">My Projects</h2> {/* Dynamic heading size & spacing */}

                    {/* Map through each project in the data */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> {/* Added extra column for larger screens */}
                        {projects.map((project, index) => (
                            <div key={index} className="card bg-base-100 w-full sm:w-80 md:w-full shadow-md hover:shadow-lg transition-shadow duration-300"> {/* Adjusted width & added hover effect */}
                                {/* Image section */}
                                <figure className="px-6 sm:px-8 pt-6 sm:pt-8"> {/* Adjusted padding for better spacing */}
                                    <img
                                        src={project.project_image}
                                        alt={project.project_name}
                                        className="rounded-xl w-full h-48 sm:h-56 md:h-60 object-cover"

                                    // Adjusted height for consistency

                                    />
                                </figure>

                                {/* Card body with title, description, and button */}
                                <div className="card-body items-center text-center">
                                    <h2 className="text-lg sm:text-xl font-semibold"> {/* Adjusted text size */}
                                        {project.project_name}
                                    </h2>
                                    {/* <p className="text-gray-700 text-base">{project.brief_description}</p> */}
                                    <div className="card-actions mt-4">
                                        <Link to={`/project-details/${project.project_name}`}>
                                            <button className="btn btn-primary">View More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;