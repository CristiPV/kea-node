( async function getProjects() {
    const response = await fetch( "/api/projects" );
    const result = await response.json();

    const projectsCarousel = document.getElementById( "carouselProjectsDark" );
    const projectsIndicator = projectsCarousel.getElementsByClassName( "carousel-indicators" )[0];
    const projectsDiv = projectsCarousel.getElementsByClassName( "carousel-inner" )[0];

    result.projects.map( ( project, index ) => {
        
        // Creating a carousel-item ( the carousel used is a bootstrap component )
        // Template / Structure :
        // <div class="carousel-item active">
        //     <img src="..." class="d-block w-100" alt="..."> -- background image
        //     <div class="carousel-caption">
        //       <h5>Slide label</h5>
        //       <p>Placeholder content.</p>
        //     </div>
        // </div>

        const carouselItem = document.createElement( "div" );
        carouselItem.classList.add( "carousel-item" );
        if ( index == 0 ) {
            carouselItem.classList.add( "active" );
        }

        const projectDiv = document.createElement( "div" );
        projectDiv.classList.add( "carousel-caption" );
        
        const projectImageContainer = document.createElement( "div" );
        projectImageContainer.classList.add( "image-container" );
        
        const projectImage = document.createElement( "img" );
        projectImage.classList.add( ...["d-block", "w-100"] );
        projectImage.setAttribute( "src", "/images/" + project.image );
        projectImage.setAttribute( "alt", "Project: " + project.title + " background." );
        projectImageContainer.appendChild( projectImage );

        const projectTextContainer = document.createElement( "div" );
        projectTextContainer.classList.add( "text-container" );

        const projectTitle = document.createElement( "h5" );
        projectTitle.classList.add( "project-title" );
        projectTitle.classList.add( "fs-2" );
        projectTitle.classList.add( "fw-bold" );
        projectTitle.innerText = project.title;

        const projectDescription = document.createElement( "p" );
        projectDescription.classList.add( "project-desc" );
        projectDescription.classList.add( "fs-4" );
        projectDescription.innerText = project.description;

        const projectTechnologies = document.createElement( "p" );
        projectTechnologies.classList.add( "project-technologies" );
        projectTechnologies.classList.add( "fs-5" );
        projectTechnologies.classList.add( "fw-light" );
        projectTechnologies.classList.add( "fst-italic" );
        projectTechnologies.classList.add( "text-muted" );
        projectTechnologies.innerText = "Technologies involved: ";
        for( tech of project.technologiesInvolved ) {
            projectTechnologies.innerText += tech + " ";
        }

        const githubButton = document.createElement( "a" );
        githubButton.classList.add( "project-git-url" );
        githubButton.classList.add( "btn" );
        githubButton.classList.add( "btn-outline-dark");
        githubButton.classList.add( "mx-1" );
        githubButton.href = project.gitURL;
        githubButton.setAttribute( "target", "_blank" );
        githubButton.setAttribute( "role", "button" );
        const githubIcon = "<svg xmlns=\"http:\/\/www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-github\" viewBox=\"0 0 16 16\"><path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"/></svg>";
        githubButton.innerHTML = githubIcon + " GitHub";

        projectTextContainer.appendChild( projectTitle );
        projectTextContainer.appendChild( projectDescription );
        projectTextContainer.appendChild( projectTechnologies );
        projectTextContainer.appendChild( githubButton );

        projectDiv.appendChild( projectImageContainer );
        projectDiv.appendChild( projectTextContainer )
        
        carouselItem.appendChild( projectDiv );

        // Creating a carousel-indicator ( bootstrap component )
        // Template / Structure:
        // <button type="button" data-bs-target="#carouselProjectsDark" data-bs-slide-to="0" 
        //         class="active" aria-current="true" aria-label="Slide 1">
        // </button>

        const carouselIndicator = document.createElement( "button" );
        if ( index == 0 ) {
            carouselIndicator.classList.add( "active" );
            carouselIndicator.setAttribute( "aria-current", "true" );
        }
        carouselIndicator.setAttribute( "type", "button" );
        carouselIndicator.setAttribute( "data-bs-target", "#carouselProjectsDark" );
        carouselIndicator.setAttribute( "data-bs-slide-to", index );
        carouselIndicator.setAttribute( "aria-label", "Slide " + ( index + 1 ) );

        projectsIndicator.appendChild( carouselIndicator );
        projectsDiv.appendChild( carouselItem );
    } );
} ) ();

/* Alternative to async - await
fetch( "/api/projects" ).then( res => res.json() ).then( console.log );
*/