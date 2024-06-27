import React from 'react';
import { useParams, Link } from 'react-router-dom';

function SOPDetail({ sops }) {  // Pass the sops data as props
  const { id } = useParams();  // Get the SOP ID from the URL
  const sop = sops.find(s => s.id === parseInt(id, 10)); 

  if (!sop) {
    return <div>SOP not found</div>;
  }

  return (
    <div className="sop-detail">
      <Link to="/SOPs" className="back-button">Back to SOPs</Link>
      <h3>{sop.title}</h3>
      <pre className="content">{sop.content}</pre>
    </div>
  );
}

export default SOPDetail;
