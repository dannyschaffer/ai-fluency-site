const enquiry = 'mailto:danny@aifluencynow.com?subject=AI%20Fluency%20%E2%80%94%20let%E2%80%99s%20talk';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="wrap header">
        <a className="wordmark" href="#" aria-label="AI Fluency home">AI Fluency<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#how-it-works">How it works</a><a href="#questions">FAQs</a><a className="nav-link" href={enquiry}>Let’s talk <span aria-hidden="true">↗</span></a></nav>
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
              <article><p className="number">01 / Get clarity</p><h3>AI Assessment</h3><p>Find the opportunities that make sense for your business, with a practical roadmap for what to do first.</p><ul><li>A focused, 45-minute discovery session</li><li>A tailored report with 3–7 relevant tool recommendations</li><li>A quick-wins plan and a 30-minute review call</li></ul><p className="fit">A standalone engagement. Leave with a plan you can act on.</p><a className="text-link" href="#how-it-works">Inside the assessment <span aria-hidden="true">↓</span></a></article>
              <article><p className="number">02 / Put it into practice</p><h3>AI Concierge</h3><p>Ongoing, done-with-you support to build useful workflows and make AI part of how your business runs.</p><ul><li>Two 45-minute live working sessions each month</li><li>Guidance and answers between sessions</li><li>A shared hub for your workflows, resources and priorities</li></ul><p className="fit">Ongoing support. Build confidence alongside useful systems.</p><a className="text-link" href="#concierge">Inside the concierge <span aria-hidden="true">↓</span></a></article>
            </div>
          </div>
        </section>

        <section className="wrap detail-section" id="how-it-works">
          <div className="section-heading"><div><p className="eyebrow">The AI assessment</p><p className="section-note">Understand the opportunity before investing in the tools.</p></div><div><h2>A practical roadmap.<br />Built around your actual work.</h2><p className="section-intro">We look for three kinds of improvement: time back in your week, better follow-through on revenue opportunities, and more consistent work for your customers.</p></div></div>
          <div className="steps">
            <article><span className="step-index">01</span><h3>Show us your day</h3><p>In a 45-minute discovery call, we explore your goals, existing tools and recurring frustrations. We ask about the tasks that eat your time, the handoffs that stall, and what a better result would look like.</p></article>
            <article><span className="step-index">02</span><h3>Get a focused plan</h3><p>We turn that conversation into a tailored assessment: the most useful opportunities, recommended tools, likely costs and a sensible order of implementation. We make the assumptions behind any estimated benefits clear.</p></article>
            <article><span className="step-index">03</span><h3>Know what to do next</h3><p>We walk through the report together in a 30-minute review. You leave with a short quick-wins plan, clear first actions and a view of what needs more work. You can implement it yourself or continue with our support.</p></article>
          </div>
          <div className="takeaway"><strong>What you take away</strong><p>Your business priorities, 3–7 relevant tool recommendations, estimated costs and benefits, and a step-by-step quick-wins plan. A clear decision aid you can return to as you implement.</p></div>
        </section>
        <section className="concierge-section" id="concierge"><div className="wrap">
          <div className="section-heading"><div><p className="eyebrow">The AI concierge</p><p className="section-note">Personal guidance, applied to your business.</p></div><div><h2>You bring the real work.<br />We work through it with you.</h2><p className="section-intro">This is a working relationship. You share your screen, we guide the process, and together we build something you understand well enough to use again.</p></div></div>
          <div className="concierge-grid"><article><p className="number">Before we begin</p><h3>Start with the right context</h3><p>A short intake captures your business, tools, team, biggest time sinks and what success would look like. That lets us arrive at the first session with a useful starting point.</p></article><article><p className="number">Your first session</p><h3>Get the foundations in place</h3><p>If you’re new to AI, we start with your setup and organise the business background, instructions and examples it needs. If those foundations are ready, we work on a priority workflow straight away.</p></article><article><p className="number">Every two weeks</p><h3>Make practical progress</h3><p>Two 45-minute sessions each month give us a regular rhythm. We watch how a task works, simplify the steps, then build and test an appropriate AI-assisted approach. Each session aims to leave you with a useful, concrete improvement.</p></article><article><p className="number">Between sessions</p><h3>Keep moving</h3><p>Ask questions as you put the work into practice. Your shared hub keeps session notes, resources, action items and what we’ve built together in one place. We agree the support channel and response expectations at kickoff.</p></article></div>
          <div className="concierge-bottom"><strong>Learn it. Use it. Make it part of the week.</strong><p>The aim is growing independence: workflows you can repeat, instructions you can reuse, and the confidence to recognise the next useful opportunity.</p></div>
        </div></section>
        <section className="wrap detail-section" id="possibilities">
          <div className="section-heading"><p className="eyebrow">Where we might start</p><div><h2>Everyday work.<br />Room to do it better.</h2><p className="section-intro">These are examples of workflows we can explore together. Your assessment determines which are useful and feasible for your business.</p></div></div>
          <div className="examples-grid"><article><h3>Marketing &amp; content</h3><p>Turn your expertise and existing material into a repeatable drafting process, with your voice and a clear review step.</p></article><article><h3>Sales &amp; follow-up</h3><p>Organise meeting takeaways, prepare first drafts of proposals and follow-ups, and make the next action easier to see.</p></article><article><h3>Admin &amp; operations</h3><p>Document recurring tasks, simplify handoffs and reduce the repeated preparation behind routine reports.</p></article></div>
        </section>
        <section className="expectations-section"><div className="wrap expectations-grid"><div><p className="eyebrow">What makes this work</p><h2>Your involvement<br />is part of the service.</h2><p>You don’t need a technical background. You do need a real business process to improve, a willingness to try things, and time to use what we build.</p><p>We start small, check the output and keep human judgement in the loop.</p></div><div className="expectations-list"><article><h3>Bring real examples</h3><p>Complete the intake and bring a task, document or workflow you can show us. Use examples you’re authorised to share.</p></article><article><h3>Be ready to work together</h3><p>Join from a computer, share your screen and have access to the relevant tools. You carry out the steps with our guidance.</p></article><article><h3>Try it between calls</h3><p>Put the workflow to use and note what helped or got in the way. We use that feedback to refine the next session.</p></article><article><h3>Agree what success means</h3><p>We track practical changes such as time spent, steps removed, rework or consistency. Estimates are starting points; actual use tells us what’s working.</p></article></div></div></section>
        <section className="wrap detail-section" id="questions"><div className="section-heading"><p className="eyebrow">A few useful answers</p><h2>Before we get started.</h2></div><div className="faq-grid">
          <article><h3>Do I need to know how to use AI?</h3><p>No. We meet you at your current level. For beginners, the first step is a clear setup and guided practice. If you already use AI, we focus on making it more useful in your day-to-day work.</p></article>
          <article><h3>Is this a course or a done-for-you service?</h3><p>The concierge is personalised, done-with-you consulting. We work live on your business and help you learn as we go. Larger custom builds or work completed on your behalf require a separate scope and quote.</p></article>
          <article><h3>How long does the assessment take?</h3><p>We aim to complete the assessment within a week of the discovery call, subject to scheduling and receiving the information we need. We agree the delivery date before starting.</p></article>
          <article><h3>Do I have to continue with the concierge?</h3><p>No. The assessment stands on its own. You can use the recommendations independently, work through them with your team, or ask us for ongoing support.</p></article>
          <article><h3>What does it cost?</h3><p>We confirm the assessment fee or monthly concierge fee after understanding your needs. The scope, schedule and support terms are agreed before you commit. Any recommended software subscriptions are identified separately.</p></article>
          <article><h3>Will you replace all our existing tools?</h3><p>We start with what you already use and where it falls short. New tools need a clear purpose. We consider the cost, setup effort and how your team will actually use them before recommending a change.</p></article>
        </div></section>
        <section className="wrap closing"><p className="eyebrow">Let’s start with your work</p><h2>What would you love<br />to take off your plate?</h2><p>Tell us what takes too long, gets repeated, or keeps slipping through the cracks. We’ll explore where AI could help.</p><a className="button" href={enquiry}>Talk to Danny <span aria-hidden="true">↗</span></a><a className="email" href="mailto:danny@aifluencynow.com">danny@aifluencynow.com</a></section>
      </main>
      <footer className="wrap footer"><span className="wordmark">AI Fluency<span>.</span></span><span>Practical skills. Useful systems. Human support.</span><span>© 2026 AI Fluency</span></footer>
    </>
  );
}
