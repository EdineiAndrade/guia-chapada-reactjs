import React from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import logo from '../../images/logo.svg';
import './styless.css';
import bateria from '../../images/materiais/bateria.svg'
import eletronico from '../../images/materiais/eletronico.svg'
import oleo from '../../images/materiais/oleo.svg'
import papel from '../../images/materiais/papel.svg'
import organico from '../../images/materiais/organico.svg'
import vidro from '../../images/materiais/vidro.svg'

const CreateLocation: React.FC = () =>{
    return(        
        <div id="page-create-location">
            <div className="content">
            <header>                
                 <img src={logo} alt="coleta seletiva"/>
                 <Link to="/">                                         
                        <FiArrowLeft/>
                        <a>Voltar para home </a>                 
                 </Link> 
            </header>
            <form>
            <h1> Cadastro do <br/> local de coleta</h1>
            
            <fieldset>
                <legend>
                    <h2>Dados</h2>
                </legend>
                <div className="field">
                    <label htmlFor="name">Nome da Entidade</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div className="field-group">
                    <div className="field">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="whatsapp">whatsapp</label>
                        <input
                            type="text"
                            name="whatsapp"
                            id="whatsapp"
                        />
                    </div>
                </div>

            </fieldset>
            <fieldset>
                <legend>
                    <h2>Endereço</h2>
                    <span>Marque o endereço no mapa</span>
                </legend>                             
                <div className="field-group">
                   <div className="field">
                    <label htmlFor="city">Cidade</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="uf">Estado</label>
                        <input
                            type="text"
                            name="uf"
                            id="uf"
                        />         
                     </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>
                    <h2>Itens coletados</h2>
                    <span>Você pode marcar um ou mais itens</span>
                </legend>
                <ul className="items-grid">
                    <li>
                        <img src={papel} alt="Papel"/>
                    </li>
                    <li className="selected">
                        <img src= {bateria} alt="Bateria"/>
                    </li>
                    <li>
                        <img src={eletronico} alt="Eletrônico"/>
                    </li>                    
                    <li>
                        <img src={oleo} alt="Óleo"/>
                    </li>
                    <li>
                        <img src= {organico} alt="Orgânico"/>
                    </li>
                    <li>
                        <img src= {vidro} alt="Vidro"/>
                    </li>

                </ul>           
            </fieldset>
            <button type="submit">
                Cadastrar local de coleta
            </button>
            </form>             
            </div>
        </div>
        
    );
}
export default CreateLocation;