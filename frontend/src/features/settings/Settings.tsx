import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import DEFlag from "../../common/components/DEFlag";
import ENFlag from "../../common/components/ENFlag";
import { useLanguage } from "../../store/hooks/useLanguage";
import { useTheme } from "../../store/hooks/useTheme";
import type { Theme } from "../../store/theme-slice";
import ColorChangeLabel from "./components/ColorChangeLabel";
import SimpleColorPicker, { type Color } from "./components/SimpleColorPicker";

export default function Settings() {
  const context = useTheme();
  const { t } = useTranslation();
  const { language, updateLanguage } = useLanguage();
  const [color, setColor] = useState({ r: 50, g: 100, b: 150 });
  const [innerElementHover, setInnerElementHover] = useState(false);
  const [focusedElement, setFocusedElement] = useState(["", ""]);
  const [elementColors, setElementColors] = useState<Theme>(context.theme);

  useEffect(() => {
    console.log(elementColors);
  }, [elementColors]);

  const chartData = {
    labels: ["Sample 1", "Sample 2", "Sample 3"],
    datasets: [
      {
        label: "Test",
        data: [10, 20, 30],
        backgroundColor: [
          context.defaultTheme.primary,
          context.defaultTheme.secondary,
          context.defaultTheme.tertiary,
        ],
        hoverOffset: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 18,
          },
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
    },
  };

  const handleSave = () => {
    console.log("Saved", elementColors);
    context.updateAllColors({ ...elementColors });
  };

  return (
    <div
      className={`min-h-screen bg-primary transition-colors duration-500 p-6 md:p-10 font-sans`}
    >
      <div className="max-w-3xl">
        <div>
          <h1
            className={`text-2xl font-semibold tracking-tight text-denary transition-colors duration-300 m-2`}
          >
            {t("settings")}
          </h1>
        </div>
        <div
          className={`rounded-2xl border border-quaternary bg-secondary transition-colors duration-300 divide-y`}
        >
          <div className="flex flex-row justify-between p-2">
            <div
              className={`h-full w-full flex flex-col p-5 shadow-[4px_4px_8px_#00000040] text-denary font-['Roboto'] rounded-lg overflow-hidden cursor-pointer 
            transition-transform duration-200 hover:-translate-y-0.5 group`}
              style={{
                backgroundColor: elementColors.quaternary,
              }}
              onClick={() => {
                if (!innerElementHover) {
                  setFocusedElement(["Quaternary", "quaternary"]);
                }
              }}
            >
              <div className="flex flex-col items-center flex-grow">
                <div className="flex flex-row justify-between items-center text-2xl w-full">
                  <ColorChangeLabel
                    onHovered={setInnerElementHover}
                    onClick={setFocusedElement}
                    elementName="Primary"
                    styleName="primary"
                    text="Title"
                    color={elementColors.primary}
                  />
                  <ColorChangeLabel
                    onHovered={setInnerElementHover}
                    onClick={setFocusedElement}
                    elementName="Secondary"
                    styleName="secondary"
                    text="Button"
                    color={elementColors.secondary}
                  />
                </div>
                <ColorChangeLabel
                  onHovered={setInnerElementHover}
                  onClick={setFocusedElement}
                  elementName="Tertiary"
                  styleName="tertiary"
                  text="Total"
                  faded
                  styles="w-min self-start text-2xl"
                  color={elementColors.tertiary}
                />
                <ColorChangeLabel
                  onHovered={setInnerElementHover}
                  onClick={setFocusedElement}
                  elementName="Quinary"
                  styleName="quinary"
                  text="Value"
                  styles="w-min self-start text-[32px] overflow-hidden text-ellipsis"
                  color={elementColors.quinary}
                />
                <div className="flex w-full justify-center">
                  {/* @ts-expect-error | Typescript complaining about some missing types, but adding it makes the code look overly complicated */}
                  <Doughnut data={chartData} options={chartOptions} />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              <label className="font-semibold">{focusedElement[0]}</label>
              <SimpleColorPicker
                color={
                  focusedElement[1]
                    ? elementColors[focusedElement[1] as keyof Theme]
                    : color
                }
                onChangeRGB={(rgb: Color, hex: string) => {
                  setColor(rgb);
                  setElementColors((prev) => {
                    prev[focusedElement[1] as keyof Theme] = hex;
                    return prev;
                  });
                }}
              />
              <button
                onClick={() => {
                  setElementColors(context.defaultTheme);
                }}
                className="rounded-md bg-neutral-700 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-600 active:bg-neutral-800"
              >
                Set to Default
              </button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <label>Language:</label>
              <div
                className="rounded py-1"
                style={{
                  backgroundColor:
                    language === "de" ? context.theme.primary : "",
                }}
              >
                <DEFlag
                  width={50}
                  height={25}
                  onClick={() => {
                    updateLanguage("de");
                  }}
                />
              </div>
              <div
                className="rounded py-1"
                style={{
                  backgroundColor:
                    language === "en" ? context.theme.primary : "",
                }}
              >
                <ENFlag
                  width={50}
                  height={25}
                  onClick={() => {
                    updateLanguage("en");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-tertiary px-4 py-2 rounded-xl m-2"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}
