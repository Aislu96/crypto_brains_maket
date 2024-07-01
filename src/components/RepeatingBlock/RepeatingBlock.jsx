function RepeatingBlock({classBlock, classSection, title, text, children}) {
    return (
        <section className={classSection}>
            <div className={`container  container-flex ${classBlock}`}>
                <div className="content">
                    <h1 className="p58">{title}</h1>
                    <p className="p18b">{text}
                    </p>
                </div>
                <div className="line"></div>
                {children}
            </div>
        </section>
    );
}

export default RepeatingBlock;
