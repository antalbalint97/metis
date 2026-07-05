import { ImageResponse } from "next/og";

export const alt = "Metis — mentorálás és tanulás";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 82px", background: "#faf7f1", color: "#173f3a", fontFamily: "Arial, sans-serif" }}>
      <div style={{ color: "#2b7a70", fontSize: 28, letterSpacing: 6 }}>METIS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.05 }}>Tanuljunk együtt gondolkodni az adatokról.</div>
        <div style={{ color: "#58716d", fontSize: 27 }}>metis.name</div>
      </div>
    </div>,
    size,
  );
}
