import './Header.scss'
import { ReactComponent as IconSun } from '../../assets/icon-sun.svg'
import { ReactComponent as IconMoon } from '../../assets/icon-moon.svg'
import { useRef } from 'react'

const Header = ({ data, setData, theme, setTheme }) => {

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else if (theme === 'light') {
            setTheme('dark')
        }
    };

    const checkboxRef = useRef(null)

    const handlekeyDown = (e) => {
        if (e.key === "Enter") {
            if (!e.target.value) {
                alert("Insert a to-do...")
                return
            }
            let newItem = {
                id: Date.now().toString(),
                task: e.target.value,
                completed: checkboxRef.current.checked,
            }
            checkboxRef.current.checked = false
            e.target.value = ''
            setData([...data, newItem])
        }
    }

    return (
        <header className={`header header--${theme}`}>
            <div className={"header__top"}>
                <h1 className="header__title">TODO</h1>
                <span onClick={changeTheme}>
                    {theme === 'dark' ? <IconSun className={"header__icon"} /> : <IconMoon className={"header__icon"} />}
                </span>
            </div>
            <div className={"header__input-container"}>
                <input className={"checkbox"} type="checkbox" ref={checkboxRef} />
                <input className={"header__input"} type="text" placeholder="Create a new todo" onKeyDown={handlekeyDown} />
            </div>
        </header>
    )
}

export default Header
