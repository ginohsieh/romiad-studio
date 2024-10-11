import logger from '@/logger';

export default function logErrors(err, req, res, next) {
  logger.error(err.stack);
  next(err)
}
