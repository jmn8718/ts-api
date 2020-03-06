interface IConfig {
  PORT: number,
  ENV: string
}

export const CONFIG: IConfig = {
  PORT: parseInt(process.env.PORT || '3000'),
  ENV: process.env.NODE_ENV || 'development'
}
