import React from 'react';
import { EnglishPuzzleStatisticToDayItem } from '../EnglishPuzzleStatisticToDayItem/EnglishPuzzleStatisticToDayItem';

export const EnglishPuzzleStatisticToDay = ({
  visibleStatisticGame,
  visibleStatistic,
  englishPuzzleDayStat,
}) => {
  const statArray = [];
  for (const key in englishPuzzleDayStat) {
    if (englishPuzzleDayStat.hasOwnProperty(key)) {
      statArray.push({ date: key, data: englishPuzzleDayStat[key] });
    }
  }

  return visibleStatisticGame ? (
    <div className="modal-overlay">
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content english-puzzle-modal-statistic">
          <div className="modal-header">
            <h5 className="text-left mb-0">Cтатистика:</h5>
            <button
              type="button"
              className="close btn-modal_close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={visibleStatistic}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {statArray.length > 0 ? (
              statArray.map((statArray, index) => {
                return (
                  <EnglishPuzzleStatisticToDayItem
                    dayStat={statArray}
                    key={index}
                  />
                );
              })
            ) : (
              <h4>Статистика пока не собрана</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
