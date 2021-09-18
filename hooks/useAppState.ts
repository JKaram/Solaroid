import { useContext } from "react";
import { AppContext } from "../context/appContext";
const useAppState = () => useContext(AppContext);
export default useAppState;
