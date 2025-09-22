import React from "react";

export default function CubeTempoAnimation() {
  const geos = [
    { x: 0, y: 30, z: 4 },
    { x: 25, y: 15, z: 2 },
    { x: 50, y: 0, z: 1 },
    { x: 25, y: 45, z: 7 },
    { x: 50, y: 30, z: 5 },
    { x: 75, y: 15, z: 3 },
    { x: 50, y: 60, z: 9 },
    { x: 75, y: 45, z: 8 },
    { x: 100, y: 30, z: 6 },
  ];

  return (
    <>
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        <defs>
          <g id="cube">
            <path
              style={{ fill: "#ffffff00", stroke: "#fff" }}
              d="M25 0 L50 15 L25 30 L0 15 Z"
            />
            <path
              style={{ fill: "#ffffff00", stroke: "#fff" }}
              d="M0 15 L25 30 L25 60 L0 45 Z"
            />
            <path
              style={{ fill: "#ffffff80", stroke: "#fff" }}
              d="M25 30 L50 15 L50 45 L25 60 Z"
            />
          </g>
        </defs>
      </svg>

      <div
        id="app"
        style={{
          scale: "1.5",
          width: 150,
          height: 180,
          pointerEvents: "none",
        }}
      >
        {geos.map((geo, i) => (
          <div
            key={i}
            className="geo"
            style={{
              position: "absolute",
              left: `${geo.x}px`,
              top: `${geo.y}px`,
              zIndex: geo.z,
              width: 50,
              height: 60,
            }}
          >
            <svg width="50" height="60">
              <use href="#cube" />
            </svg>
            <svg width="50" height="60">
              <use href="#cube" />
            </svg>
            <svg width="50" height="60">
              <use href="#cube" />
            </svg>
          </div>
        ))}
      </div>

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }

        /* container */
        #app {
          width: 150px;
          height: 180px;
        }

        /* geo blocks */
        #app .geo {
          position: absolute;
          animation: 5000ms cubic-bezier(0.26, 1.19, 0.91, 0.97) infinite;
        }
        #app .geo:nth-child(1) { animation-name: geo-1; }
        #app .geo:nth-child(2) { animation-name: geo-2; }
        #app .geo:nth-child(3) { animation-name: geo-3; }
        #app .geo:nth-child(4) { animation-name: geo-4; }
        #app .geo:nth-child(5) { animation-name: geo-5; }
        #app .geo:nth-child(6) { animation-name: geo-6; }
        #app .geo:nth-child(7) { animation-name: geo-7; }
        #app .geo:nth-child(8) { animation-name: geo-8; }
        #app .geo:nth-child(9) { animation-name: geo-9; }

        /* inner svgs (three per geo) */
        #app .geo svg {
          position: absolute;
          left: 0;
          animation: 5000ms cubic-bezier(0.26, 1.19, 0.91, 0.97) infinite;
        }
        #app .geo svg:nth-child(1) { top: 0; z-index: 3; animation-name: cube-1;}
        #app .geo svg:nth-child(2) { top: 30px; z-index: 2; }
        #app .geo svg:nth-child(3) { top: 60px; z-index: 1; animation-name: cube-2; }

        /* keyframes copied exactly from the CodePen */
        @keyframes geo-1 {
          0% { transform: translate(0, 0); }
          16.67% { transform: translate(-25px, -15px); }
          33.33% { transform: translate(-50px, 0); }
          50% { transform: translate(-50px, 0); }
          66.67% { transform: translate(-25px, -15px); }
          83.33% { transform: translate(0, 0); }
          100% { transform: translate(0, 0); }
        }

        @keyframes geo-2 {
          0% { transform: translate(0, 0); }
          16.67% { transform: translate(-25px, -15px); }
          33.33% { transform: translate(-25px, -15px); }
          50% { transform: translate(-25px, -15px); }
          66.67% { transform: translate(-25px, -15px); }
          83.33% { transform: translate(0, 0); }
          100% { transform: translate(0, 0); }
        }

        @keyframes geo-3 {
          0% { transform: translate(0, 0); }
          16.67% { transform: translate(-25px, -15px); }
          33.33% { transform: translate(0, -30px); }
          50% { transform: translate(0, -30px); }
          66.67% { transform: translate(-25px, -15px); }
          83.33% { transform: translate(0, 0); }
          100% { transform: translate(0, 0); }
        }

        @keyframes geo-4 {
          0% { transform: translate(0, 0); }
          16.67% { transform: translate(0, 0); }
          33.33% { transform: translate(-25px, 15px); }
          50% { transform: translate(-25px, 15px); }
          66.67% { transform: translate(0, 0); }
          83.33% { transform: translate(0, 0); }
          100% { transform: translate(0, 0); }
        }

        @keyframes geo-5 {
          0% { transform: translate(0, 0); }
          16.67% { transform: translate(0, 0); }
          33.33% { transform: translate(0, 0); }
          50% { transform: translate(0, 0); }
          66.67% { transform: translate(0, 0); }
          83.33% { transform: translate(0, 0); }
          100% { transform: translate(0, 0); }
        }

        @keyframes geo-6 {
          0% { transform: translate(0, 0); }
          16.67% { transform: translate(0, 0); }
          33.33% { transform: translate(25px, -15px); }
          50% { transform: translate(25px, -15px); }
          66.67% { transform: translate(0, 0); }
          83.33% { transform: translate(0, 0); }
          100% { transform: translate(0, 0); }
        }

        @keyframes geo-7 {
          0% { transform: translate(0, 0); }
          16.67% { transform: translate(25px, 15px); }
          33.33% { transform: translate(0, 30px); }
          50% { transform: translate(0, 30px); }
          66.67% { transform: translate(25px, 15px); }
          83.33% { transform: translate(0px, 0px); }
          100% { transform: translate(0, 0); }
        }

        @keyframes geo-8 {
          0% { transform: translate(0, 0); }
          16.67% { transform: translate(25px, 15px); }
          33.33% { transform: translate(25px, 15px); }
          50% { transform: translate(25px, 15px); }
          66.67% { transform: translate(25px, 15px); }
          83.33% { transform: translate(0, 0); }
          100% { transform: translate(0, 0); }
        }

        @keyframes geo-9 {
          0% { transform: translate(0, 0); }
          16.67% { transform: translate(25px, 15px); }
          33.33% { transform: translate(50px, 0); }
          50% { transform: translate(50px, 0); }
          66.67% { transform: translate(25px, 15px); }
          83.33% { transform: translate(0, 0); }
          100% { transform: translate(0, 0); }
        }

        @keyframes cube-1 {
          0% { transform: translate(0, 0); }
          16.67% { transform: translate(0, 0); }
          33.33% { transform: translate(0, 0); }
          50% { transform: translate(0, -30px); }
          66.67% { transform: translate(0, -30px); }
          83.33% { transform: translate(0, -30px); }
          100% { transform: translate(0, 0); }
        }

        @keyframes cube-2 {
          0% { transform: translate(0, 0); }
          16.67% { transform: translate(0, 0); }
          33.33% { transform: translate(0, 0); }
          50% { transform: translate(0, 30px); }
          66.67% { transform: translate(0, 30px); }
          83.33% { transform: translate(0, 30px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </>
  );
}
