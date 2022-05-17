import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headerStyles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={headerStyles.title}>
      <div className={headerStyles.subtitle}>T O D O</div>
      <FontAwesomeIcon icon={faMoon} />
    </div>
  );
};
