/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      color: {
        cyan: {
          0: "#ffffff",
          50: "#f7feff",
          100: "#defaff",
          200: "#b5f4ff",
          300: "#8aedff",
          400: "#57dff7",
          500: "#28d0ed",
          600: "#00bdde",
          700: "#0098b2",
          800: "#006f82",
          900: "#004854",
          950: "#00252b",
          1000: "#000000"
        },
        lime: {
          0: "#ffffff",
          50: "#f8fff2",
          100: "#e6ffd4",
          200: "#ccfca9",
          300: "#aef779",
          400: "#88f03e",
          500: "#6be016",
          600: "#58cf04",
          700: "#48ad00",
          800: "#347d00",
          900: "#225200",
          950: "#112900",
          1000: "#000000"
        },
        flatGray: {
          0: "#ffffff",
          25: "#f5f5f5",
          50: "#e4e4e4",
          100: "#d9d9d9",
          200: "#cfcfcf",
          300: "#adadad",
          400: "#9d9d9d",
          500: "#787878",
          600: "#5d5d5d",
          700: "#525252",
          800: "#363636",
          900: "#242424",
          950: "#131416",
          1000: "#000000"
        },
        orange: {
          0: "#ffffff",
          50: "#fffcf7",
          100: "#fef4e6",
          200: "#fee6c6",
          300: "#ffd49c",
          400: "#ffc06e",
          500: "#ff9200",
          600: "#d47800",
          700: "#d17600",
          800: "#9c5800",
          900: "#663a00",
          950: "#361e00",
          1000: "#000000"
        },
        red: {
          0: "#ffffff",
          50: "#fffafa",
          100: "#feecec",
          200: "#fed5d5",
          300: "#ffb5b5",
          400: "#ff8c8c",
          500: "#ff6363",
          600: "#ff4242",
          700: "#e52222",
          800: "#b00c0c",
          900: "#730303",
          950: "#3b0101",
          1000: "#000000"
        },
        blue: {
          0: "#ffffff",
          12: "#f7fbff",
          25: "#eaf2fe",
          50: "#cde1fe",
          75: "#b8d4ff",
          100: "#69a5ff",
          200: "#4f95ff",
          300: "#3385ff",
          400: "#1a75ff",
          500: "#0066ff",
          600: "#005eeb",
          700: "#0054d1",
          800: "#003e9c",
          900: "#002966",
          950: "#001536",
          1000: "#000000"
        },
        pink: {
          0: "#ffffff",
          50: "#fffafe",
          100: "#feecfb",
          200: "#fed3f7",
          300: "#ffb8f3",
          400: "#ff94ed",
          500: "#fa73e3",
          600: "#f553da",
          700: "#d331b8",
          800: "#a81690",
          900: "#730560",
          950: "#3d0133",
          1000: "#000000"
        },
        flatGreen: {
          0: "#f6fffc",
          50: "#e8fff6",
          100: "#d6ffef",
          200: "#bbffe4",
          300: "#8cface",
          400: "#48dba1",
          500: "#1eb87b",
          600: "#0ea267",
          700: "#059159",
          800: "#037246",
          900: "#015634",
          950: "#013822",
          1000: "#00120b"
        },
        violet: {
          0: "#ffffff",
          50: "#fbfaff",
          100: "#f0ecfe",
          200: "#dbd3fe",
          300: "#c0b0ff",
          400: "#9e86fc",
          500: "#7d5ef7",
          600: "#6541f2",
          700: "#4f29e5",
          800: "#3a16c9",
          900: "#23098f",
          950: "#11024d",
          1000: "#000000"
        },
        navy: {
          400: "#42547e",
          500: "#293b62",
          600: "#152343"
        },
        glassGreen: {
          0: "rgba(246, 255, 252, 0.7)",
          50: "rgba(232, 255, 246, 0.7)",
          100: "rgba(214, 255, 239, 0.7)",
          200: "rgba(187, 255, 228, 0.7)",
          300: "rgba(140, 250, 206, 0.7)",
          400: "rgba(72, 219, 161, 0.7)",
          500: "rgba(30, 184, 123, 0.7)",
          600: "rgba(14, 162, 103, 0.7)",
          700: "rgba(5, 145, 89, 0.7)",
          800: "rgba(3, 114, 70, 0.7)",
          900: "rgba(1, 86, 52, 0.7)",
          950: "rgba(1, 56, 34, 0.7)",
          1000: "rgba(0, 18, 11, 0.7)"
        },
        glassGray: {
          0: "rgba(255, 255, 255, 0.7)",
          25: "rgba(245, 245, 245, 0.7)",
          50: "rgba(228, 228, 228, 0.7)",
          100: "rgba(217, 217, 217, 0.7)",
          200: "rgba(207, 207, 207, 0.7)",
          300: "rgba(173, 173, 173, 0.7)",
          400: "rgba(157, 157, 157, 0.7)",
          500: "rgba(120, 120, 120, 0.7)",
          600: "rgba(93, 93, 93, 0.7)",
          700: "rgba(82, 82, 82, 0.7)",
          800: "rgba(54, 54, 54, 0.7)",
          900: "rgba(36, 36, 36, 0.7)",
          950: "rgba(19, 20, 22, 0.7)",
          1000: "rgba(0, 0, 0, 0.7)"
        },
        gray: {
          0: "#ffffff"
        },
        green: {
          500: "#1eb87b"
        }
      },
      value: {
        50: 2,
        100: 4,
        150: 6,
        200: 8,
        250: 10,
        300: 12,
        350: 14,
        400: 16,
        450: 18,
        500: 20,
        550: 22,
        600: 24,
        650: 26,
        700: 28,
        750: 30,
        800: 32,
        900: 36,
        1000: 40,
        1200: 48,
        1400: 56,
        1600: 64,
        1800: 72,
        2000: 80,
        2400: 96,
        2500: 100,
        3000: 120,
        4000: 160,
        6000: 240,
        8000: 320
      },
      baseColor: "#ffffff",
      fill: {
        neutral: {
          strong: {
            focused: "#f5f5f5",
            hover: "#f5f5f5",
            pressed: "#e4e4e4",
            default: "#f5f5f5",
            enteredSelected: "#f5f5f5",
            disabled: "#d9d9d9"
          },
          normal: {
            default: "#ffffff",
            focused: "#ffffff",
            pressed: "#f5f5f5",
            hover: "#ffffff",
            enteredSelected: "#ffffff",
            disabled: "#e4e4e4"
          }
        },
        brand: {
          subtle: {
            enteredSelected: "#f7fbff",
            focused: "#eaf2fe",
            hover: "#eaf2fe",
            default: "#f7fbff",
            disabled: "#eaf2fe",
            pressed: "#cde1fe"
          },
          normal: {
            pressed: "#0054d1",
            hover: "#005eeb",
            default: "#1a75ff",
            enteredSelected: "#3385ff",
            focused: "#005eeb",
            disabled: "#cde1fe"
          }
        },
        layout: {
          disabled: "#d9d9d9",
          pressed: "#e4e4e4",
          enteredSelected: "#ffffff",
          focused: "#ffffff",
          hover: "#f5f5f5",
          default: "#ffffff"
        },
        neutralInversed: {
          normal: {
            enteredSelected: "#525252",
            hover: "#d9d9d9",
            preesed: "#cfcfcf",
            disabled: "#e4e4e4",
            default: "#ffffff",
            focused: "#d9d9d9"
          }
        }
      },
      fg: {
        layout: {
          body: {
            hover: "#5d5d5d",
            default: "#787878",
            pressed: "#787878",
            focused: "#5d5d5d",
            enteredSelected: "#525252",
            disabled: "#cfcfcf"
          },
          header: {
            disabled: "#9d9d9d",
            pressed: "#363636",
            focused: "#000000",
            hover: "#000000",
            enteredSelected: "#000000",
            default: "#363636"
          }
        },
        neutralInversed: {
          normal: {
            disabled: "#cfcfcf",
            pressed: "#9d9d9d",
            hover: "#5d5d5d",
            default: "#9d9d9d",
            focused: "#5d5d5d",
            enteredSelected: "#ffffff"
          },
          strong: {
            default: "#f5f5f5"
          }
        },
        neutral: {
          normal: {
            placeholder: "#9d9d9d",
            focused: "#000000",
            hover: "#000000",
            disabled: "#9d9d9d",
            default: "#5d5d5d",
            preesed: "#9d9d9d",
            enteredSelected: "#000000"
          },
          strong: {
            preesed: "#9d9d9d",
            enteredSelected: "#000000",
            default: "#5d5d5d",
            placeholder: "#adadad",
            disabled: "#9d9d9d",
            focused: "#000000",
            hover: "#000000"
          }
        },
        brand: {
          subtle: {
            pressed: "#69a5ff",
            enteredSelected: "#0066ff",
            default: "#0066ff",
            focused: "#0054d1",
            hover: "#0054d1",
            disabled: "#b8d4ff"
          },
          normal: {
            disabled: "#69a5ff",
            enteredSelected: "#ffffff",
            focused: "#ffffff",
            hover: "#ffffff",
            default: "#1eb87b",
            pressed: "#b8d4ff"
          }
        }
      },
      border: {
        neutral: {
          normal: {
            focused: "#adadad",
            enteredSelected: "#9d9d9d",
            hover: "#adadad",
            pressed: "#cfcfcf",
            disabled: "#cfcfcf",
            default: "#cfcfcf"
          },
          strong: {
            pressed: "#b8d4ff",
            enteredSelected: "#69a5ff",
            disabled: "#cfcfcf",
            focused: "#69a5ff",
            hover: "#b8d4ff",
            default: "#cfcfcf"
          }
        },
        divider: {
          default: "#d9d9d9"
        },
        brand: {
          subtle: {
            pressed: "#69a5ff",
            hover: "#b8d4ff",
            focused: "#b8d4ff",
            default: "#cde1fe",
            disabled: "#cde1fe",
            enteredSelected: "#69a5ff"
          }
        }
      },
      bg: {
        lnb: "#001536",
        none: {
          400: "#42547e",
          500: "#293b62",
          600: "#152343"
        },
        navigation: "#ffffff",
        content: "#ffffff"
      },
      system: {
        success: "#1eb87b",
        warning: "#ff4242"
      },
      spacing: {
        padding: {
      "padding_400": 16,
      "padding_300": 12,
      "padding_200": 8,
      "padding_250": 10,
      "padding_350": 14,
      "padding_650": 26,
      "padding_150": 6,
      "padding_2000": 80,
      "padding_450": 18,
      "padding_100": 4,
      "padding_1000": 40,
      "padding_900": 36,
      "padding_800": 32,
      "padding_1600": 64,
      "padding_500": 20,
      "padding_1200": 48,
      "padding_750": 30,
      "padding_700": 28,
      "padding_600": 24,
      "padding_50": 2
        },
        gap: {
      "gap_6000": 240,
      "gap_4000": 160,
      "gap_2400": 96,
      "gap_1000": 40,
      "gap_2500": 100,
      "gap_800": 32,
      "gap_450": 18,
      "gap_350": 14,
      "gap_700": 28,
      "gap_400": 16,
      "gap_150": 6,
      "gap_900": 36,
      "gap_600": 24,
      "gap_1200": 48,
      "gap_8000": 320,
      "gap_1600": 64,
      "gap_500": 20,
      "gap_2000": 80,
      "gap_200": 8,
      "gap_50": 2,
      "gap_100": 4,
      "gap_3000": 120,
      "gap_300": 12
        }
      },
      fontSize: {
    "fontsize_900": 36,
    "fontsize_500": 20,
    "fontsize_600": 24,
    "fontsize_450": 18,
    "fontsize_400": 16,
    "fontsize_1000": 40,
    "fontsize_300": 12,
    "fontsize_700": 28,
    "fontsize_350": 14,
    "fontsize_250": 10,
    "fontsize_1400": 56,
    "fontsize_800": 32
      },
      radius: {
    "radius_500": 20,
    "radius_300": 12,
    "radius_2500": 100,
    "radius_200": 8,
    "cRadius_100": 4
      }
    },
  },
}