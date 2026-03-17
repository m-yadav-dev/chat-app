import React from "react";

import { Camera, User, Mail, Info, ArrowLeft, Edit2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const mockUser = {
  fullName: "Ranjan",
  email: "ranjan@gmail.com",
  about: "Hey there! I am using Chatt-App.",
  profilePic: "",
  memberSince: "March 2026",
};
const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6 font-sans text-slate-100">
        {/* Profile Card Container */}
        <div className="w-full max-w-md bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden relative">
          {/* Subtle Background Glow for premium feel */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>

          {/* 1. Header Area */}
          <div className="px-6 py-5 border-b border-slate-800/50 flex items-center gap-4 relative z-10">
            <button className="p-2 -ml-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Profile Settings
            </h1>
          </div>

          <div className="p-6 sm:p-8 space-y-8 relative z-10">
            {/* 2. Avatar & Edit Picture Section */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative group cursor-pointer">
                {/* Avatar Circle */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 flex items-center justify-center text-4xl font-bold text-slate-300 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                  {mockUser.profilePic ? (
                    <img
                      src={mockUser.profilePic}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    mockUser.fullName.charAt(0).toUpperCase()
                  )}
                </div>

                {/* Hover Overlay (Camera Icon) */}
                <div className="absolute inset-0 bg-slate-950/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1">
                  <Camera className="w-8 h-8 text-white/90" />
                  <span className="text-xs text-white/90 font-medium">
                    Change
                  </span>
                </div>

                {/* Fallback Edit Badge (Visible on mobile where hover is tricky) */}
                <div className="absolute bottom-1 right-1 w-10 h-10 bg-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Click image to upload new avatar
              </p>
            </div>

            {/* 3. Editable Fields (Name & About) */}
            <div className="space-y-5">
              {/* Full Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 px-1">
                  <User className="w-3.5 h-3.5" /> Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue={mockUser.fullName}
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all pr-10"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* About Section Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 px-1">
                  <Info className="w-3.5 h-3.5" /> About
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue={mockUser.about}
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all pr-10"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 4. Read-Only Account Information */}
            <div className="pt-4 border-t border-slate-800/50 space-y-4">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">
                Account Details
              </h3>

              <div className="bg-slate-950/30 rounded-xl border border-slate-800/50 p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </span>
                  <span className="text-slate-300 font-medium">
                    {mockUser.email}
                  </span>
                </div>

                <div className="h-px bg-slate-800/50 w-full"></div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <User className="w-4 h-4" /> Member Since
                  </span>
                  <span className="text-slate-300 font-medium">
                    {mockUser.memberSince}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
