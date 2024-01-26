import React, {FC} from "react";

const Button: FC<{text: string, func: () => void}> = ({text, func}) => {
    return <button onClick={func}>{text}</button>
}

export default Button;
