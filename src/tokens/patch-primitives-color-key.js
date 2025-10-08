// 단일 "Color" 토큰이 "color" 팔레트와 경로 충돌하는 문제를 방지
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, "sd-Primitive-Value.json");
const json = JSON.parse(fs.readFileSync(file, "utf-8"));

// 1) "Color"를 "BaseColor"로 이동 (원하면 삭제도 가능)
if (json["Color"] && typeof json["Color"] === "object" && "$value" in json["Color"]) {
  // 충돌 방지: 새 키로 이동
  json["BaseColor"] = json["Color"];
  delete json["Color"];
  console.log(`[patch] Moved "Color" -> "BaseColor" to avoid 'color' collision`);
}

// 안전 차원: "color"가 문자열이면(이미 충돌 발생한 상태) 객체로 교체
if (typeof json["color"] === "string") {
  console.log(`[patch] Found string at "color". Replacing with empty group to avoid transformer crash.`);
  json["color"] = {}; // 팔레트가 뒤에서 다시 채워짐
}

fs.writeFileSync(file, JSON.stringify(json, null, 2));
console.log("[patch] sd-Primitive-Value.json patched successfully");