import "./Header.scss";
import { ReactComponent as IconSun } from "../../assets/icon-sun.svg";
import { ReactComponent as IconMoon } from "../../assets/icon-moon.svg";
import { useRef } from "react";
import { TYPES } from "../../actions/todoActions";

const Header = ({ dispatch, theme, setTheme }) => {
  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const checkboxRef = useRef(null);

  const handlekeyDown = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        alert("Insert a to-do...");
        return;
      }
      let newItem = {
        id: Date.now().toString(),
        task: e.target.value,
        completed: checkboxRef.current.checked,
      };
      checkboxRef.current.checked = false;
      e.target.value = "";
      dispatch({
        type: TYPES.ADD_ITEM,
        newItem,
      });
    }
  };

  return (
    <header className={`header header--${theme}`}>
      <div className={"header__top"}>
        <h1 className="header__title">TODO</h1>
        <span onClick={handleChangeTheme}>
          {theme === "dark" ? (
            <IconSun className={"header__icon"} />
          ) : (
            <IconMoon className={"header__icon"} />
          )}
        </span>
      </div>
      <div className={"header__input-container"}>
        <input className={"checkbox"} type="checkbox" ref={checkboxRef} />
        <input
          className={"header__input"}
          type="text"
          placeholder="Create a new todo"
          onKeyDown={handlekeyDown}
        />
      </div>
    </header>
  );
};

export default Header;
