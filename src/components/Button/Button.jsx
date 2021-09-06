import Arrow from "../../assets/svgs/arrow.svg";
import { ArrowButton } from "./Button.styles";

const Button = ({ text, onClick }) => {
  return (
    <ArrowButton {...{ onClick }}>
      <span>{text}</span>
      <Arrow />
    </ArrowButton>
  );
};

export default Button;
