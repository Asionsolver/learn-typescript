type Status = "success" | "error" | "loading" | "pending";
type StatusCode = 200 | 400 | 600 | 304;

function handleResponse(status: Status, code: StatusCode) {
  if (status === "success" && code === 200) {
    return "Request was successful!";
  } else if (status === "error" && code === 400) {
    return "There was an error with your request.";
  } else if (status === "loading" && code === 600) {
    return "Your request is currently being processed.";
  } else if (status === "pending" && code === 304) {
    return "The requested resource is pending.";
  }
}

// Example usage
const response1 = handleResponse("success", 200);
const response2 = handleResponse("error", 400);
const response3 = handleResponse("loading", 600);
const response4 = handleResponse("pending", 304);
console.log(response1); // "Request was successful!"
console.log(response2); // "There was an error with your request."
console.log(response3); // "Your request is currently being processed."
console.log(response4); // "The requested resource is pending."

// const response5 = handleResponse("success", 500); // Argument of type '500' is not assignable to parameter of type 'StatusCode'.
