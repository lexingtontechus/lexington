import Link from "next/link";

const loader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`;
};

export default function About() {
  return (
    <main className="mb-8">
      <div className="hero min-h-screen svg-home">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-zinc-50 uppercase">
              Lexington Tech
            </h1>
            <h2 className="text-3xl font-bold uppercase my-8">
              Technology Demo
            </h2>
          </div>
        </div>
      </div>
      <section className="container mx-auto p-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/DemoLXT.png"
                alt="Lexington Demo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Lexington Tech Demo</h2>
              <p>Technology Showcase Built on NextJS, Supabase & Clerk.</p>
              <div className="card-actions">
                <button className="btn btn-accent uppercase">More</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/DemoLiftoff.png"
                alt="AI Interviews"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">AI Interviews!</h2>
              <p>Interview platform powered by AI technology.</p>
              <div className="card-actions">
                <button className="btn btn-accent uppercase">More</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/DemoLiftoff.png"
                alt="WEB3 Messaging"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">WEB3 Messaging</h2>
              <p>
                Encrypted one-on-one chat & group messaging. Powered by XMTP.
              </p>
              <div className="card-actions">
                <button className="btn btn-accent uppercase">More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
