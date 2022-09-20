import React from 'react';
import style from "./Footer.module.css"

const Footer = () => {
    return (
    <footer className={style.footer}>
        <ul className={style.ul}>
            <li className={style.li}>contato</li>
            <li className={style.li}>sobre o projeto</li>
            <li className={style.li}>repositório</li>
            <li className={style.li}>sobre nós</li>
            <li className={style.li}>bootcamp</li>
        </ul>
    </footer>
    )
}

export default Footer