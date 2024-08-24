import { IconType } from 'react-icons'

export interface PlanFeature {
  name: string
  icon: IconType
}

export interface Plan {
  title: string
  description: string
  monthlyPrice: string
  yearlyPrice?: string
  features: PlanFeature[]
}
