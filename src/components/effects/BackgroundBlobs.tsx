export default function BackgroundBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 2px, transparent 3px)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Purple blob */}
      <div
        className="absolute h-[600px] w-[600px] animate-float1 rounded-full"
        style={{
          top: "-20%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Cyan blob */}
      <div
        className="absolute h-[500px] w-[500px] animate-float2 rounded-full"
        style={{
          bottom: "-20%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
