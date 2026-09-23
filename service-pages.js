const services = {
  receptionist: {
    eyebrow: 'AI Receptionist', title: 'Every call answered. Every opportunity captured.',
    copy: 'A natural-sounding AI receptionist that answers business calls, understands what customers need, qualifies enquiries, and books appointments—24/7.',
    visualTitle: 'Incoming customer call', visualMessage: '“I need an appointment tomorrow afternoon.”', visualReply: 'Understood. I have a 4:00 PM slot available. Shall I confirm it?', visualSuccess: 'Appointment booked · Confirmation ready',
    problemTitle: 'Stop losing customers to missed calls', problemCopy: 'Your team cannot answer every call while serving customers. The AI receptionist handles the predictable conversations without adding another front-desk shift.',
    features: [['24/7','Answers after hours, during rush periods, and when staff are unavailable.'],['Talk','Speaks naturally in clear English and can follow your preferred conversation flow.'],['Qualify','Collects the caller’s name, need, urgency, budget, and other important details.'],['Book','Checks availability and schedules appointments without back-and-forth.']],
    steps: [['We learn your process','We map the questions your team asks, your services, policies, and booking rules.'],['We build and test','Your agent is scripted, connected, and tested with realistic customer situations.'],['You start receiving outcomes','Calls are answered, bookings are captured, and summaries reach your team.']],
    fits: ['Dental and medical clinics','Gyms and fitness studios','Real estate teams','Home-service businesses','Recruiting agencies','Professional services']
  },
  followup: {
    eyebrow: 'AI Lead Follow-Up', title: 'Respond while the lead is still interested.',
    copy: 'An AI follow-up system that contacts new enquiries quickly, asks the right questions, keeps conversations moving, and schedules the next step for your sales team.',
    visualTitle: 'New lead received', visualMessage: 'Instagram lead · Interested in a free trial', visualReply: 'AI contacted the lead, confirmed availability, and offered two trial slots.', visualSuccess: 'Qualified lead · Trial booked',
    problemTitle: 'Speed-to-lead without living on your phone', problemCopy: 'New enquiries cool down quickly. Automated follow-up makes sure every genuine lead gets a timely response while your team focuses on conversations that need a human.',
    features: [['Fast','Starts follow-up shortly after a form, ad, WhatsApp message, or missed call.'],['Persistent','Continues polite follow-ups using the timing and limits you approve.'],['Qualified','Captures intent, requirements, budget, location, and purchase timeline.'],['Handoff','Books a call or sends a concise summary to the right salesperson.']],
    steps: [['Connect your lead sources','We connect the channels where enquiries currently arrive.'],['Define qualification','Together we decide what makes a lead ready for sales and what the AI should ask.'],['Launch and refine','Your team receives booked conversations and we improve the flow from real outcomes.']],
    fits: ['Real estate brokers','Gyms and studios','Education consultants','Recruiters','Clinics','High-ticket service businesses']
  },
  automation: {
    eyebrow: 'Workflow Automation', title: 'Remove the repetitive work between your tools.',
    copy: 'Practical automations that move information, trigger follow-ups, update records, and notify your team—without someone copying the same data all day.',
    visualTitle: 'Automation running', visualMessage: 'New enquiry received from website form', visualReply: 'Lead added to CRM → assigned to sales → WhatsApp acknowledgement sent.', visualSuccess: 'Workflow completed in seconds',
    problemTitle: 'Make your existing process run reliably', problemCopy: 'Most operational delays live between tools: a form that needs copying, a reminder someone forgets, or a spreadsheet that never gets updated. We connect those steps.',
    features: [['Connect','Link forms, email, WhatsApp, calendars, spreadsheets, and CRMs.'],['Route','Send each enquiry or task to the correct person automatically.'],['Notify','Trigger confirmations, reminders, alerts, and follow-up sequences.'],['Track','Keep records updated so your team knows what happened and what comes next.']],
    steps: [['Find the bottleneck','We identify one repetitive process that wastes time or loses revenue.'],['Build the workflow','We connect the necessary tools and add safe checks for failures.'],['Measure the result','We monitor the workflow and refine it around actual team usage.']],
    fits: ['Lead management','Appointment reminders','Client onboarding','Internal notifications','Reporting workflows','Document collection']
  },
  website: {
    eyebrow: 'Website Development', title: 'A website built to turn attention into enquiries.',
    copy: 'Fast, mobile-first business websites with clear positioning, thoughtful visuals, lead capture, and the integrations needed to move visitors into your sales process.',
    visualTitle: 'Conversion-ready website', visualMessage: 'Clear offer · Mobile-first layout · Focused calls to action', visualReply: 'Lead form connected to your inbox, CRM, calendar, or follow-up workflow.', visualSuccess: 'Designed, connected, and ready to sell',
    problemTitle: 'More than a digital brochure', problemCopy: 'A good website should make the offer understandable, build confidence, and make the next action obvious. We design around those decisions—not decorative sections.',
    features: [['Position','Clarify what you sell, who it is for, and why customers should care.'],['Design','Create a polished responsive experience that feels credible on every screen.'],['Convert','Add focused calls to action, lead forms, booking, and WhatsApp entry points.'],['Integrate','Connect the site to analytics, calendars, CRMs, and automated follow-up.']],
    steps: [['Define the goal','We agree on the audience, core offer, pages, and primary conversion action.'],['Design and build','We create the visual system, write the page structure, and build responsively.'],['Launch and improve','After testing, the site goes live and can evolve using real visitor behaviour.']],
    fits: ['Clinics and practices','Local service businesses','Consultants and agencies','Real estate teams','Gyms and studios','Early-stage companies']
  }
};

