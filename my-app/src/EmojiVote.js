import React, { useState } from 'react';

const emojis = [
  { id: 1, symbol: '😊', votes: 0 },
  { id: 2, symbol: '😍', votes: 0 },
  { id: 3, symbol: '😂', votes: 0 },
  // Додайте більше смайлів, якщо потрібно
];

const EmojiVote = () => {
  const [emojisState, setEmojisState] = useState(emojis);
  const [winner, setWinner] = useState(null);

  const handleVote = (id) => {
    const updatedEmojis = emojisState.map(emoji =>
      emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
    );
    setEmojisState(updatedEmojis);
  };

  const showResults = () => {
    const maxVotes = Math.max(...emojisState.map(emoji => emoji.votes));
    const winningEmoji = emojisState.find(emoji => emoji.votes === maxVotes);
    setWinner(winningEmoji);
  };

  return (
    <div>
      <h1>Голосування за смайлики</h1>
      <ul>
        {emojisState.map(emoji => (
          <li key={emoji.id}>
            {emoji.symbol} - {emoji.votes} кліків
            <button onClick={() => handleVote(emoji.id)}>Голосувати</button>
          </li>
        ))}
      </ul>
      <button onClick={showResults}>Show Results</button>
      {winner && <h2>Переможець: {winner.symbol}</h2>}
    </div>
  );
};

export default EmojiVote;
