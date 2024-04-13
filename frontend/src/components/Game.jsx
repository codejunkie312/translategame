function Game() {
    return (
        <section className="game">
            <h1 className="title">Tap the pairs</h1>
            <div className="cards">
                <div className="left">
                    <div className="card">company</div>
                    <div className="card">soup</div>
                    <div className="card">fifth</div>
                    <div className="card">first</div>
                    <div className="card">patient</div>
                </div>
                <div className="right">
                    <div className="card">primero</div>
                    <div className="card">sopa</div>
                    <div className="card">compañía</div>
                    <div className="card">quinto</div>
                    <div className="card">paciente</div>
                </div>
            </div>
        </section>
    );
}

export default Game;