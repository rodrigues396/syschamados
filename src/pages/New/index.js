import { FiPlusCircle } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";
import './new.css';

function New(){
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
                            />
                            <span>Em Aberto</span>

                            <input 
                            type="radio"
                            name="radio"
                            value="Progresso"
                            />
                            <span>Progresso</span>

                            <input 
                            type="radio"
                            name="radio"
                            value="Atendido"
                            />
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        <textarea
                        type="text"
                        placeholder="Descreva seu problema (opcional)."
                        />

                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default New;