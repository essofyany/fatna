import { RiSearchLine } from "react-icons/ri";
import IconTap from "../Motions/IconTap";

function SearchIcon({ handleOpen, size, mx = "3" }) {
  return (
    <IconTap mx={mx}>
      <RiSearchLine onClick={handleOpen} size={size} />
    </IconTap>
  );
}

export default SearchIcon;
