import logger from "./logger.js";

export default function firstLoggerAccess() {
  logger.printLogCount();
  logger.log("Hello World! from firstLoggerAccess");
}
