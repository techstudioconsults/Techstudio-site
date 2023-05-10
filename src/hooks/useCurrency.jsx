import React from 'react'

export default function useCurrency() {
  const formatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    })
  }, [])

  function formatCurrency(amount) {
    return formatter.format(amount)
  }

  return formatCurrency
}
