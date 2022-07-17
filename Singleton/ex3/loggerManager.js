import firstLoggerAccess from "./loggerAccessFirst.js";
import secondLoggerAccess from "./loggerAccessSecond.js";
import logger from "./logger.js";

logger.printLogCount();
firstLoggerAccess();
secondLoggerAccess();
logger.printLogCount();
