# all-you-can-dream

**🌐 https://jason8745.github.io/all-you-can-dream/**

一個收集 LLM 概念 POC 的地方。每個 Demo 都是用 [Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs) 設計出來的互動式 HTML — 一個想法、一個頁面、一個可以直接跑的原型。

---

## 這裡是什麼

有時候你腦中冒出一個關於 AI 的想法，但還沒到要開專案、搭環境、寫後端的程度。  
這個 Repo 就是為了接住這些想法的。

用 Claude 把概念設計成一個可以互動的 HTML，丟進來。  
也許有人看了會得到靈感，也許有人看了會想一起做。

**這裡適合你如果你想：**
- 把腦中的 LLM 概念快速變成可以 Demo 的東西
- 找一些有趣的 AI 互動原型來激發靈感
- 展示自己的創意，讓想法被看見
- 找志同道合的人一起把 POC 做成真正的 Side Project

---

## Demo 列表

| # | Demo | 分類 | 作者 |
|---|------|------|------|
| 001 | [Customer Wish Well](https://jason8745.github.io/all-you-can-dream/agent-planner/Customer%20Wish%20Well%20_offline_.html) | AGENTS | @jason8745 |

---

## 加入你的 Demo

你只需要一個用 Claude 設計出來的 HTML 檔案。

### 用 Claude Code（推薦）

clone 這個 Repo 之後，在專案目錄開啟 Claude Code，執行：

```
/add-demo
```

Claude 會引導你完成所有步驟 — 建資料夾、填寫 meta.json、更新清單、PR 前檢查、commit。不需要手動處理任何細節。

> Skill 檔案在 `.claude/skills/add-demo.md`，Claude Code 在這個 Repo 目錄下會自動載入。

### 手動步驟

1. Fork 這個 Repo
2. 建立一個新資料夾，名稱用短橫線命名（例如 `rag-visualizer`）
3. 把你的 HTML Demo 放進去
4. 在同一個資料夾建立 `meta.json`：

```json
{
  "title": "你的 Demo 名稱",
  "file": "your-demo.html",
  "description": "一到兩句話說明這個 Demo 在做什麼。",
  "date": "YYYY-MM-DD",
  "author": "你的 GitHub 帳號"
}
```

5. 在 `demos.json` 加上你的資料夾名稱（只需加一行）：

```json
[
  "agent-planner",
  "your-demo-name"
]
```

6. 開 PR，完成。

不需要動 `index.html`，它會自動讀取你的資料。

### 規則

- 一個 Demo 一個資料夾，HTML 盡量做到可以離線執行
- 不要在 HTML 裡硬寫 API Key
- 你的資料夾就是你的地盤，不要動別人的
- `demos.json` 只加，不要改動現有順序

---

## 交流與討論

**[Issues](https://github.com/jason8745/all-you-can-dream/issues) 是這裡最主要的互動場所。**

不管是有個想法還沒做成 Demo、看到某個 Demo 想延伸討論、想找人一起把 POC 做成真的 Side Project，都歡迎開 Issue。

| Issue 類型 | 適合時機 |
|---|---|
| 💡 新 Demo 提案 | 有個 LLM 概念想提出來，還沒做成 HTML |
| 🤝 找合作夥伴 | 想找人一起把想法做成真正的專案 |
| 💬 Demo 討論 | 對現有 Demo 有想法、問題或延伸思考 |
| 🌱 靈感交流 | 不限形式，就是想聊某個 AI 概念 |

### 用 Claude Code 開 Issue（推薦）

clone 這個 Repo 後，在專案目錄開啟 Claude Code，執行：

```
/open-issue
```

Claude 會一步一步引導你填寫，最後自動建立格式完整的 Issue。

---

## 怎麼做出一個 Demo

在 [Claude](https://claude.ai) 裡說清楚你的概念，讓它幫你設計並輸出一個完整的 HTML 檔案。  
存下來，放進來。就這樣。

---
