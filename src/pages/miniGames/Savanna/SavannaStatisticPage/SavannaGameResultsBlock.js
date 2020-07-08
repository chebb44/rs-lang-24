import React from 'react';

export const GameResultsBlock = ({ gameResultsArray }) => {
  let gameResultsBlock = [];
  gameResultsArray.map((gameResults) => {
    let games = [];
    for (let k = 0; k < gameResults.length; k++) {
      games.push(
        <div key={Math.random()}>{`${k}. ${gameResults[k]}% правильно`}</div>,
      );
    }
    gameResultsBlock.push(
      <div className="SavannaGameResultsBlock" key={Math.random()}>
        {games}
      </div>,
    );
    return gameResultsBlock;
  });
  return gameResultsBlock;
};
