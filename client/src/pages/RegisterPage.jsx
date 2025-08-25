import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agreeTerms) {
      alert("You must agree to the Terms & Conditions");
      return;
    }
    console.log("Registered:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <Card className="w-full max-w-lg shadow-2xl rounded-2xl">
        <CardContent className="p-8">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center mb-2">Create Your Account</h2>
          <p className="text-gray-500 text-center mb-6">Join our community today</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <Input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            {/* Terms & Conditions */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={form.agreeTerms}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </a>
              </span>
            </div>

            {/* Register Button */}
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Signup */}
          <div className="space-y-4">
            <Link href="/google-signup">
              <a className="w-full flex items-center justify-center space-x-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition block">
                <FcGoogle className="text-2xl" />
                <span>Sign up with Google</span>
              </a>
            </Link>
           
          </div>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
