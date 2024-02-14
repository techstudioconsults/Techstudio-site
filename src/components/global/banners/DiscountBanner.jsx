import CountdownTimer from '../../../hooks/countdownTimer'

const DiscountBanner = () => {
  const targetDate = '2024-2-4'
  return (
    <div style={{ height: `57px` }} className='bg-white w-100 d-flex align-items-center justify-content-center py-10 py-lg-0'>
      <p className='text-dark fw-bolder fs-sm p-5'>
        Get 10% Discount Off Our Next Cohort!!!
        <CountdownTimer targetDate={targetDate} />
      </p>
    </div>
  )
}

export default DiscountBanner
