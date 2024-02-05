import React from 'react'
import { useReactQuery } from '../useApi'
import { getTutorialStepsApi } from '@/src/api/services/tutorial/tutorial.service'

export const useGetTutorialSteps = () => {
  return  useReactQuery('steps', getTutorialStepsApi )
}
