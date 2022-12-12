import { useState } from 'react';

const useVisualMode = function(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = function(next, replace = false) { 
    let newHistory = [...history];
    if (replace) {
      setHistory([...newHistory.slice(0, -1), next]); // if replace, remove the last element in history, for control over ui when using our back function
    } else {
      setHistory([...newHistory, next]); // if replace isn't a truthy prop, just add new mode to history
    }
  };

  const back = function() {  // for setting history to the previous state. Cannot go back if only one element in history array
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