import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import 'react-virtualized/styles.css'

import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg'
import { ReactComponent as ArrowLeft } from '../../assets/icons/left-arrow.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/right-arrow.svg'

export const DEFAULT_LIMIT = 5
export const DEFAULT_SKIP = 0
export const DEFAULT_PAGE = 1
export const LIMIT_OPTIONS = [5, 10, 15, 50]

const columns = [
  { name: 'name', header: 'Name', minWidth: 100, defaultFlex: 1 },
  { name: 'age', header: 'Age', minWidth: 100, defaultFlex: 1 },
]

const gridStyle = { minHeight: 500 }

const data = [
  { id: 1, name: 'John McQueen', age: 35 },
  { id: 2, name: 'Mary Stones', age: 25 },
  { id: 3, name: 'Robert Fil', age: 27 },
  { id: 4, name: 'Roger Robson', age: 81 },
  { id: 5, name: 'Billary Konwik', age: 18 },
  { id: 6, name: 'Bob Martin', age: 18 },
  { id: 7, name: 'Matthew Richardson', age: 54 },
  { id: 8, name: 'Ritchie Peterson', age: 54 },
  { id: 9, name: 'Bryan Martin', age: 40 },
  { id: 10, name: 'Matthew Richardson', age: 54 },
  { id: 11, name: 'Ritchie Peterson', age: 54 },
  { id: 12, name: 'Bryan Martin', age: 40 },
]
export const CustomTable: React.FC = () => {
  const [limit, setLimit] = useState(DEFAULT_LIMIT)
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [skip, setSkip] = useState(DEFAULT_SKIP)
  const [limitUpdateOpen, setLimitUpdateOpen] = useState(false)

  const onSkipChange = useCallback(
    (amount, type) => {
      console.log(skip, amount)
      if (type === 1) {
        setSkip(skip - amount)
        setPage(page - 1)
      }
      if (type === 2) {
        setSkip(skip + amount)
        setPage(page + 1)
      }
    },
    [skip, page],
  )

  // const onLimitChange = (amount: number) => {
  //   setSkip(skip + amount)
  //   console.log(amount)
  // }

  const paginationToolbar = () => {
    return (
      <div className='paginator'>
        <span className='text-muted'>
          {skip} to {skip + limit} of {data.length}
        </span>
        <button
          className='paginator__arrow paginator__arrow--left'
          onClick={() => onSkipChange(limit, 1)}
          disabled={skip === 0}>
          <ArrowLeft />
        </button>
        Page {page}
        <button
          className='paginator__arrow'
          onClick={() => onSkipChange(limit, 2)}
          disabled={data.length <= skip + limit}>
          <ArrowRight />
        </button>
        <span className='paginator__limit'>
          <div className='paginator__limit--info'>
            <span>{limit}</span>
            <button className='paginator__arrow' onClick={() => setLimitUpdateOpen(!limitUpdateOpen)}>
              <ArrowDown />
            </button>
          </div>
          {limitUpdateOpen && (
            <div className='paginator__limit--options'>
              {LIMIT_OPTIONS.map((option) => (
                <span key={option}>{option}</span>
              ))}
            </div>
          )}
        </span>
      </div>
    )
  }

  return (
    <>
      <ReactDataGrid
        idProperty='id'
        columns={columns}
        dataSource={data}
        style={gridStyle}
        pagination
        limit={limit}
        skip={skip}
        renderPaginationToolbar={() => null}
      />
      {paginationToolbar()}
    </>
  )
}
