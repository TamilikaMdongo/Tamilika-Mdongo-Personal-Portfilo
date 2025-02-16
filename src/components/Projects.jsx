import React, {useState} from 'react'
import zenith from '../assets/Zenith.png'
import lend from '../assets/Lend a hand.png'
import store from '../assets/Store.png'

const Projects = () => {


  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
    link: '',
  });

  const openModal = (project) => {
    switch (project) {
      case 'zenith':
        setModalContent({
          title: 'Zenith Project',
          description: 'Zenith is a versatile business systems application built for streamlining project management, improving efficiency, and providing real-time collaboration tools. This platform is designed to handle everything from task management to resource allocation.',
          link: '',
        });
        break;
      case 'lend':
        setModalContent({
          title: 'Lend A Hand Project',
          description: 'Lend a Hand" is a job finder platform built during a hackathon, aimed at connecting job seekers in townships with potential employers. The platform helps local individuals find employment opportunities easily, bridging the gap between talent and employers in underserved communities.',
          link: '',
        });
        break;
      case 'store':
        setModalContent({
          title: 'Store Project',
          description: ' An e-commerce platform designed for online shopping, with features for browsing products, managing shopping carts, and handling secure transactions. This platform provides an intuitive shopping experience for users, enabling them to explore a variety of products and make purchases seamlessly.',
          link: '',
        });
        break;
      default:
        break;
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div className='projects'>
        <h1>My Work</h1>
        <div className="work">
            <div className="project" onClick={() => openModal('zenith')}>
                <img src={zenith} height={300}/>
                
            </div>
            <div className="project" onClick={() => openModal('lend')}>
            <img src={lend} height={300}/>
            </div>
            <div className="project" onClick={() => openModal('store')}>
            <img src={store} height={300}/>
            </div>
        </div>


      
        <div className={`modal ${modalOpen ? 'open' : ''}`} onClick={closeModal}>
        <div className="modal-content">
          <h2>{modalContent.title}</h2>
          <p>{modalContent.description}</p>
          <a href={modalContent.link}>View Project</a>
        </div>
      </div>


    </div>
  )
}

export default Projects