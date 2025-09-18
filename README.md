# Design Tokens CI/CD 파이프라인

이 저장소는 **Figma에서 관리하는 디자인 토큰을 코드로 변환**하고, 변환된 결과물을 **FE 리포지토리로 자동 동기화**하는 역할을 합니다.
`Style Dictionary` 기반으로 빌드하며, GitHub Actions가 PR을 자동으로 생성합니다.

> **Flow:** Figma → Style Dictionary → `src/tokens/build/tailwind.config.js` → FE 리포지토리 PR 자동 생성

## 무엇을 해결하나요?

- 디자이너가 Figma(Tokens)에서 수정 → 토큰을 자동 변환
- 변환 결과(`tailwind.config.js`)를 FE 리포지토리에 자동 PR
- FE/디자인 간 토큰 버전 및 적용 시점 일관성 보장

## 저장소 구조(예시)

```
│
├─ .github/
│  └─ workflows/
│     └─ sync-tokens-to-fe.yml    # FE 리포로 PR 자동 생성
│
├─ src/
│  └─ tokens/
│     ├─ build/                   # 빌드 산출물
│     │  ├─ build-tokens.json     # 전체 토큰 빌드 결과
│     │  └─ tailwind.config.js    # FE로 전달되는 최종 결과물
│     │
│     ├─ sd-core.json             # core 토큰
│     ├─ sd-dark.json             # 다크 모드 토큰
│     ├─ sd-light.json            # 라이트 모드 토큰
│     ├─ sd-theme.json            # 테마 토큰
│     ├─ tokens.json              # 통합 토큰
│     ├─ sd-tokens-config.js      # Style Dictionary 설정
│     ├─ tw-tokens-config.js      # Tailwind 변환 설정
│     └─ split-tokens.js          # 토큰 분리 스크립트
│
├─ package.json
├─ package-lock.json
└─ README.md
```

> 출력 파일은 `src/tokens/build/`에 생성되며, FE 리포지토리로 복사됩니다.

## 기술 스택

- [Style Dictionary](https://github.com/style-dictionary/style-dictionary) v5.0.4
- [@tokens-studio/sd-transforms](https://github.com/tokens-studio/sd-transforms) v2.0.1
- [sd-tailwindcss-transformer](https://github.com/nado1001/style-dictionary-tailwindcss-transformer) v2.1.0

## 변환 파이프라인

1. `src/tokens/tokens.json`: Figma(Tokens Studio)에서 Export된 원본
2. **Style Dictionary**: 플랫폼별/파일별로 토큰을 변환
3. **출력 결과**: `src/tokens/build/tailwind.config.js`
4. **검증**: CI에서 산출물 존재 여부 검사
5. **동기화**: FE 리포지토리로 PR 생성

## CI/CD (GitHub Actions)

GitHub Actions 워크플로: `.github/workflows/sync-tokens-to-fe.yml`

**트리거 조건**:

- `main` 브랜치에 push
- 다음 경로 변경이 있을 때만:
  - `src/tokens/tokens.json`
- 수동 실행: `workflow_dispatch`

**주요 작업**:

- Node.js 20 환경 설정
- 의존성 설치 (npm/yarn/pnpm 자동 감지)
- 토큰 빌드 (`npm run build:tokens`)
- 산출물(`tailwind.config.js`) 검증
- FE 리포 checkout → 산출물 복사
- 변경사항이 있으면 자동 PR 생성

**PR 정보**:

- 브랜치: `chore/update-design-tokens`
- 기본 브랜치: `develop`
- 라벨: `design-tokens`, `🤖 automated`

## 로컬 검증 (선택)

CI/CD 파이프라인 실행 전에 토큰 변환을 확인하고 싶다면:

```bash
npm run build:tokens
ls -l src/tokens/build/
```

체크리스트:

- 빌드 오류 없음
- `src/tokens/build/tailwind.config.js` 생성 확인
- FE 프로젝트 빌드 정상 동작 확인
