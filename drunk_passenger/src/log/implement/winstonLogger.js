import winston from "winston";
import { Logger } from "../logger";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ],
});

class WinstonLogger extends Logger {
    error(message) {
        logger.error(message);
    }

    info(message) {
        logger.info(message);
    }
}

export default WinstonLogger;