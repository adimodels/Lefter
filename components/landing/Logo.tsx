import Image from "next/image";

/**
 * Logo-ul e crem/alb pe fundal transparent, deci e gândit pentru suprafețe
 * închise (navbar, footer). Pe fundal deschis ar deveni invizibil.
 *
 * Imaginea conține deja wordmark-ul „ACADEMY" desenat în ea — textul „Adi
 * Academy" alăturat e opțional și mai util doar acolo unde logo-ul e mic
 * (footer, admin), nu în navbar, unde logo-ul singur poate fi mai mare și
 * rămâne perfect lizibil.
 */
export function Logo({
  theme = "dark",
  showWordmark = true,
  className = "h-9",
}: {
  theme?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
}) {
  const wordmark = theme === "dark" ? "text-white" : "text-ink";
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="Adi Academy"
        width={811}
        height={1011}
        priority
        className={`w-auto ${className}`}
      />
      {showWordmark && (
        <span className={`leading-[1.05] font-bold text-[15px] ${wordmark}`}>
          Adi
          <br />
          Academy
        </span>
      )}
    </div>
  );
}
