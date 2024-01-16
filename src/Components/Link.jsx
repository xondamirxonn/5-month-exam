import { Link as Links } from "react-router-dom";

const Link = ({ children, className, ...props }) => {
  return (
    <Links
      className={`text-reset text-decoration-none ${className}`}
      {...props}
    >
      {children}
    </Links>
  );
};

export default Link;
