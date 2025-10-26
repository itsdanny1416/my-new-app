export default function Counter({ initialCount = 0, initialStep = 1, label = "Counter" }) {
setCount((c) => c + step);
}


function dec() {
if (canDecrement) setCount((c) => Math.max(0, c - step));
}


function reset() {
setCount(initialCount);
}


function onStepChange(e) {
const value = Number(e.target.value);
const next = Number.isNaN(value) ? 1 : Math.max(1, Math.floor(value));
setStep(next);
}


return (
<div className="counter">
<h3 className="counter__title">{label}</h3>


{/* Live region announces the changing count for screen readers */}
<div
id={`live-${uid}`}
role="status"
aria-live="polite"
aria-atomic="true"
className="counter__display"
>
Count: <span data-testid="count">{count}</span>
</div>


<div className="counter__controls">
<button type="button" className="btn" onClick={inc}>
+{step}
</button>
<button
type="button"
className="btn"
onClick={dec}
disabled={!canDecrement}
aria-disabled={!canDecrement}
>
–{step}
</button>
<button type="button" className="btn btn--secondary" onClick={reset}>
Reset
</button>
</div>


<div className="counter__step">
<label htmlFor={`step-${uid}`}>Step</label>
<input
id={`step-${uid}`}
type="number"
inputMode="numeric"
min="1"
step="1"
value={step}
onChange={onStepChange}
/>
</div>
</div>
);
}