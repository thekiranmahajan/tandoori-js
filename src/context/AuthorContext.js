import { createContext } from "react";

const AuthorContext = createContext({
  author: {
    name: "Kiran Mahajan",
    github_url: "https://github.com/thekiranmahajan",
    linkedin_url: "https://www.linkedin.com/in/thekiranmahajan/",
  },
});

export default AuthorContext;
