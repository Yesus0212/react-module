import React, {useState, useEffect} from "react";
import "./RickandMortyCards.css";

function RickandMortyCards() {

    const [cards, setCards] = useState([]);

    const url = "https://rickandmortyapi.com/api/character";

    useEffect(() => {        
        const getInfoCards = async () => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.results);
            setCards(data.results);
        };

        getInfoCards(); 
    },[])

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
                        {card.species} {card.status}
                    </span>
                </div>                
            </div>
        </article>
    ));
    
    return (
        <>
            {_cards}
        </>
    )
}

export default RickandMortyCards;
