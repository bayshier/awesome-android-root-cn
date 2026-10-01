---
layout: doc
title: 贡献指南
description: "向 Awesome Android Root 合集贡献 root 应用、Magisk/KernelSU 模块和指南的完整指南，包含详细的格式规范。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/contributing
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: 参与 Awesome Android Root - 贡献指南
  - - meta
    - property: og:description
      content: 帮助壮大终极 Android root 资源合集。通过我们的全面指南了解如何贡献应用、Magisk 模块、root 指南等内容。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/contributing
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og.png
  - - meta
    - property: og:locale
      content: en_US
  - - meta
    - property: og:site_name
      content: Awesome Android Root
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:creator
      content: "@awsm_and_root"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
  - - meta
    - name: twitter:image:alt
      content: 贡献指南 - Awesome Android Root
  - - meta
    - name: twitter:title
      content: 参与 Awesome Android Root - 指南
  - - meta
    - name: twitter:description
      content: 帮助构建终极 Android root 资源合集。了解贡献指南与标准。
  - - meta
    - name: author
      content: Awesome Android Root 项目
  - - meta
    - property: article:author
      content: https://github.com/awesome-android-root/awesome-android-root
  - - meta
    - property: article:section
      content: 社区
  - - meta
    - property: article:tag
      content: 贡献
  - - meta
    - property: article:tag
      content: 开源
  - - meta
    - property: article:tag
      content: 社区准则
  - - meta
    - property: article:tag
      content: Android Root
  - - meta
    - property: article:tag
      content: Magisk 模块
  - - meta
    - property: article:tag
      content: Root 应用
  - - meta
    - property: article:published_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - property: article:modified_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - name: robots
      content: index, follow
---
# 贡献指南

感谢你为 **Awesome Android Root** 做出贡献！本指南帮助你向我们的 **650+ root 应用与模块**合集添加高质量条目。

## 快速开始

**想添加应用或模块？** 只需以下 3 个简单步骤：

