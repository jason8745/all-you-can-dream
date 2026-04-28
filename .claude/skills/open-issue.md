---
name: open-issue
description: 引導使用者在 all-you-can-dream 開一個格式完整的 GitHub Issue，包含想法提案、合作邀請、Demo 討論、靈感交流。
type: project
---

# Open Issue Skill

在 all-you-can-dream 開 Issue 的引導流程。一次問一個問題，最後用 gh CLI 建立 Issue。

## 標題格式

```
{emoji} [{issue類型}][{folder}] {描述}
```

- `{folder}` 是 Demo 的資料夾名稱（例如 `agent-planner`），作為穩定的唯一識別。不綁特定 Demo 的 Issue 可省略。
- 搜尋時輸入 `[agent-planner]` 即可過濾出所有相關 Issue。

## Step 1 — 選擇 Issue 類型

問使用者：

> 你想開哪種 Issue？
> - **A) 💡 新 Demo 提案** — 有個 LLM 概念想提出來，還沒做成 HTML
> - **B) 🤝 找合作夥伴** — 有個 Demo 或想法，想找人一起做成 Side Project
> - **C) 💬 Demo 討論** — 對現有某個 Demo 有想法、問題或延伸思考
> - **D) 🌱 靈感交流** — 不限形式，就是想聊某個 AI 概念

根據選擇，套用對應的 template（見下方）。

---

## Step 2 — 依類型收集資訊（一次一個問題）

### A) 💡 新 Demo 提案

依序問：
1. 這個概念叫什麼名字？（用來當 Issue 標題）
2. 用一到兩句話說明這個概念是什麼？
3. 你覺得 Demo 的互動方式大概是什麼？（例如：輸入文字 → 輸出結果、視覺化展示、多步驟流程...）
4. 你自己打算做，還是希望有人來接？

產出標題：`💡 [提案][{folder}] {名字}`（若無特定 folder 則省略 `[{folder}]`）

產出 body：
```markdown
## 概念說明

{一到兩句話}

## Demo 互動方式

{使用者描述}

## 狀態

{「我打算自己做」或「開放給有興趣的人接」}

---
> 用 `/open-issue` skill 建立 | all-you-can-dream
```

---

### B) 🤝 找合作夥伴

依序問：
1. 你想做什麼？（一句話描述專案或想法）
2. 你目前的進度？（純想法 / 有 Demo / 有部分實作）
3. 你在找什麼樣的人？（前端、後端、PM、設計、都可以...）
4. 合作方式偏好？（遠端非同步 / 定期 sync / 無所謂）
5. 聯絡方式或更多資訊？（可選，例如 Twitter/X、Email、Discord）

產出標題：`🤝 [合作][{folder}] {一句話描述}`（若無特定 folder 則省略 `[{folder}]`）

產出 body：
```markdown
## 想做什麼

{描述}

## 目前進度

{進度}

## 在找什麼樣的人

{描述}

## 合作方式

{偏好}

## 聯絡方式

{聯絡資訊，或「可以直接回覆這個 Issue」}

---
> 用 `/open-issue` skill 建立 | all-you-can-dream
```

---

### C) 💬 Demo 討論

依序問：
1. 你想討論哪個 Demo？（資料夾名稱或 Demo 標題）
2. 你想討論什麼？（有什麼想法、延伸、問題）
3. 你希望從這個討論得到什麼？（收集意見 / 找人一起改 / 純分享）

產出標題：`💬 [討論][{folder}] {短描述}`

產出 body：
```markdown
## 關於哪個 Demo

{Demo 名稱與連結（如果知道）}

## 想討論的內容

{詳細說明}

## 希望從這個討論得到什麼

{期望}

---
> 用 `/open-issue` skill 建立 | all-you-can-dream
```

---

### D) 🌱 靈感交流

依序問：
1. 你想聊什麼 AI 概念或主題？
2. 是什麼讓你想到這個？（觸發點、看到什麼、遇到什麼問題）
3. 你覺得這個概念最有趣的部分是什麼？

產出標題：`🌱 [靈感] {主題}`（靈感交流通常不綁特定 folder）

產出 body：
```markdown
## 主題

{概念或主題}

## 觸發點

{是什麼讓你想到這個}

## 最有趣的部分

{你覺得值得深挖的地方}

---
> 用 `/open-issue` skill 建立 | all-you-can-dream
```

---

## Step 3 — 確認後建立 Issue

整理好標題和 body 後，給使用者預覽，確認沒問題再執行：

```bash
gh issue create \
  --repo jason8745/all-you-can-dream \
  --title "{標題}" \
  --body "{body}"
```

建立完成後，回傳 Issue URL。
