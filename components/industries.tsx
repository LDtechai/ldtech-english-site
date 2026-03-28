const industries = [
  "Barbershops",
  "Beauty salons",
  "Spas",
  "Med spas",
  "Dental offices",
  "Medical clinics",
  "Auto repair shops",
  "Restaurants",
  "Consultants",
  "Service businesses",
];

const benefits = [
  "No more missed calls during busy hours",
  "More booked appointments without adding staff",
  "Faster phone response for new and existing customers",
  "Better customer experience, even outside business hours",
  "A more professional first impression for every caller",
];

export function Industries() {
  return (
    <section
      id="about"
      className="relative z-[1] max-w-[1200px] mx-auto py-[82px] px-10 scroll-mt-[120px] max-md:px-5"
    >
      <div className="text-black text-[13px] font-bold tracking-[0.18em] uppercase mb-3">
        Industries
      </div>
      <h2 className="text-[44px] leading-[1.08] tracking-[-0.03em] mb-[18px] max-md:text-[40px]">
        Perfect for appointment-based businesses
      </h2>
      <p className="text-[var(--muted)] max-w-[840px] text-[19px] tracking-[-0.015em] mb-8">
        {"LDtech's reception system is a strong fit for businesses that depend on calls, follow-ups, and appointment requests."}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {industries.map((industry) => (
          <div
            key={industry}
            className="py-2.5 px-4 rounded-full border border-black/10 bg-black/[0.03] text-sm text-black/[0.92] tracking-[-0.01em]"
          >
            {industry}
          </div>
        ))}
      </div>

      <div className="mt-[30px] p-7 rounded-[28px] border border-black/[0.08] bg-gradient-to-br from-black/[0.04] to-black/[0.02]">
        <strong className="text-black">Why businesses choose LDtech</strong>
        <ul className="mt-3.5 pl-[18px] list-disc">
          {benefits.map((benefit) => (
            <li key={benefit} className="mb-2.5 text-black/[0.84]">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
