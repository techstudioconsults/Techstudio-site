import React from 'react'
import { Avatar, Button, MessageCard } from '../../../../components'
import style from './messages.module.scss'

const Messages = () => {
  return (
    <section className={style.messageView}>
      <div className={style.messasges}>
        <div className={style.header}>
          <h4 className={style.title}>Messages</h4>
          <span className={style.number}>
            <span>2</span>
          </span>
        </div>
        <div className={style.searchInput}>
          <input type='text' placeholder='Search by chats or keywords' />
        </div>
        <div className={style.messagesWrapper}>
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </div>
      </div>
      {/* ================================ */}
      <div className={style.messageDetails}>
        <div className={style.header}>
          <Avatar />
        </div>
        <div
          className={[
            style.header,
            `d-flex align-items-start gap-5 pb-5 mt-5`,
          ].join(' ')}
        >
          <div className={style.avatar}>
            <Avatar />
          </div>
          <div className={[style.info].join(' ')}>
            <div>
              <h4 className='fw-bold mb-3'>Olawunmi Williams</h4>
              <div
                className={[
                  style.header,
                  `d-flex flex-column flex-lg-row gap-lg-10 px-0 align-items-start`,
                ].join(' ')}
              >
                <p className={[style.name, style.mute].join(' ')}>
                  Design Student
                </p>
                <p className={[style.email, style.mute].join(' ')}>
                  Olawunmiwilliams@company.com
                </p>
                <p className={[style.time, style.mute].join(' ')}>
                  3:52 PM Oct 23, 2020
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* message details */}
        <article className={style.article}>
          <div>
            <h4 className='my-3'>I need the new design files!</h4>
            <p className={[style.mute, `my-5 fs-sm`].join(' ')}>
              Hey, can you share me new design course? Because I do not have
              this one. Thanks! Stock Options: Pursuant to the Company’s Equity
              Incentive Plan (the “Plan”), you will be granted an option to
              purchase 0 shares of the Company’s common stock at an exercise
              price equal to the fair market value of those shares on the date
              of grant. Your stock option will be subject to and governed by the
              terms and conditions of the Plan and the Company’s standard form
              of stock option agreement, which you will be required to sign as a
              condition of your stock option grant. At-Will Employment: Your
              employment with the Company is “at will,” and thus you or Company
              may terminate our employment relationship at any time, with or
              without cause or advance notice.
            </p>
            <div className='d-flex'>
              <Button solidBtn navBtn width={9} linkText='Reply' />
            </div>
          </div>
          <div className=''>
            <div className={[style.singleMessage].join(' ')}>
              <p className='fw-bold'>Olawunmi Williams</p>
              <p className={style.mute}>
                Manager should be able to copy an external person Manager should
                be able to…
              </p>
            </div>
            <div className={[style.singleMessage].join(' ')}>
              <p className='fw-bold'>You</p>
              <p className={style.mute}>
                Manager should be able to copy an external person Manager should
                be able to…
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Messages
