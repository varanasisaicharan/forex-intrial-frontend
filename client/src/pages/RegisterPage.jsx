import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", form);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-[350px] shadow-2xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Name" name="name" value={form.name} onChange={handleChange} />
            <Input placeholder="Email" name="email" value={form.email} onChange={handleChange} />
            <Input type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}