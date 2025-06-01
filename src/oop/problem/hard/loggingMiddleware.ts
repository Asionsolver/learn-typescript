/**
 * 🧾 Question:
@How can you implement flexible and composable logging functionality using the Decorator Pattern in TypeScript?

Design a system where different logging behaviors (such as adding timestamps, log levels, or custom prefixes) can be layered dynamically over a base logger. Demonstrate how this can be achieved using the decorator pattern.

📋 Description:
In many applications, logging requirements vary by context — some logs need timestamps, others need log levels like INFO, ERROR, and still others need context-specific prefixes. Instead of tightly coupling all these behaviors into one class, we can use the Decorator Pattern to dynamically "wrap" a basic logger with any combination of these behaviors.

The system should include:

A base logger that implements a common Logger interface.

Decorators that add additional behavior (like timestamps or log levels).

The ability to combine decorators flexibly depending on the context.

This approach ensures modularity, reusability, and open/closed design (open for extension, closed for modification).

✅ Example Use:
const baseLogger = new BasicLogger();

const decoratedLogger = new TimestampLogger(
  new LevelLogger(
    new PrefixLogger(baseLogger, "AuthModule"),
    "INFO"
  )
);

decoratedLogger.log("User login successful.");


 */

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
