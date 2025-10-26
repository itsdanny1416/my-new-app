import Counter from "../components/Counter";


export default function Page() {
return (
<main className="container">
<h1>Next.js Button Counter</h1>
<p className="lede">Reusable counter component with an adjustable step.</p>


<div className="grid">
<section>
<h2>Default Counter</h2>
<Counter />
</section>


<section>
<h2>Custom Counter</h2>
<Counter initialCount={5} initialStep={2} label="Custom Counter" />
</section>
</div>
</main>
);
}