import React from "react";

const Menu = ({ menu }) => {
    return (
        <nav>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;