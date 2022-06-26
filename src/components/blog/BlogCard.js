import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button, Modal } from 'react-bootstrap';

export const BlogCard = ({ item }) => {
  const [showBlog, setShowBlog] = useState(false);
  const { currentUser, deleteBlog } = useContext(AuthContext);

  const openForm = () => setShowBlog(true);
  const closeForm = () => setShowBlog(false);
  const time = item.createdAt ? item.createdAt.toDate().toString().replace('GMT+0200 (Central European Summer Time)', " ") : "";

  return (
    <div className="col transition-ease col-blog">
      <div className="card shadow-sm border border-none">
        <div className="card-body padding-card">
          <p className="lead display-6 black-color text-decoration-uderline">{item.title}</p>
          <i><p className="card-text fw-light blog-text">{item.desc}</p></i>
          <div className="d-flex mt-3 justify-content-between align-item-center black-color">
            <small className='font-size'>By: <i>{item.email.replace('@gmail.com', '')}</i>, <cite className='font-size-tiny'>{time}</cite></small>
            <div onClick={openForm} className="btn btn-outline-secondary mx-2 ml-5 p8">
              View
            </div>
            {currentUser && currentUser.email === item.email && (
                <div
                  onClick={() => deleteBlog(item.id)}
                  className="btn btn-outline-secondary p8"
                >
                  Delete blog
                </div>)}
          </div>
          <Modal show={showBlog} onHide={closeForm} fullscreen="true">
            <Modal.Header>
              <Modal.Title>{item.title}</Modal.Title>
              <small>{time}</small>
            </Modal.Header>
            <Modal.Body>
              <div className='black-color blog-font-weight blog-text-modal text-break'>{item.desc}</div>
              <div
                style={{
                  height: '320px',
                  backgroundImage: `url(${item.imgUrl})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                className="w-100"
              />
              <div className='text-start pt-4'>
                <small className='font-size'>By: <i>{item.email.replace('@gmail.com', '')}</i></small>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeForm}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};
