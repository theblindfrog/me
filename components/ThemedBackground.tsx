"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { DitheringShader } from "@/components/ui/dithering-shader";

export default function ThemedBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Default to light colors until mounted to match SSR output.
  const isDark = mounted && resolvedTheme === "dark";
  const colorBack = isDark ? "#1a202c" : "#FFFFFF";
  const colorFront = isDark ? "#029dce" : "#3182ce";

  return (
    <div className="absolute bottom-0 inset-x-0 -z-10 h-[60vh]">
      <DitheringShader
        shape="wave"
        type="8x8"
        colorBack={colorBack}
        colorFront={colorFront}
        pxSize={4}
        speed={0.3}
      />
    </div>
  );
}
