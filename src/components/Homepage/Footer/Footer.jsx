import React from 'react';
import style from "./Footer.module.css"

const Footer = () => {
    return (
    <footer className={style.footer}>
        <ul className={style.ul}>
            <li>contato</li>
            <li>sobre o projeto</li>
            <li>repositório</li>
            <li>sobre nós</li>
            <li>bootcamp</li>
        </ul>
    </footer>
    )
}

export default Footer