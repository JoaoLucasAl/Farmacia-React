import React from 'react';
import "./SecondHeaderStyle.css"

const SecondHeader = () => {
    return (
        <section className='SecondHeader'>
            <div className='divOne'>
                <h2 className='h2'>API para otimização do trabalho de Farmácias</h2>
                <p className='p'>Cadastre, visualize, modifique e delete usuários, vendas, remédios e funcionários</p>
                <div>
                <button className='secondheaderbutton'>COMEÇAR A USAR A API</button>
                <span className='secondheaderspan'>─ é gratuito</span>
                </div>
            </div>
            <div className='blank'>
                
            </div>
        </section>
    )
}

export default SecondHeader