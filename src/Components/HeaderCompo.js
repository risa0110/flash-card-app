export default function HeaderCompo({openForm}) {
    return (
        <>
            <header>
                <div className="container">
                    <div id="site-logo">
                        <h1>Flash card App</h1>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                <li>Start the flash-card</li>
                                <button className="hoverBtn" onClick={openForm}>Log in</button>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}