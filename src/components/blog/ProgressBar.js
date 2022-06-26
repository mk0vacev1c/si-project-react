import React, { useEffect } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import useStorageBlog from '../../hooks/useStorageBlog';

export const ProgressBar = ({ blog, setBlog }) => {
  const { progress, isCompleted } = useStorageBlog(blog);

  useEffect(() => {
    if (isCompleted) {
      setBlog(null);
    }
  }, [isCompleted, setBlog]);

  return (
    <motion.div
      style={{ height: '5px', background: 'black' }}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  );
};
