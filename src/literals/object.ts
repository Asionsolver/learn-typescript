type UserRole = "admin" | "user" | "guest";

interface User {
  name: string;
  role: UserRole; // Only allows these 3 values
}

const admin: User = { name: "Alice", role: "admin" }; // ✅ Valid
// const hacker: User = { name: "Bob", role: "root" }; // ❌ Error: Type '"root"' is not assignable to type 'UserRole'.
