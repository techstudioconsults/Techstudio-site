import React from 'react'
import clock from '../../../../assets/icons/clock.png'
import style from './liveClass.module.scss'
import { CgAttachment } from 'react-icons/cg'
import { Avatar } from '../../../../components'

const LiveClassDisplayCard = () => {
  return (
    <section>
      <div
        type='button'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
        className={[style.liveCard].join(' ')}
      >
        <div className={style.avatar}>
          <Avatar />
        </div>
        <div className={style.content}>
          <h5 className={style.title}>
            Becoming a UX Designer from Scratch: Things to look out for
          </h5>
          <div className={style.detail}>
            <span className={style.name}>Emma Gannon, Author, Broadcaster</span>
            <span className={style.time}>
              <span className={style.icon}>
                <img src={clock} alt='clock' />
              </span>{' '}
              9 AM
            </span>
          </div>
        </div>
        <div className={style.buttonDiv}>
          <button className={style.btn}>Start Class</button>
        </div>
      </div>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title fs-5' id='exampleModalLabel'>
                Submit Assignment
              </h4>
              <button
                type='button'
                className='btn-close btn-blue'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className={['modal-body', style.body].join(' ')}>
              <h6 className={[style.title, `text-black`].join(' ')}>
                Fundamentals of Design
              </h6>
              <div className={style.desc}>
                <p className={[style.subTitle, `fs-sm my-3`].join(' ')}>
                  Description
                </p>
                <div className={[`border border-1 p-2`]}>
                  <p className={[`fs-sm`]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati laboriosam enim nemo laborum voluptatibus
                    explicabo omnis vitae modi magnam velit a repellat vel, eius
                    harum neque nostrum. Eveniet omnis fuga explicabo quasi
                    deleniti illum aut minima repellat, consequatur natus
                    corrupti voluptatibus delectus harum hic quis deserunt ipsa
                    neque velit accusamus.
                  </p>
                </div>
              </div>
              <div className={style.attachment}>
                <form className={style.attachmentForm}>
                  <div className={style.iconText}>
                    <CgAttachment />
                    <p>Browse files or drag and drop here</p>
                  </div>
                  <button type='submit'>Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveClassDisplayCard
