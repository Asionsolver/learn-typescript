/**
** 🧾 Question:
** @Implement an HTTP request system using the Decorator Pattern in TypeScript.

Your goal is to build a HttpRequest interface and use decorators to extend its functionality without modifying the original class. Decorators should be used to add cross-cutting concerns such as:

✅ Logging the request

✅ Adding authentication headers (e.g., tokens)

✅ Adding retry logic (optional bonus)

Use composition to wrap the base request logic with these added behaviors.

📋 Description:
** In real-world applications (e.g., REST APIs), HTTP requests often need additional features like:

Logging (for debugging or audit purposes)

Authentication (adding tokens or API keys)

Retry or timeout logic

Using the Decorator Pattern, you can apply these features dynamically and independently without altering the base HttpRequest class. This pattern is a clean, extensible alternative to inheritance or hardcoded logic.

💡 Features to Implement:
1. HttpRequest interface
Defines a method send(url: string, data: object): void.

2. BasicHttpRequest class
Implements HttpRequest and sends a basic request (simulated with console.log).

3. AuthHttpRequest decorator
Adds an Authorization token to every request.

4. LoggingHttpRequest decorator
Logs the URL and data before sending.

(Optional) Add a RetryHttpRequest decorator that retries the request N times if it fails.

✅ Example Usage:
const request = new LoggingHttpRequest(
  new AuthHttpRequest(
    new BasicHttpRequest()
  )
);

request.send("https://api.example.com/data", { user: "Ashis" });

✅ Expected Output:
Attaching Auth Header: Bearer abc123
Request Log: https://api.example.com/data { user: 'Ashis', token: 'Bearer abc123' }
Sending request to https://api.example.com/data with data { user: 'Ashis', token: 'Bearer abc123' }


Next Time add Features:

🔧 Features to Add:
✅ Basic request (already done)

✅ Logging

✅ Authentication

🆕 Retry logic

🆕 Caching

🆕 Timeout

🆕 Compression (e.g., Gzip)

🔄 Feature 1: Retry Logic
📌 Question:
Implement a RetryHttpRequest decorator that attempts to resend the request up to a given number of times if it fails.

📘 Description:
In unreliable networks or flaky APIs, requests may fail occasionally. A RetryHttpRequest decorator can intercept failed requests and automatically retry them a fixed number of times. This improves reliability without changing the core logic.

🧠 Feature 2: Caching
📌 Question:
Add a CacheHttpRequest decorator that stores responses for each unique URL and data combination, and returns the cached result if a matching request is repeated.

📘 Description:
To reduce redundant network requests, a caching layer can intercept requests and return stored responses when possible. This improves performance and saves bandwidth. The decorator pattern lets us layer caching on top of other concerns like logging and authentication.

⏱ Feature 3: Timeout Control
📌 Question:
Create a TimeoutHttpRequest decorator that cancels the request if it takes longer than a specified time limit (e.g., 3 seconds).

📘 Description:
Some requests may hang due to poor network or backend issues. A timeout decorator can enforce a max wait time. If the time is exceeded, it aborts the request, preventing the app from freezing or waiting indefinitely.

📦 Feature 4: Compression (Gzip)
📌 Question:
Write a GzipHttpRequest decorator that compresses the payload before sending it to the server.

📘 Description:
In some systems (like IoT or low-bandwidth networks), minimizing payload size is crucial. A compression decorator transforms the data before sending. It can work alongside other decorators to make the request system leaner and more scalable.

✅ Example Full Usage
const request = new LoggingHttpRequest(
  new RetryHttpRequest(
    new CacheHttpRequest(
      new TimeoutHttpRequest(
        new AuthHttpRequest(
          new BasicHttpRequest()
        ),
        3000 // 3-second timeout
      ),
      true // enable caching
    ),
    2 // retry up to 2 times
  )
);

request.send("https://api.example.com/data", { user: "Ashis" });


*/

interface HttpRequest {
  send(url: string, data: object): void;
}

class BasicHttpRequest implements HttpRequest {
  send(url: string, data: object): void {
    console.log("Sending request to", url, "with data", data);
  }
}

// Auth Decorator
class AuthHttpRequest implements HttpRequest {
  constructor(private request: HttpRequest) {}
  send(url: string, data: object): void {
    const token = "Bearer abc123";
    console.log("Attaching Auth Header:", token);
    this.request.send(url, { ...data, token });
  }
}

// Logging Decorator
class LoggingHttpRequest implements HttpRequest {
  constructor(private request: HttpRequest) {}

  send(url: string, data: object): void {
    console.log("Request Log:", url, data);
    this.request.send(url, data);
  }
}

// Usage
const request = new LoggingHttpRequest(
  new AuthHttpRequest(new BasicHttpRequest())
);
request.send("https://api.example.com/data", { key: "value" });
