import react from 'react';
import { Button } from '../../components';
import {Link} from 'react-router-dom'

import * as ROUTES from '../../routes/routes.js'

export default function Hauptmenu(){
    return(
        <div className = "button_container">
            <Link to={ROUTES.Menu_Karteikarten}>
                <Button>Karteikarten</Button>
            </Link>
        </div>
    );
}


