import React from 'react';
import pdfFile from '../asset/ShashankPortfolioRResume.pdf'
const DownloadLink = () => {
  return (
    <div>
      <a href={pdfFile} download="Shashank_Fronend_Developer" style={{textDecoration:'none'}}>
        Download Resume
      </a>
    </div>
  );
};

export default DownloadLink;