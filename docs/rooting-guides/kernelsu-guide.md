---
layout: doc
title: "KernelSU Root 指南：安装、模块与故障排除"
description: "学习 KernelSU 安装、GKI 与 LKM 模式、KernelSU Next、模块、WebUI、应用配置文件以及受支持 Android 设备的故障排除。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/kernelsu-guide
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: "KernelSU Root 指南：安装、模块与故障排除"
  - - meta
    - property: og:description
      content: "学习 KernelSU 安装、GKI 与 LKM 模式、KernelSU Next、模块、WebUI、应用配置文件与故障排除。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/kernelsu-guide
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/kernelsu-guide.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: "KernelSU Root 指南：安装、模块与故障排除"
  - - meta
    - name: twitter:description
      content: KernelSU root 安装、GKI/LKM 模式、模块、WebUI 与应用配置文件管理。
  - - meta
    - name: author
      content: Awesome Android Root Project
  - - meta
    - property: article:author
      content: https://github.com/awesome-android-root/awesome-android-root
  - - meta
    - property: article:section
      content: Android Rooting
  - - meta
    - property: article:tag
      content: KernelSU
  - - meta
    - property: article:tag
      content: Kernel Root
  - - meta
    - property: article:tag
      content: Android Rooting
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: article:published_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - property: article:modified_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - property: article:tag
      content: KernelSU
  - - meta
    - property: article:tag
      content: KernelSU Next
  - - meta
    - property: article:tag
      content: Android Root
  - - meta
    - property: article:tag
      content: Kernel Root
  - - meta
    - property: article:tag
      content: GKI Kernel
  - - meta
    - property: article:tag
      content: Android Rooting
  - - meta
    - property: article:tag
      content: Root Management
  - - meta
    - property: article:tag
      content: Android Customization
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
      content: "KernelSU Root 指南 | Awesome Android Root"
  - - meta
    - name: twitter:description
      content: "学习 KernelSU 安装、GKI 与 LKM 模式、KernelSU Next、模块、WebUI、应用配置文件与故障排除。"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/kernelsu-guide.png
  - - meta
    - name: twitter:image:alt
      content: KernelSU Root 指南 - 完整安装教程
  - - link
    - rel: dns-prefetch
      href: https://github.com
  - - link
    - rel: dns-prefetch
      href: https://kernelsu.org
  - - link
    - rel: dns-prefetch
      href: https://kernelsu-next.github.io
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "@id": "https://awesome-android-root.zhoe.org/rooting-guides/kernelsu-guide#article",
        "headline": "KernelSU Root Guide: Installation, Modules & Troubleshooting",
        "description": "KernelSU installation, GKI and LKM modes, KernelSU Next, modules, WebUI, app profiles and troubleshooting.",
        "image": "https://awesome-android-root.zhoe.org/images/og/kernelsu-guide.png",
        "author": { "@id": "https://awesome-android-root.zhoe.org/#organization" },
        "publisher": { "@id": "https://awesome-android-root.zhoe.org/#organization" },
        "datePublished": "2025-01-12",
        "dateModified": "2026-09-13",
        "mainEntityOfPage": {
          "@id": "https://awesome-android-root.zhoe.org/rooting-guides/kernelsu-guide#webpage"
        },
        "articleSection": "Android Rooting Guides",
        "inLanguage": "en-US",
        "isAccessibleForFree": true
      }
---

# KernelSU Root 安装指南

KernelSU 是一种基于内核的 Android root 方案。本指南涵盖如何检查兼容性、选择 GKI 或 LKM 模式、安装 KernelSU 或 KernelSU Next、使用模块与应用配置文件，以及诊断常见故障。内核支持与正确的镜像因设备而异；不要仅仅因为 Android 版本匹配就刷入某个构建。

## 快速导航

