"use client";

import dynamic from "next/dynamic";

// ⚠️ Import Lottie dynamically to prevent SSR errors
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width = "95%", height = "auto", loop = true, autoplay = true }) => {
  // Safety check – agar animationPath nahi mila toh kuch render nahi karega
  if (!animationPath) return null;

  return (
    <div style={{ width, height }}>
      <Lottie
        animationData={animationPath}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default AnimationLottie;
