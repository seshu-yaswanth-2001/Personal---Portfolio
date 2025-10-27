import { navConfig } from "@/config/config";
import { navMotionTransitionConfig } from "@/config/config";
import "./navbar.css";
import "./theme.css";
import { motion } from "motion/react";
import { useContext, useState } from "react";
import { NavContext } from "@/context/NavContext";
import { ThemeContext } from "@/context/ThemeContext";
import { LightbulbOff, Lightbulb } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Navbar = (props) => {
  const { scrollToSection, home, about, experience, projects, contact } = props;

  const { navItemSelected, setNavItemSelected } = useContext(NavContext);
  const { theme, toggle: toggleTheme } = useContext(ThemeContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const jumpToScetion = (sectionName) => {
    setNavItemSelected(sectionName);
    setIsMenuOpen(false);
    switch (sectionName.toLowerCase()) {
      case "home":
        scrollToSection(home);
        break;
      case "about":
        scrollToSection(about);
        break;
      case "experience":
        scrollToSection(experience);
        break;
      case "projects":
        scrollToSection(projects);
        break;
      case "contact":
        scrollToSection(contact);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div className="navbar">
        {/* large screens Navbar */}
        <nav className="navbar-big">
          <ul className="nav-wrapper">
            {navConfig.map((navItem) => (
              <li
                key={navItem.id}
                className={`nav-item ${
                  navItemSelected === navItem.name ? "active" : ""
                }`}
                onClick={() => jumpToScetion(navItem.name)}
              >
                {navItem.name}
                {navItemSelected === navItem.name && (
                  <motion.div
                    layoutId="highlight"
                    className="highlight"
                    transition={navMotionTransitionConfig}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* small Screens Navbar */}
        <nav className="navbar-small">
          <div className="mobile-nav-row">
            <NavigationMenu>
              <NavigationMenuList
                style={{ listStyle: "none", margin: 0, padding: 0 }}
              >
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="small-nav-item-default"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-expanded={isMenuOpen}
                  >
                    Menu
                  </NavigationMenuTrigger>
                  {isMenuOpen && (
                    <NavigationMenuContent>
                      <ul>
                        {navConfig.map((navItem) => (
                          <li className="small-list-item" key={navItem.id}>
                            <button
                              className={`small-nav-item ${
                                navItemSelected === navItem.name ? "active" : ""
                              }`}
                              onClick={() => jumpToScetion(navItem.name)}
                            >
                              {navItem.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <button
              className="fixed-theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark" ? <LightbulbOff /> : <Lightbulb />}
            </button>
          </div>
        </nav>
      </div>

      {/* Fixed theme toggle button - Desktop only */}
      <div className="desktop-theme-toggle">
        <button
          className="fixed-theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <LightbulbOff /> : <Lightbulb />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
