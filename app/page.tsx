const enquiry = 'mailto:danny@aifluencynow.com?subject=AI%20Fluency%20%E2%80%94%20let%E2%80%99s%20talk';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="wrap header">
        <a className="wordmark" href="#" aria-label="AI Fluency home">AI Fluency<span>.</span></a>
        <a className="nav-link" href={enquiry}>Let’s talk <span aria-hidden="true">↗</span></a>
      </header>
      <main id="main">
        <section className="wrap hero">
          <div>
            <p className="eyebrow">Practical AI consulting for business owners</p>
            <h1>Less busywork.<br />More <em>business.</em></h1>
            <p className="intro">You know AI could help. We help you figure out where, put it to work, and build the confidence to use it every day.</p>
            <a className="button" href={enquiry}>Find your starting point <span aria-hidden="true">↗</span></a>
            <p className="small">Start with a conversation about your business.</p>
          </div>
          <aside className="approach" aria-label="Our approach">
            <p className="eyebrow">From possibility to practice</p>
            <div><span>01</span><h2>Find the friction.</h2><p>Look at the work that keeps taking your time.</p></div>
            <div><span>02</span><h2>Simplify the process.</h2><p>Make the workflow better before adding AI.</p></div>
            <div><span>03</span><h2>Build it together.</h2><p>Turn a useful idea into a repeatable way of working.</p></div>
            <p className="aside-end">Your business. Your workflows. Your know-how.</p>
          </aside>
        </section>
        <section className="services" id="services">
          <div className="wrap">
            <div className="section-heading"><p className="eyebrow">How we help</p><h2>A clear next step.<br />Then someone in your corner.</h2></div>
            <div className="service-grid">
              <article><p className="number">01 / Get clarity</p><h3>AI Assessment</h3><p>Find the opportunities that make sense for your business, with a practical roadmap for what to do first.</p><ul><li>A discovery session about your goals and day-to-day work</li><li>A tailored report with prioritised opportunities and tool recommendations</li><li>A walkthrough of your roadmap and the next steps</li></ul><p className="fit">For owners who want a clear starting point.</p></article>
              <article><p className="number">02 / Put it into practice</p><h3>AI Concierge</h3><p>Ongoing, done-with-you support to build useful workflows and make AI part of how your business runs.</p><ul><li>Two live working sessions each month</li><li>Guidance and answers between sessions</li><li>A shared hub for your workflows, resources and priorities</li></ul><p className="fit">For owners who want help making it happen.</p></article>
            </div>
          </div>
        </section>
        <section className="wrap closing"><p className="eyebrow">Let’s start with your work</p><h2>What would you love<br />to take off your plate?</h2><p>Tell us what takes too long, gets repeated, or keeps slipping through the cracks. We’ll explore where AI could help.</p><a className="button" href={enquiry}>Talk to Danny <span aria-hidden="true">↗</span></a><a className="email" href="mailto:danny@aifluencynow.com">danny@aifluencynow.com</a></section>
      </main>
      <footer className="wrap footer"><span className="wordmark">AI Fluency<span>.</span></span><span>Practical skills. Useful systems. Human support.</span><span>© 2026 AI Fluency</span></footer>
    </>
  );
}
