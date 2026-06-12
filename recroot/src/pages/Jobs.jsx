import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Jobs() {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate('/jobs/input-method')
  }, [])

  return null
}

export default Jobs