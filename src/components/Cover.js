//import styled from 'styled-components'
// import "./styles.css"
/*
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/pics.css';

const GooglePlacesSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const apiKey = 'AIzaSyC8b6pWwiE-bUcv9JX-09a9lO0g4hXGrNg';
      const apiUrl = `http://localhost:3000/places?query=${encodeURIComponent(query)}&key=${apiKey}`;
  
      const response = await axios.get(apiUrl);
  
      const placesWithPhotos = await Promise.all(
        response.data.results.map(async (place) => {
          if (place.photos && place.photos.length > 0) {
            const photoReference = place.photos[0].photo_reference;
            const photoUrl = `http://localhost:3000/photo?maxwidth=400&photo_reference=${photoReference}&key=${apiKey}`;
  
            const photoResponse = await axios.get(photoUrl);
            return {
              ...place,
              photoUrl: photoResponse.data.url,
            };
          } else {
            return place; // If no photos, return the place as is
          }
        })
      );
  
      setResults(placesWithPhotos);
    } catch (error) {
      console.error('Error fetching data from Google Places API:', error);
    }
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((place) => (
          <li key={place.place_id}>{place.name} {place.rating} 
            {typeof place.photoUrl === 'string' && (
                <img
                  src={place.photoUrl}
                  alt={place.name}
                  className="small-photo" // Apply a CSS class for styling
                />
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GooglePlacesSearch; */


import React, { useState } from 'react';
import axios from 'axios';
import '../styles/pics.css';

const GooglePlacesSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      // Replace 'YOUR_API_KEY' with your actual Google Places API key
      const apiKey = 'AIzaSyC8b6pWwiE-bUcv9JX-09a9lO0g4hXGrNg';
      const apiUrl = 'http://localhost:3000/places?query=' + encodeURIComponent(query) + '&key=' + apiKey;


      const response = await axios.get(apiUrl);

      // Assuming response.data.results contains the array of places
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data from Google Places API:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((place) => (
          <li key={place.place_id}>{place.name} {place.rating} 
            {typeof place.photoUrl === 'string' && (
                <img
                  src={place.photoUrl}
                  alt={place.name}
                  className="small-photo" // Apply a CSS class for styling
                />
              )}
          </li>
        ))}
      </ul>
    </div>
  );
}; 

export default GooglePlacesSearch; 


/*import React, { useEffect } from 'react';
// Import Axios at the top of your component or file
import axios from 'axios';

// Your functional component or class component

const fetchPlacesData = async (query, apiKey) => {
  try {
    const response = await axios.get(
      `/api/place/textsearch/json?query=${query}&key=${apiKey}`,
      {
        headers: {
          'Content-Type': 'application/json', // Add any necessary headers
          // Add other headers as needed
        },
      }
    );

    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching places data:', error);
    throw error;
  }
};



const YourComponent = () => {
  useEffect(() => {
    const apiKey = 'AIzaSyC8b6pWwiE-bUcv9JX-09a9lO0g4hXGrNg';
    const query = 'restaurants in sydney';

    // Call the function to fetch data
    fetchPlacesData(apiKey, query);
  }, []);

  return (
    <div>
      <h1>Hello, this is YourComponent!</h1>
      {/* Add more JSX elements and components as needed}
    </div>
  );
};

export default YourComponent;*/


/*useEffect ( () => {
  
  let data = JSON.stringify({"textQuery": "schools in canada"})
  console.log(data)

	const configs = {
		method: 'post',
		url: `https://maps.googleapis.com/maps/api/place/textsearch/json?`
		headers: {
				'Content-Type': 'application/json',
				'X-Goog-Api-Key':…, …
				},
			data: data
  } 

	const response = axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${data}key=AIzaSyC8b6pWwiE-bUcv9JX-09a9lO0g4hXGrNg`)
	console.log(response.data.places[0].displayName.text) 
  setText(response.data.places[0].displayName.text) 

} catch (error) {
	console.error('error: ', error)
}
)
*/
/*
function Cover() {
  return (
    <Container id='home'>
      <CoverImg src={require('../assets/cover.png')} alt="cover" />
      <CoverBody>
        <CoverTitle>Where do you want to go?</CoverTitle>
        <CityInput placeholder='Enter your place'/>
        <ActivityInput placeholder='Enter your desired activity'/>
        <SearchButton href='/'>Search </SearchButton>
      </CoverBody>
      <BottomFade />
    </Container>
  )
}


console.log(ActivityInput)
 
export default Cover

const Container = styled.div`
  display: flex;
  flex-direction: column;

`

const CityInput = styled.input`
    background-color: white;
    border:none;
    outline:none;
    width:70 px;
    padding:10px;
    border-radius:8px;
    &:focus{
        box-shadow:1px 1px 8px #00000044;
    }
    &::placeholder{
        color:#000
    }
`
const ActivityInput = styled.input`
    background-color:white;
    border:none;
    outline:none;
    width:250px;
    padding:10px;
    border-radius:8px;
    &:focus{
        box-shadow:1px 1px 10px #00000030;
    }
    &::placeholder{
        color:#000
    }

`

const CoverImg = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`

const BottomFade = styled.div`
  position: absolute;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,0) 4%, rgba(255,255,255,0.5032606792717087) 77%, rgba(255,255,255,1) 89%);
  top: 91vh;
  width: 100vw;
  height: 10vh;
  z-index: 1;
`

const CoverBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 16px;
  

`
const CoverTitle = styled.div`
  color: white;
  font-weight: 800;
  font-size: 7vh;
  text-align: center;
  line-height: 65px;
`
const CoverText = styled.div`
  color: white;
  font-weight: 600;
  line-height: 35px;
`

const CoverTextu = styled.div` // cover text upper
  color: white;
  padding-top: 5vh;
  @media (max-width: 480px) {
    padding-top: 2vh;
  }
`

const SearchButton = styled.a`

cursor:pointer;
clear:both; 
border-radius: 3px;
padding:20px 60px; 
margin-top:4vh;
display:inline-block;
    color:white;
    transition:all 0.8s, color 0.3s 0.3s;
     cursor:pointer;
      background:#04A551;
       color:white;
       :hover
       { box-shadow:-300px 0 0 0 rgb(120,178,167) inset;
      }
      @media (max-width: 480px) {
        padding: 10px 60px;
        margin-top: 3vh;
      }
      
`
*/
