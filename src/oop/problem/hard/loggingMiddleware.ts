interface Logger {
  log(message: string): void;
}

// Basic Logger
class BasicLogger implements Logger {
  log(message: string): void {
    console.log("Log: ", message);
  }
}

// Decorator base (optional for clarity)
class LoggerDecorator implements Logger {
  constructor(protected logger: Logger) {}
  log(message: string): void {
    this.logger.log(message);
  }
}

// 1. Timestamp Decorator
class TimestampDecorator extends LoggerDecorator {
  log(message: string): void {
    const timeStamp = new Date().toISOString();
    super.log(`[${timeStamp}] ${message}`);
  }
}

// 2. Log Level Decorator
class LogLevelDecorator extends LoggerDecorator {
  constructor(logger: Logger, private level: string) {
    super(logger);
  }

  log(message: string): void {
    super.log(`[${this.level}] ${message}`);
  }
}

// 3. Prefix Decorator
class PrefixDecorator extends LoggerDecorator {
  constructor(logger: Logger, private prefix: string) {
    super(logger);
  }

  log(message: string): void {
    super.log(`[${this.prefix}] ${message}`);
  }
}

// Chain decorators: BasicLogger → Prefix → Level → Timestamp
const logger: Logger = new TimestampDecorator(
  new LogLevelDecorator(
    new PrefixDecorator(new BasicLogger(), "AuthModule"),
    "INFO"
  )
);

logger.log("User logged in.");
