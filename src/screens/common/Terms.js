import TitleHeader from 'components/TitleHeader'
import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Terms = () => { 
  
  // Access data passed from CommonLayout
  const commonContentData = useOutletContext();
  const termsContent = commonContentData?.data?.data?.terms_conditions;
  console.log('termsContent', termsContent)

  return (
    <div>
      <div className="flex justify-center">
        <TitleHeader>Terms of Service</TitleHeader>
      </div>
      <p dangerouslySetInnerHTML={{ __html: termsContent }} />
    </div>
  )
}

export default Terms