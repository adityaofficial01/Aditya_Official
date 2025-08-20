import TitleHeader from 'components/TitleHeader'
import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Privacy = () => {
  
  // Access data passed from CommonLayout
  const commonContentData = useOutletContext();
  const privacyContent = commonContentData?.data?.data?.privacy_policy;
  
  return (
    <div>
      <div className="flex justify-center">
        <TitleHeader>Privacy Policy</TitleHeader>
      </div>
      <p dangerouslySetInnerHTML={{ __html: privacyContent }} />
    </div>
  )
}

export default Privacy