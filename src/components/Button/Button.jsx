import PropTypes from "prop-types";
import RightArrow from "../../assets/svgs/arrow.svg";
import LeftArrow from "../../assets/svgs/arrow-left.svg";
import { ArrowButton } from "./Button.styles";

const Button = ({ text, direction = "right", onClick }) => {
  return (
    <ArrowButton {...{ onClick }} className={direction}>
      {direction === "left" && <LeftArrow />}
      <span>{text}</span>
      {direction === "right" && <RightArrow />}
    </ArrowButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  direction: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
};

export default Button;
