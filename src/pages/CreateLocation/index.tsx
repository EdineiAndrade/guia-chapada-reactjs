import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import './styles2.css';

const CreateLocation: React.FC = () =>{
    return(
        <div id="page-home">
            <div className="content">
             <h1>Pag2</h1>
                <Link to="/">
                   <span>
                        <FiLogIn/>
                    </span>

                </Link>
            </div>
        </div>
    );
}
export default CreateLocation;