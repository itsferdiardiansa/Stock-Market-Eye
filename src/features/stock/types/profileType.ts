export type CompanyOfficer = {
  maxAge: number
  name: string
  age: number
  title: string
  yearBorn: number
  fiscalYear: number
  totalPay: FinancialValue
  exercisedValue: FinancialValue
  unexercisedValue: FinancialValue
}

export type FinancialValue = {
  raw: number
  fmt: string | null
  longFmt: string
}

export type AssetProfile = {
  address1: string
  city: string
  state: string
  zip: string
  country: string
  phone: string
  website: string
  industry: string
  sector: string
  longBusinessSummary: string
  fullTimeEmployees: number
  companyOfficers: CompanyOfficer[]
  auditRisk: number
  boardRisk: number
  compensationRisk: number
  shareHolderRightsRisk: number
  overallRisk: number
  governanceEpochDate: number
  compensationAsOfEpochDate: number
  maxAge: number
}
