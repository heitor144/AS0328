import { Link } from 'react-router-dom';

export function Header(){
    return(
        <header>
            <ul className='menu'>
                <li><Link to='./' className='link_menu'>HOME</Link></li>
                <li><Link to='./Missao' className='link_menu'>MISSÃO</Link></li>
                <li><Link to='./Produtos' className='link_menu'>PRODUTOS</Link></li>
                <li><Link to='./Historia' className='link_menu'>NOSSA HISTÓRIA</Link></li>
                <li><Link to='./Contato' className='link_menu'>CONTATO</Link></li>
            </ul>
        </header>
    )
}

