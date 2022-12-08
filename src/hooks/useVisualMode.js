import { useState } from 'react';

const useVisualMode = function(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = function(next, replace = false) {
    let newHistory = [...history];
    if (replace) {
      setHistory([...newHistory.slice(0, -1), next]); 
    } else {
      setHistory([...newHistory, next]);
    }
  };

  const back = function() {
    if (history.length < 2) return;
    let newHistory = history;
    newHistory.pop();
    setHistory([...newHistory])
  };

  return {
    mode: history[history.length - 1],
    history,
    transition,
    back,
  };
};

export default useVisualMode;