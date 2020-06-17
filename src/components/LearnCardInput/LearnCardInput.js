import React, { useState } from 'react';

export const LearnCardInput = ({ wordLength }) => {
  const [inputWord, setInputWord] = useState('');

  return (
    <p className="card-text">
      <input
        className="form-control m-auto"
        type="text"
        style={{
          width: `calc(4px + 12.5px * ${wordLength})`,
        }}
        autoFocus
        value={inputWord}
        onChange={(event) => setInputWord(event.target.value)}
      />
    </p>
  );
};
