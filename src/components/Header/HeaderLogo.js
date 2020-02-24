import React from 'react'
import HeaderIcon from '../../img/logo.svg'
import {Typography} from "@material-ui/core";


const HeaderLogo = () => {
    return (
        <Typography>
            <img src={HeaderIcon} width="156" alt="logo" className="header__pic"/>
        </Typography>
    )
};

export default HeaderLogo;