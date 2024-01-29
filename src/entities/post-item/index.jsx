import React, {FC, useEffect} from "react";
import s from "./styles.module.css";
import Button from "../../shared/ui/button";
import { useNavigate } from "react-router-dom";
import withRouter from "../../shared/providers/withRouter";
import {compose} from "redux";


const PostItem = ({id, userId, title, body, router}) => {

    let postRow = `${id} "${title}" - ${body}`; //сделать красиво со стилями
    postRow = postRow.slice(0,100);

    return <div className={s.postWrapper}>
        {postRow}...&nbsp;
        <Button text={"Читать дальше"} func={()=>router.navigate(`/post-info/${id}`)}/>
    </div>
}

export default compose(withRouter)(PostItem);