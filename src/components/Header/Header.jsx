import { ReactComponent as IconSun } from '../../assets/icon-sun.svg'
import { ReactComponent as IconMoon } from '../../assets/icon-moon.svg'
import { useRef } from 'react'

const Header = ({ data, setData }) => {
    const checkboxRef = useRef(null)

    const handlekeyDown = (e) => {
        if (e.key === "Enter") {
            let newItem = {
                id: Date.now(),
                task: e.target.value,
                completed: checkboxRef.current.checked,
            }
            checkboxRef.current.checked = false
            e.target.value = ''
            setData([...data, newItem])
        }
    }
    return (
        <header>
            <h1 className="title">TODO</h1>
            <IconSun />
            <IconMoon />
            <input type="checkbox" ref={checkboxRef} />
            <input type="text" placeholder="Create a new todo" onKeyDown={handlekeyDown} />
        </header>
    )
}

export default Header
