import React, { createContext } from 'react';
import useAlldata from '../../hooks/useAlldata';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const allContexts = useAlldata();
  return (
    <DataContext.Provider value={allContexts}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
