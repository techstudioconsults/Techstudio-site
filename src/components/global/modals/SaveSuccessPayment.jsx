import PropTypes from 'prop-types'
import {
  useGetRevenueInfoMutation,
  useGetStudentPaymentRecordsByCourseIDsMutation,
} from '../../../pages/Dashboard/Admin/Payment/api/paymentApiSlice'

const SaveSuccessPayment = ({ content }) => {
  const [getStudentPaymentRecordsByCourseIDs] =
    useGetStudentPaymentRecordsByCourseIDsMutation()
  const [getRevenueInfo] = useGetRevenueInfoMutation()

  const handleClick = async () => {
    await getStudentPaymentRecordsByCourseIDs(content?.courseID).unwrap()
    await getRevenueInfo(content?.courseID).unwrap()
  }

  return (
    <div
      className='modal fade'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      id={`${content.studentID}-save-success`}
      tabIndex='-1'
      aria-labelledby='save-success-payment'
    >
      <div className='modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-md'>
        <div className='modal-content'>
          <div
            className={[
              'modal-body d-flex flex-column align-items-center text-center py-20',
            ].join(' ')}
          >
            <div className='px-5'>
              <h4 className='fw-bold text-blue pt-5'>{content.title}</h4>
              <p className='px-8'>{content.desc}</p>
            </div>
            <div className={`w-100 text-center mt-10`}>
              <button
                onClick={handleClick}
                data-bs-dismiss='modal'
                aria-label='Close'
                className={`btn btn-primary w-50`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SaveSuccessPayment.propTypes = {
  ref: PropTypes.any,
  content: PropTypes.object.isRequired,
}

export default SaveSuccessPayment
