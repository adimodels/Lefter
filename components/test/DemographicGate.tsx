import { MAX_AGE, MIN_AGE, MOLDOVA_DISTRICTS } from "@/lib/constants";
import type { Demographics } from "@/lib/validation";

const GENDER_OPTIONS: { value: Demographics["gender"]; label: string }[] = [
  { value: "MASCULIN", label: "Masculin" },
  { value: "FEMININ", label: "Feminin" },
  { value: "NESPECIFICAT", label: "Prefer să nu specific" },
];

const LIVING_AREA_OPTIONS: { value: Demographics["livingArea"]; label: string }[] = [
  { value: "URBAN", label: "Urban" },
  { value: "RURAL", label: "Rural" },
  { value: "SMALL_TOWN", label: "Localitate mică" },
];

export type PartialDemographics = Partial<Demographics>;

export function DemographicGate({
  value,
  onChange,
}: {
  value: PartialDemographics;
  onChange: (value: PartialDemographics) => void;
}) {
  return (
    <div className="space-y-8">
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-2">
          Vârstă exactă
        </label>
        <input
          id="age"
          type="number"
          inputMode="numeric"
          min={MIN_AGE}
          max={MAX_AGE}
          value={value.age ?? ""}
          onChange={(e) =>
            onChange({ ...value, age: e.target.value === "" ? undefined : Number(e.target.value) })
          }
          placeholder={`${MIN_AGE}–${MAX_AGE}`}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>

      <div>
        <p className="block text-sm font-medium text-slate-700 mb-2">Gen</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {GENDER_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange({ ...value, gender: option.value })}
              aria-pressed={value.gender === option.value}
              className={`rounded-xl border p-3 text-sm font-medium transition-colors ${
                value.gender === option.value
                  ? "border-brand bg-indigo-50 text-slate-900 ring-1 ring-brand"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="block text-sm font-medium text-slate-700 mb-2">Mediu de viață</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {LIVING_AREA_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange({ ...value, livingArea: option.value })}
              aria-pressed={value.livingArea === option.value}
              className={`rounded-xl border p-3 text-sm font-medium transition-colors ${
                value.livingArea === option.value
                  ? "border-brand bg-indigo-50 text-slate-900 ring-1 ring-brand"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="county" className="block text-sm font-medium text-slate-700 mb-2">
          Județul/Raionul <span className="text-slate-400 font-normal">(opțional)</span>
        </label>
        <select
          id="county"
          value={value.county ?? ""}
          onChange={(e) => onChange({ ...value, county: e.target.value || undefined })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        >
          <option value="">Alege...</option>
          {MOLDOVA_DISTRICTS.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export function isDemographicsComplete(value: PartialDemographics): value is Demographics {
  return (
    typeof value.age === "number" &&
    value.age >= MIN_AGE &&
    value.age <= MAX_AGE &&
    !!value.gender &&
    !!value.livingArea
  );
}
