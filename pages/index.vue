<script setup lang="ts">
const stats = [
  { value: '24/7', label: 'Emergency support' },
  { value: '50+', label: 'Bed capacity' },
  { value: '10+', label: 'Medical specialists' },
  { value: '1000+', label: 'Patients served' }
]

const departments = [
  {
    title: 'Gynecology & Maternity',
    text: 'Consultation, antenatal guidance, postnatal follow-up, and women-focused treatment in a respectful environment.'
  },
  {
    title: 'General Surgery',
    text: 'Diagnosis, surgical planning, and post-procedure recovery support with clear communication for families.'
  },
  {
    title: 'Emergency & Urgent Care',
    text: 'Fast response for patients who need immediate medical attention at any time of the day.'
  },
  {
    title: 'Pharmacy & Basic Support',
    text: 'Convenient medicine access and treatment coordination so patients can begin care without unnecessary delay.'
  }
]

const doctors = [
  {
    name: 'Dr. Hafiz Qasim',
    role: 'Lead Consultant / CEO',
    detail: 'Publicly listed as the leading doctor behind the hospital and central to its patient care direction.'
  },
  {
    name: 'Dr. Naba Sidra',
    role: 'Gynecology Specialist',
    detail: 'Focused on women\'s health, consultation, and maternity-related support for local families.'
  },
  {
    name: 'Dr. Adeel',
    role: 'General Surgeon',
    detail: 'Supports surgical patients with evaluation, treatment planning, and recovery-focused care.'
  }
]

const promises = [
  'Accessible hospital location near Chungi No. 6, Kot Radha Kishan',
  'Clean, calm, patient-first digital presentation for trust and clarity',
  'Easy contact flow for emergency, routine visits, and family inquiries',
  'Structured sections ready for future appointments and service expansion'
]

const process = [
  {
    step: '01',
    title: 'Call or Visit',
    text: 'Patients and families can reach the hospital quickly by phone or come directly to the facility.'
  },
  {
    step: '02',
    title: 'Medical Assessment',
    text: 'The care team reviews symptoms, medical need, and urgency before guiding the next treatment step.'
  },
  {
    step: '03',
    title: 'Treatment Plan',
    text: 'Patients receive the appropriate consultation, emergency support, surgery, or medicine guidance.'
  },
  {
    step: '04',
    title: 'Follow-Up Care',
    text: 'Recovery and continuity are supported with practical next steps for patients and their families.'
  }
]

const features = [
  {
    title: 'Trusted Local Presence',
    text: 'Built around the reality of Kot Radha Kishan and nearby communities rather than generic healthcare marketing.'
  },
  {
    title: 'Responsive Design',
    text: 'Designed to work smoothly on phones, tablets, and desktop screens for patients and attendants.'
  },
  {
    title: 'Professional Brand Tone',
    text: 'A stronger visual system, clearer hierarchy, and premium layout help the hospital look established and dependable.'
  }
]

const faqs = [
  {
    question: 'Where is Khadim Hospital located?',
    answer: 'Khadim Hospital is presented here at Chungi No. 6, Muhallah Farooqia, Kot Radha Kishan, Kasur, Punjab, Pakistan.'
  },
  {
    question: 'Does the hospital provide emergency services?',
    answer: 'Yes. The website content highlights 24/7 emergency availability for urgent patient needs.'
  },
  {
    question: 'Which specialties are highlighted on this website?',
    answer: 'The current professional website presentation focuses on gynecology, general surgery, emergency care, and pharmacy support.'
  },
  {
    question: 'Can this website be expanded further?',
    answer: 'Yes. The structure is ready for appointment forms, Urdu pages, doctor detail pages, maps, gallery sections, and WhatsApp integration.'
  }
]

