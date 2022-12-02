import React, { useEffect, useState } from 'react';

const useAlldata = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return {
    services,
  };
};

export default useAlldata;
