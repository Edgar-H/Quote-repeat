import React, { useState } from 'react';
import QuoteBox from './components/QuoteBox';
import data from './assets/quotes.json';
import { getRandomColor, getRandomNumber } from './assets/RandomColor';
import './style.scss';

const App = () => {
  const quotes = data.quotes;
  const cunterQuotes = quotes.length;
  const randomQuotes = getRandomNumber(cunterQuotes);

  const [newQuote, setNewQuote] = useState(quotes[randomQuotes]);
  const [color, setColor] = useState(getRandomColor());

  const handleNewQuote = () => {
    const quoteRandom = quotes[getRandomNumber(cunterQuotes)];
    setNewQuote(quoteRandom);
    setColor(getRandomColor());
  };

  return (
    <div className='app' style={{ '--current-color': `${color}` }}>
      <main>
        <QuoteBox
          quote={newQuote.quote}
          author={newQuote.author}
          changeQoute={handleNewQuote}
        ></QuoteBox>
      </main>
    </div>
  );
};

export default App;
