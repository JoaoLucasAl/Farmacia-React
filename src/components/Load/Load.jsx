import Logo from '../../assets/logo.png'
import './Load.css'

export function Load () {
    return <div className='tela-load'>
        <img className='loader' src= {Logo} alt="Logo da empresa carregando." />
    </div>
}