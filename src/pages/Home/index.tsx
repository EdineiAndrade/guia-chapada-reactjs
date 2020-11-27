import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import logo from '../../images/logo.svg'

import './styles.css';


const Home: React.FC = () =>{
    return(
        <div id="page-home">
        <div className="content">
              <header>
                  <img src={logo} alt="Reciclagem"/>
              </header>
              <main>
                  <h1>Coleta seletiva e reciclagem em geral</h1>
                  <p>Reciclagem de materiais diversos</p>

                  <Link to="/create-location">
                      <span>
                        <FiLogIn/>
                      </span>

                  </Link>
              </main>
        </div>
    </div>
    );
}
export default Home;