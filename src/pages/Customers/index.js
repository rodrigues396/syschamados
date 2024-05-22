import { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";

import { FiUser } from "react-icons/fi";

function Customers(){
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');

    function HandleRegister(e){
        e.preventDefault();
        alert('clicou');
    }
    
    return( 
        <div>
            <Header/>
            <div className="content">
                <Title name='Clintes'>
                    <FiUser size={25}/>
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={HandleRegister}>
                        <label>Nome Fantasia</label>
                        <input 
                        type="text" 
                        placeholder="Nome da Empresa" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        />
                        <label>CNPJ</label>
                        <input 
                        type="text" 
                        placeholder="Digite o CNPJ" 
                        value={cnpj}
                        onChange={(e) => setCnpj(e.target.value)}
                        />
                        <label>Endereco</label>
                        <input 
                        type="text" 
                        placeholder="Endereco da empresa" 
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        />
                        <button type="submit">
                            Salvar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Customers;