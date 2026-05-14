import svgPaths from "./svg-b0s0st4ztg";

function Group() {
  return (
    <div className="absolute inset-[0_-0.07%_-0.07%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178.44 178.564">
        <g id="Group">
          <path d={svgPaths.p20c17b00} fill="var(--fill-0, #50C1BA)" id="Vector" />
          <path d={svgPaths.p20d45700} fill="var(--fill-0, #50C1BA)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Complete() {
  return (
    <div className="absolute contents inset-[0_-0.07%_-0.07%_0]" data-name="COMPLETE">
      <Group />
    </div>
  );
}

export default function Asset() {
  return (
    <div className="relative size-full" data-name="Asset 6 1">
      <Complete />
    </div>
  );
}