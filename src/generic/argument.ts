function identity<T>(arg: T): T {
  return arg;
}

// console.log(identity(5));
// console.log(identity("Ashis"));

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}
type TodoInfo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

// Error:exports. Consider adding an empty 'export {}' to make this file a module.ts(1375).Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', 'node18', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher.ts(1378)
// const user = await fetchData<UserOne>("/api/user/");

// Solve this error two way:
// ✅ Option 1: Wrap in an async IIFE
(async () => {
  const user = await fetchData<TodoInfo>("https://dummyjson.com/todos/1");
  console.log(user);
})();
// ✅ Option 2: Use import() or promise chaining
// fetchData<TodoInfo>("https://dummyjson.com/todos/1").then((user) => {
//   console.log(user);
// });