const key = document.body.dataset.service;
const data = services[key];
if (data) {
  document.getElementById('service-content').innerHTML = `
    <section class="hero">
      <div><div class="eyebrow"><span class="eyebrow-dot"></span>${data.eyebrow}</div><h1>${data.title.split('.').map((part,i)=>i===0?part+'.':` <span class="gradient-text">${part}</span>`).join('')}</h1><p class="hero-copy">${data.copy}</p><div class="hero-actions"><a class="primary-btn" href="signup.html">Book a Free Strategy Call →</a><a class="secondary-btn" href="copywrk.html#solutions">Explore all services</a></div><div class="proof-line"><span>Built around your process</span><span>Mobile-ready</span><span>No technical skills required</span></div></div>
      <div class="hero-visual"><div class="visual-head"><div class="visual-status"><span class="live-dot"></span>Live system preview</div><div class="visual-label">${data.eyebrow}</div></div><div class="visual-body"><div class="mini-card"><div class="mini-kicker">${data.visualTitle}</div><strong>${data.visualMessage}</strong></div><div class="mini-card accent"><div class="mini-kicker">Copywrk AI</div><strong>${data.visualReply}</strong></div><div class="mini-card success"><span class="success-icon">✓</span><strong>${data.visualSuccess}</strong></div></div></div>
    </section>
    <section class="section"><div class="section-inner"><div class="section-intro"><div class="section-tag">Why it matters</div><h2>${data.problemTitle}</h2><p>${data.problemCopy}</p></div><div class="grid-4">${data.features.map((item,i)=>`<article class="feature-card"><div class="feature-icon">0${i+1}</div><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}</div></div></section>
    <section class="section"><div class="section-inner"><div class="section-intro"><div class="section-tag">How it works</div><h2>From idea to a working system.</h2><p>A focused setup process keeps the project practical, testable, and aligned with how your team already operates.</p></div><div class="grid-3">${data.steps.map((item,i)=>`<article class="step-card"><div class="step-num">STEP 0${i+1}</div><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}</div></div></section>
    <section class="section"><div class="section-inner"><div class="section-intro"><div class="section-tag">Good fit for</div><h2>Useful wherever speed and consistency matter.</h2></div><div class="fit-strip">${data.fits.map(item=>`<span class="fit-pill">${item}</span>`).join('')}</div></div></section>
    <section class="cta-section"><div class="cta-box"><h2>Let’s see if ${data.eyebrow.toLowerCase()} fits your business.</h2><p>Book a free strategy call. We’ll map the current process, identify where opportunities are being lost, and show you a sensible first version.</p><a class="primary-btn" href="signup.html">Book Free Strategy Call →</a></div></section>`;
}
