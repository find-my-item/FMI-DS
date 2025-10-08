import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const primitiveFile = path.join(__dirname, "sd-Primitive-Value.json");
const aliasFile = path.join(__dirname, "sd-alias.generated.json");

// primitives 읽기
const primitives = JSON.parse(fs.readFileSync(primitiveFile, "utf-8"));

// 존재 여부 체크 헬퍼
const hasPath = (obj, pathStr) =>
  pathStr.split(".").every((k) => (obj = obj?.[k]) !== undefined);

// 우선순위 매핑 테이블 (원하는 팔레트로 교체)
// Green은 팀 의도에 맞게 Flat-Green 또는 Lime 중 택1
const PREFERRED = {
  "color.Gray.0": ["color.Flat-Gray.0"],
  "color.Green.500": ["color.Flat-Green.500", "color.Lime.500"],
};

// alias 객체 구성
const alias = { color: {} };

// 각 항목을 primitives에 실제 존재하는 경로로 매핑
for (const [from, candidates] of Object.entries(PREFERRED)) {
  const [root, k1, k2] = from.split("."); // "color","Gray","0"
  const target = candidates.find((cand) => hasPath(primitives, cand));
  if (!target) continue; // 후보가 전부 없으면 스킵

  alias[root] ??= {};
  alias[root][k1] ??= {};
  alias[root][k1][k2] = {
    $type: "color",
    $value: `{${target}}`,
  };
}

// 파일 쓰기
fs.writeFileSync(aliasFile, JSON.stringify(alias, null, 2));
console.log("[gen-alias] sd-alias.generated.json 생성 완료");