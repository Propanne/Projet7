import '../styles/posts.scss'
import { Helmet } from 'react-helmet';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Import assets
import logoGroupomania from '../assets/icon-left-font-monochrome-white.svg';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


function HomePage() {
    return (
      <div>
          <Helmet>
              <title>Accueil - Groupomania</title>
          </Helmet>
          <div id="logoContainer" className="row header-logo">
            <img id="bottomCompanyLogo" src={logoGroupomania} alt="logo d'entreprise Groupomania"/>
          </div>
          <Nav
            justify variant="tabs"
            activeKey="/posts"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            className="justify-content-center"
          >
            <Nav.Item>
              <Nav.Link href="/posts">Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="creation-post">Créer un post</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="deconnexion">Déconnexion</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="post-container">
            <div className="post-list-container container">
              <div className="post-single-super-container col-md-4">
                <div className="post-single-container rounded-4 card">
                  <div className="card-header">Nom de compte - Auteur</div>
                  <div className="card-body post-single-text"><img class="post-single-image" src={logoGroupomania}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales nunc vel ligula pharetra, vel ultrices quam commodo. Aenean sodales cursus justo, vel interdum elit aliquet quis. Vivamus sed volutpat velit, sit amet iaculis tortor. Nullam venenatis nibh sit amet magna molestie porttitor. Suspendisse vel molestie justo, et scelerisque nisl. Mauris blandit tellus sit amet porttitor interdum. Fusce pellentesque varius ex non lobortis. Duis turpis augue, sodales sed sollicitudin at, volutpat accumsan sem. Nullam enim mi, feugiat non interdum sed, ultrices ac libero. Vestibulum vitae est bibendum quam pellentesque ullamcorper nec eget dui. Mauris auctor ipsum nec enim eleifend ultrices. Morbi iaculis vulputate consequat. Sed vitae felis tellus. Ut ut sem posuere, viverra dolor vel, lobortis lacus. Praesent id augue mollis, maximus arcu sit amet, consequat elit.</div>
                  <div className="card-footer">
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faWandMagicSparkles} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faXmark} />
                    </i>
                  </div>
                </div>
                <div className="post-single-container rounded-4 col-md-4">
                </div>
                <div className="post-single-container rounded-4 col-md-4">
                </div>
              </div>
              <div className="post-single-super-container col-md-4">
                <div className="post-single-container rounded-4 card">
                  <div className="card-header">Nom de compte - Auteur</div>
                  <div className="card-body post-single-text"><img class="post-single-image" src={logoGroupomania}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales nunc vel ligula pharetra, vel ultrices quam commodo. Aenean sodales cursus justo, vel interdum elit aliquet quis. Vivamus sed volutpat velit, sit amet iaculis tortor. Nullam venenatis nibh sit amet magna molestie porttitor. Suspendisse vel molestie justo, et scelerisque nisl. Mauris blandit tellus sit amet porttitor interdum. Fusce pellentesque varius ex non lobortis. Duis turpis augue, sodales sed sollicitudin at, volutpat accumsan sem. Nullam enim mi, feugiat non interdum sed, ultrices ac libero. Vestibulum vitae est bibendum quam pellentesque ullamcorper nec eget dui. Mauris auctor ipsum nec enim eleifend ultrices. Morbi iaculis vulputate consequat. Sed vitae felis tellus. Ut ut sem posuere, viverra dolor vel, lobortis lacus. Praesent id augue mollis, maximus arcu sit amet, consequat elit.</div>
                  <div className="card-footer">
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faWandMagicSparkles} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faXmark} />
                    </i>
                  </div>
                </div>
              </div>
              <div className="post-single-super-container col-md-4">
                <div className="post-single-container rounded-4 card">
                  <div className="card-header">Nom de compte - Auteur</div>
                  <div className="card-body post-single-text"><img class="post-single-image" src={logoGroupomania}/>Lorem icitudin at, volutpat accumsan sem. Nullam enim mi, feugiat non interdum sed, ultrices ac libero. Vestibulum vitae est bibendum quam pellentesque ullamcorper nec eget dui. Mauris auctor ipsum nec enim eleifend ultrices. Morbi iaculis vulputate consequat. Sed vitae felis tellus. Ut ut sem posuere, viverra dolor vel, lobortis lacus. Praesent id augue mollis, maximus arcu sit amet, consequat elit.</div>
                  <div className="card-footer">
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faWandMagicSparkles} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faXmark} />
                    </i>
                  </div>
                </div>
              </div>
              <div className="post-single-super-container col-md-4">
                <div className="post-single-container rounded-4 card">
                  <div className="card-header">Nom de compte - Auteur</div>
                  <div className="card-body post-single-text"><img class="post-single-image" src={logoGroupomania}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales nunc vel ligula pharetra, vel ultrices quam commodo. Aenean sodales cursus justo, vel interdum elit aliquet quis. Vivamus sed volutpat velit, sit amet iaculis tortor. Nullam venenatis nibh sit amet magna molestie porttitor. Suspendisse vel molestie justo, et scelerisque nisl. Mauris blandit tellus sit amet porttitor interdum. Fusce pellentesque varius ex nec eget dui. Mauris auctor ipsum nec enim eleifend ultrices. Morbi iaculis vulputate consequat. Sed vitae felis tellus. Ut ut sem posuere, viverra dolor vel, lobortis lacus. Praesent id augue mollis, maximus arcu sit amet, consequat elit.</div>
                  <div className="card-footer">
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faWandMagicSparkles} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faXmark} />
                    </i>
                  </div>
                </div>
              </div>
              <div className="post-single-super-container col-md-4">
                <div className="post-single-container rounded-4 card">
                  <div className="card-header">Nom de compte - Auteur</div>
                  <div className="card-body post-single-text"><img class="post-single-image" src={logoGroupomania}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales nunc vel ligula pharetra, vel ultrices quam commodo. Aenean sodales cursus justo, vel interdum elit aliquet quis. Vivamus sed volutpat velit, sit amet iaculis tortor. Nullam venenatis nibh sit amet magna molestie porttitor. Suspendisse vel molestie justo, et scelerisque nisl. Mauris blandit tellus sit amet porttitor interdum. Fusce pellentesque varius ex nec eget dui. Mauris auctor ipsum nec enim eleifend ultrices. Morbi iaculis vulputate consequat. Sed vitae felis tellus. Ut ut sem posuere, viverra dolor vel, lobortis lacus. Praesent id augue mollis, maximus arcu sit amet, consequat elit.</div>
                  <div className="card-footer">
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faWandMagicSparkles} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faXmark} />
                    </i>
                  </div>
                </div>
              </div>
              <div className="post-single-super-container col-md-4">
                <div className="post-single-container rounded-4 card">
                  <div className="card-header">Nom de compte - Auteur</div>
                  <div className="card-body post-single-text"><img class="post-single-image" src={logoGroupomania}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales nunc vel ligula pharetra, vel ultrices quam commodo. Aenean sodales cursus justo, vel interdum elit aliquet quis. Vivamus sed volutpat velit, sit amet iaculis tortor. Nullam venenatis nibh sit amet magna molestie porttitor. Suspendisse vel molestie justo, et scelerisque nisl. Mauris blandit tellus sit amet porttitor interdum. Fusce pellentesque varius ex nec eget dui. Mauris auctor ipsum nec enim eleifend ultrices. Morbi iaculis vulputate consequat. Sed vitae felis tellus. Ut ut sem posuere, viverra dolor vel, lobortis lacus. Praesent id augue mollis, maximus arcu sit amet, consequat elit.</div>
                  <div className="card-footer">
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faWandMagicSparkles} />
                    </i>
                    <i className="post-single-logo">
                      <FontAwesomeIcon icon={faXmark} />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default HomePage
