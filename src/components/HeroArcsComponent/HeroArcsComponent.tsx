import { useEffect, useRef, useState } from "react";

// --- geometry helpers ---
const toRad = (deg: number) => ((deg - 90) * Math.PI) / 180;
const polar = (cx: number, cy: number, r: number, ang: number) => ({
  x: cx + r * Math.cos(toRad(ang)),
  y: cy + r * Math.sin(toRad(ang)),
});
const arcPath = (
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
  mirror = false
) => {
  const start = polar(cx, cy, r, startAngle);
  const end = polar(cx, cy, r, endAngle);
  const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
  const sweep = mirror ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} ${sweep} ${end.x} ${end.y}`;
};

// --- Types ---
type PendulumConfig = {
  id: string;
  cx: number;
  cy: number;
  r: number;
  startAngle: number;
  endAngle: number;
  icon: string;
  duration: number;
  buffer: number;
  color: string;
  iconSize: number;
  bg: string;
  minScale: number;
  maxScale: number;
  mirror: boolean;
  startPos: number; // initial swing position
  initialDirection: number; // initial swing direction
  label: string; // tooltip text
};

interface PendulumState {
  progress: number;
  direction: number;
  paused: boolean;
  pulse: number;
}

const HeroArcsComponent = ({ pendulums }: { pendulums: PendulumConfig[] }) => {
  const groupRefs = useRef<Record<string, SVGGElement | null>>({});
  const backgroundCircleRefs = useRef<Record<string, SVGCircleElement | null>>(
    {}
  );

  // tooltip state
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    x: number;
    y: number;
    text: string;
  }>({
    show: false,
    x: 0,
    y: 0,
    text: "",
  });

  // animation state
  const stateRef = useRef<Record<string, PendulumState>>(
    Object.fromEntries(
      pendulums.map(({ id, startPos, minScale, initialDirection }) => [
        id,
        {
          progress: startPos,
          direction: initialDirection,
          paused: false,
          pulse: minScale,
        },
      ])
    ) as Record<string, PendulumState>
  );

  const onEnter = (id: string, label: string) => () => {
    stateRef.current[id].paused = true;
    const g = groupRefs.current[id];
    if (g) {
      const match = g.getAttribute("transform")?.match(/translate\(([^)]+)\)/);
      if (match) {
        const [x, y] = match[1].split(",").map(parseFloat);
        setTooltip({ show: true, x, y, text: label });
      }
    }
  };

  const onLeave = (id: string) => () => {
    stateRef.current[id].paused = false;
    setTooltip({ show: false, x: 0, y: 0, text: "" });
  };

  useEffect(() => {
    let raf = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      for (const pendulum of pendulums) {
        const s = stateRef.current[pendulum.id];

        // swing motion
        if (!s.paused) {
          const step = dt / pendulum.duration;
          s.progress += s.direction * step;
          if (s.progress >= 1) {
            s.progress = 1;
            s.direction = -1;
          }
          if (s.progress <= 0) {
            s.progress = 0;
            s.direction = 1;
          }
        }

        const endPct = 100 - pendulum.buffer;
        const offsetPct = (s.progress * endPct) / 100;

        const path = document.getElementById(
          `arc-${pendulum.id}`
        ) as SVGPathElement | null;
        if (path) {
          const pathLen = path.getTotalLength();
          const pt = path.getPointAtLength(offsetPct * pathLen);

          const group = groupRefs.current[pendulum.id];
          if (group) {
            group.setAttribute("transform", `translate(${pt.x},${pt.y})`);
          }

          // heartbeat pulse
          const backgroundCircle = backgroundCircleRefs.current[pendulum.id];
          if (backgroundCircle) {
            if (!s.paused) {
              const pulsePhase = 0.5 + 0.5 * Math.sin(now / 800);
              s.pulse =
                pendulum.minScale +
                pulsePhase * (pendulum.maxScale - pendulum.minScale);
            }
            const baseRadius = pendulum.iconSize * 1.1;
            backgroundCircle.setAttribute("r", String(baseRadius * s.pulse));
          }
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pendulums]);

  return (
    <svg
      viewBox="0 0 300 400"
      width="30%"
      style={{ background: "transparent" }}
    >
      {pendulums.map((it) => {
        const d = arcPath(
          it.cx,
          it.cy,
          it.r,
          it.startAngle,
          it.endAngle,
          it.mirror
        );
        return (
          <g key={it.id}>
            <path
              d={d}
              fill="none"
              stroke="#0c78ba"
              id={`arc-${it.id}`}
              opacity={0.4}
            />
            <g
              ref={(el) => {
                groupRefs.current[it.id] = el;
              }}
              onMouseEnter={onEnter(it.id, it.label)}
              onMouseLeave={onLeave(it.id)}
              style={{ cursor: "pointer" }}
            >
              <circle
                ref={(el) => {
                  backgroundCircleRefs.current[it.id] = el;
                }}
                r={it.iconSize * 1.1}
                fill={it.bg}
              />
              <circle r={it.iconSize * 0.8} fill={it.color} />
              <image
                href={it.icon}
                x={-it.iconSize / 2}
                y={-it.iconSize / 2}
                width={it.iconSize}
                height={it.iconSize}
                preserveAspectRatio="xMidYMid meet"
                style={{
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              />
            </g>
          </g>
        );
      })}

      {tooltip.show && (
        <text
          x={tooltip.x}
          y={tooltip.y - 30}
          textAnchor="middle"
          fontSize="10"
          fill="#414141ff"
          style={{
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {tooltip.text}
        </text>
      )}
    </svg>
  );
};
export default HeroArcsComponent;
