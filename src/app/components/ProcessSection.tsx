"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import clickIcon from "../../../assets/click_icon.svg";
import gear from "../../../assets/tesla_gear.svg";
import processFlowBg from "../../../assets/process_flow_bg.svg";
import { processSteps } from "../home-data";

const gearNumberAngles = [-90, -45, 0, 45, 90, 135];

export function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState(0);
  const [hasUsedProcess, setHasUsedProcess] = useState(false);
  const gearShellRef = useRef<HTMLDivElement>(null);
  const gearWheelLockRef = useRef(false);
  const gearWheelDeltaRef = useRef(0);
  const selectedProcess = processSteps[selectedStep];
  const rotation = useMemo(() => selectedStep * -45, [selectedStep]);
  const counterRotation = useMemo(() => selectedStep * 45, [selectedStep]);

  useEffect(() => {
    const gearShell = gearShellRef.current;
    if (!gearShell) return;

    function handleGearWheel(event: globalThis.WheelEvent) {
      if (event.ctrlKey) return;

      event.preventDefault();

      if (gearWheelLockRef.current) return;

      gearWheelDeltaRef.current += event.deltaY;

      if (Math.abs(gearWheelDeltaRef.current) < 38) return;

      const direction = gearWheelDeltaRef.current > 0 ? 1 : -1;
      gearWheelDeltaRef.current = 0;
      gearWheelLockRef.current = true;
      setSelectedStep((current) => (current + direction + processSteps.length) % processSteps.length);
      setHasUsedProcess(true);

      window.setTimeout(() => {
        gearWheelLockRef.current = false;
      }, 560);
    }

    gearShell.addEventListener("wheel", handleGearWheel, { passive: false });

    return () => {
      gearShell.removeEventListener("wheel", handleGearWheel);
    };
  }, []);

  return (
    <section
      id="process"
      className="process section-pad"
      data-search
      style={{ backgroundImage: `url(${processFlowBg.src})` }}
    >
      <div className="process-copy">
        <h2>Our Process</h2>
        <p>Once We Establish Connection.</p>
      </div>
      <div className="process-flow" aria-label="Process overview">
        {processSteps.map((step, index) => (
          <button
            key={step.title}
            className={selectedProcess.title === step.title ? "active" : ""}
            type="button"
            onClick={() => {
              setSelectedStep(index);
              setHasUsedProcess(true);
            }}
            aria-label={`Show ${step.title}`}
          >
            <span>{step.title}</span>
            <small>{step.body}</small>
          </button>
        ))}
      </div>
      <div className="gear-stage">
        <div ref={gearShellRef} className="gear-shell" aria-label="Scroll over the gear to move through process steps">
          <div className="gear-hole" aria-hidden="true" />
          <div className="gear-wheel" style={{ transform: `rotate(${rotation}deg)` }}>
            <Image src={gear} alt="" />
            <div className="gear-numbers" aria-label="Process steps">
              {processSteps.map((step, index) => {
                const angle = gearNumberAngles[index];
                const radians = (angle * Math.PI) / 180;
                const isSelected = selectedStep === index;
                const radius = isSelected ? 41 : 60;

                return (
                  <button
                    className={`gear-number ${isSelected ? "selected" : ""}`}
                    key={step.title}
                    style={{
                      left: `${50 + radius * Math.cos(radians)}%`,
                      top: `${50 + radius * Math.sin(radians)}%`,
                      transform: `translate(-50%, -50%) rotate(${counterRotation}deg)`,
                    }}
                    onClick={() => {
                      setSelectedStep(index);
                      setHasUsedProcess(true);
                    }}
                    aria-label={`Show ${step.title}`}
                    type="button"
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            {!hasUsedProcess && selectedStep === 0 && (
              <span className="gear-click-hint" aria-hidden="true">
                <Image src={clickIcon} alt="" />
              </span>
            )}
          </div>
          <div className="gear-content">
            <span>Step {selectedStep + 1}</span>
            <h3>{selectedProcess.title}</h3>
            <p>{selectedProcess.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
