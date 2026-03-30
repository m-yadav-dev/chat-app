import React from "react";

import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="animate-spin" size={48} />
      <span className="ml-4 text-lg">Checking authentication...</span>
    </div>
  );
};

export default Loader;
