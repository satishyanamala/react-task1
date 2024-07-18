import React from 'react';
import CashWithdrawal from './Component/Cash/Cash';
import DestinationSearch from './Component/Destinationsearch/Destination';
import Fruits from './Component/FruitsCounter/Fruits';
import GoogleSuggestions from './Component/Google/Google';
import LettersCalculator from './Component/LettersCalculator/Calculator';
import Login from './Component/LoginApp/Login';
import RandomNumberGenerator from './Component/NumberGenerator/Random';
import Odd from './Component/Oddoreven/Odd';
import Show from './Component/Showorhide/Show';
import SimpleTodos from './Component/SimpleTodos/Simple';
import Speed from './Component/Speedmeter/Speed';
import Welcome from './Component/WelcomeApp/Welcome';
import Click from './Component/Click/Click';

function App() {
  return (
    <div className="App">
      <CashWithdrawal initialBalance={1000} />
      <DestinationSearch />
      <Fruits />
      <GoogleSuggestions />
      <LettersCalculator />
      <Login />
      <RandomNumberGenerator />
      <Odd />
      <Show />
      <SimpleTodos />
      <Speed />
      <Welcome />
      <Click />
    </div>
  );
}

export default App;
