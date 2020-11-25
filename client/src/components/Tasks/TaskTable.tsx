import React from 'react'

import { CustomCard } from '../../common/CustomCard/CustomCard'
import { CustomTable } from '../../common/CustomTable/CustomTable'

export const TaskTable: React.FC = () => {
  return (
    <CustomCard headerText='Task Table'>
      <CustomTable />
    </CustomCard>
  )
}
