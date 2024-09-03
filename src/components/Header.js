import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { navMenu } from "../data/data";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState();

    const handleClick = (path) => {
        navigate(path);
    }

    useEffect(() => {
        if (location.pathname === "/") {
            setSelectedMenu("/portfolio");
        } else {
            setSelectedMenu(location.pathname);
        }
    }, [])

    return (
        <NavBar>
            {navMenu.map((menu, index) => (
                <NavMenu
                    key={index}
                    style={selectedMenu === menu.slug ? {color: "rgb(210, 63, 87)"} : {}}
                    onClick={() => handleClick(menu.slug)}
                >
                    {menu.title}
                </NavMenu>
            ))}
        </NavBar>
    )
}

const NavBar = styled.div`
    width: 100vw;
    height: 50px;
    position: fixed;
    top: 0px;
    box-shadow: rgba(43, 52, 69, 0.1) 0px 4px 16px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;
const NavMenu = styled.div`
    color: rgb(43, 52, 69);
    cursor: pointer;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;
    user-select: none;
    &:hover {
        color: rgb(210, 63, 87);
    }
`
