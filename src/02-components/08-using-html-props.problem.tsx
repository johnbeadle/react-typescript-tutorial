import React from "react";


export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string
}

export const Button = ({ className, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
