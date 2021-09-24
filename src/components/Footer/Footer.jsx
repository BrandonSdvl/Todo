const Footer = ({ setView }) => {

    return (
        <footer>
            <div>
                <button onClick={() => setView('all')}>All</button>
                <button onClick={() => setView('active')}>Active</button>
                <button onClick={() => setView('completed')}>Completed</button>
            </div>
            <p>Drag and drop to reorder list</p>
        </footer>
    )
}

export default Footer
