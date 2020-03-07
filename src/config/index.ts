interface EnvConfig {
  PORT: number;
  ENV: string;
}

interface AppConfig {
  MORGAN_LEVEL: string;
  LOGGER_LEVEL: string;
}

export const CONFIG: EnvConfig = {
  PORT: parseInt(process.env.PORT || "3000"),
  ENV: process.env.NODE_ENV || "development"
};

export const APP_CONFIG: AppConfig = {
  MORGAN_LEVEL: process.env.MORGAN_LEVEL || CONFIG.ENV === "production" ? "combined" : "dev",
  LOGGER_LEVEL: process.env.LOGGER_LEVEL || "trace"
};