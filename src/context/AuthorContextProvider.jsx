import React, { useState } from "react";
import AuthorContext from "./AuthorContext";
const AuthorContextProvider = ({ children }) => {
  const [author, setAuthor] = useState(null);

  return (
    <AuthorContext.Provider value={{ author, setAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};

export default AuthorContextProvider;
