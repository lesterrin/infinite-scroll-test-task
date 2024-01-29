import {useLocation, useNavigate, useParams} from "react-router-dom";
import React from "react";

const withRouter = (Component) => { //Разве это не hoc?
    return (props) => {

        let router = {
            location: useLocation(),
            navigate: useNavigate(),
            params: useParams()
        }

        return (
            <Component
                {...props}
                router={router}
            />
        );
    };
}

export default withRouter;