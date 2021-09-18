import { useState, createContext } from "react";
import remove from "lodash.remove";
import useLocalStorage from "../hooks/useLocalStorage";
export const AppContext = createContext(null);

interface AppState {
  likes: string[];
}

const AppProvider = ({ children }) => {
  const [likes, setLikes] = useLocalStorage("likes", []);
  const [state, setState] = useState<AppState>({ likes: likes });

  const addLike = (date) => {
    setState({ likes: [...state.likes, date] });
    setLikes([...state.likes, date]);
  };
  const removeLike = (date) => {
    const removeLike = remove(state.likes, function (elem) {
      return elem !== date;
    });
    setState({
      likes: removeLike,
    });
    setLikes(removeLike);
  };

  return <AppContext.Provider value={{ likes: state.likes, addLike, removeLike }}>{children}</AppContext.Provider>;
};

export default AppProvider;
