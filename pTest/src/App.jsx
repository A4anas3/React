import React, { useState } from "react";

// Main application component
const App = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobileNo: "",
    role: "ADMIN", // Default role
  });

  // State for the file input
  const [imageFile, setImageFile] = useState(null);

  // State for displaying messages to the user (e.g., success or error)
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Updates form data state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Updates image file state on file input change
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Show loading state
    setIsLoading(true);
    setMessage("");

    // Create a new FormData object
    const postData = new FormData();

    // --- CRITICAL FIX: Append the DTO as a single JSON string part ---
    // Convert the form data object to a JSON string
    const userRequestJson = JSON.stringify(formData);
    // Append the JSON string to the FormData with the key 'request'
    // The second parameter is a Blob that sets the content type
    postData.append(
      "request",
      new Blob([userRequestJson], { type: "application/json" })
    );

    // Append the image file if it exists
    if (imageFile) {
      postData.append("image", imageFile);
    }

    try {
      // Make the API call using fetch
      const response = await fetch(
        "http://localhost:8888/api/admin/create-user",
        {
          method: "POST",
          body: postData,
        }
      );

      if (response.ok) {
        // If the response is successful, display a success message
        const result = await response.text();
        setMessage(`User created successfully! Server response: ${result}`);
        setIsSuccess(true);
        // Reset form after successful submission
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobileNo: "",
          role: "ADMIN",
        });
        setImageFile(null);
      } else {
        // Handle server errors
        const errorText = await response.text();
        setMessage(`Error: ${response.status} - ${errorText}`);
        setIsSuccess(false);
      }
    } catch (error) {
      // Handle network errors
      console.error("Network Error:", error);
      setMessage("A network error occurred. Please try again later.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create New User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="mobileNo"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="ADMIN">ADMIN</option>
              <option value="EMPLOYEE">EMPLOYEE</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="image-input"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Image (Optional)
            </label>
            <input
              type="file"
              id="image-input"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Creating User..." : "Create User"}
          </button>
        </form>

        {message && (
          <div
            className={`mt-4 p-3 text-center rounded-lg shadow-inner ${
              isSuccess
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
