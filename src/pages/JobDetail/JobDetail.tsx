import React from 'react'
import { useParams } from 'react-router'

const JobDetail = () => {
  const params = useParams();
  console.log(params.jobId);
  

  return (
    <div>{params.jobId}</div>
  )
}

export default JobDetail