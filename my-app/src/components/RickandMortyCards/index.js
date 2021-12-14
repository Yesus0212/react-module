import React, {useState, useEffect} from "react";
import "./RickandMortyCards.css";

function RickandMortyCards() {

    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);

    const url = "https://rickandmortyapi.com/api/character?page=";


    useEffect(() => {        
        const getInfoCards = async () => {
            const response = await fetch(url+page);
            console.log(url+page)
            const data = await response.json();
            console.log(data.results);
            setCards(data.results);
        };

        getInfoCards();
    },[page]);


    const _cards = cards.map((card) => (
        <article key={card.id} className="characterCard">
            <div className="imageCard">
                <img src={card.image}/>
            </div>
            <div className="characterInfo">
                <div>
                    <a href={card.url}>
                        <h2>{card.name}</h2>
                    </a>
                    <span className="status_icon"></span>
                    <span>
                        {card.species} - {card.status}
                    </span>
                </div>
            </div>
        </article>
    ));


    const _buttons = <div>
                        <button className="button" onClick={() => setPage(page - 1)}>Back</button>
                        <button className="button" onClick={() => setPage(page + 1)}>Next</button>
                    </div>;
    
    return (
        <>
            {_buttons}
            <div className="contentCards">
                {_cards}
            </div>
            {_buttons}
        </>
    )
}

export default RickandMortyCards;
