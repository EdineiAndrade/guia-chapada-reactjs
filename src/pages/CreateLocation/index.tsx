import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css'

const CreateLocation: React.FC = () =>{
    return(        
        <div id="page-home">
            <div className="content">
            <header>                
                  
            </header>
              <main>           
                                    
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