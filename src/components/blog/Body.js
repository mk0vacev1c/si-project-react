import React, { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { AddBlog } from './AddBlog';
import { BlogCard } from './BlogCard';
import { ProgressBar } from './ProgressBar';

export const BlogBody = () => {
  const [blog, setBlog] = useState(null);
  const { currentUser, globalMsg } = useContext(AuthContext);
  const { docs } = useFirestore('blogs');

  return (
    <div className="py-5">
      <div className="container">
        {blog && <ProgressBar blog={blog} setBlog={setBlog} />}

        {globalMsg && <Alert variant="info">{globalMsg}</Alert>}

        {currentUser && <AddBlog blog={blog} setBlog={setBlog} />}

        {docs && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {docs.map((doc) => {
              return <BlogCard item={doc} key={doc.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
