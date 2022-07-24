import logger from "./logger.js";

// Logger access in second file
export default function secondLoggerAccess() {
  logger.log("Hello World! from secondLoggerAccess");
}
