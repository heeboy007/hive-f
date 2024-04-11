import log from 'loglevel';
import Logger from '../logger';

class LogLevelLogger extends Logger {
    constructor() {
        super("LogLevelLogger");
        log.setLevel('info');
    }

    info(...message) {
        log.info(...message);
    }

    error(...message) {
        log.error(...message);
    }
}

const lvLogger = new LogLevelLogger();

export default lvLogger;

export { LogLevelLogger }