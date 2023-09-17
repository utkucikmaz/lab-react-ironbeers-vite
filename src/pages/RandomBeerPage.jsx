import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function RandomBeersPage() {
    const [randomBeerDetails, setRandomBeerDetails] = useState();

    useEffect(() => {
        const getRandomBeerDetails = async () => {
            let result = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers/random"
            );
            setRandomBeerDetails(result.data);
        };
        getRandomBeerDetails();
    }, []);

    return (
        <div>
            {randomBeerDetails ? (
                <>
                    <img
                        src={randomBeerDetails.image_url}
                        alt=""
                        className="beer-preview"
                    />
                    <p>{randomBeerDetails.name}</p>
                    <p>{randomBeerDetails.tagline}</p>
                    <p>{randomBeerDetails.first_brewed}</p>
                    <p>{randomBeerDetails.attenuation_level}</p>
                    <p>{randomBeerDetails.description}</p>
                    <p>{randomBeerDetails.contributed_by}</p>
                </>
            ) : (
                <p>"Loading...."</p>
            )}
        </div>
    );
}

export default RandomBeersPage;
