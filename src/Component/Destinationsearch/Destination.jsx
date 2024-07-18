import React, { useState } from 'react';
import './Destination.css'; 

const DestinationSearch = () => {
  const [searchInput, setSearchInput] = useState('');

  const destinationsList = [
    { id: 1, name: 'varnasi', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/1200px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg' },
    { id: 2, name: 'Ladkah', imgUrl: 'https://cdn.pixabay.com/photo/2017/05/10/13/39/ladakh-2300904_640.jpg' },
    { id: 3, name: 'munnar', imgUrl: 'https://t3.ftcdn.net/jpg/06/67/28/10/360_F_667281094_Mb4281JXZHIeVUDW6M1VDFLGzSn4bYq6.jpg' },
    { id: 4, name: 'manali', imgUrl: 'https://t4.ftcdn.net/jpg/03/04/01/79/360_F_304017914_06ibltT3eX4UID80q0dSUybLsrfzUubL.jpg' },

  ];

  const handleInputChange = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const filteredDestinations = destinationsList.filter(destination =>
    destination.name.toLowerCase().includes(searchInput)
  );

  return (
    <div className="destination-search">
      <h1>Destination Search</h1>
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search destinations..."
        className="search-input"
      />
      <div className="destinations">
        {filteredDestinations.map(destination => (
          <div key={destination.id} className="destination">
            <img src={destination.imgUrl} alt={destination.name} className="destination-image" />
            <p className="destination-name">{destination.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationSearch;
