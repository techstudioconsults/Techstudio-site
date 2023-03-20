import React from 'react'
import PropTypes from 'prop-types'
import style from './avatarStack.module.scss'

const AvatarStack = ({ imageList, dontShowMore, tutors }) => {
  const imagesDisplay = tutors?.map((tutor, index) => {
    return (
      // <div key={index} className={style.avatarImg}>
      //   <img src={null} alt='img' className='cc-img-fluid' />
      // </div>
      <div
        title={`${tutor.firstName} ${tutor.firstName}`}
        key={index}
        className={style.initials}
      >
        <span>{`${tutor.firstName.charAt(0)}.${tutor.lastName.charAt(
          0
        )}`}</span>
      </div>
    )
  })

  return (
    <div className={style.avatarCollections}>
      {imagesDisplay}
      <p
        className={[style.message, `ms-1`, dontShowMore ? `d-none` : null].join(
          ' '
        )}
      >
        +{imageList?.length - imagesDisplay?.length} joined the class
      </p>
    </div>
  )
}

AvatarStack.propTypes = {
  imageList: PropTypes.array.isRequired,
  dontShowMore: PropTypes.bool,
  tutors: PropTypes.array,
}

export default AvatarStack
