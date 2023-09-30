import { memo } from "react";
import CardWithImage from "../../components/cardWithImage";
import { useUserSelection } from "../../utils/context/userSelection.context";

const WindowMemo = memo(({ onChange, windowSelections, data }) => {
  return (
    <CardWithImage
      data={data}
      title="please select type of window"
      onChange={(e) => onChange(e.target.name, e.target.value)}
      windowSelections={windowSelections}
    />
  );
});

const CompWindow = ({ data, stateKey }) => {
  const windowSelections = {};
  const { state, handleChange } = useUserSelection();
  windowSelections[stateKey] = state[stateKey];
  console.log("checking==>windowSelectionswindowSelections", windowSelections);
  return (
    <CardWithImage
      data={data}
      title="please select type of window"
      onChange={(e) => handleChange(e.target.name, e.target.value)}
      windowSelections={windowSelections}
    />
  );
};
export default CompWindow;
