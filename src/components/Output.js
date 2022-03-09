import React, { useContext } from 'react';
import { CertificateContext } from '../App';
import { FcCheckmark } from "react-icons/fc";


function Output(props) {

  const {output} = props;
  
  const certificate = useContext(CertificateContext)
  
  return (
    <>
      <ol>
      {
        output.map(todo => (
          <li key={todo}>{todo} - <FcCheckmark/> {certificate}</li>
        ))
      }
      </ol> 
    </>
  );
}

export default Output;
  