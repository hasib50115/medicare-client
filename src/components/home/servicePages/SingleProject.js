import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const SingleProject = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>{serviceId}</h2>
    </div>
  );
};

export default SingleProject;
