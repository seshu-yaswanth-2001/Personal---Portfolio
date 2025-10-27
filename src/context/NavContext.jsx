import { navConfig } from "@/config/config";
import { createContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [navItemSelected, setNavItemSelected] = useState(navConfig[0].name);

  return (
    <NavContext.Provider
      value={{
        navItemSelected,
        setNavItemSelected,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
