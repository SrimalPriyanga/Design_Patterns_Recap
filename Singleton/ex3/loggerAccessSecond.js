import logger from "./logger.js";

export default function secondLoggerAccess() {
  logger.printLogCount();
  logger.log("Hello World! from secondLoggerAccess");
}
