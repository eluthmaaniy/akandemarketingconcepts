import { certifications } from '@/data/certifications';

export default function CertificationsSection() {
  return (
    <section aria-labelledby="certifications-heading">
      <h3 id="certifications-heading" className="section-title">
        Certifications
      </h3>
      <ul className="mt-4 space-y-3">
        {certifications.map((cert) => (
          <li key={cert.title} className="card flex items-start gap-3 p-4">
            <span className="icon-chip">
              <i className={cert.icon} aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-heading">{cert.title}</p>
              <p className="mt-0.5 text-sm text-body">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
