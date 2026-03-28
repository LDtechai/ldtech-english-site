const steps = [
  {
    number: 1,
    title: "A customer calls your business",
    description: "The reception system answers immediately with a clear and professional greeting.",
  },
  {
    number: 2,
    title: "The system understands the request",
    description: "It identifies whether the caller wants to book, ask a question, check availability, or leave details.",
  },
  {
    number: 3,
    title: "The call moves toward an outcome",
    description: "The customer gets help quickly, and your business captures more appointments and more qualified leads.",
  },
];

export function Steps() {
  return (
    <section
      id="how-it-works"
      className="relative z-[1] max-w-[1200px] mx-auto py-[82px] px-10 scroll-mt-[120px] max-md:px-5"
    >
      <div className="text-black text-[13px] font-bold tracking-[0.18em] uppercase mb-3">
        Process
      </div>
      <h2 className="text-[44px] leading-[1.08] tracking-[-0.03em] mb-[18px] max-md:text-[40px]">
        How it works
      </h2>
      <p className="text-[var(--muted)] max-w-[840px] text-[19px] tracking-[-0.015em] mb-8">
        The system is designed to keep things simple for the customer while making your business easier to run.
      </p>

      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-gradient-to-b from-white/[0.95] to-[#f7f7f7]/[0.95] border border-black/[0.08] rounded-3xl p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
          >
            <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-black/[0.08] text-black font-bold mb-4">
              {step.number}
            </div>
            <h4 className="text-[21px] leading-[1.18] tracking-[-0.025em] mb-3">
              {step.title}
            </h4>
            <p className="text-[var(--muted)] text-base tracking-[-0.012em]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
