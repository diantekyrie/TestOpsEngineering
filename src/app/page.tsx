import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import TrustCarousel from '@/components/TrustCarousel'

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <p className="hero-kicker">Quality Engineering · Test Automation · AI-Assisted Testing</p>
          <div className="hero-layout">
            <div>
              <h1>
                Your team ships fast.<br />
                We make sure <em>it doesn&apos;t<br />break</em> <span>in production.</span>
              </h1>
              <p className="hero-sub">
                TestOps Engineering brings senior-level QA strategy, automation, and AI-assisted
                testing to startups and growing tech teams — without the overhead of a full-time hire.
              </p>
              <div className="hero-btns">
                <Link className="btn-primary" href="/contact">Contact</Link>
                <a className="btn-ghost" href="#services">Explore services</a>
              </div>
            </div>

            <div>
              <div className="terminal">
                <div className="t-bar">
                  <div className="dot dot-r" />
                  <div className="dot dot-y" />
                  <div className="dot dot-g" />
                  <span className="t-title">testops-audit v2 — zsh</span>
                </div>
                <div className="t-body">
                  <div><span className="tp">$ </span><span style={{ color: 'var(--text)' }}>testops audit --ai-scan --full</span></div>
                  <div style={{ marginTop: 8 }}><span className="tc"># Scanning coverage layers...</span></div>
                  <div><span className="tk">unit_coverage   </span><span className="tv">87%</span>&nbsp;&nbsp;<span className="tok">✓ healthy</span></div>
                  <div><span className="tk">api_coverage    </span><span className="tv">34%</span>&nbsp;&nbsp;<span className="tw">⚠ gap detected</span></div>
                  <div><span className="tk">e2e_flakiness   </span><span className="tv">22%</span>&nbsp;&nbsp;<span className="te">✗ critical</span></div>
                  <div style={{ marginTop: 8 }}><span className="tc"># AI model test coverage...</span></div>
                  <div><span className="tk">llm_eval_tests  </span><span className="tv">none</span>&nbsp;&nbsp;<span className="te">✗ missing</span></div>
                  <div><span className="tk">prompt_regress  </span><span className="tv">none</span>&nbsp;&nbsp;<span className="te">✗ missing</span></div>
                  <div style={{ marginTop: 8 }}><span className="tc"># CI pipeline analysis...</span></div>
                  <div><span className="tk">avg_build_time  </span><span className="tv">18m 43s</span>&nbsp;<span className="tw">⚠ slow</span></div>
                  <div><span className="tk">parallelization </span><span className="tv">none</span>&nbsp;&nbsp;&nbsp;<span className="te">✗ opportunity</span></div>
                  <div style={{ marginTop: 8 }}><span className="tok">✓ Roadmap generated — 12 findings</span></div>
                  <div style={{ marginTop: 6 }}><span className="tp">$ </span><span className="cursor" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST CAROUSEL */}
      <TrustCarousel />

      {/* WHO IS THIS FOR */}
      <section className="for-section" id="for">
        <div className="wrap">
          <p className="section-label">Who this is for</p>
          <h2 className="section-title">
            Built for teams that are <em>moving fast</em><br />and need quality to keep up
          </h2>
          <p className="section-sub">
            Not every team needs a full-time QA lead. Many just need someone who&apos;s done it at
            scale — and can get them there without the overhead.
          </p>
          <div className="for-grid">
            <div className="for-card">
              <p className="fc-tag">Startups · Seed–Series B</p>
              <h3>You&apos;re shipping fast with no QA process</h3>
              <p>
                Your engineers test their own code, CI is slow or flaky, and you&apos;ve had a
                production incident you shouldn&apos;t have. You need QA infrastructure built from
                scratch — right the first time.
              </p>
            </div>
            <div className="for-card">
              <p className="fc-tag">Mid-size Tech · 50–500 eng</p>
              <h3>Your automation exists, but it&apos;s not working</h3>
              <p>
                You have tests, but they&apos;re flaky, slow, or nobody trusts them. Your CI
                pipeline is a black box. You need someone to audit, fix, and hand it back —
                properly documented and owned by your team.
              </p>
            </div>
            <div className="for-card">
              <p className="fc-tag">AI &amp; ML Product Teams</p>
              <h3>You&apos;re shipping AI features with no eval strategy</h3>
              <p>
                Your product has LLM-powered features, but there&apos;s no regression strategy for
                prompts or model behavior. You need AI-aware QA — a fast-growing gap most
                consultants can&apos;t fill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="wrap">
          <p className="section-label">Services</p>
          <h2 className="section-title">
            Everything from audit<br />to <em>full automation build</em>
          </h2>
          <p className="section-sub">
            Engagements are scoped, time-boxed, and documented. Your team owns everything after
            handoff — no dependency on us.
          </p>

          <div className="svc-grid">
            <div className="svc">
              <p className="svc-tag">QA Audit &amp; Roadmap</p>
              <h3>Current-state assessment</h3>
              <p>
                A structured review of your test pyramid, CI pipeline, and coverage gaps — with a
                prioritized 30/60/90-day plan your engineering team can actually execute.
              </p>
              <ul className="svc-list">
                <li>Test pyramid health check</li>
                <li>CI/CD signal analysis</li>
                <li>Risk-based coverage gap mapping</li>
                <li>Prioritized improvement roadmap</li>
              </ul>
            </div>

            <div className="svc">
              <p className="svc-tag">Test Automation</p>
              <h3>Frameworks built to last</h3>
              <p>
                From API contract tests to full E2E suites. Designed for maintainability,
                parallelization, and fast feedback — not just to check a box.
              </p>
              <ul className="svc-list">
                <li>API + UI automation (Python, Appium)</li>
                <li>CI integration &amp; quality gates</li>
                <li>Parallelization &amp; reporting</li>
                <li>Android / ADB tooling</li>
              </ul>
            </div>

            <div className="svc">
              <p className="svc-tag">Release Quality &amp; Reliability</p>
              <h3>Stop flaky tests killing CI</h3>
              <p>
                Systematic flakiness reduction, stabilization, and observability improvements so
                your CI signal means something — and your team trusts it again.
              </p>
              <ul className="svc-list">
                <li>Flaky test triage &amp; quarantine</li>
                <li>Root-cause debugging</li>
                <li>Failure observability setup</li>
                <li>Stabilization backlog planning</li>
              </ul>
            </div>

            <div className="svc">
              <span className="svc-badge">In demand 2026</span>
              <p className="svc-tag">AI &amp; LLM Testing</p>
              <h3>Eval strategy for AI-powered products</h3>
              <p>
                Most teams shipping AI features have no regression strategy for prompt behavior or
                model outputs. We build eval pipelines, prompt regression suites, and LLM quality
                gates.
              </p>
              <ul className="svc-list">
                <li>LLM eval framework design</li>
                <li>Prompt regression testing</li>
                <li>Model output validation</li>
                <li>AI feature QA strategy</li>
              </ul>
            </div>
          </div>

          <div className="ai-banner">
            <div>
              <h3>AI-assisted testing is not a trend — it&apos;s the new baseline</h3>
              <p>
                89% of engineering orgs are piloting AI in their QA processes in 2026. Only 15%
                have done it right. We help teams bridge that gap with pragmatic,
                production-ready AI testing strategies — not vendor hype.
              </p>
            </div>
            <span className="ai-badge">AI-ready practice</span>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section" id="process">
        <div className="wrap">
          <p className="section-label">How it works</p>
          <h2 className="section-title">
            From first call to <em>shipped improvement</em>
          </h2>
          <p className="section-sub">
            A focused engagement model that respects your sprint calendar and delivers results in
            weeks, not quarters.
          </p>
          <div className="process-steps">
            {[
              { num: '01 · Discovery',  title: 'Free 30-minute call',        body: "We learn your stack, your pain points, and your timeline. No prep deck required — just bring your problems." },
              { num: '02 · Proposal',   title: 'Scoped, fixed-price plan',   body: "Clear deliverables, timeline, and price. No hourly billing. No scope surprises. You approve before any work begins." },
              { num: '03 · Engagement', title: 'Async-first, embedded work', body: "Weekly check-ins. We work in your tools — Jira, Slack, GitHub. No overhead. Just execution." },
              { num: '04 · Handoff',    title: 'Full docs, your team owns it', body: "Everything documented. No dependency on us. Your team runs it forward independently from day one." },
            ].map((step) => (
              <div className="proc-step" key={step.num}>
                <div className="proc-divider" />
                <span className="proc-num">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work">
        <div className="wrap">
          <p className="section-label">Selected work</p>
          <h2 className="section-title">
            Real problems,<br /><em>real outcomes</em>
          </h2>
          <p className="section-sub">
            Across Google Pixel, Meta, Apple, Samsung, and Hulu. These are the kinds of problems
            we solve.
          </p>

          <div className="case-list">
            <div className="case">
              <div>
                <p className="case-tag">Mobile · Reliability · CI</p>
                <h3>Reduced flaky test rate from 22% to under 3%</h3>
                <p className="case-desc">
                  A mobile hardware team shipping weekly was blocked by unreliable CI — false
                  failures eating 6+ hours of eng time per sprint. Introduced a quarantine policy,
                  stabilization backlog, and diagnostic reruns with structured logging. Eliminated
                  two release-blocking incidents in the first month.
                </p>
                <div className="case-chips">
                  <span className="chip">Android · ADB</span>
                  <span className="chip">Python</span>
                  <span className="chip">CI/CD</span>
                  <span className="chip">Mobile hardware</span>
                </div>
                <p className="case-note">* Replace these metrics with your real numbers before going live</p>
              </div>
              <div className="case-stats">
                <div><span className="cs-num">−86%</span><span className="cs-lbl">Flakiness rate</span></div>
                <div><span className="cs-num">2×</span><span className="cs-lbl">Release velocity</span></div>
                <div><span className="cs-num">6h</span><span className="cs-lbl">Saved per sprint</span></div>
              </div>
            </div>

            <div className="case">
              <div>
                <p className="case-tag">API Coverage · Regression</p>
                <h3>Built API test coverage catching regressions missed by UI-only suite</h3>
                <p className="case-desc">
                  UI-only test suite was missing regressions in backend flows. Built a contract
                  testing layer with data setup helpers and CI quality gates. Caught 3
                  production-bound bugs in the first week — before they reached staging or
                  customers.
                </p>
                <div className="case-chips">
                  <span className="chip">Postman</span>
                  <span className="chip">Charles Proxy</span>
                  <span className="chip">Python</span>
                  <span className="chip">API testing</span>
                </div>
                <p className="case-note">* Replace these metrics with your real numbers before going live</p>
              </div>
              <div className="case-stats">
                <div><span className="cs-num">+61%</span><span className="cs-lbl">API coverage</span></div>
                <div><span className="cs-num">3</span><span className="cs-lbl">Bugs caught wk 1</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="stack-section" id="stack">
        <div className="wrap">
          <p className="section-label">Tech stack</p>
          <h2 className="section-title">Tools we work with</h2>
          <p className="section-sub">
            Add or remove anything that doesn&apos;t match your actual stack before going live.
          </p>
          <div className="stack-grid">
            {[
              { name: 'Python',         cat: 'Automation' },
              { name: 'Appium',         cat: 'Mobile UI' },
              { name: 'ADB',            cat: 'Android' },
              { name: 'Charles Proxy',  cat: 'Network' },
              { name: 'Jenkins',        cat: 'CI/CD' },
              { name: 'GitHub Actions', cat: 'CI/CD' },
              { name: 'Android Studio', cat: 'Mobile' },
              { name: 'LLM Evals',      cat: 'AI testing' },
            ].map((item) => (
              <div className="stack-item" key={item.name}>
                <span className="st-name">{item.name}</span>
                <span className="st-cat">{item.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="wrap">
          <p className="section-label">Pricing</p>
          <h2 className="section-title">
            Scoped engagements,<br /><em>custom quote</em>
          </h2>
          <p className="section-sub">
            Every project is different. Share your goals through the Contact page and I&apos;ll
            send a tailored scope and quote.
          </p>

          <div className="pricing-grid">
            <div className="plan">
              <h3>QA Audit</h3>
              <ul className="plan-items">
                <li>1-week engagement</li>
                <li>Test pyramid assessment</li>
                <li>CI/CD pipeline review</li>
                <li>Written findings report</li>
                <li>30/60/90-day roadmap</li>
                <li>1 follow-up call included</li>
              </ul>
              <Link className="plan-cta" href="/contact">Contact for quote →</Link>
            </div>

            <div className="plan featured">
              <span className="plan-badge">Most popular</span>
              <h3>Automation Build</h3>
              <ul className="plan-items">
                <li>2–4 week engagement</li>
                <li>Framework design &amp; build</li>
                <li>API + UI test coverage</li>
                <li>CI integration + quality gates</li>
                <li>Full handoff &amp; documentation</li>
                <li>30 days async support</li>
              </ul>
              <Link className="plan-cta" href="/contact">Contact for quote →</Link>
            </div>

            <div className="plan">
              <h3>AI &amp; LLM Testing</h3>
              <ul className="plan-items">
                <li>LLM eval framework setup</li>
                <li>Prompt regression test coverage</li>
                <li>Model output validation criteria</li>
                <li>Safety and edge-case test design</li>
                <li>CI quality gates for AI features</li>
                <li>Actionable reporting for releases</li>
              </ul>
              <Link className="plan-cta" href="/contact">Contact for quote →</Link>
            </div>
          </div>

          <p className="pricing-note">
            Not sure which engagement fits? Use the Contact page and I&apos;ll recommend the best
            starting point.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <span className="footer-logo">
            <Image src="/test_ops_logo.png" alt="TestOps Engineering logo" width={16} height={16} />
            TestOps Engineering — © 2026
          </span>
          <nav className="footer-links">
            <a href="#for">Who it&apos;s for</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#pricing">Pricing</a>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </footer>
    </>
  )
}
