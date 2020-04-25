import React from 'react';
import './App.css';

import HobbyList from './Components/HobbyList';
import Guarantee from './Components/Guarantee';
import Counter from './Components/Counter';

// Images
import ChatImg from './Components/imgs/chat.png';
import CoinImg from './Components/imgs/coin.png';
import FDeliveryImg from './Components/imgs/f-delivery.png';

function App() {
  return (
    <div className="App">
      <h1>HOMEWORK</h1>
      <h2>Exercise 1</h2>
      <HobbyList />
      <h2>Exercise 2</h2>
      <div className="Images">
        <Guarantee img={FDeliveryImg} title="Free Shipping" description="Si vis pacem para bellvm..."/>
        <Guarantee img={CoinImg} title="100% Money back" description="Homo homini lvpvs. Fortes fortvna adivvat."/>
        <Guarantee img={ChatImg} title="Online 24/7" description="Alea iacta est. Errare hvmanvm est."/>
      </div>
      <h2>Exercise 3</h2>
      <Counter />
    </div>
  );
}

export default App;
