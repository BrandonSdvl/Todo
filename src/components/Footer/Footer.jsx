import "./Footer.scss"

const Footer = ({ setView, view }) => {

    return (
        <footer className={"footer"}>
            <div className={"footer__buttons-container"}>
                <button className={`footer__button ${view === 'all' ? 'footer__button--active' : ''} `} onClick={() => setView('all')}>All</button>
                <button className={`footer__button ${view === 'active' ? 'footer__button--active' : ''} `} onClick={() => setView('active')}>Active</button>
                <button className={`footer__button ${view === 'completed' ? 'footer__button--active' : ''} `} onClick={() => setView('completed')}>Completed</button>
            </div>
            <p className={"footer__message"}>Drag and drop to reorder list</p>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                Coded by <a href="https://github.com/BrandonSdvl" target="_blank" rel="noreferrer">BrandonSdvl</a>.
            </div>
        </footer>
    )
}

export default Footer
