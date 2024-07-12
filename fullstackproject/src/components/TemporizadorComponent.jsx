import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const TemporizadorComponent = ({ duracao, tempoEsgotado }) => {
  return (
    <div className="text-4xl font-semibold text-yellow-500">
      <CountdownCircleTimer
        duration={duracao}
        size={120}
        isPlaying
        onComplete={tempoEsgotado}
        colors={['#BCE596', '#F7B801', '#ED827A']}
        colorsTime={[9, 6, 0]}
      >
       {({ remainingTime }) => remainingTime}
       </CountdownCircleTimer>
    </div>
  );
};

export default TemporizadorComponent;
