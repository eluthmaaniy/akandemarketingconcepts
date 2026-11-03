import { profile, skills } from '@/data/profile';

export default function AboutSection() {
  return (
    <div>
      <h2 className="section-eyebrow">About</h2>
      <p className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-heading md:text-3xl">
        {profile.about.headline}
      </p>
      <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-body">
        {profile.about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading">
      <h3 id="skills-heading" className="section-title">
        Skills
      </h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-start gap-3 rounded-card border border-line bg-white p-4 text-sm font-medium text-heading">
            <i className="ri-checkbox-circle-fill mt-0.5 text-lg leading-none text-hover" aria-hidden="true" />
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
