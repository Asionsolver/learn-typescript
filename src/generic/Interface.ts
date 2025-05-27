// interface Box<T> {
//   value: T;
// }

// const numberBox: Box<number> = {
//   value: 5,
// };
// const stringBox: Box<string> = {
//   value: "Ashis",
// };

// console.log(numberBox);
// console.log(stringBox);

interface ApiResponses<T> {
  status: string;
  message: string;
  data: T;
}

interface UserResponse {
  id: number;
  name: string;
  email: string;
  age: number;
  address: string;
  phone: string;
  website: string;
}

async function fetchUserData(): Promise<ApiResponses<UserResponse>> {
  const response = await fetch("https://dummyjson.com/users/1");
  return response.json();
}

(async () => {
  try {
    const userResponse = await fetchUserData();
    console.log(userResponse);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
})();
