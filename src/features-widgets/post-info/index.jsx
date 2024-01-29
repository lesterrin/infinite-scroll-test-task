import React, {useEffect, useState} from "react";
import withRouter from "../../shared/providers/withRouter";
import {compose} from "redux";
import {useFetchPostDataQuery} from "../../shared/api";
import Button from "../../shared/ui/button";
import {useNavigate} from "react-router-dom";

const PostInfo = ({router}) => {
    const [postId, setPostId] = useState(0);

    useEffect(() => {
        setPostId(router.params.id);
    }, [])

    let {data, isFetching} = useFetchPostDataQuery(postId);

    if (isFetching) return <div>Загрузка...</div>;
    else {
        const {userId, id, title, body} = data[0];

        return (
            <div>
                <div>{id}, {userId}, {title}, {body}</div>

                <div>
                    <Button text="Назад" func={() => router.navigate(`/`)}/>
                </div>
            </div>
        )
    }
}

export default compose(withRouter)(PostInfo);