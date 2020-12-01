import React from 'react'

import { CustomCard } from '../../common/CustomCard/CustomCard'
import { CustomTable } from '../../common/CustomTable/CustomTable'

export const TaskTable: React.FC = () => {
  const columns = [
    { name: 'name', header: 'Name', minWidth: 100, defaultFlex: 1 },
    { name: 'age', header: 'Age', minWidth: 100, defaultFlex: 1 },
  ]

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

  return (
    <CustomCard headerText='Task Table'>
      <CustomTable columns={columns} data={data} />
    </CustomCard>
  )
}
