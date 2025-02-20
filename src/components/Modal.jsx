import React, { useState } from 'react';
import zenith from './zenith.jpg';
import lend from './lend.jpg';
import store from './store.jpg';

const ProjectModal = () => {
 

  return (
    <div>
      <div className="projects">
        <h1>My Work</h1>
        <div className="work">
          <div className="project" onClick={() => openModal('zenith')}>
            <img src={zenith} height={300} />
          </div>
          <div className="project" onClick={() => openModal('lend')}>
            <img src={lend} height={300} />
          </div>
          <div className="project" onClick={() => openModal('store')}>
            <img src={store} height={300} />
          </div>
        </div>
      </div>

      {/* Modal */}
    </div>
  );
};

export default ProjectModal;