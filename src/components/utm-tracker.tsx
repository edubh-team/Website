"use client";

import { useEffect } from "react";
import { captureUtmAttribution } from "@/lib/utm";

export function UtmTracker() {
  useEffect(() => {
    captureUtmAttribution();
  }, []);

  return null;
}
