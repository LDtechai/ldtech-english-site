const features = [
  {
    title: "Answer incoming calls",
    description: "Your business can respond instantly, even when you are busy, after hours, or unavailable.",
  },
  {
    title: "Answer common questions",
    description: "Hours, location, services, pricing, and basic business information can all be handled automatically.",
  },
  {
    title: "Help book appointments",
    description: "The system can guide callers through scheduling and direct them toward the right booking flow.",
  },
  {
    title: "Capture more leads",
    description: "Instead of losing calls, you collect customer details and create more opportunities to close business.",
  },
  {
    title: "Work around the clock",
    description: "Your business stays responsive 24/7, including nights, weekends, and busy periods.",
  },
  {
    title: "Improve customer experience",
    description: "Callers get quick answers and a smoother experience without waiting for someone to pick up.",
  },
];

export function Features() {
  return (
    <section
      id="services"
      className="relative z-[1] max-w-[1200px] mx-auto py-[82px] px-10 scroll-mt-[120px] max-md:px-5"
    >
      <div className="text-black text-[13px] font-bold tracking-[0.18em] uppercase mb-3">
        Services
      </div>
      <h2 className="text-[44px] leading-[1.08] tracking-[-0.03em] mb-[18px] max-md:text-[40px]">
        What your reception system can do
      </h2>
      <p className="text-[var(--muted)] max-w-[840px] text-[19px] tracking-[-0.015em] mb-8">
        Built for appointment-based businesses that need a reliable way to answer calls, handle routine questions,
        and convert more callers into booked customers.
      </p>

      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gradient-to-b from-white/[0.95] to-[#f7f7f7]/[0.95] border border-black/[0.08] rounded-3xl p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
          >
            <h4 className="text-[21px] leading-[1.18] tracking-[-0.025em] mb-3">
              {feature.title}
            </h4>
            <p className="text-[var(--muted)] text-base tracking-[-0.012em]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
