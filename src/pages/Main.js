import React from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {

  const navigate = useNavigate();

  const pcmodeBtn = () => {
    navigate('/pcmode');
  };

  const tabmodeBtn = () => {
    navigate('/tabmode');
  };

  return (
    <div>
      <button onClick={pcmodeBtn}>PC모드</button>
      <button onClick={tabmodeBtn}>태블릿모드</button>
    </div>
  );
};

export default App;
