import React from 'react';
import { GameResultsBlock } from './SavannaGameResultsBlock';
export const ResultBlock = ({ gameStat }) => {
  let resultBlock = [];
  for (let day of Object.keys(gameStat)) {
    let date = new Date(parseInt(day));
    let games_array = [];
    games_array.push(gameStat[day]);
    resultBlock.unshift(
      <div key={Math.random()} className="SavannaStatisticContainer">
        <div className="SavannaResultBlock">{`${date.getDate()}.${
          date.getMonth() + 1
        }.${date.getFullYear()}`}</div>
        <div className="SavannaGameResultsBlock">
          <GameResultsBlock gameResultsArray={games_array} />
        </div>
      </div>,
    );
  }
  return <div className="SavannaResultsBlock">{resultBlock}</div>;
};
