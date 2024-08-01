import { useContext } from "react";
import Appcontext from "../context/AppContext";

const useAppdata = () => useContext(Appcontext)

export default useAppdata