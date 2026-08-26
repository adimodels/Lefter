export function Logo({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const wordmark = theme === "dark" ? "text-white" : "text-ink";
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink font-extrabold text-sm tracking-tight">
        Ad
      </span>
      <span className={`leading-[1.05] font-bold text-[15px] ${wordmark}`}>
        Adi
        <br />
        Academy
      </span>
    </div>
  );
}
