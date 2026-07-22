"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  initializeMetaPixel,
  trackMetaPixelEvent,
} from "@/lib/meta-pixel";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || "";

export function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (!initializeMetaPixel(META_PIXEL_ID)) {
      return;
    }

    const pageKey = pathname + window.location.search;

    if (window.__edubhLastMetaPage === pageKey) {
      return;
    }

    trackMetaPixelEvent("PageView");
    window.__edubhLastMetaPage = pageKey;
  }, [pathname]);

  return null;
}
