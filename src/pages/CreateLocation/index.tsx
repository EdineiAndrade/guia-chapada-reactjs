import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import ValePati from '../../images/capa-vale-pati.jpg'
import './styles2.css';

const CreateLocation: React.FC = () =>{
    return(
        <div id="page-home">
            <div className="content">
            <header>
                  <img src={ValePati} alt="Reciclagem"/>
              </header>
              <main>
                  <h1>Coleta</h1>
                  <p>Reciclagem </p>
                  
                <Link to="/">
                   <span>
                        <FiLogIn/>
                    </span>

                </Link>
                </main>
            </div>
        </div>
    );
}
export default CreateLocation;