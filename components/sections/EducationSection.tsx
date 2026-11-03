import { education } from '@/data/education';

export default function EducationSection() {
  return (
    <section aria-labelledby="education-heading">
      <h3 id="education-heading" className="section-title">
        Education
      </h3>
      <ul className="mt-4 space-y-3">
        {education.map((item) => (
          <li key={item.institution} className="card flex items-start gap-3 p-4">
            <span className="icon-chip">
              <i className="ri-graduation-cap-line" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-heading">{item.institution}</p>
              <p className="mt-0.5 text-sm text-body">{item.degree}</p>
              <p className="mt-0.5 text-xs text-muted">{item.year}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
