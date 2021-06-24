import React from 'react';

const Nav = (props) => {
    return (
    <div>{props.toggle ? <ul><a>Home</a><br/><a>Explore</a><br/></ul>  : ""}</div>
    )
}

export default Nav;
