import React from 'react'
import style from './sectionone.module.scss'
import { SearchComponent, SearchForm } from '../../../../../components'

const index = () => {
  return (
    <main className={style.headerContainer}>
      <h2 className={style.subtitle}>Frequently Asked Questions </h2>
      <h2 className={style.subtitle}>(FAQS)</h2>
      <p className={style.subtitleTwo}>
        You have questions? We are here to help
      </p>
      <input type='text' placeholder='Search' className={style.searchBar} />
    </main>
  )
}
export default index
