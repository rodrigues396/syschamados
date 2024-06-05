import avatarImg from '../../assets/avatar.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';

import { FiHome, FiUser, FiSettings} from 'react-icons/fi';
import './header.css';

function Header(){
    const { user } = useContext(AuthContext);

    return(
        <div className="sidebar">
            <div>
                <img src={user.avatarUrl === null ? avatarImg : user.avatarUrl} alt="Foto do Usuario" />
            </div>
            <Link to='/syschamados/dashboard'>
                <FiHome color="#FFF" size={24}/>
                Chamados
            </Link>

            <Link to='/syschamados/customers'>
                <FiUser color="#FFF" size={24}/>
                Clientes
            </Link>

            <Link to='/syschamados/profile'>
                <FiSettings color="#FFF" size={24}/>
                Perfil
            </Link>
        </div>
    )
}

export default Header;