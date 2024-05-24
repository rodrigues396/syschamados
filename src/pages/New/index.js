import { useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";
import './new.css';

function New(){

    const [customers, setCustomers ] = useState([]);

    const [complemento, setComplemento] = useState('');
    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto')

    function handleOptionChange(e){
        setStatus(e.target.value)
    }

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Novo Chamado">
                    <FiPlusCircle size={25}/>
                </Title>

                <div className="container">
                    <form className="form-profile">
                        <label>Clientes</label>
                        <select>
                            <option key={0} value="0">Mercado</option>
                            <option key={2} value="1">Loja Informatica</option>
                        </select>

                        <label>Assunto</label>
                        <select>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita tecnica">Visita tecnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Status</label>
                        <div className="status">
                            <input 
                            type="radio"
                            name="radio"
                            value="Aberto"
                            onChange={handleOptionChange}
                            checked={ status === 'Aberto'}
                            />
                            <span>Em Aberto</span>

                            <input 
                            type="radio"
                            name="radio"
                            value="Progresso"
                            onChange={handleOptionChange}
                            checked={ status === 'Progresso'}
                            />
                            <span>Progresso</span>

                            <input 
                            type="radio"
                            name="radio"
                            value="Atendido"
                            onChange={handleOptionChange}
                            checked={ status === 'Atendido'}
                            />
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        <textarea
                        type="text"
                        placeholder="Descreva seu problema (opcional)."
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                        />

                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default New;