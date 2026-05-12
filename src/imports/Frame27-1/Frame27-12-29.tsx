import svgPaths from "./svg-nlnc8sy07v";

function Group() {
  return (
    <div className="absolute inset-[0_-0.07%_-0.07%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0181 26.018">
        <g id="Group">
          <path d={svgPaths.p15465600} fill="var(--fill-0, #50C1BA)" id="Vector" />
          <path d={svgPaths.p16002240} fill="var(--fill-0, #50C1BA)" id="Vector_2" />
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

function Asset() {
  return (
    <div className="absolute left-[17px] overflow-clip size-[26px] top-[13px]" data-name="Asset 6 4">
      <Complete />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Asset />
    </div>
  );
}