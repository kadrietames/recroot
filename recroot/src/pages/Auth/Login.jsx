import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { login } from "../../api/recroot";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const data = await login(form.email, form.password);
      const name =
        data.user?.fullName || data.user?.name || form.email.split("@")[0];

      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", form.email);

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }
      navigate("/login-success", { state: { name } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-[32px] font-bold text-slate-900 tracking-tight text-center mb-8">
        Welcome Back!
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-500 text-xs font-medium px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-slate-500 text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g., you@yourcompany.com"
            className="w-full h-[46px] px-4 bg-white rounded-lg border border-slate-200 outline-none focus:border-[#183c6b] text-slate-800 placeholder:text-slate-300 transition-all text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-slate-500 text-sm font-medium"
          >
            Password
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full h-[46px] pl-4 pr-12 bg-white rounded-lg border border-slate-200 outline-none focus:border-[#183c6b] text-slate-800 placeholder:text-slate-300 transition-all text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 text-xs transition"
            >
              {showPassword ? "👁" : "👁‍🗨"}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-[#183c6b] focus:ring-[#183c6b]"
            />
            <span className="text-xs">Remember Me</span>
          </label>
          <Link
            to="/forgot-password"
            className="text-slate-700 font-medium hover:underline text-xs"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full h-[48px] text-white font-medium rounded-lg transition-colors mt-6 text-sm shadow-sm ${
            loading
              ? "bg-[#183c6b]/60 cursor-not-allowed"
              : "bg-[#183c6b] hover:bg-[#133055]"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-slate-500 text-sm text-center mt-8">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-[#183c6b] font-semibold hover:underline"
        >
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Login;
