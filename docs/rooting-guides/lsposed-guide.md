---
layout: doc
title: LSPosed 框架完整指南
description: "掌握 LSPosed 框架——现代 Xposed 实现。包含模块管理与个性化的完整安装指南。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/lsposed-guide
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: LSPosed 框架完整指南 - 现代 Xposed 实现
  - - meta
    - property: og:description
      content: 通过我们的完整指南安装 LSPosed 框架。集成 Zygisk 的现代 Xposed 实现，支持高级模块管理。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/lsposed-guide
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/lsposed-guide.png
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
    - name: twitter:title
      content: LSPosed 框架完整指南
  - - meta
    - name: twitter:description
      content: 基于 LSPosed 的现代 Xposed 框架实现。高级 Android 个性化与模块管理。
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/lsposed-guide.png
  - - meta
    - name: twitter:image:alt
      content: LSPosed 框架安装指南
  - - meta
    - name: author
      content: Awesome Android Root Project
  - - meta
    - property: article:author
      content: https://github.com/awesome-android-root/awesome-android-root
  - - meta
    - property: article:section
      content: Android 个性化
  - - meta
    - property: article:tag
      content: LSPosed
  - - meta
    - property: article:tag
      content: Xposed 框架
  - - meta
    - property: article:tag
      content: Android 个性化
  - - meta
    - property: article:tag
      content: Zygisk
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

# LSPosed / Vector 框架完整指南

面向 Android 8.1 及以上版本的现代 Xposed 实现。本指南同时覆盖原始 LSPosed 项目（现通过 Telegram 以闭源构建分发）和完全开源的 **Vector** 分支，帮助你就设备上信任哪个框架做出知情选择。

