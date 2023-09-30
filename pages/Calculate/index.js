import { useContext, useReducer } from "react";
import {
  UserSelection,
  UserSelectionProvider,
  useUserSelection,
} from "../../utils/context/userSelection.context";
import { SelectionReducer } from "../../utils/context/userSelectionReducer";
import { DEFAULT_STATE } from "../../utils";
import { useRouter } from "next/router";
import InputCalculate from "../../components/inputCalculate";

const Calculate = (props) => {
  //   const user = useContext(UserSelection);
  //   const router = useRouter();
  //   const data = router.query;
  //   const [state, dispatch] = useReducer(SelectionReducer, DEFAULT_STATE);
  //   //   const value = useContext(UserSelection);
  //   const statexx = useUserSelection(UserSelection);
  //   console.log("checking==>valueuseContext", state, "statexx", statexx);
  //   console.log("checking==>useruserrouter", router, data);
  return (
    // <UserSelectionProvider value={{ user }}>
    // <div>tamimimi</div>
    <InputCalculate />
    // </UserSelectionProvider>
  );
};
export default Calculate;
