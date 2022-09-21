import React from 'react';
import "./HomeMainStyle.css"

const HomeMain = () => {
    return (
    <main>
        <h1 className='homemainh1'>Rápida, de fácil uso e simples manutenção para suas necessidades</h1>
        <p className='homemainp1'>Gerenciar uma farmácia pode ser uma tarefa nada fácil, mas fica mais difícil ainda sem uma API que organiza seus dados por rotas, ter permite atualizações no banco de dados e inserção de novas informações a qualquer momento!</p>
        <div className='homemaindiv'>
            <img className='img' src="src/assets/png2.jpeg" alt="" />
        </div>
        <p className='homemainp2'>Para entender como usar a API em detalhes, acesse a nossa <a href="">documentação</a></p>
    </main>
    )
}

export default HomeMain