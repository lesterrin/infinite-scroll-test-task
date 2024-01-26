import React, {FC} from "react";
import s from "./styles.module.css";
import Button from "../../shared/ui/button";

const PostItem: FC<any> = ({id, userId, title, body}) => {
    return <div className={s.postWrapper}>
        <span>{id}, {userId}</span>
        <h5>{title}</h5>
        <p>{body}</p>
        <Button text={"Читать дальше"} func={()=>console.log('test')}/>
    </div>
}

export default PostItem;