import { useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { FaTv } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const ACCENT_PRESETS = [
  { name: "Slate", value: "#6366f1" },
  { name: "Rose", value: "#f43f5e" },
  { name: "Amber", value: "#f59e0b" },
  { name: "Emerald", value: "#10b981" },
  { name: "Sky", value: "#0ea5e9" },
  { name: "Fuchsia", value: "#d946ef" },
];

export default function Settings() {
  const [mode, setMode] = useState("system");
  const [accent, setAccent] = useState(ACCENT_PRESETS[0].value);

  // Derive effective display mode (for preview)
  const systemPref =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  const effectiveMode = mode === "system" ? systemPref : mode;

  const isDark = effectiveMode === "dark";

  const modeOptions = [
    {
      id: "light",
      label: "Light",
      icon: <FaRegSun />,
    },
    {
      id: "dark",
      label: "Dark",
      icon: <FaRegMoon />,
    },
    {
      id: "system",
      label: "System",
      icon: <FaTv />,
    },
  ];

  // Page shell colors (settings page itself adapts to effectiveMode)
  const bg = isDark ? "bg-zinc-950" : "bg-stone-100";
  const card = isDark
    ? "bg-zinc-900 border-zinc-800"
    : "bg-white border-stone-200";
  const label = isDark ? "text-zinc-400" : "text-stone-500";
  const heading = isDark ? "text-zinc-100" : "text-stone-800";
  const divider = isDark ? "border-zinc-800" : "border-stone-200";

  return (
    <div
      className={`min-h-screen ${bg} transition-colors duration-500 p-6 md:p-10 font-sans`}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Page header */}
        <div>
          <h1
            className={`text-2xl font-semibold tracking-tight ${heading} transition-colors duration-300`}
          >
            Settings
          </h1>
          <p className={`text-sm mt-1 ${label}`}>
            Customize how the app looks on your device.
          </p>
        </div>

        {/* Main card */}
        <div
          className={`rounded-2xl border ${card} transition-colors duration-300 divide-y ${divider}`}
        >
          {/* --- Appearance mode --- */}
          <div className="p-6 space-y-4">
            <div>
              <p className={`text-sm font-medium ${heading}`}>Appearance</p>
              <p className={`text-xs mt-0.5 ${label}`}>
                Choose between light, dark, or match your system setting.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {modeOptions.map((opt) => {
                const selected = mode === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setMode(opt.id)}
                    className={`
                      flex flex-col items-center gap-2 py-4 rounded-xl border-2 text-sm font-medium transition-all duration-200
                      ${
                        selected
                          ? "border-transparent text-white"
                          : isDark
                            ? "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                            : "border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-700"
                      }
                    `}
                    style={
                      selected
                        ? { background: accent, borderColor: accent }
                        : {}
                    }
                  >
                    {opt.icon}
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* --- Accent color --- */}
          <div className="p-6 space-y-4">
            <div>
              <p className={`text-sm font-medium ${heading}`}>Accent Color</p>
              <p className={`text-xs mt-0.5 ${label}`}>
                Used for buttons, highlights, and interactive elements.
              </p>
            </div>

            {/* Presets row */}
            <div className="flex items-center gap-3 flex-wrap">
              {ACCENT_PRESETS.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setAccent(p.value)}
                  title={p.name}
                  className="w-8 h-8 rounded-full transition-all duration-150 focus:outline-none"
                  style={{
                    background: p.value,
                    boxShadow:
                      accent === p.value
                        ? `0 0 0 3px ${isDark ? "#18181b" : "#fafaf9"}, 0 0 0 5px ${p.value}`
                        : "none",
                    transform: accent === p.value ? "scale(1.15)" : "scale(1)",
                  }}
                />
              ))}

              {/* Divider */}
              <div
                className={`h-6 w-px ${isDark ? "bg-zinc-700" : "bg-stone-300"}`}
              />

              {/* Custom color input */}
              <label
                className="relative w-8 h-8 rounded-full overflow-hidden cursor-pointer"
                title="Custom color"
              >
                <input
                  type="color"
                  value={accent}
                  onChange={(e) => setAccent(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{ background: accent }}
                >
                  <FaPlus />
                </div>
              </label>

              {/* Hex readout */}
              <span
                className={`text-xs font-mono ml-1 px-2 py-1 rounded ${isDark ? "bg-zinc-800 text-zinc-300" : "bg-stone-100 text-stone-600"}`}
              >
                {accent.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
