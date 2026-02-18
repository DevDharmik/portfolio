import { content } from './content';

const Contact = () => {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <h2>Let's Connect</h2>
      <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div className="card-content">
          <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
            I am currently based in **Berlin, Germany** and open to 
            **Working Student (Werkstudent)** roles in Data Science, 
            Business Intelligence, or Web Development.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <a href="mailto:dharmik.champaneri@gmail.com" className="btn">
              📩 Send Email
            </a>
            <a 
              href={content.profile.links.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="btn" 
              style={{ background: '#0077b5' }}
            >
              LinkedIn Profile
            </a>
            <a 
              href="/Dharmik_Champaneri_CV.pdf" 
              download 
              className="btn" 
              style={{ background: 'var(--text)', color: 'var(--bg)' }}
            >
              📄 Download CV
            </a>
          </div>
          
          <p style={{ marginTop: '25px', color: 'var(--muted)', fontSize: '0.9rem' }}>
            Open to opportunities in: Berlin, Potsdam, or Remote (Germany)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;