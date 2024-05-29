import React, { useState, createContext, useContext } from "react";

const AuthorContext = createContext();

export const AuthorProvider = ({ children }) => {
  const [author, setAuthor] = useState(null);

  return (
    <AuthorContext.Provider value={{ author, setAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthor = () => useContext(AuthorContext);
