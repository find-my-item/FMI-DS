import * as fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 현재 파일의 절대 경로 가져오기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// tokens.json 파일 읽기 (절대 경로 사용)
const tokensPath = path.join(__dirname, "tokens.json");
const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf-8"));

// `$metadata.tokenSetOrder`에 정의된 토큰 세트 순서 가져오기
const tokenSets = tokens.$metadata?.tokenSetOrder ?? [];

// 각 토큰 세트에 대해 JSON 파일 생성
for (const set of tokenSets) {
  // tokenSetOrder의 키가 'comp'인 경우, 해당 키는 파일로 생성하지 않음
  // (Tokens Studio에서 비활성화했는데도 생성되는 이슈 방지)
  if (set === "comp") continue;
  if (!tokens[set]) continue;

  const data = JSON.stringify(tokens[set], null, 2);

  // 파일 이름으로 사용할 안전한 문자열 생성
  // "Primitive/Value" → "Primitive-Value" 형태로 변경
  const safeSet = set.replace(/[\/\\\s]+/g, "-");

  // 출력 경로 설정 (예: sd-Primitive-Value.json)
  const outputPath = path.join(__dirname, `sd-${safeSet}.json`);

  // 상위 디렉터리가 없을 경우 자동 생성
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  // JSON 파일 생성
  fs.writeFileSync(outputPath, data);
  console.log(`sd-${safeSet}.json 파일이 생성되었습니다.`);
}

console.log("JSON 파일 분리가 완료되었습니다.");