export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-[1] max-w-[1200px] mx-auto py-[82px] px-10 scroll-mt-[120px] max-md:px-5"
    >
      <div className="text-black text-[13px] font-bold tracking-[0.18em] uppercase mb-3">
        Contact
      </div>
      <h2 className="text-[44px] leading-[1.08] tracking-[-0.03em] mb-[18px] max-md:text-[40px]">
        Choose the best next step
      </h2>
      <p className="text-[var(--muted)] max-w-[840px] text-[19px] tracking-[-0.015em] mb-8">
        You can test the reception system yourself or call me directly if you want to ask questions about setup,
        pricing, or how this could work for your business.
      </p>

      <div className="grid grid-cols-2 gap-5 mt-6 max-md:grid-cols-1">
        <div className="bg-gradient-to-b from-white/[0.95] to-[#f7f7f7]/[0.95] border border-black/[0.08] rounded-3xl p-6">
          <h4 className="text-[21px] leading-[1.18] tracking-[-0.025em]">
            Test the reception system
          </h4>
          <p className="text-[var(--muted)] mt-2 mb-[18px]">
            Call the live demo number and experience the automation yourself.
          </p>
          <a
            href="tel:+16369426124"
            className="text-black no-underline font-bold text-lg"
          >
            +1 (636) 942-6124
          </a>
        </div>

        <div className="bg-gradient-to-b from-white/[0.95] to-[#f7f7f7]/[0.95] border border-black/[0.08] rounded-3xl p-6">
          <h4 className="text-[21px] leading-[1.18] tracking-[-0.025em]">
            Call me with questions
          </h4>
          <p className="text-[var(--muted)] mt-2 mb-[18px]">
            Speak with me directly if you want details or want to discuss your business.
          </p>
          <a
            href="tel:+16362525071"
            className="text-black no-underline font-bold text-lg"
          >
            +1 (636) 252-5071
          </a>
        </div>
      </div>
    </section>
  );
}
