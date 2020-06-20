export const getColorSettingsIcon = (value, settingsGreen, settingsRed) => {
  if (value) {
    return settingsGreen;
  }
  return settingsRed;
};

export const getColorAudioIcon = (value, audioGreen, audioRed) => {
  if (value) {
    return audioGreen;
  }
  return audioRed;
};

export const getColorTranslateIcon = (value, translateGreen, translateRed) => {
  if (value) {
    return translateGreen;
  }
  return translateRed;
};
