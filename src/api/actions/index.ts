import { useDispatch } from "react-redux";
import useGeneralActions from "./general/index";

const useActions = () => {
  const dispatch = useDispatch();
  return {
    dispatch,
    useGeneralActions
  };
};

export default useActions;