- [什么是 KernelSU](#认识-kernelsu)
- [KernelSU 变体](#kernelsu-变体)
- [KernelSU WebUI](#kernelsu-webui-ksuwebui)
- [安装模式](#安装模式)
- [前置条件](#前置条件)
- [安装方法](#安装方法)
- [元模块与模块](#元模块与模块)
- [应用配置文件](#应用配置文件系统)
- [Root 隐藏与 Play Integrity](#root-隐藏与-play-integrity)
- [故障排除](#故障排除)

**相关指南：**
- [Root 主指南](./index.md) - Root 完整概览
- [解锁 Bootloader](./how-to-unlock-bootloader.md) - 必需的第一步
- [Root 方案对比](./root-framework-comparison.md) - 与 Magisk 和 APatch 的比较
- [常见问题](../faqs.md) - 常见问题解答

**KernelSU 主题链接：** [安装](#安装方法) · [模块](#元模块与模块) · [WebUI](#kernelsu-webui-ksuwebui) · [KernelSU Next](#kernelsu-变体) · [KernelSU 与 Magisk 对比](#kernelsu-与其他方案对比) · [故障排除](#故障排除)

---

## 认识 KernelSU

KernelSU 是一种运行在 Linux 内核层的基于内核的 root 方案，与用户空间 root 方案相比，它提供更强的安全性、更高级的应用权限控制以及更出色的检测规避能力。

### 核心特性

- **内核级集成** - 直接修改内核以增强安全性
- **高级应用配置文件** - 针对每个应用的细粒度 root 权限控制
- **元模块系统** - 用于 systemless 修改的可插拔模块基础设施
- **卓越的隐藏能力** - 比传统方法更好的检测规避
- **LKM 支持** - 可加载内核模块架构

### KernelSU 与其他方案对比

| 特性 | KernelSU | Magisk | APatch |
|---------|----------|---------|--------|
| 架构 | 基于内核 | 用户空间覆盖 | 基于内核 |
| Root 隐藏 | 优秀 | 良好 | 优秀 |
| 应用控制 | 高级配置文件 | 基础 | 基础 |
| 模块挂载 | 需要元模块 | 内置 | 内置 |
| 易用性 | 中等 | 简单 | 中等 |

**在以下情况下选择 KernelSU：**
- 你的设备是 Android 11 及以上
- 你想要最佳的 root 隐藏效果
- 你需要细粒度的应用控制
- 你使用银行/支付类应用（参见 [root 隐藏应用](../apps-and-modules/root-management#root-hiding-play-integrity)）
- 你偏好内核级安全

> [!TIP]
> 详细对比：[Root 方案对比](./root-framework-comparison.md)

---

## KernelSU 变体

KernelSU 生态已扩展到原创项目之外。不同变体满足不同需求：

| 变体 | 最适用于 | 主要特性 |
|---------|----------|-------------|
| **[Official KernelSU](https://github.com/tiann/KernelSU)** | 现代 GKI 2.0 设备 | 最稳定，以 LKM 模式为主，官方模块仓库 |
| **[KernelSU-Next](https://github.com/KernelSU-Next/KernelSU-Next)** | 更广泛的设备兼容性 | GKI+LKM，自动更新，现代 UI，模块备份/恢复 |
| **[SukiSU-Ultra](https://github.com/SukiSU-Ultra/SukiSU-Ultra)** | 老旧与非 GKI 设备 | 最广的内核兼容性，内置 SUSFS，支持 KPM |
| **[ReSukiSU](https://github.com/ReSukiSU/ReSukiSU)** | 多管理器环境 | SukiSU-Ultra 的分支，支持多管理器 |

**快速选择变体：**
- **Official KernelSU** - 稳定，面向现代 GKI 2.0 设备，在官方支持下拥有最大兼容性
- **KernelSU-Next** - 如果你想要自动更新、更广的内核适配范围和额外功能
- **Wild KSU / SukiSU-Ultra / ReSukiSU** - 当需要内置 SUSFS root 隐藏或 KPM 内核修补时

> [!TIP]
> 所有变体现在都将模块挂载委托给元模块。参见[元模块与模块](#元模块与模块)。

---

## KernelSU WebUI (ksuwebui)

KernelSU 模块可以提供一个小的 Web 界面，由 KernelSU Manager 在其内嵌 WebView 中打开。这是一种模块接口，而非独立的 root 方法：模块将其页面放在 `webroot/index.html`，并可以使用 KernelSU 的 JavaScript API 执行模块专属操作。模块作者必须说明是否支持 WebUI 以及需要哪个管理器版本。

- 安装 WebUI 模块前，请先阅读 [KernelSU 模块 WebUI 官方文档](https://kernelsu.org/guide/module-webui.html)。
- 请从兼容的 root 管理器中打开模块，而不要轻信任意的浏览器 URL；WebUI 页面可以执行有特权的模块操作。
- 如需可安装的示例，请使用 [KernelSU 模块仓库](https://modules.kernelsu.org/)，并审查模块的源码与权限。

## 安装模式

KernelSU 支持两种安装模式。**注意：** Official KernelSU 现在推荐 LKM 模式。社区分支（Next、SukiSU）仍在继续提供 GKI 构建。

### GKI 模式

**工作原理：** 用 KernelSU 修补过的通用内核镜像（GKI）替换设备原内核。

| 优点 | 缺点 |
|------|------|
| 兼容所有 GKI 设备 | 失去厂商内核优化 |
| 适用于 Samsung Knox 设备 | 需要手动 fastboot 刷入 |
| 更适合深度修改的设备与第三方 ROM | 系统大版本更新后必须重新刷入 |

**最适用于：** Samsung 设备、模拟器、WSA、第三方 ROM

### LKM 模式（可加载内核模块）

**工作原理：** 将 KernelSU 作为内核模块加载，不替换原内核。

| 优点 | 缺点 |
|------|------|
| 保留原内核及优化 | 需要官方固件 |
| 应用内更新便捷，对 OTA 友好 | 可能并非所有设备都可用 |
| 无 AVB/dm-verity 问题，可不重启即禁用 | 与修改过的固件兼容性较差 |

**最适用于：** 大多数使用官方或接近官方固件的现代手机

### 该选哪种模式？

| 设备类型 | 推荐 | 原因 |
|-------------|-------------|--------|
| 官方固件手机 | LKM | 保留优化，更新方便 |
| Samsung 设备 | GKI | Knox 兼容性 |
| 第三方 ROM | GKI | 对修改过的固件支持更好 |
| 模拟器/WSA | GKI | 通用兼容性 |

如果两种模式都可用，GKI 优先，LKM 会被忽略。

---

## 前置条件

::: danger 必备条件
- **已解锁的 Bootloader** - 先完成[解锁 Bootloader](./how-to-unlock-bootloader.md)
- **GKI 兼容设备** - 支持 GKI 2.0 内核的现代 Android
- **完整备份**所有重要数据
- **电量 50% 以上**以防中途断电
:::

### 要求

| 硬件 | 软件 |
|----------|----------|
| 已解锁 Bootloader 的 Android 设备 | [Android Platform Tools](https://developer.android.com/studio/releases/platform-tools)（ADB/Fastboot） |
| 支持数据传输的 USB 数据线 | 设备专用 USB 驱动（仅 Windows） |
| 电脑（Windows、macOS、Linux） | 来自所选变体 GitHub releases 的 KernelSU Manager APK |
| 设备上 500MB+ 可用存储 | 你设备的官方固件（可选但推荐） |

### 兼容性检查

```bash
# 检查内核版本
adb shell uname -r
# 确认 GKI 2.0 支持（参照你所选变体的要求）

# 快速设备检查
# 安装 KernelSU Manager → 打开应用 → 查看状态：
# "Not Installed" = 受支持
# "Unsupported" = 需要第三方内核或其他变体
```

---

## 安装方法

三种主要方法。请根据你的设备和变体选择。

### 方法 1：刷入 GKI 内核

**最适用于：** 使用 GKI 模式的 GKI 2.0 兼容设备

**第 1 步：** 从你所选变体的 releases 下载合适的 GKI 内核：
- [Official KernelSU 发布页](https://github.com/tiann/KernelSU/releases)
- [KernelSU-Next 发布页](https://github.com/KernelSU-Next/KernelSU-Next/releases)
- [Wild KSU 发布页](https://github.com/WildKernels/Wild_KSU/releases)

**第 2 步：** 刷入内核：

```bash
adb reboot bootloader
fastboot flash boot kernelsu-gki-*.img
fastboot reboot
```

**第 3 步：** 下载并安装该变体的 Manager APK。确认安装后能正常打开。

---

### 方法 2：Boot 镜像修补（LKM 模式）

**最适用于：** 保留官方内核、偏好 LKM 模式

**第 1 步：** 提取官方 boot 镜像：

```bash
# 从固件 ZIP 中提取
unzip stock_firmware.zip boot.img

# 或从设备上转储
adb shell su -c "dd if=/dev/block/by-name/boot of=/sdcard/boot.img"
adb pull /sdcard/boot.img
```

**第 2 步：** 安装 Manager APK，打开后点击"安装" → "选择并修补一个文件" → 选择 `boot.img`。输出：`kernelsu_patched_[random].img`。

**第 3 步：** 刷入修补后的镜像：

```bash
adb pull /sdcard/Download/kernelsu_patched_*.img
adb reboot bootloader
fastboot flash boot kernelsu_patched_*.img
fastboot reboot
```

**第 4 步：** 打开 Manager 验证 - 应显示 "Installed" 且为 LKM 模式。

---

### 方法 3：第三方内核

**最适用于：** 有社区内核支持的设备

可在 XDA 论坛、Telegram 群组或 GitHub 上查找集成了 KernelSU 的设备专属内核。热门选择包括 Sultan Kernel（Pixel），以及 [WildKernels](https://github.com/WildKernels) 提供的多种设备专属构建。

```bash
# 对于 IMG 文件
adb reboot bootloader
fastboot flash boot custom_kernel.img
fastboot reboot

# 对于 ZIP 文件（需要 TWRP 等第三方 Recovery）
# 启动到 Recovery → 安装 ZIP → 重启
```

---

## 安装后设置

### 初始步骤

1. **验证 root 权限** - 打开 Manager，确认 "Installed" 状态。测试：`adb shell su -c "id"`
2. **配置 Manager** - 启用隐藏（针对银行类应用改名）、要求身份验证、启用安全模式
3. **安装元模块**（模块支持必需 - 见下一节）
4. **设置应用配置文件**以实现细粒度 root 控制
5. **备份修补后的 boot 镜像**以备恢复

---

## 应用配置文件系统

应用配置文件是 KernelSU 的独有功能 - 针对每个应用的细粒度权限控制，超越了简单的 root 授予/拒绝。

**每个应用可控制的内容：**
- root 权限开/关
- 文件系统访问（按路径读/写/拒绝）
- 硬件访问（摄像头、麦克风、GPS、传感器）
- 网络访问与域名限制
- 资源限制与 SELinux 上下文
- 挂载命名空间隔离

### 快速示例

| 配置文件类型 | Root | 文件系统 | 硬件 | 使用场景 |
|-------------|------|-----------|----------|----------|
| **银行安全** | 拒绝 | 仅应用数据，拒绝 /sdcard | 全部拒绝 | 银行/金融应用 |
| **开发者访问** | 完全 | 完全访问 | 全部允许 | 开发工具、ADB |
| **游戏优化** | 拒绝 | 仅应用数据 | GPU 高优先级 | 游戏、反作弊 |

### 应用配置文件

1. KernelSU Manager → 应用配置文件 → "+" → 选择应用
2. 配置权限（root、文件系统、硬件、网络、资源）
3. 保存并重启该应用

**通过 CLI 导出/导入：**
```bash
ksud profile export com.example.app > profile.json
ksud profile import com.target.app < profile.json
```

> [!TIP]
> 完整配置选项参见 [应用配置文件官方文档](https://kernelsu.org/guide/app-profile.html)。

---

## 元模块与模块

### 什么是元模块？

现行的 KernelSU 版本不再内置模块挂载功能。**元模块**提供挂载基础设施 - 没有它，修改 `/system` 的模块能安装但**不会挂载**。（只使用脚本、`sepolicy` 或 `system.prop` 的模块没有元模块也能照常工作。）

这适用于所有变体：Official KernelSU、KernelSU-Next、Wild KSU、SukiSU-Ultra 和 ReSukiSU。

**为什么使用元模块？**
- 更小的检测面（KernelSU 本身不执行挂载）
- 可灵活选择挂载方式（OverlayFS、Magic Mount、混合）
- 核心 KernelSU 保持稳定，挂载方案独立演进

> [!WARNING]
> 同一时间只能有**一个**元模块处于活动状态。切换方法：卸载所有普通模块 → 卸载元模块 → 重启 → 安装新元模块 → 重新安装模块。

### 可用的元模块

| 元模块 | 说明 | 最适用于 |
|------------|-------------|----------|
| **[meta-overlayfs](https://github.com/KernelSU-Modules-Repo/meta-overlayfs)** | 使用 OverlayFS 的官方参考实现 | 大多数用户、标准配置 |
| **[mountify](https://github.com/backslashxx/mountify)** | OverlayFS + tmpfs/ext4 sparse，跨平台 | 更低检测率、多 root 方案并存 |
| **[meta-hybrid_mount](https://github.com/YuzakiKokuban/meta-hybrid_mount)** | 双引擎（OverlayFS + Magic Mount）+ 自动回退 | 高级控制、隐蔽性 |
| **[meta-mm](https://github.com/KernelSU-Modules-Repo/meta-mm)** | 轻量级 Magic Mount 替代方案 | 类 Magisk 挂载 |
| **[ZeroMount](https://github.com/Enginex0/zeromount)** | 无挂载 VFS 路径重定向 + SUSFS | 最大隐蔽性 |

> **推荐：** 从 **meta-overlayfs** 或 **mountify** 开始。

### 安装元模块

1. 从 GitHub releases 下载元模块 ZIP
2. KernelSU Manager → 模块 → "从存储安装"（➕）
3. 选择该 ZIP → 重启

处于活动状态的元模块会以特殊标识显示在你的模块列表中。

### 安装普通模块

**前提条件：** 必须已有一个处于活动状态的元模块。

1. KernelSU Manager → 模块 → "从存储安装"
2. 选择模块 ZIP → 按提示重启

**CLI 替代方式：**
```bash
ksud module install /path/to/module.zip
ksud module list
ksud module enable/disable module_id
ksud module remove module_id
```

### 模块兼容性

- 大多数 Magisk 模块可与兼容的元模块配合工作
- Zygisk 模块需要 [ZygiskNext](https://github.com/LSPosed/ZygiskNext) 或 [ReZygisk](https://github.com/PerformanC/ReZygisk)
- KPM 模块需要 SukiSU-Ultra 或 [KPatch Next Module](https://github.com/KernelSU-Next/KPatch-Next-Module)
- 浏览模块：[官方模块仓库](https://modules.kernelsu.org/)

### 模块故障排除

| 问题 | 可能原因 | 解决方法 |
|-------|-------------|-----|
| **未挂载** | 没有元模块 | 安装元模块 → 重启 |
| **无限重启** | 模块有问题 | 长按电源 10 秒 → 开机时按音量下键（安全模式）→ 禁用/移除模块 |
| **root 隐藏不生效** | 需要 Zygisk | 安装 ZygiskNext |
| **模块不兼容** | 元模块不合适 | 尝试其他元模块

---

## Root 隐藏与 Play Integrity

现代银行类应用使用带硬件证明的 Play Integrity API - 在已 root 设备上应对起来越来越难，但并非不可能。KernelSU 的内核级方案比用户空间方法提供更好的规避能力。

### 推荐配置

| 步骤 | 操作 | 详情 |
|------|--------|---------|
| 1 | **隐藏管理器** | KernelSU Manager → 设置 → "隐藏 KernelSU Manager" → 改名（例如 "Settings"） |
| 2 | **银行应用配置** | 为银行类应用创建拒绝 root、文件系统和硬件访问的应用配置文件 |
| 3 | **安装 SUSFS** | 适用于 SUSFS 修补过的内核 - 通过文件系统操纵实现高级 root 隐藏 |
| 4 | **安装 Play Integrity Fix** | 使用 [Play Integrity Fork](https://github.com/osm0sis/PlayIntegrityFork) 或 [Play Integrity Fix (inject)](https://github.com/KOWX712/PlayIntegrityFix) 以获得 MEETS_DEVICE_INTEGRITY |
| 5 | **清除应用数据** | 清除 Google Play Services、Play Store 和银行类应用的数据 → 重启 |

### 现实预期

- **基础完整性：** 通过 - 配置得当时可以实现
- **设备完整性：** 通过 - 借助 PIF + TrickyStore 可实现（需要 keybox 才能达到等效于 Bootloader 未解锁的验证）
- **强完整性：** 对大多数人失败 - 需要未吊销的硬件 keybox（日益稀缺）

### 测试工具

- [Play Integrity API Checker](https://github.com/1nikolas/play-integrity-checker-app) - 官方检测工具
> [!WARNING]
> 不作任何保证。尽管采取了所有措施，某些应用仍可能检测到 root。务必测试你自己的目标应用。

---

## 故障排除

### 常见问题与解决方法

| 问题 | 可能原因 | 解决方法 |
|-------|-------------|----------|
| **Manager 显示 "Unsupported"** | 设备不兼容 GKI 2.0 | 尝试兼容性更广的 KernelSU-Next 或 SukiSU-Ultra，或改用 Magisk |
| **刷入后显示 "Not Installed"** | GKI 内核不对 | 使用与 Android 版本匹配的正确内核；尝试 LKM 修补 |
| **无限重启** | 内核/模块不兼容 | 通过 fastboot 刷入官方 boot.img → `fastboot flash boot stock_boot.img` |
| **模块未挂载** | 未安装元模块 | 安装一个元模块（推荐 meta-overlayfs）→ 重启 |
| **应用拿不到 root** | 配置文件限制或 Manager 问题 | 确认 Manager 显示 "Installed"，检查应用配置文件，查看日志 |
| **银行类应用检测到 root** | 隐藏不充分 | 隐藏 Manager、创建限制性配置文件、安装 SUSFS + Play Integrity Fix |
| **Play Integrity 失败** | 检测未被完全绕过 | 安装 PIF/TrickyStore，清除 Google Play Services 数据 |

### 紧急恢复

**无限重启：**
1. 强制重启（长按电源 10 秒）
2. 启动到安全模式（开机时按音量下键）- 会禁用所有模块
3. 如果仍然循环重启，刷入官方 boot.img：
```bash
fastboot flash boot stock_boot.img
fastboot reboot
```

**模块引发问题：**
- 禁用：`touch /data/adb/modules/[module_name]/disable`
- 移除：`rm -rf /data/adb/modules/[module_name]`
- 移除所有模块：`ksud --remove-modules`（通过 ADB）

---

## 下一步

1. **为敏感应用配置应用配置文件**（银行、金融类）
2. **安装必备模块：** ZygiskNext（Zygisk 支持）、SUSFS（root 隐藏）、Play Integrity Fix
3. **探索：** [LSPosed 框架](./lsposed-guide.md)、[第三方 ROM](./custom-rom-installation.md)、[Root 应用合集](../apps-and-modules/)
4. **优化：** [广告拦截](../general-guides/android-adblocking.md)、[精简预装](../general-guides/android-apps-debloating.md)

---

## 社区资源

| 资源 | 链接 |
|----------|------|
| 官方网站 | [kernelsu.org](https://kernelsu.org/) |
| 官方 GitHub | [github.com/tiann/KernelSU](https://github.com/tiann/KernelSU) |
| 官方模块仓库 | [modules.kernelsu.org](https://modules.kernelsu.org/) |
| Telegram（官方） | [@KernelSU](https://t.me/KernelSU) |
| Reddit | [r/KernelSU](https://www.reddit.com/r/KernelSU/) |
| Awesome KernelSU 资源 | [github.com/fynks/awesome-kernelsu](https://github.com/fynks/awesome-kernelsu) |

**求助：** 提问时请提供设备型号、内核版本（`adb shell uname -r`）、所用的变体与模式、安装方法以及确切的错误详情。
