import Image from "next/image";

/**
 * Logo-ul e crem/alb pe fundal transparent, deci e gândit pentru suprafețe
 * închise (navbar, footer). Pe fundal deschis ar deveni invizibil.
 */
export function Logo({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const wordmark = theme === "dark" ? "text-white" : "text-ink";
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="Adi Academy"
        width={811}
        height={1011}
        priority
        className="h-9 w-auto"
      />
      <span className={`leading-[1.05] font-bold text-[15px] ${wordmark}`}>
        Adi
        <br />
        Academy
      </span>
    </div>
  );
}
