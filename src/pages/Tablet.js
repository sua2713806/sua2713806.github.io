import React, {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import wordsData from '../gameItem/words.json';
import '../styles/game.css';

const Game = () => {
  const initialColors = Array(25).fill(null);
  const [words, setWords] = useState([]);
  const [colors, setColors] = useState(initialColors);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  useEffect(() => {
    const fetchWords = async () => {
      const wordList = wordsData.words;
      const randomIndex = shuffleArray(wordList).slice(0,25);
      setWords(randomIndex);
    };

    fetchWords();
  } , []);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const handleCardClick = (idx) => {
  setActiveCardIndex(idx);
  setIsModalOpen(true);
}

const handleColorOptionClick = (color) => {
    const updatedColors = [...colors];
    updatedColors[activeCardIndex] = color;
    setColors(updatedColors);
    setIsModalOpen(false);
}

  return (
    <div>
      <div className="wordTable">
        {words.map((word, idx) => (
          <div key={idx} className="grid-item" style={{backgroundColor: colors[idx], }} onClick={() => handleCardClick(idx)}>
            <div className="word reverse">
            {word.word}
            </div>
            <div className="word">
            {word.word}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>카드를 선택해주세요</h3>
            <div className="color-options">
              <div className="color-option" style={{backgroundColor:'#D04848'}} onClick={() => handleColorOptionClick('#D04848')}></div>
              <div className="color-option" style={{backgroundColor:'#6895D2'}} onClick={() => handleColorOptionClick('#6895D2')}></div>
              <div className="color-option" style={{backgroundColor:'#041C32'}} onClick={() => handleColorOptionClick('#041C32')}></div>
              <div className="color-option" style={{backgroundColor:'beige'}} onClick={() => handleColorOptionClick('beige')}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
