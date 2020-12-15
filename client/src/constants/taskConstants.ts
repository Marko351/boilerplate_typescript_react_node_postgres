export const LOW_PRIORITY = 1
export const MIDDLE_PRIORITY = 2
export const HIGHT_PRIORITY = 3

const taskPriorities = new Map()
taskPriorities.set(LOW_PRIORITY, 'Low Priority')
taskPriorities.set(MIDDLE_PRIORITY, 'Middle Priority')
taskPriorities.set(HIGHT_PRIORITY, 'Hight Priority')

export const getTaskPriority = (id: number): string => {
  return taskPriorities.get(id)
}

export const TASK_PRIORITIES = [
  { value: 1, label: 'Low' },
  { value: 2, label: 'Middle' },
  { value: 3, label: 'High' },
]
