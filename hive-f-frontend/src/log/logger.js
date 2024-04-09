// 로거 인터페이스
class Logger {
    constructor(name) {
        if (new.target === Logger) {
            throw new Error("Logger cannot be instantiated directly.");
        }
        this.name = name;
    }

    info(message) {
        throw new Error("Logger info() must be implemented");
    }

    error(message) {
        throw new Error("Logger error() must be implemented");
    }
}

export default Logger;