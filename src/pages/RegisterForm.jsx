import React, { useState } from 'react'

function RegisterForm() {

    const [formData, setFormData] = useState({ 
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format"
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = "password should contain atleast 8 characters, include a number, one special character, and an uppercase letter."
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length ===0

    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
        setErrors({ ...errors, [e.target.name]: ""});
        setSuccessMessage("");
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (validateForm()) {
        setSuccessMessage("Registration successful!")
        console.log("Registered with:", formData);
        }
    }
  return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                    <label className="block font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block font-medium">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label className="block font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Register
                </button>

                {/* Success Message */}
                {successMessage && <p className="text-green-500 mt-3">{successMessage}</p>}
            </form>
        </div>
  )
}

export default RegisterForm