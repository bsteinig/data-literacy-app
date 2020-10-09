import React from 'react';
import './App.css';


function App() {
  return (
    <div className="Scalar">
      <body>
      {/*<div> 
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>  
      */}
        <article>
            <h2>Table of Contents</h2>
            <h3><a id="knownlink" href="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/users/27471">Authors</a></h3>
            <ul class="dropbtn">
              <li class="dropdown"><a href="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/what-is-data-literacy">
                <div class="media-left">
                  <img src="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/media/Download%20Image.png" alt="" class="media-object center-block"/>
                </div>
                </a>
                <div class="content-links">
                  <a href="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/what-is-data-literacy">
                  <h4>What is data literacy?</h4>
                  <p>This module provides an introduction to data literacy and its importance for informed and competent citizenship.</p>
                  </a>
                  <ul class>
                    <li class="dropdown-content"><a href="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/how-data-literate-are-you">
                      <div class="media-left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Online_Survey_Icon_or_logo.svg/240px-Online_Survey_Icon_or_logo.svg.png" alt="" class="media-object center-block"/>
                      </div>
                      <div class="content-links">
                        <h4>How data literate are you?</h4>
                        <p>Answer the questions in this survey about your own sense of data literacy.</p>
                      </div>
                      </a>
                    </li>
                    <li class="dropdown-content"><a href="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/a-closer-look-at-misleading-data-visualizations">
                        <div class="media-left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Magnifying_glass_01.svg/241px-Magnifying_glass_01.svg.png" alt="" class="media-object center-block"/>
                        </div>
                        <div class="content-links">
                          <h4>A Closer Look at Misleading Data Visualizations</h4>
                          <p>There are multiple ways that data visualizations can mislead readers or viewers. This exercise provides a summary of the ways data visualizations can deceive, and provides some examples.</p>
                        </div>
                        </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="dropdown">
                <div class="media-left">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Minard.png" alt="" class="media-object center-block"/>
                </div>
                <div class="content-links">
                  <h4>Why teach data literacy in social studies?</h4>
                  <p>Not only is data literacy required by state standards and included in standardized assessments, it is important for understanding core social studies disciplines. This module addresses the role that
                     data visualizations play in social studies standards, assessments, and texts. It also provides links to resources that can be used to support data literacy as a component of disciplinary literacy.</p>
                  <ul>
                    <li class="dropdown-content"><a href="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/how-data-literate-are-you">
                      <div class="media-left">
                        <img src="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/media/Screenshot%202020-05-15%2017.29.26.png" alt="" class="media-object center-block"/>
                      </div>
                      <div class="content-links">
                        <h4>Data Literacy in Social Studies Standards</h4>
                        <p>Answer the questions in this survey about your own sense of data literacy.</p>
                      </div>
                      </a>
                    </li>
                    <li class="dropdown-content"><a href="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/how-data-literate-are-you">
                        <div class="media-left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/NatlAssessmentOfEduProgress.jpg" alt="" class="media-object center-block"/>
                        </div>
                        <div class="content-links">
                          <h4>Data Literacy in Standardized Tests</h4>
                          <p>There are multiple ways that data visualizations can mislead readers or viewers. This exercise provides a summary of the ways data visualizations can deceive, and provides some examples.</p>
                        </div>
                        </a>
                    </li>
                    <li class="dropdown-content"><a href="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/how-data-literate-are-you">
                        <div class="media-left">
                        <img src="https://tile.loc.gov/storage-services/service/pnp/ppmsca/33800/33870r.jpg" alt="" class="media-object center-block"/>
                        </div>
                        <div class="content-links">
                          <h4>Data Visualizations as Primary Sources</h4>
                          <p>There are multiple ways that data visualizations can mislead readers or viewers. This exercise provides a summary of the ways data visualizations can deceive, and provides some examples.</p>
                        </div>
                        </a>
                    </li>
                    <li class="dropdown-content"><a href="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/how-data-literate-are-you">
                        <div class="media-left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Textbook.JPG" alt="" class="media-object center-block"/>
                        </div>
                        <div class="content-links">
                          <h4>Analyzing Data Visualizations in Social Studies Textbooks</h4>
                          <p>There are multiple ways that data visualizations can mislead readers or viewers. This exercise provides a summary of the ways data visualizations can deceive, and provides some examples.</p>
                        </div>
                        </a>
                    </li>
                    <li class="dropdown-content"><a href="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/how-data-literate-are-you">
                        <div class="media-left">
                        <img src="https://scalar.usc.edu/works/teaching-data-literacy-in-social-studies-an-interactive-professional-development-tool/media/Screenshot%202020-05-18%2007.32.36.png" alt="" class="media-object center-block"/>
                        </div>
                        <div class="content-links">
                          <h4>Finding Data and Data Visualizations Online</h4>
                          <p>There are multiple ways that data visualizations can mislead readers or viewers. This exercise provides a summary of the ways data visualizations can deceive, and provides some examples.</p>
                        </div>
                        </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
        </article>
      </body>
    </div>
  );
}

export default App;
