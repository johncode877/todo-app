import React from 'react';
import './TodoIcon.css'
//import { ReactComponent as CheckSVG } from './check.svg';
//import { ReactComponent as DeleteSVG } from './delete.svg';

//import CheckSVG  from './check.svg';
//import DeleteSVG  from './delete.svg';

import { BsCheck } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

const iconType = {
  'check': (color) => <BsCheck className='Icon-svg' fill={color} />,
  'delete': (color) => <TiDelete className='Icon-svg' fill={color} />
};

function TodoIcon ({type,color,onClick}) {
    return (
      <span 
        className={`Icon-container 
                    Icon-container-${type}`}
        onClick={onClick}            
      >
         {iconType[type](color)}
      </span>  
    );
}

export { TodoIcon };