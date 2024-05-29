import React, { useState, createContext, useContext } from "react";

const AuthorContext = createContext();

export const AuthorContextProvider = ({ children }) => {
  const [author, setAuthor] = useState(null);

  return (
    <AuthorContext.Provider value={{ author, setAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthorContext = () => useContext(AuthorContext);
