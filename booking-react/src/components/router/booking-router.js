import React from 'react';

const Router = (props) => {
    const {pathname} = window.location;
    return props.children.map(child => {
        const uid = Math.random().toString(32).slice(2)
        return React.cloneElement(child, {pathname: pathname, key: uid});
    });
}

const Route = ({ children, pathname, path }) => {
    return pathname === path ? children: null;
}

export {
    Router, Route
};