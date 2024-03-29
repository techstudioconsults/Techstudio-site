import React from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'

import { OffCanvas } from '../../../../../../components'
import StudentAssignmentDetails from '../studentAssignmentDetailsView/StudentAssignmentDetails'
import { TABLE_DATA } from '../tableData'

import style from './table.module.scss'

const customStyles = {
  rows: {
    style: {
      //   minHeight: 'fit-content', // override the row height
      //   paddingBlock: `1rem`,
    },
  },
  headCells: {
    style: {
      backgroundColor: `#F3F3F4`,
      fontWeight: `bold`,
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      fontSize: `14px`,
      textTrasform: `capitalise`,
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
}

// schema
const columns = [
  {
    name: '',
    grow: 0,
    selector: (row) => row.img,
    sortable: true,
    cell: (row) => (
      <img height='30' width='30' alt={row.firstName} src={row.img} />
      //   <Avatar />
    ),
  },
  {
    name: 'First Name',
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: 'Email Address',
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: 'Assignment',
    selector: (row) => row.assignment,
    sortable: true,
    cell: (row) => (
      <OffCanvas styles={`text-lightBlue fw-semibold`} text={row.assignment}>
        <StudentAssignmentDetails />
      </OffCanvas>
    ),
  },
  {
    name: 'Submission Date & Time',
    grow: 1,
    selector: (row) => row.view,
    sortable: true,
    cell: (row) => (
      <Link className='text-danger fw-semibold' to={row.view}>
        {row.view}
      </Link>
    ),
  },
]

const Table = () => {
  const { data } = TABLE_DATA
  return (
    <div className={style.table}>
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        pagination
        responsive
        customStyles={customStyles}
      />
    </div>
  )
}

export default Table
