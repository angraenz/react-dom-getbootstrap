import React from 'react';

const Header =  (props) => (
    <div className="header">
        <h1 className="logo">
            {props.app_name}
        </h1>
        <h2 className="header-title">
            {props.header_title}
        </h2>
    </div>
);

export default Header;