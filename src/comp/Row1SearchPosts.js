import React from 'react';

import './Global.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClose, faGear, faHome, faSearch, faTools} from "@fortawesome/free-solid-svg-icons";

const Row1SearchPosts = React.FC = () =>{

return(
    
    <div className={'row1_search_class'}>
        <div className={'col2_search_icons_left_class'}>
            <div className={'col234_item_class'}>
                <FontAwesomeIcon icon={faClose} />
            </div>   
        </div>
        <div className={'col3_search_input_class'}>
            <div className={'col234_item_class'}>Search2</div>
        </div>
        <div className={'col4_search_icons_right_class'}>
            <div className={'col234_item_class'}>
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    
    </div>
        
    
)

}
export default Row1SearchPosts