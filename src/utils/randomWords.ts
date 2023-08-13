import words from '../wordList.json';

export const randomWords = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};
