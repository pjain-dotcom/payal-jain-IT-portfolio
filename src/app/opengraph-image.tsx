import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0f1e38",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(185,139,62,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#b98b3e",
            marginBottom: 24,
          }}
        >
          Senior Delivery & Transformation Leader · 19+ Years Experience
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#faf6ec",
            marginBottom: 20,
          }}
        >
          Payal Jain M
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "rgba(250,246,236,0.8)",
            maxWidth: 900,
          }}
        >
          Program delivery, cloud transformation, and hands-on AI-driven builds.
        </div>
      </div>
    ),
    { ...size }
  );
}
