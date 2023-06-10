import style from './404.module.scss'
import { Link } from 'react-router-dom'
import { Container, ExternalLayout } from '../../layout'

const index = () => {
  return (
    <ExternalLayout>
      <Container>
        <section className={style.error_main}>
          <section className={style.error_main_one}>
            <div>
              <p className={style.error_text_one}>OOOps!</p>
              <p className={style.error_text_two}>Page not found</p>
              <p className={style.error_text_three}>
                This page doesn&apos;t exist, we suggest you go back to home.
              </p>
            </div>
            <Link to='/' className={[style.error_btn].join(' ')}>
              Back to home
            </Link>
          </section>
          <section className={style.error_main_two}>
            <img
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218512/techstudio-web-app/assets/images/404_awudxb.webp`}
              alt='error img'
              className={style.error_img}
            />
          </section>
        </section>
      </Container>
    </ExternalLayout>
  )
}

export default index
