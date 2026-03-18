import React, { useEffect, useRef, useState } from "react";
import {
  Camera,
  User,
  Mail,
  Info,
  ArrowLeft,
  Edit2,
  Loader2,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { useAuthStore } from "@/store/useAuthStore";
import { toast } from "sonner";
import { Navigate, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { authUser, updateProfile, isUpdatingProfile } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState(
    authUser?.profilePic || "",
  );
  const [fullName, setFullName] = useState(authUser?.fullName || "");
  const [about, setAbout] = useState(authUser?.about || "");


  const navigate = useNavigate();


  const fileInputRef = useRef(null);

  const onChangeFullName = (event) => {
    setFullName(event.target.value);
  };

  const onChangeAbout = (event) => {
    setAbout(event.target.value);
  };

  const onChangeProfileImage = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      updateProfile({ profilePic: base64Image });
    };
  };

  useEffect(() => {
    setSelectedImage(authUser?.profilePic || "");
    setFullName(authUser?.fullName || "");
    setAbout(authUser?.about || "");
  }, [authUser?.profilePic, authUser?.fullName, authUser?.about]);

  const user = authUser;
  const hasChanges =
    fullName !== (authUser?.fullName || "") ||
    about !== (authUser?.about || "");
  const canSave = hasChanges && !isUpdatingProfile;

  const onResetChanges = () => {
    setFullName(authUser?.fullName || "");
    setAbout(authUser?.about || "");
  };

  const onSaveProfile = async () => {
    const trimmedName = fullName.trim();
    if (!trimmedName) {
      toast.error("Full name cannot be empty");
      return;
    }

    const payload = {};
    if (trimmedName !== (authUser?.fullName || "")) {
      payload.fullName = trimmedName;
    }
    if (about !== (authUser?.about || "")) {
      payload.about = about;
    }

    if (Object.keys(payload).length === 0) return;
    await updateProfile(payload);
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6 font-sans text-slate-100">
        <div className="w-full max-w-md bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="px-6 py-5 border-b border-slate-800/50 flex items-center gap-4 relative z-10">
            <button onClick={() => navigate('/')} className="p-2 -ml-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors" > 
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Profile Settings
            </h1>
          </div>

          <div className="p-6 sm:p-8 space-y-8 relative z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="group relative cursor-pointer"
                  disabled={isUpdatingProfile}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 flex items-center justify-center text-4xl font-bold text-slate-300 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      user?.fullName?.charAt(0)?.toUpperCase() || "?"
                    )}
                  </div>

                  <div className="absolute inset-0 bg-slate-950/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1">
                    <Camera className="w-8 h-8 text-white/90" />
                    <span className="text-xs text-white/90 font-medium">
                      Change
                    </span>
                  </div>

                  <div className="absolute bottom-1 right-1 w-10 h-10 bg-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Camera className="w-4 h-4 text-white" />
                  </div>

                  {isUpdatingProfile && (
                    <div className="absolute inset-0 rounded-full bg-slate-950/70 backdrop-blur-[1px] flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full border-2 border-emerald-400/30 border-t-emerald-400 animate-spin" />
                    </div>
                  )}
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onChangeProfileImage}
                />
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Click image to upload new avatar
              </p>
            </div>

            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 px-1">
                  <User className="w-3.5 h-3.5" /> Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={fullName}
                    onChange={onChangeFullName}
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all pr-10"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 flex items-center gap-2 px-1">
                  <Info className="w-3.5 h-3.5" /> About
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={about}
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all pr-10"
                    onChange={onChangeAbout}
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  {hasChanges ? "Unsaved changes" : "All changes saved"}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onResetChanges}
                    disabled={!hasChanges || isUpdatingProfile}
                    className="h-9 px-3 rounded-lg border border-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-800/60 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={onSaveProfile}
                    disabled={!canSave}
                    className="h-9 px-4 rounded-lg bg-emerald-500 text-slate-950 text-xs font-semibold hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                  >
                    {isUpdatingProfile ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Saving
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </div>
            </div>

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
                    {user?.email || "--"}
                  </span>
                </div>

                <div className="h-px bg-slate-800/50 w-full"></div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <User className="w-4 h-4" /> Member Since
                  </span>
                  <span className="text-slate-300 font-medium">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "--"}
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
