class Logger {
  constructor() {
    if (!Logger.instance) {
      this.logs = [];
      Logger.instance = this;
    }
    return Logger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`Log message is: ${message}`);
  }

  printLogCount() {
    return console.log(`Logs count: ${this.logs.length}`);
  }
}

// Singleton design pattern eager initialization
const logger = new Logger();
Object.freeze(logger);
export default logger;
