// {
//   "access": "<institution_token>",
//   "refresh": "<refresh_token>",
//   "user": {
//     "id": "<user_id>",
//     "is_institution": true
//   }
//   "isError": false,
//   "errorMessage": "An error occurred while fetching data."
// }

type RealWorldApiResponse<T> = {
  access: string;
  refresh: string;
  user: T;
  isError?: boolean;
  errorMessage?: string;
};

type UserResponses = RealWorldApiResponse<{
  id: string;
  is_institution: boolean;
}>;

const responses: UserResponses = {
  access: "5483ufgsd4304384kfg4875349",
  refresh: "5483ufgsd43dmk4kfg4875349",
  user: {
    id: "5483ufgsd4304384kfg",
    is_institution: true,
  },
  isError: false,
  errorMessage: "An error occurred while fetching data.",
};

// function handleUserApiResponses<T>(response: RealWorldApiResponse<T>) {
//   if (response.isError) {
//     console.error("An error occurred:", response.errorMessage);
//   } else {
//     console.log("Access Token:", response.access);
//     console.log("Refresh Token:", response.refresh);
//     console.log("User ID:", response.user.id); // Property 'id' does not exist on type 'T'.
//     console.log("Is Institution:", response.user.is_institution); // Property 'is_institution' does not exist on type 'T'.
//   }
// }

function handleUserApiResponses<T>(response: UserResponses) {
  if (response.isError) {
    console.error("An error occurred:", response.errorMessage);
  } else {
    console.log("Access Token:", response.access);
    console.log("Refresh Token:", response.refresh);
    console.log("User ID:", response.user.id);
    console.log("Is Institution:", response.user.is_institution);
  }
}
// ! This approach sacrifices strict typing for flexibility.

// function handleUserApiResponses<T>(response: RealWorldApiResponse<T>) {
//   if (response.isError) {
//     console.error("An error occurred:", response.errorMessage);
//   } else {
//     // Type guard
//     if (
//       typeof response.user === "object" &&
//       response.user !== null &&
//       "id" in response.user &&
//       "is_institution" in response.user
//     ) {
//       const user = response.user as { id: string; is_institution: boolean };
//       console.log("User ID:", user.id);
//       console.log("Is Institution:", user.is_institution);
//     } else {
//       console.log("User does not match expected shape.");
//     }
//   }
// }

handleUserApiResponses(responses);

// function handleUserApiResponses<
//   T extends { id: string; is_institution: boolean }
// >(response: RealWorldApiResponse<T>) {
//   if (response.isError) {
//     console.error("An error occurred:", response.errorMessage);
//   } else {
//     console.log("Access Token:", response.access);
//     console.log("Refresh Token:", response.refresh);
//     console.log("User ID:", response.user.id);
//     console.log("Is Institution:", response.user.is_institution);
//   }
// }
// handleUserApiResponses(responses);