> [!WARNING]
> **透明度提示：** 原始 LSPosed GitHub 仓库（[LSPosed/LSPosed](https://github.com/LSPosed/LSPosed)）自 2024 年 1 月起已被**归档**，且自 2023 年 10 月以来没有公开发布。当前的"官方"构建仅通过 LSPosed Telegram 频道和 **[lsposed.zip](https://lsposed.zip/)** 以**闭源**二进制形式分发。这违反了原始代码所采用的 GPLv3 许可证。用户应了解这场[持续进行的争议](https://exposelsposed.pages.dev/)并做出知情决定。
>
> 完全开源的 **[Vector](https://github.com/JingMatrix/Vector)** 分支（GPLv3）仍在积极维护，开发过程透明，其稳定版已支持 libxposed API 101 和 102。

---

## 核心资源

- **[Vector（JingMatrix 分支）](https://github.com/JingMatrix/Vector)** - 完全开源（GPLv3），积极维护 - **推荐**
- **[lsposed.zip](https://lsposed.zip/)** - 来自原始 LSPosed 团队的闭源构建（通过 [Telegram](https://t.me/LSPosed) 分发）
- [Magisk 指南](./magisk-guide.md) - 必备的 root 方案，需支持 Zygisk
- [KernelSU 指南](./kernelsu-guide.md) - 基于内核的替代 root 方案
- [Root 应用合集](../apps-and-modules/index.md) - 热门 LSPosed/Vector 模块目录

---

## 选择你的版本

目前该框架有两个主要来源。选择哪一个需要在开源透明度、API 兼容性和稳定性之间权衡。

| 特性 | Vector（JingMatrix 分支） | "官方" LSPosed（lsposed.zip） |
|---------|--------------------------|-----------------------------------|
| **主要 URL** | [JingMatrix/Vector](https://github.com/JingMatrix/Vector) | **[lsposed.zip](https://lsposed.zip/)** |
| **开源** | ✅ 完全开源（GPLv3） | ❌ 闭源（违反 GPL） |
| **源码可用** | [是 - 公开仓库](https://github.com/JingMatrix/Vector) | 否 - 仅通过 Telegram 分发 |
| **稳定版 API** | API 102 (v2.2) | API 101 |
| **Canary/CI API** | 跟随 master，领先于最新稳定版 | 不适用 |
| **活跃开发** | ✅ 活跃（提交、issue、PR） | ⚠️ 仅限 Telegram，无公开跟踪器 |
| **Android 支持** | 8.1+ | 8.1+ |
| **检测隐藏** | 标准 | 增强（ACE、Banks 等） |
| **信任与透明度** | ✅ 代码公开，社区可审计 | ⚠️ [争议](https://exposelsposed.pages.dev/)、[beta 版曾含恶意软件](https://xdaforums.com/t/security-analysis-of-the-lsposed-beta-version.4750843/) |

> [!NOTE]
> **关于 lsposed.zip：** 该域名由原始 LSPosed 团队运营。构建通过其[官方 Telegram 频道](https://t.me/LSPosed)分发，且为**闭源**——意味着代码无法被独立审计。位于 [LSPosed/LSPosed](https://github.com/LSPosed/LSPosed) 的原始 LSPosed GitHub 仓库已归档，不再反映这些构建。

### 我该用哪个？
- **选择 Vector**，如果你看重开源透明度，希望代码可公开审计，并偏好一个拥有活跃公开开发流程的项目。Vector 的稳定版支持 API 100、101 和 102。
- **选择官方 LSPosed（lsposed.zip）**，如果你能接受闭源二进制。LSPosed 稳定版支持 API 100 和 101。

---

## 背景：LSPosed 生态

### 什么是 LSPosed？

LSPosed 是一个 Zygisk 模块，提供与原版 Xposed 保持 API 一致的 ART hook 框架。它允许模块在内存中修改系统和应用行为，而不触碰系统分区。原始项目曾以开源（GPLv3）形式在 [GitHub](https://github.com/LSPosed/LSPosed) 上开发，但在核心开发者宣布停止维护后，该仓库于 **2024 年 1 月被归档**。

归档之后，原始团队继续通过其 Telegram 频道和 `lsposed.zip` 分发闭源构建。这些构建无法被独立审计，其闭源分发形式违反了 GPLv3 许可证。

### 什么是 Vector？

[Vector](https://github.com/JingMatrix/Vector) 是 LSPosed 的完全开源（GPLv3）分支，由 [JingMatrix](https://github.com/JingMatrix) 和 [84+ 位贡献者](https://github.com/JingMatrix/Vector/graphs/contributors)维护。它提供相同的 ART hook 框架，拥有活跃的公开开发、issue 跟踪和社区贡献。Vector v2.2（稳定版）实现了 API 102，而 v2.1 引入了 API 101。

### 主要特性

**Vector（开源 - 推荐）**
- **完全透明：** 所有源码公开，任何人皆可审计。
- **活跃开发：** 定期提交、社区 issue 跟踪、pull request。
- **API 102：** 稳定版已支持 API 101 和 102。
- **广泛兼容：** 支持 Android 8.1 直至最新 Android 版本。
- **Java 转 Kotlin 重构：** 持续推进现代化以提升可维护性。

**"官方" LSPosed（lsposed.zip - 闭源）**
- **API 101 稳定：** 稳定支持最新的 libxposed API 标准。
- **更好的检测隐藏：** 增强了对银行应用和完整性检查的隐藏能力（ACE、GoTyme 等）。
- **闭源：** 代码不公开；构建无法审计。
- **支持 KernelSU：** 与 KernelSU 和 Zygisk Next 兼容。

<br>
<details><summary>技术细节：API 100 vs 101 vs 102</summary>

### API 102（当前标准）
生态正在向 API 102 迁移。越来越多新模块面向 API 102 开发，使其成为面向未来兼容性的推荐目标。停留在 API 100 的用户可能无法使用较新的模块。Vector v2.2（稳定版）现已支持该 API。

### API 101（上一代标准）
与 API 82/100 相比，libxposed API 101 包含重大变化。它旨在获得更好的性能以及与现代 Android 内部机制的兼容性。lsposed.zip（稳定版）和 Vector v2.1（稳定版）现在都支持该 API。

### API 100（旧版）
Vector 分支的 2.0 版本最终完成了 API 100 的实现。如果某个模块明确要求 API 100 且在 API 101 上无法运行，推荐使用稳定的 Vector v2.0。

</details>

---

## 前提条件

### 强制要求

> [!IMPORTANT]
> 若不满足这些要求，LSPosed 将**无法**工作。在全部满足之前请勿继续。

**root 权限**
- Magisk 26+ 且已启用 Zygisk
- KernelSU（及其分支）配合 Zygisk Next/NeoZygisk

**Android 版本**
- 最低 Android 8.1（Oreo），直至最新 Android 版本

## 设备兼容性

- ✅ **支持：** Pixel、Nexus、OnePlus、Samsung（官方 OneUI）、基于 AOSP 的 ROM
- ⚠️ **有限支持：** MIUI/HyperOS（部分版本存在已知崩溃 - 见故障排除）、EMUI
- ❌ **不支持：** Android Go、Fire OS

### ROM 兼容性

| ROM 类型 | 兼容性 | 备注 |
|----------|--------------|-------|
| 官方 Android（Google） | 极佳 | 兼容性最好 |
| 基于 AOSP 的 ROM | 极佳 | LineageOS、PixelOS 等 |
| OneUI（Samsung） | 良好 | 可与 Magisk + Zygisk 配合使用 |
| OxygenOS（OnePlus） | 良好 | ColorOS 底层同样可用 |
| MIUI/HyperOS（Xiaomi） | 一般 | 部分 HyperOS 2.x 版本存在已知崩溃 |
| Nothing OS | 良好 | 兼容性不断提升 |
| 第三方 GSI | 因设备而异 | 取决于具体实现 |
| GrapheneOS | 现已支持* | *通过 Zygisk Next/NeoZygisk 稳定版 |
| CalyxOS | 良好 | 可与 microG 配合使用 |

> **GrapheneOS 说明：** Zygisk Next/NeoZygisk 稳定版已加入对 GrapheneOS 的支持。GrapheneOS 用户应使用 Zygisk Next/NeoZygisk 作为其 Zygisk 提供者。

---

## 安装指南

---

### 方法一：通过 Magisk Manager 安装（推荐）

**最适合**：大多数用户，最简单的方法

#### 步骤 1：启用 Zygisk

1. 打开 **Magisk Manager** 应用
2. 点击**齿轮图标**（设置）
3. 找到 **"Zygisk"** 并打开开关
4. 在提示时点击**"重启"**
5. 等待设备重启（1–2 分钟）

#### 步骤 2：下载框架

**选项 A：Vector（开源 - 推荐）**
1. 访问 GitHub 上的 [Vector Releases](https://github.com/JingMatrix/Vector/releases)。
2. 下载最新的**稳定版 ZIP**（v2.2，API 102）或 **CI 构建**（以预发布形式分发）。

**选项 B：官方 LSPosed（闭源）**
1. 访问 **[lsposed.zip](https://lsposed.zip/)** 或 [官方 Telegram](https://t.me/LSPosed)。
2. 下载最新的 **Zygisk 版本 ZIP**。

#### 步骤 3：安装模块

1. 打开 **Magisk Manager** > **模块**标签页
2. 点击**"从存储安装"**
3. 选择下载好的 ZIP
4. 等待安装完成后点击**"重启"**。

#### 步骤 4：打开管理器

重启后，寻找 LSPosed 通知或应用图标。
- 如果没有看到，在拨号盘输入 `*#*#5776733#*#*`（`*#*#LSPosed#*#*`）打开管理器。
- 新版本还在状态栏通知中提供了"操作按钮"。

---

### 方法二：KernelSU 安装

> [!WARNING]
> KernelSU 需要先安装 **Zygisk Next** 或 **NeoZygisk**，LSPosed/Vector 才能运行。

1. 安装 KernelSU 和管理器应用。
2. 通过 KernelSU 管理器 > 模块安装 **Zygisk Next**。
3. 重启。
4. 从你选择的来源下载 ZIP：
   - **Vector：** [GitHub Releases](https://github.com/JingMatrix/Vector/releases)（开源）
   - **lsposed.zip：** [lsposed.zip](https://lsposed.zip/)（闭源）
5. 通过 KernelSU 管理器 > 模块 > 从存储安装。
6. 重启并从通知打开管理器。

---

## 模块管理

### API 兼容性检查

> [!IMPORTANT]
> - **API 102 模块：** 需要 Vector v2.2+（稳定版）。
> - **API 101 模块：** 兼容 Vector v2.1+ 或 lsposed.zip。
> - **API 100 模块：** 兼容 Vector v2.0（稳定版），部分模块可通过旧版支持在 lsposed.zip 上运行。若要求严格的 API 100 兼容，Vector v2.0 是基线。

### 如何启用模块

1. 安装模块 APK（通过文件管理器或 ADB）。
2. 打开 **LSPosed 管理器**。
3. 进入**模块**标签页。
4. 点击该模块并打开**"启用"**开关。
5. **选择作用域：** 勾选你希望该模块修改的应用。
   - *注意：* 对于系统级调整，可能需要勾选 "System Framework（系统框架）"。
6. **重启**（部分模块需要重启，另一些立即生效）。

---

## 故障排除

### "API 版本过新/过旧"
- 如果模块要求 API 102，请使用 Vector v2.2（稳定版）。
- 如果模块要求 API 101，请使用 `lsposed.zip` 或 Vector v2.1（两者均为稳定版）
- 如果模块非常老旧、只支持 API 82/100 且在 API 101/102 上无法运行，请尝试 Vector v2.0 稳定版。

### 检测问题（银行应用）
闭源的 lsposed.zip 构建在隐藏自身方面成功率更高。如果仍然遇到问题：
1. 确保银行应用**不在**任何模块的作用域内。
2. 使用 **Shamiko**（闭源，来自 LSPosed 团队）或开源替代品 **[Zygisk Assistant](https://xdaforums.com/t/module-zygisk-assistant-foss-root-hider.4664761/)**。
3. 在 LSPosed/Vector 设置中关闭 "Verbose Logs（详细日志）"。

### 安装问题

<details><summary>点击展开</summary>

#### 安装后管理器未出现

**症状：** 模块已在 Magisk 中安装，但没有出现通知。

```bash
# 检查模块是否已安装
adb shell su -c "ls /data/adb/modules/ | grep lsposed"

# 检查 Zygisk 状态
adb shell su -c "magisk --status | grep Zygisk"
```

**解决方案：**

1. **确认 Zygisk：** Magisk 设置 > Zygisk > 启用 > 重启
2. **拨号代码：** 打开拨号盘输入 `*#*#5776733#*#*`
3. **重装模块：** 移除 > 重启 > 重装 > 重启
4. **清除 Magisk 缓存：**
   ```bash
   adb shell su -c "rm -rf /data/adb/magisk/*cache*"
   adb reboot
   ```

#### 管理器无法打开

```bash
# 强制停止管理器
adb shell am force-stop org.lsposed.manager

# 清除缓存
adb shell pm clear org.lsposed.manager
```

</details>

---

### 系统稳定性与无限重启

<details><summary>点击展开</summary>

#### 启用模块后无限重启

> [!DANGER]
> 无限重启需要立即处理，以防止数据丢失或设备长时间无法使用。

**紧急恢复：**

**步骤 1：进入 Recovery 或安全模式**
- 长按电源键 10 秒以上强制关机
- 进入 Recovery 或安全模式（通常在开机时按住音量下键）

**步骤 2：禁用模块**

*方法 A - 通过 Recovery 下的 ADB：*
```bash
adb devices

# 禁用所有 Magisk 模块
adb shell rm -rf /data/adb/modules/*/

# 或仅禁用 LSPosed
adb shell rm -rf /data/adb/modules/lsposed/

adb reboot
```

*方法 B - 通过文件管理器（Recovery）：*
进入 `/data/adb/modules/lsposed/` 并将该文件夹重命名为 `lsposed.disabled`。

</details>

---

### HyperOS / Xiaomi 专属问题

<details><summary>点击展开</summary>

#### 框架显示已激活但模块不工作

LSPosed 可能在管理器中显示"已激活"，但模块无法工作。这是某些 HyperOS 2.x（MTK）构建上的已知问题。

**解决方法：**
- 官方 LSPosed（API 101）包含针对现代 ROM 的多项修复。如果你还在使用旧分支，请升级到该版本。
- 尝试在 KernelSU 与 KernelSU Next 之间切换并搭配 NeoZygisk。

</details>

---

## 卸载

### 完全移除

#### 方法一：Magisk Manager（推荐）

1. Magisk Manager > **模块标签页**
2. 找到 **"LSPosed"** > 点击垃圾桶图标 > **移除**
3. 确认 > **重启**

#### 方法二：ADB

```bash
adb shell su -c "rm -rf /data/adb/modules/lsposed*"
adb shell su -c "rm -rf /data/adb/lspd"
adb shell su -c "rm -rf /data/misc/lspd"
adb reboot
```

---

| 版本 | 状态 | 最适合 |
|---------|--------|----------|
| **Vector（开源）** | **推荐** | 透明、代码可审计、开发活跃。稳定版支持 API 101 和 102。 |
| **lsposed.zip（闭源）** | 谨慎使用 | 稳定的 API 101，更好的检测隐藏。注意闭源风险。 |
| **LSPatch** | 无需 root | 在未 root 的设备上修改应用。 |

---

## 下一步

### 扩展你的配置

**掌握 LSPosed 之后：**
1. [第三方 ROM 安装](./custom-rom-installation.md) - 完整替换系统
2. [Magisk 模块指南](./magisk-guide.md) - 系统级修改
3. [KernelSU 指南](./kernelsu-guide.md) - 基于内核的替代 root 方案
4. [Root 应用合集](../apps-and-modules/index.md) - 300+ 经测试的应用和模块

### 保持关注

**关注开发动态**
- [Vector GitHub](https://github.com/JingMatrix/Vector) - 开源分支（积极维护）
- [lsposed.zip](https://lsposed.zip/) - 来自原始 LSPosed 团队的闭源构建
- [LSPosed Telegram](https://t.me/LSPosed) - 官方团队频道（闭源构建在此分发）
- [Expose LSPosed](https://exposelsposed.pages.dev/) - 社区记录的 GPL 违规与争议

**需要帮助？** 访问我们的[常见问题](../faqs.md)或[故障排除指南](../troubleshooting.md)。
