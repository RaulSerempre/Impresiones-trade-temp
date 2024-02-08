import { useReactQuery } from '../useApi'
import { getTutorialService } from '@/src/api/services/tutorial/tutorial.service'

export const useGetTutorialSteps = () => {
  return  useReactQuery('steps', getTutorialService )
}
