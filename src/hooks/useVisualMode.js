import { useState } from 'react';

const useVisualMode = function(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = function(next, replace = false) {
    let newHistory = [...history];
    if (replace) {
      // console.log('pre set history', history)
      setHistory([...newHistory.slice(0, -1), next]); 
      // console.log('post set history', history)
    } else {

      setHistory([...newHistory, next]);
      // console.log('ELSE post set history', history)
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