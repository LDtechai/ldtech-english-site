import Image from "next/image";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[46px] h-[46px] fill-black/[0.82] max-md:w-[42px] max-md:h-[42px]">
      <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2.2c-3.58 0-6.5 2.3-6.5 5.13 0 .37.3.67.67.67h11.66a.67.67 0 0 0 .67-.67c0-2.83-2.92-5.13-6.5-5.13Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative z-[1] max-w-[1200px] mx-auto pt-[88px] pb-[72px] px-10 grid grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] gap-11 items-start scroll-mt-[120px] max-md:grid-cols-1 max-md:px-5 max-md:pt-[110px]"
    >
      <div>
        <h1 className="text-[64px] leading-[1.03] tracking-[-0.04em] mb-[34px] max-w-[780px] max-md:text-[40px]">
          Never miss a customer call again
        </h1>

        <div className="mb-[30px] max-w-[700px]">
          <p className="text-[var(--muted)] text-[21px] tracking-[-0.015em]">
            LDtech provides professional phone reception automation for businesses that want faster response times, better customer service, and more booked appointments.
          </p>
          <p className="text-[var(--muted)] text-[21px] tracking-[-0.015em] mt-[18px]">
            Your system can answer calls, handle common questions, and guide callers toward the right next step day or night.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-[22px]">
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
      </div>

      {/* Demo Box */}
      <div className="w-full max-w-[480px] justify-self-end max-md:max-w-full max-md:justify-self-stretch">
        <div className="w-full bg-gradient-to-b from-white/[0.96] to-[#f6f6f6]/[0.96] border border-[var(--border)] rounded-[26px] p-[18px] shadow-[0_18px_44px_rgba(0,0,0,0.08)]">
          <div className="border border-black/[0.07] rounded-[22px] p-[18px] bg-white/[0.78]">
            <div className="text-black text-sm font-bold tracking-[0.08em] uppercase mb-4">
              Live Call Example
            </div>

            {/* User message 1 */}
            <div className="flex items-center gap-4 p-4 rounded-[20px] mb-3.5 bg-black/5 text-black/[0.92]">
              <span className="w-[74px] h-[74px] flex-shrink-0 flex items-center justify-center max-md:w-[68px] max-md:h-[68px]">
                <UserIcon />
              </span>
              <span className="text-[15px] leading-[1.5] tracking-[-0.012em] flex-1 min-w-0">
                {`Caller: "Hi, I'd like to schedule an appointment for this week."`}
              </span>
            </div>

            {/* System message 1 */}
            <div className="flex items-center gap-4 p-4 rounded-[20px] mb-3.5 bg-black/[0.08] text-black">
              <span className="w-[74px] h-[74px] flex-shrink-0 flex items-center justify-center max-md:w-[68px] max-md:h-[68px]">
                <Image
                  src="/ldtech-logo.png"
                  alt="LDtech logo"
                  width={46}
                  height={46}
                  className="object-contain brightness-0 saturate-100 max-md:w-[42px] max-md:h-[42px]"
                />
              </span>
              <span className="text-[15px] leading-[1.5] tracking-[-0.012em] flex-1 min-w-0">
                {`"Absolutely. I can help with that now. What day works best for you?"`}
              </span>
            </div>

            {/* User message 2 */}
            <div className="flex items-center gap-4 p-4 rounded-[20px] mb-3.5 bg-black/5 text-black/[0.92]">
              <span className="w-[74px] h-[74px] flex-shrink-0 flex items-center justify-center max-md:w-[68px] max-md:h-[68px]">
                <UserIcon />
              </span>
              <span className="text-[15px] leading-[1.5] tracking-[-0.012em] flex-1 min-w-0">
                {`Caller: "Do you have anything available Friday afternoon?"`}
              </span>
            </div>

            {/* System message 2 */}
            <div className="flex items-center gap-4 p-4 rounded-[20px] mb-3.5 bg-black/[0.08] text-black">
              <span className="w-[74px] h-[74px] flex-shrink-0 flex items-center justify-center max-md:w-[68px] max-md:h-[68px]">
                <Image
                  src="/ldtech-logo.png"
                  alt="LDtech logo"
                  width={46}
                  height={46}
                  className="object-contain brightness-0 saturate-100 max-md:w-[42px] max-md:h-[42px]"
                />
              </span>
              <span className="text-[15px] leading-[1.5] tracking-[-0.012em] flex-1 min-w-0">
                {`"Yes. I have two openings on Friday afternoon, one at 4:00 PM and one at 5:00 PM. Which one works better for you?"`}
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3.5 mt-[18px] max-md:grid-cols-1">
              <div className="border border-black/[0.08] bg-black/[0.04] rounded-[18px] p-5 text-[17px] text-black/[0.95]">
                <strong className="block text-[22px] mb-2 tracking-[-0.02em]">Status</strong>
                Answers calls 24/7
              </div>
              <div className="border border-black/[0.08] bg-black/[0.04] rounded-[18px] p-5 text-[17px] text-black/[0.95]">
                <strong className="block text-[22px] mb-2 tracking-[-0.02em]">Booking Flow</strong>
                Ready to qualify and schedule
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
