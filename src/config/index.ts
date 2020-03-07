interface IEnvConfig {
  PORT: number,
  ENV: string
}

interface IAppConfig {
  MORGAN_LEVEL: string,
  LOGGER_LEVEL: string
}

export const CONFIG: IEnvConfig = {
  PORT: parseInt(process.env.PORT || '3000'),
  ENV: process.env.NODE_ENV || 'development'
}

export const APP_CONFIG: IAppConfig = {
  MORGAN_LEVEL: process.env.MORGAN_LEVEL || CONFIG.ENV === 'production' ? 'combined' : 'dev',
  LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'trace'
}