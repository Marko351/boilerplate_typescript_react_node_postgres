import React, { useState, useCallback, useEffect } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import { TypeColumn } from '@inovua/reactdatagrid-community/types'
import '@inovua/reactdatagrid-community/index.css'
import 'react-virtualized/styles.css'

import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg'
import { ReactComponent as ArrowLeft } from '../../assets/icons/left-arrow.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/right-arrow.svg'
import { ITask } from '../../types/Task'
import { IEvent } from '../../types/Event'

export const DEFAULT_LIMIT = 5
export const DEFAULT_SKIP = 0
export const DEFAULT_PAGE = 1
export const DEFAULT_TOTAL_RECORDS = 5
export const LIMIT_OPTIONS = [5, 10, 15, 50]

// interface Data<T> {
//   [key: string]: string | number | null | boolean | undefined
// }
interface TableProps {
  data: ITask[] | IEvent[]
  // gridStyle?:
  //   | {
  //       [key: string]: React.ReactText
  //     }
  //   | undefined
  columns: TypeColumn[]
  totalRecords: number
  onSkipAndLimitChange?: (name: string, value: number) => void
}

export const CustomTable: React.FC<TableProps> = ({ data, columns, onSkipAndLimitChange, totalRecords }) => {
  const [limit, setLimit] = useState(DEFAULT_LIMIT)
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [skip, setSkip] = useState(DEFAULT_SKIP)
  const [limitUpdateOpen, setLimitUpdateOpen] = useState(false)
  const [gridStyle, setGridStyle] = useState({ minHeight: 240 })

  useEffect(() => {
    setGridStyle({ minHeight: data.length * 40 + 39 })
  }, [data])

  const onSkipChange = useCallback(
    (amount, type) => {
      if (type === 1) {
        setSkip(skip - amount)
        setPage(page - 1)
        onSkipAndLimitChange && onSkipAndLimitChange('skip', skip - amount)
      }
      if (type === 2) {
        setSkip(skip + amount)
        setPage(page + 1)
        onSkipAndLimitChange && onSkipAndLimitChange('skip', skip + amount)
      }
    },
    [skip, page],
  )

  const onLimitChange = (amount: number) => {
    onSkipAndLimitChange && onSkipAndLimitChange('limit', amount)
    setLimit(amount)
    setLimitUpdateOpen(false)
  }

  const paginationToolbar = () => {
    return (
      <div className='paginator'>
        <span className='text-muted'>
          {skip} to {skip + limit} of {totalRecords || DEFAULT_TOTAL_RECORDS}
        </span>
        <button
          className='paginator__arrow paginator__arrow--left'
          onClick={() => onSkipChange(limit, 1)}
          disabled={skip === 0}>
          <ArrowLeft />
        </button>
        <span className='paginator__page'>Page {page}</span>
        <button
          className='paginator__arrow'
          onClick={() => onSkipChange(limit, 2)}
          disabled={(totalRecords || DEFAULT_TOTAL_RECORDS) <= skip + limit}>
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
                <span key={option} onClick={() => onLimitChange(option)} role='button' tabIndex={option}>
                  {option}
                </span>
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
        renderPaginationToolbar={() => null}
      />
      {paginationToolbar()}
    </>
  )
}