### 1. Fork 并编辑
1. **Fork** 本仓库
2. **编辑**与应用/模块最匹配的分类页面（见[分类页面](#分类页面)）
3. **提交** pull request

> 合集位于 [`docs/apps-and-modules/`](https://github.com/awesome-android-root/awesome-android-root/tree/main/docs/apps-and-modules) -
> 每个主题一个 Markdown 文件。根目录的 `README.md` 只是一个轻量索引，并非数据库本体。

### 2. 使用正确的格式
```markdown
- **[App Name](link)** - Brief description of what it does. `FOSS` `[M]`
```

### 3. 遵守规则
- ✅ 应用需要 root 权限
- ✅ 仅接受有效链接
- ✅ 不接受重复条目
- ✅ 放置在正确的分类中（按字母顺序排列）

## 分类页面

每个条目只属于 `docs/apps-and-modules/` 中的**一个**主题页面。请将条目放入最能体现该工具*为用户实现的功能*的页面。

**不确定？** 在分类页面中查找类似的应用；如果你认为整个分类应当移动、合并或拆分，可以发起
[分类变更](https://github.com/awesome-android-root/awesome-android-root/issues/new?template=taxonomy-change.md)
issue。

## 条目格式

**模板：**
```markdown
- **[⭐ App Name](primary-link)** - Description of functionality. `FOSS/Proprietary` `[M]` `[K]` `[A]` `[LSP]` | [🌱](f-droid-link) | [▶️](play-store-link)
```

**必备要素：**
- **应用名称**：加粗并带链接
- **主链接**（最佳可用来源，优先级见下文）
- **描述**（1-2 句话，聚焦其功能）
- **许可证**（`FOSS` 或 `Proprietary`）
- **框架标签**（如适用）：`[M]` `[K]` `[A]` `[LSP]`
- **商店图标**（可选）：在主条目旁为 F-Droid 添加 `| [🌱](link)`，和/或为 Play Store 添加 `| [▶️](link)`

**链接优先级：**
1. GitHub → 2. F-Droid → 3. 官方网站 → 4. Play Store

**商店图标说明：**
| 图标 | 来源 |
|:---|:---|
| `🌱` | 可在 F-Droid / IzzyOnDroid 获取 |
| `▶️` | 可在 Google Play Store 获取 |

**示例：**
```markdown
- **⭐ [AdAway](https://github.com/AdAway/AdAway)** - Open-source ad blocker using the hosts file. Blocks ads without permissions. `FOSS` | [🌱](https://f-droid.org/packages/org.adaway)
- **[Zygisk Detach](https://github.com/j-hc/zygisk-detach)** - Detach apps from Play Store to prevent updates. `FOSS` `[M]`
- **[Magisk](https://github.com/topjohnwu/Magisk)** - Systemless root solution with module support. `FOSS`
- **[CorePatch](https://github.com/LSPosed/CorePatch)** - Disable signature verification for Android. `FOSS` `[LSP]`
- **[bindhosts](https://github.com/bindhosts/bindhosts)** - Systemless hosts for APatch, KernelSU and Magisk. `FOSS` `[M]` `[K]`
```

## 分类与标签

### 框架标签
- **`[M]`** = Magisk 模块（需要 [Magisk](./rooting-guides/magisk-guide.md)）
- **`[K]`** = KernelSU 模块（需要 [KernelSU](./rooting-guides/kernelsu-guide.md)）
- **`[A]`** = APatch 模块（需要 [APatch](./rooting-guides/apatch-guide.md)）
- **`[LSP]`** = LSPosed / Xposed 模块（需要 [LSPosed](./rooting-guides/lsposed-guide.md)）

### 许可证标签
- **`FOSS`** = 自由开源软件（提供源代码）
- **`Proprietary`** = 闭源软件或许可证不明确

### 特殊徽章
- **⭐** = 社区推荐（广受信任的应用）

### 商店与来源图标
- **`🌱`** = 可在 F-Droid / IzzyOnDroid 获取
- **`▶️`** = 可在 Google Play Store 获取


## 质量要求

**必须满足：**
- ✅ 应用的主要功能需要 root 权限
- ✅ 指向官方来源的有效链接
- ✅ 最近 18 个月内有更新
- ✅ 无重复条目
- ✅ 分类位置正确（按字母顺序排列）
- ✅ 格式和标签正确

**不要收录：**
- ❌ 失效/停更的应用
- ❌ 恶意软件或可疑应用
- ❌ 非 root 应用（特定分类除外）
- ❌ 推广宣传性语言

## Pull Request 模板

访问 [Pull Request 模板 ↗](https://github.com/awesome-android-root/awesome-android-root/blob/main/.github/PULL_REQUEST_TEMPLATE.md)

## 需要帮助？

**常见问题：**
- **我的应用应该放在哪里？** 在[分类页面](#分类页面)中查找类似的应用
- **既是 FOSS 又带模块怎么办？** 使用多个标签：`FOSS` `[M]` `[K]` `[LSP]`
- **可以添加 F-Droid 或 Play Store 链接吗？** 可以！在描述后添加商店图标：`| [🌱](f-droid-link) | [▶️](play-store-link)`
- **应用无需 root 也能运行？** 如果主要功能需要 root，就收录它
- **不确定标签？** 参考类似应用的示例
- **应用支持多个框架怎么办？** 列出所有适用的标签：`[M]` `[K]` `[A]`

**获取支持：**
- 🐛 **[Issues](https://github.com/awesome-android-root/awesome-android-root/issues)：** 用于报告 bug 或提问
- 💬 **[Discussions](https://github.com/awesome-android-root/awesome-android-root/discussions)：** 用于获取一般性帮助
- 📝 **PR 评论：** 用于具体反馈

---

**质量重于数量！** 一个精心打磨的条目胜过多个仓促完成的条目。感谢你的贡献！
