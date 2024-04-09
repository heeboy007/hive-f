import log from 'loglevel';
import { Logger } from '../logger';

class LogLevelLogger extends Logger {
    constructor() {
        log.setLevel('info');
    }

    info(message) {
        log.info(message);
    }

    error(message) {
        log.error(message);
    }
}

export default LogLevelLogger;