useSeoMeta({
  title: 'Khadim Hospital | Best Hospital in Kot Radha Kishan',
  description:
    'Khadim Hospital website presenting the hospital as a leading healthcare destination in Kot Radha Kishan with departments, doctors, emergency care, and contact details.',
  ogTitle: 'Khadim Hospital | Best Hospital in Kot Radha Kishan',
  ogDescription:
    'Explore departments, doctor information, emergency support, and contact details for Khadim Hospital in Kot Radha Kishan.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <div class="container topbar__inner">
        <div class="brand">
          <img class="brand__logo" src="/khadim-logo.jpg" alt="Khadim Hospital logo" />
          <div>
            <strong>Khadim Hospital</strong>
            <span>A family hospital</span>
          </div>
        </div>

        <nav class="nav">
          <a href="#about">About</a>
          <a href="#departments">Departments</a>
          <a href="#doctors">Doctors</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a class="button button--primary button--small" href="tel:+923084876102">Call Hospital</a>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="hero__gradient"></div>
        <div class="container hero__layout">
          <div class="hero__content">
            <p class="eyebrow">A Family Hospital</p>
            <h1>Trusted care for Kot Radha Kishan.</h1>
            <p class="hero__text">
              24/7 emergency, women\'s health, surgery, and everyday care in one trusted hospital.
            </p>

            <div class="hero__actions">
              <a class="button button--primary" href="tel:+923084876102">Book by Phone</a>
              <a class="button button--secondary" href="#departments">Explore Services</a>
            </div>

            <div class="stats-grid">
              <article v-for="item in stats" :key="item.label" class="stat-card">
                <strong>{{ item.value }}</strong>
                <span>{{ item.label }}</span>
              </article>
            </div>
          </div>

          <aside class="hero-card">
            <p class="eyebrow eyebrow--teal">Top-Rated Care Identity</p>
            <h2>The hospital families trust first.</h2>
            <p>
              Clear information, fast contact, and a strong local care message.
            </p>

            <div class="hero-card__panel">
              <span>Location</span>
              <strong>Chungi No. 6, Muhallah Farooqia</strong>
            </div>

            <div class="hero-card__panel">
              <span>Phone</span>
              <strong>0308 4876102</strong>
            </div>

            <div class="hero-card__panel">
              <span>Availability</span>
              <strong>Open 24 Hours</strong>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" class="section">
        <div class="container section-head">
          <p class="eyebrow">About The Hospital</p>
          <h2>Presented as the best hospital experience in Kot Radha Kishan.</h2>
          <p>
            Kot Radha Kishan is a tehsil of Kasur district in Punjab, and this website
            is designed to help Khadim Hospital stand out as the area's most dependable,
            accessible, and professionally presented healthcare destination.
          </p>
        </div>

        <div class="container about-grid">
          <article class="about-card about-card--feature">
            <span class="section-kicker">Hospital Promise</span>
            <h3>Care that feels advanced, reliable, and community trusted.</h3>
            <p>
              The design focuses on authority, clarity, and ease of access. Patients can
              quickly understand why Khadim Hospital should feel like the first choice
              for treatment in Kot Radha Kishan.
            </p>
          </article>

          <article class="about-card">
            <span class="section-kicker">Why this version is stronger</span>
            <ul class="bullet-list">
              <li v-for="item in promises" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="departments" class="section section--soft">
        <div class="container section-head">
          <p class="eyebrow">Departments</p>
          <h2>Leading services for families across Kot Radha Kishan.</h2>
        </div>

        <div class="container card-grid">
          <article v-for="department in departments" :key="department.title" class="info-card">
            <span class="card-tag">Core Service</span>
            <h3>{{ department.title }}</h3>
            <p>{{ department.text }}</p>
          </article>
        </div>
      </section>

      <section id="doctors" class="section">
        <div class="container section-head">
          <p class="eyebrow">Medical Team</p>
          <h2>Doctor highlights that reinforce hospital excellence.</h2>
          <p>
            These doctor entries are based on the public hospital listing used for
            this project and can be replaced with official hospital-approved profiles later.
          </p>
        </div>

        <div class="container doctor-grid">
          <article v-for="doctor in doctors" :key="doctor.name" class="doctor-card">
            <div class="doctor-card__avatar">{{ doctor.name.charAt(0) }}</div>
            <h3>{{ doctor.name }}</h3>
            <p class="doctor-card__role">{{ doctor.role }}</p>
            <p>{{ doctor.detail }}</p>
          </article>
        </div>
      </section>

      <section id="process" class="section section--accent">
        <div class="container section-head section-head--light">
          <p class="eyebrow eyebrow--light">Patient Journey</p>
          <h2>A smooth treatment journey from first contact to follow-up care.</h2>
        </div>

        <div class="container process-grid">
          <article v-for="item in process" :key="item.step" class="process-card">
            <span class="process-card__step">{{ item.step }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="container split-grid">
          <article class="showcase-card">
            <p class="eyebrow">Hospital Strengths</p>
            <h2>Designed to look like the strongest hospital brand in town.</h2>
            <div class="stack-list">
              <article v-for="item in features" :key="item.title" class="stack-item">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </article>
            </div>
          </article>

          <article class="showcase-card showcase-card--warm">
            <p class="eyebrow eyebrow--teal">Frequently Asked Questions</p>
            <h2>Useful answers for patients and attendants.</h2>
            <div class="faq-list">
              <article v-for="faq in faqs" :key="faq.question" class="faq-item">
                <h3>{{ faq.question }}</h3>
                <p>{{ faq.answer }}</p>
              </article>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="section contact-section">
        <div class="container contact-panel">
          <div class="contact-panel__content">
            <p class="eyebrow eyebrow--light">Contact Khadim Hospital</p>
            <h2>Choose Khadim Hospital for confident, local, round-the-clock care.</h2>
            <p>
              Address shown on this project: Chungi No. 6, Muhallah Farooqia,
              Kot Radha Kishan, Kasur, Punjab, Pakistan.
            </p>
          </div>

          <div class="contact-panel__details">
            <a href="tel:+923084876102">0308 4876102</a>
            <span>Open 24 Hours</span>
            <span>Kot Radha Kishan, Kasur</span>
            <a class="button button--light button--full" href="tel:+923084876102">Call For Appointment</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <div>
          <strong>Khadim Hospital</strong>
          <p>Best hospital website presentation for Kot Radha Kishan.</p>
        </div>
        <div class="footer__meta">
          <span>Address: Chungi No. 6, Muhallah Farooqia</span>
          <span>Phone: 0308 4876102</span>
        </div>
      </div>
    </footer>
  </div>
</template>
