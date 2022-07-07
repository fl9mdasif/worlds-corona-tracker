import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <p >copyright <a target='blank' href="http://facebook.com/fl9omi">fl9mdasif </a>{year} </p>
        </div>
    );
};

export default Footer;