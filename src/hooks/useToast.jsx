import { useEffect, useState } from 'react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'

const useToast = () => {
  const [toast, setToast] = useState()
  useEffect(() => {
    const feedbackToast = document.getElementById('feedback-toast')
    setToast(new bootstrap.Toast(feedbackToast))
  }, [])
  return { toast }
}

export default useToast
