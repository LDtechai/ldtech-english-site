export function CTA() {
  return (
    <section className="relative z-[1] text-center py-[92px] px-10 border-t border-[var(--border)] mt-5 max-md:px-5">
      <h2 className="text-[48px] leading-[1.08] tracking-[-0.03em] mb-[18px] max-md:text-[40px]">
        Ready to turn more calls into booked customers?
      </h2>
      <p className="text-[var(--muted)] max-w-[760px] mx-auto mb-[30px] text-[19px] tracking-[-0.015em]">
        Put a professional reception system in front of your business and give every caller a faster, more reliable response.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="tel:+16369426124"
          className="inline-block no-underline text-center font-bold tracking-[-0.015em] rounded-[18px] py-[15px] px-6 text-white bg-black shadow-[0_16px_34px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-px max-md:w-full"
        >
          Try the Automation
        </a>
        <a
          href="tel:+16362525071"
          className="inline-block no-underline text-center font-bold tracking-[-0.015em] rounded-[18px] py-[15px] px-6 text-black border border-black/15 bg-black/[0.03] transition-transform duration-200 hover:-translate-y-px max-md:w-full"
        >
          Call for Questions
        </a>
      </div>
    </section>
  );
}
