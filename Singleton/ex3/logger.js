class Logger {
  constructor() {
    if (!Logger.instance) {
      this.logs = [];
      Logger.instance = this;
    }
    return Logger.instance;
  }

  log(message) {
    console.log("Logging start ...");
    this.printLogCount();
    this.logs.push(message);
    console.log(`message is: ${message}`);
    console.log(this.logs);
    this.printLogCount();
    console.log("Logging end.!");
  }

  printLogCount() {
    return console.log(`count: ${this.logs.length}`);
  }
}

// Singleton design pattern eager initialization
const logger = new Logger();
Object.freeze(logger);
export default logger;
