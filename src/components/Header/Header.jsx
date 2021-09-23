import { ReactComponent as IconSun } from '../../assets/icon-sun.svg'
import { ReactComponent as IconMoon } from '../../assets/icon-moon.svg'

const Header = () => {
    return (
        <header>
            <h1 className="title">TODO</h1>
            <IconSun />
            <IconMoon />
            <input type="text" placeholder="Create a new todo" />
        </header>
    )
}

export default Header
