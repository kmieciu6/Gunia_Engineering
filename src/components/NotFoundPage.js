import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            Strona nie istnieje!<br/>
            <br/>
            <Link to='/'>Strona główna</Link>

        </>
    )
}

export default NotFoundPage;