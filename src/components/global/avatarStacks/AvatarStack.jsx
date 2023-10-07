import React from 'react'
import PropTypes from 'prop-types'

import style from './avatarStack.module.scss'

const AvatarStack = ({ showImage, imageList, dontShowMore, tutors }) => {
  let imagesDisplay
  if (!dontShowMore) {
    imagesDisplay = imageList?.slice(0, 3).map((img, index) => {
      return (
        <div key={index} className={style.avatarImg}>
          <img src={img} alt='img' className='cc-img-fluid' />
        </div>
      )
    })
  } else {
    imagesDisplay = tutors?.map((tutor, index) => {
      return (
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
  }

  return (
    <div className={style.avatarCollections}>
      {imagesDisplay}
      <p
        className={[
          style.message,
          `ms-2 text-white`,
          dontShowMore ? `d-none` : null,
        ].join(' ')}
      >
        {imageList?.length > 3
          ? `+${
              imageList?.length - imagesDisplay?.length
            } enrolled for the class`
          : imageList?.length < 3 && imageList?.length !== 0
          ? `${imageList?.length} student(s) enrolled for the class`
          : imageList?.length === 0
          ? `Students yet to register`
          : ``}
      </p>
      {/* <p className='text-secondary fs-sm ms-1'>+30 joined the class</p> */}
    </div>
  )
}

AvatarStack.propTypes = {
  imageList: PropTypes.array,
  dontShowMore: PropTypes.bool,
  tutors: PropTypes.array,
  showImage: PropTypes.bool,
}

export default AvatarStack
