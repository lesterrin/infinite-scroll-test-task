import React, {FC} from "react";

const Button: FC<{text: string, onClickFunc: () => void}> = ({text, onClickFunc}) => {
    return <button onClick={onClickFunc}>{text}</button>
}

export default Button;
