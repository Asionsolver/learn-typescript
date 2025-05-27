type ApiResponse<T> = {
  data?: T;
  isError?: boolean;
};

type userResponse = ApiResponse<{
  id: number;
  name: string;
}>;

const response: userResponse = {
  data: {
    id: 1,
    name: "John Doe",
  },
  isError: false,
};

function handleApiResponses<T>(response: ApiResponse<T>) {
  if (response.isError) {
    console.log("An error occurred while fetching data.");
  } else if (response.data) {
    console.log("Data received:", response.data);
  } else {
    console.warn("No data available.");
  }
}
handleApiResponses(response);
handleApiResponses({
  isError: true,
});
handleApiResponses({
  data: {
    id: 2,
    name: "Jane Smith",
  },
  isError: false,
});
