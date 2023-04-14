const Listitem = (props) => {
    return (
        <section className="flex_all">
            <div className="listItem_div">
                <h2>{props.title}</h2>
                <p>{props.year}</p>
                <p>{props.director}</p>
                <p>{props.duration}</p>
                <p>{`⭐️ ${props.rate}`}</p>
                {props.genre.map((genre, index) =>
                    <p key={index}>{genre}</p>
                )}
            </div >
        </section>
    )
}

export default Listitem