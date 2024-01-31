import React, {FC, useEffect} from "react";
import s from "./styles.module.css";
import Button from "../../shared/ui/button";
import {useNavigate} from "react-router-dom";
import withRouter from "../../shared/providers/withRouter";
import {compose} from "redux";


const PostItem = ({id, userId, title, body, router}) => {

    const postContainerRef = React.createRef();
    const bodyStringRef = React.createRef();

    return (
        <div ref={postContainerRef} className={s.postWrapper}>
            <div><i>{id}</i>&nbsp;<b>{title}</b>&nbsp;-&nbsp;</div>
            <div ref={bodyStringRef} className={s.bodyString}>{body}</div>
            <Button text={"Читать дальше"} onClickFunc={() => router.navigate(`/post-info/${id}`)}/>
        </div>
    )
}

export default compose(withRouter)(PostItem);