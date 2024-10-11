import winston from 'winston';

export function createLogger({
  level = 'info',
  format = winston.format.json(),
} = {}) {
  const logger = winston.createLogger({
    level,
    format,
    defaultMeta: { service: 'romiad-studio-api' },
    transports: [
      new winston.transports.Console(),
    ],
  });
  return logger;
}

const logger = createLogger();

export default logger;
