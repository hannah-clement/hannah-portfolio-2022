import InfoRow from "./InfoRow";
import { v4 as uuidv4 } from "uuid";

function Body({ hannahInfo }) {
  return (
    <div className="Body">
      {hannahInfo.length > 0 &&
        hannahInfo.map((hannahInfoRow) => {
          return <InfoRow key={uuidv4()} hannahInfoRow={hannahInfoRow} />;
        })}
    </div>
  );
}

export default Body;
