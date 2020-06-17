export const obtainAudiosToPlay = (card, settings) => {
  console.log(card, settings);
  const audios = [];
  audios.push(card.audio);
  if (settings.isExampleOn) {
    audios.push(card.audioExample);
  }
  if (settings.isMeaningOn) {
    audios.push(card.audioMeaning);
  }
  return audios;
};
