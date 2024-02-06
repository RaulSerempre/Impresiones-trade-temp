export interface IResponseAgegate {
  agegate: IContentResponseAgegate
}

export interface IContentResponseAgegate {
  id: number
  ageGateTemplateType: string
  urlsToSkip: any
  yesDatalayersConfig: any
  noDatalayersConfig: any
  rememberMeDatalayerConfig: any
  redirectDatalayerConfig: any
  enterDatalayeresConfig: any
  createdAt: string
  updatedAt: string
  publishedAt: any
  content: any[]
}
