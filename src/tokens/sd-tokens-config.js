import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

register(StyleDictionary);

const sd = new StyleDictionary({
  source: [
    "src/tokens/sd-*.json",              // split 산출물 3개
    "src/tokens/sd-alias.generated.json" // ✅ 매 빌드마다 자동 생성
  ],
  log: { verbosity: 'verbose' }, // 누가 참조 깨졌는지까지 출력
  preprocessors: ["tokens-studio"],
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      transforms: ["name/kebab"], // 만들어질 token 이름 형태
      buildPath: "src/tokens/build/",
      files: [
        {
          destination: "build-tokens.json",
          format: "json",
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
