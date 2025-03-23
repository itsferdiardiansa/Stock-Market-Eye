export type Filling = {
  date: string
  epochDate: number
  type: string
  title: string
  url: string
  edgarUrl: string
  maxAge: number
}

export type SECFillings = {
  fillings: Filling[]
  maxAge: number
}
