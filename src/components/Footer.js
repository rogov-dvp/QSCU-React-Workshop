import React from 'react';

function Footer() {
  return (
    <footer style={{position:"absolute", bottom:0, width:"100%"}}>
	<div style={{padding:"2em"}}>
	  <p style={{float:"left"}}> QSCU React Workshop | March 2022 </p>
	  <p style={{float: "right"}}> Made with React v17.0.2 </p>
	</div>
    </footer>
  );
}

export default Footer;