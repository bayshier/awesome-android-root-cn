---
layout: doc
title: "Root 管理"
description: "面向 Magisk、KernelSU 和 APatch 的 root 管理器、元模块、LSPosed、Zygisk 与 Play Integrity 工具。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/apps-and-modules/root-management
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - name: author
      content: Awesome Android Root
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:site_name
      content: Awesome Android Root
  - - meta
    - property: og:title
      content: "Root 管理 | Awesome Android Root"
  - - meta
    - property: og:description
      content: "面向 Magisk、KernelSU 和 APatch 的 root 管理器、元模块、LSPosed、Zygisk 与 Play Integrity 工具。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/apps-and-modules/root-management
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og.png
  - - meta
    - property: og:locale
      content: en_US
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:title
      content: "Root 管理 | Awesome Android Root"
  - - meta
    - name: twitter:description
      content: "面向已 root Android 设备的 root 管理应用、Magisk/KernelSU/APatch 管理器、元模块、LSPosed 与 Zygisk 框架，以及 root 隐藏与 Play Integrity 工具。"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
---

# Root 管理

**Root 管理**涵盖在你的 Android 设备上安装、运行和维护 root 所需的一切：
面向 **Magisk、KernelSU 和 APatch** 的 root 管理器、锁定 Bootloader 设备的临时 root 方案、
模块管理器和元模块、**LSPosed/Xposed 与 Zygisk** 框架，以及让 root 对应用保持隐身的工具
（**Play Integrity、SUSFS**）。应用与模块在此合并列出，因为它们解决的是同一个问题——控制 root 访问。

> [!TIP]
> 刚接触 root？请先阅读 [Android 完整 Root 教程](/rooting-guides/)，再回到这里挑选工具。

## Root 管理器

- **[⭐ KernelSU](https://github.com/tiann/KernelSU)** - 基于内核的 Android root 方案。`FOSS`
- **[⭐ Magisk](https://github.com/topjohnwu/Magisk)** - 管理 Magisk 模块和 root 权限。`FOSS`
- **[APatch](https://github.com/bmax121/APatch)** - 对 Android 内核和 Android 系统进行修补。`FOSS` | [🌱](https://f-droid.org/packages/me.bmax.apatch/)
- **[FolkPatch](https://github.com/LyraVoid/FolkPatch)** - 基于 APatch、专注于界面优化和功能扩展的 root 管理工具。`FOSS`
- **[KernelSU-next](https://github.com/KernelSU-Next/KernelSU-Next)** - 高级基于内核的 Android root 方案。`FOSS`
- **[ReSukiSU](https://github.com/ReSukiSU/ReSukiSU)** - SukiSU-Ultra 的分支，带有附加功能。`FOSS`
- **[SukiSU-Ultra](https://github.com/SukiSU-Ultra/SukiSU-Ultra)** - 面向 Android 设备的基于内核的 root 方案，从 `KernelSU` 分支而来并做了一些实用改动。`FOSS`


## 临时 Root（锁定 Bootloader）

<details>

<summary><strong>什么是临时 root（GhostLock）？</strong></summary>

像 **GhostLock (CVE-2026-43499)** 这样的漏洞——一个存在了 15 年的 Linux 内核缺陷——只授予**内存中**的 root，仅限当次启动有效。无需解锁 Bootloader、无需刷机、不会触发 Knox、不会清除数据：重启后设备就恢复原样。代价是：root 无法在重启后保留，无法刷入 ROM/Recovery，且只适用于固件更新至约 2026 年 6 月补丁级别的特定设备。

<br>
</details>

- **[⭐ Root My Galaxy](https://github.com/BuSung-dev/Root-My-Galaxy)** - 通过 GhostLock 为骁龙 Galaxy 旗舰（S24/S25 系列、S24 FE、A56 等）提供一键临时 root；Bootloader 保持锁定，Knox 不会被触发。`FOSS`

> [!TIP]
> 另请参阅 **[不解锁 Bootloader 进行 Root ↗](../rooting-guides/root-without-unlocking-bootloader.md)** 和 [Bootloader 修改与临时 Root 方案 ↗](../rooting-guides/temporary-root-solutions.md) 


## 防循环重启

- **[Anti bootloop](https://github.com/Magisk-Modules-Alt-Repo/abootloop)** - 防止循环重启。`FOSS` `[M]`
- **[AshReXcue - Bootloop Protector](https://github.com/RipperHybrid/AshLooper)** - 防止通过 KernelSU 或 Magisk 安装的问题模块引发循环重启。`FOSS` `[M]` `[K]`
- **[YetAnotherBootloopProtector](https://github.com/Magisk-Modules-Alt-Repo/YetAnotherBootloopProtector)** - 监控并修复潜在的循环重启和 SystemUI 故障。`FOSS` `[M]`

## LSPosed 与 Xposed

> [!NOTE]
> LSPosed 让你可以使用 Xposed 模块，这些模块能够修改或扩展你的 Android 系统和应用的功能。

- **[⭐ Vector](https://github.com/JingMatrix/Vector)** - 原版 LSPosed 的开源*分支*，支持动态模块加载及其他改进。`FOSS` `[M]`
- **[LSPosed](https://lsposed.zip)** - 一个 Riru / Zygisk 模块，提供 ART 钩子框架，借助 LSPlant 钩子框架交付与原版 Xposed 一致的 API。`Proprietary`

> [!TIP]
> 安装说明请参阅我们的 [LSPosed 安装教程 ↗](../rooting-guides/lsposed-guide.md)。

## 元模块

> [!NOTE]
> **元模块**为模块系统提供核心的挂载基础设施。与修改系统文件的普通模块不同，元模块控制的是普通模块*如何*被安装和挂载。

- **[⭐ Meta-overlayfs](https://github.com/KernelSU-Modules-Repo/meta-overlayfs)** - 使用 OverlayFS 的官方参考实现，适合大多数用户和标准配置。`FOSS` `[K]`
- **[⭐ Mountify](https://github.com/backslashxx/mountify)** - 支持 tmpfs/ext4 sparse 的 OverlayFS，可降低检测率，也能在 APatch/Magisk 上运行。`FOSS` `[M]` `[K]` `[A]`
- **[Magic Mount Metamodule](https://github.com/Tools-cx-app/meta-magic_mount-rs)** - 基于 MKSU、使用 Magic Mount 的元模块实现。`FOSS` `[M]` `[K]` `[A]`
- **[Meta-hybrid_mount](https://github.com/YuzakiKokuban/meta-hybrid_mount)** - 三引擎挂载编排（OverlayFS + Magic Mount + Kasumi LKM），带冲突监控、SolidJS WebUI、自动回退和 EROFS 存储后端支持。`FOSS` `[K]` `[A]`
- **[meta-mm](https://github.com/KernelSU-Modules-Repo/meta-mm)** - KernelSU Modules Repo 官方的 Magic Mount 元模块。对只想获得 Magisk 兼容挂载而不需要额外工具的用户来说，是 meta-magic_mount 的更轻量替代。`FOSS` `[K]`
- **[ZeroMount](https://github.com/Enginex0/zeromount)** - 无挂载模块加载，具备内核级 VFS 路径重定向与 SUSFS 集成、WebUI、防循环重启守卫和策略回退。`FOSS` `[M]` `[K]` `[A]`

## 模块管理器

- **[⭐ MMRL](https://github.com/DerGoogler/MMRL)** - 帮助管理你自己的模块仓库的 Android 应用。`FOSS` `[M]` `[K]` `[A]` | [🌱](https://f-droid.org/en/packages/com.dergoogler.mmrl/) | [▶️](https://play.google.com/store/apps/details?id=com.dergoogler.mmrl)
- **[KPatch Next Module](https://github.com/KernelSU-Next/KPatch-Next-Module)** - 面向 Magisk/KernelSU 的 KPM（KernelSU Patch Module）独立实现，带 WebUI。`FOSS` `[M]` `[K]`
- **[Magisk Manager for Recovery Mode](https://github.com/Rikj000/Magisk-Manager-for-Recovery-Mode)** - 在自定义 Recovery 的终端会话中轻松管理你的 Magisk 模块。`FOSS` `[M]`

## Root 检测与测试

- **[⭐ Android-Native-Root-Detector](https://github.com/reveny/Android-Native-Root-Detector)** - 用于检测 Android root 的工具。`FOSS`
- **[⭐ Duck Detector Fork](https://github.com/rrr333nnn333/Duck-Detector-Refactoring)** - Duck Detector 的分支，带有附加功能和改进。`FOSS`
- **[Android-Device-Trust](https://github.com/reveny/Android-Device-Trust)** - Android 设备证明与指纹采集工具。`FOSS`
- **[Chunqiu Detector](https://github.com/mingzun09/Chunqiu-Detector-Problem-solution)** - 用于在已 root Android 设备上绕过和排查 Chunqiu Detector 检查的解决方案、脚本和模块。`FOSS`
- **[Duck Detector](https://github.com/eltavine/Duck-Detector-Refactoring)** - Android 环境完整性检测工具，涵盖 root、钩子框架、Bootloader、SELinux、虚拟化和证明信号。`FOSS`
- **[Key Attestation](https://github.com/VisionR1/KeyAttestation)** - 生成、保存、解析和验证 Android 密钥与 ID 证明证书链，用于自测和诊断。`FOSS`
- **[Kknd Root Detector](https://github.com/juanma0511/Kknd_Root_Detector)** - 结合原生 C++ 与 Kotlin 检查的深度 root、钩子框架、SELinux 和系统完整性检测。`FOSS`
- **[MagiskDetection](https://github.com/apkunpacker/MagiskDetection)** - 一些公开可用的 POC 应用合集，用于检测 root/Magisk 的存在。`Proprietary`
- **[PIF Detector](https://github.com/IR0NBYTE/playIntegrityFixDetector)** - 原生应用，用于检测对 Google Play Integrity API 应用的修改、绕过或"修复"。`FOSS` `[M]` `[K]`
- **[Play Integrity Alert](https://github.com/Xiddoc/PlayIntegrityAlert)** - 当应用调用 Play Integrity API 时收到通知。`FOSS` `[LSP]`
- **[Play Integrity API Checker](https://github.com/1nikolas/play-integrity-checker-app)** - 该应用显示 Google Play 服务报告的设备完整性信息。任何一项失败都可能意味着你的设备已被 root 或遭到某种篡改。`FOSS` | [▶️](https://play.google.com/store/apps/details?id=gr.nikolasspyr.integritycheck)
- **[Securify](https://github.com/RabehX/Securify)** - 又一款 root 检查器和 Play Integrity API 应用。`FOSS`
- **[ZygoteNextProbe](https://github.com/XiaoTong6666/ZygoteNextProbe)** - 研究探针，检查 Android 17 的 `zygote_next` 原生隔离服务是否会泄露全局挂载视图——可能将 Magisk/Zygisk/LSPosed 的挂载暴露给应用。`FOSS`

## Root 隐藏与 Play Integrity

<details><summary><strong>什么是 Play Integrity？</strong></summary>

一项 Google API，让应用验证设备是否"正宗"——未经修改、通过 Play 认证且 Bootloader 已锁定。应用用它来阻止已 root/修改的设备。判定等级：`MEETS_BASIC_INTEGRITY` < `MEETS_DEVICE_INTEGRITY` < `MEETS_STRONG_INTEGRITY`。
</details>

<details><summary><strong>为什么要隐藏 root？</strong></summary>

银行、支付以及部分流媒体/游戏应用会检测 root 并拒绝运行。隐藏 root 可以让它们在已 root 的设备上正常工作。
</details>

<details><summary><strong>2026 年的现实情况如何？</strong></summary>

自 Google 2025 年年中的调整以来，`DEVICE_INTEGRITY` 要求 **Android 13+ 且 Bootloader 已锁定**，而 `STRONG_INTEGRITY` 需要**未吊销的硬件密钥箱**（日益稀缺）。对大多数已 root 的用户而言，通过 `BASIC` + `DEVICE` 完整性（借助 PIF + TrickyStore）就是现实的上限——追求 `STRONG` 是一个深邃且常常徒劳的兔子洞。
</details>

- **[⭐ HMA-OSS](https://github.com/frknkrc44/HMA-OSS)** - Hide My Applist 的 FOSS 重写版；隐藏你的应用列表、设置和软件包安装器。`FOSS` `[LSP]`
- **[⭐ Shamiko](https://github.com/LSPosed/LSPosed.github.io/releases)** - 隐藏 Magisk root 以躲避检测。`Proprietary` `[M]`
- **[⭐ TEESimulator](https://github.com/JingMatrix/TEESimulator)** - 为密钥证明创建完整的、基于软件的硬件可信执行环境（TEE）模拟。`FOSS` `[M]` `[K]`
- **[Always Strong](https://github.com/evoker0/AlwaysStrong)** - 将 TEESimulator-RS 和 PlayIntegrityFork 打包成单一模块，在已 root 设备上实现强完整性。`FOSS` `[M]` `[K]`
- **[AuditPatch](https://github.com/silvzr/AuditPatch)** - 钩住 `logd` 以替换审计日志中的敏感 SELinux 上下文，无需 SUSFS 或 ZygiskNext 即可修复 AVC 日志泄露检测。`Proprietary` `[M]` `[K]`
- **[DirtySepolicy Bypass](https://github.com/flipphoneguy/DirtySepolicy_Bypass)** - 在已 root 的 Android 设备上绕过新的 DirtySepolicy，让应用继续正常工作。`FOSS` `[M]` `[K]` `[A]`
- **[Hide My Applist](https://github.com/Dr-TSNG/Hide-My-Applist)** - 拦截应用列表检测。`Proprietary` `[LSP]`
- **[Komodo Build Props](https://github.com/Elcapitanoe/Komodo-Build-Prop#komodo-build-props)** - 将你的设备伪造成 Pixel 9 Pro XL (komodo)。`FOSS` `[M]`
- **[NoHello](https://github.com/MhmRdd/NoHello)** - 用于隐藏 root 的轻量级 Zygisk 模块。`FOSS` `[M]`
- **[OhMyKeymint](https://github.com/qwq233/OhMyKeymint)** - Android Keystore Spoofer 的自定义 keystore 实现。`FOSS` `[M]` `[K]`
- **[Play Integrity Fix (inject)](https://github.com/KOWX712/PlayIntegrityFix)** - 持续维护的分支，使用注入式 GMS/Play Store 伪造并带 WebUI。`FOSS` `[M]`
- **[Play Integrity Fork (PIF)](https://github.com/osm0sis/PlayIntegrityFork)** - 维护最活跃的 PIF。使用自定义字段/属性修复 `DEVICE_INTEGRITY` 判定。在 chiteroman 的原版停止维护后推荐从此入手。`FOSS` `[M]`
- **[PlaycurlNEXT](https://github.com/daboynb/playcurlNEXT)** - 使用自定义字段和属性修复 Play Integrity（及 SafetyNet）判定。`FOSS` `[M]` `[K]`
- **[ReZygisk's Treat Wheel](https://github.com/PerformanC/Treat-Wheel-Zygisk)** - 专为 ReZygisk 打造的 Magisk/root 痕迹隐藏工具，堪称最佳的用户空间 root 隐藏工具。`FOSS` `[M]` `[K]`
- **[Sensitive Props](https://github.com/Pixel-Props/sensitive-props)** - 修改系统属性并应用设备特定的修复，以绕过 SafetyNet/Play Integrity。`FOSS` `[M]`
- **[Specter](https://github.com/dpejoh/specter)** - 面向 Android 的一体化 Play Integrity 与 root 隐藏方案。Yurikey 的继任者。`FOSS` `[M]` `[K]`
- **[TEESimulator-RS](https://github.com/Enginex0/TEESimulator-RS)** - TEESimulator 的分支，采用原生 Rust 证书生成、密钥持久化，以及符合 AOSP 规范的证明行为。`FOSS` `[M]` `[K]`
- **[Tricky Addon – Update Target List](https://github.com/KOWX712/Tricky-Addon-Update-Target-List)** - 用于配置 TrickyStore `target.txt` 的 KSU WebUI。`FOSS` `[K]`
- **[TrickyStore](https://github.com/5ec1cff/TrickyStore)** - 修改 Android 密钥证明的证书链（基于 keybox）。原版/参考模块。`Proprietary` `[M]` `[K]`
- **[TrickyStore OSS](https://github.com/beakthoven/TrickyStoreOSS)** - TrickyStore 的开源替代品。`FOSS` `[M]` `[K]`
- **[YuriKey](https://github.com/dpejoh/yurikey)** - 轻松获得强完整性的无系统修改模块。`FOSS` `[M]` `[K]`
- **[Zygisk Assistant](https://github.com/snake-4/Zygisk-Assistant)** - 在 KernelSU、Magisk 和 APatch 上隐藏 root 的 Zygisk 模块。`FOSS` `[M]`

> [!TIP]
> 将这些工具与合适的 [Zygisk 实现](#zygisk)结合使用可获得最佳效果。

---

## Susfs

<details><summary><strong>什么是 SUSFS？</strong></summary>
SUSFS（Systemless User Space File System）是一个内核级模块，允许在不改动系统分区的情况下进行 root 隐藏和系统修改。它为模块的运行提供了隐蔽的环境，使应用更难检测到 root 或修改。

</details><br>

- **[⭐ SUSFS for KernelSU](https://github.com/sidex15/susfs4ksu-module)** - 面向 SUSFS 修补内核（KernelSU/Next）的附加 root 隐藏服务。现代 KSU 隐藏方案的核心。`FOSS` `[M]` `[K]`
- **[BRENE](https://github.com/rrr333nnn333/BRENE)** - 面向已修补内核的 SUSFS/KernelSU 模块，提供增强的 root 隐藏与伪造。`FOSS` `[M]` `[K]`
- ~~ReSuSFS~~: 应作者要求已移除

---

## Zygisk

<details>

<summary><strong>什么是 Zygisk？</strong></summary>

一项让模块能够向 Android 的 Zygote 进程注入代码的功能，用于实现 root 隐藏和应用修补等系统级修改。

<br>
</details>

- **[⭐ Zygisk Next](https://github.com/LSPosed/ZygiskNext)** 检测规避的"黄金标准"。它是一个独立的 Zygisk 实现，提供最先进的隐身功能，包括专属的 **Zygote 监视器**和仪表盘。`Proprietary` `[M]` `[K]` `[A]`
- **[NeoZygisk](https://github.com/JingMatrix/NeoZygisk)** 使用 **ptrace 注入**的极简高隐身实现。专注于"痕迹清理"，目标是在模块加载后从内存中清除所有注入痕迹。`FOSS` `[M]` `[K]` `[A]`
- **[OnyxZygisk](https://github.com/OnyxZygisk/OnyxZygisk/)** - 由 ptrace 驱动的 Zygisk 实现，内置 WebUI、可热插拔的 FN 模块和高级 DenyList。`FOSS` `[M]` `[K]` `[A]`
- **[ReZygisk](https://github.com/PerformanC/ReZygisk)** **完全用 C 重写**的高性能实现。它引入**自定义链接器**来绕过现代基于链接器的检测，提供用于状态监控的 WebUI，并兼容 Android 15 和 16。`FOSS` `[M]` `[K]` `[A]`
- **[VexZygisk](https://github.com/Lxiaoyao077/VexZygisk/)** - 面向 KernelSU 和 APatch 的 Zygisk 独立实现。`FOSS` `[M]` `[K]` `[A]`

<details><summary><strong>对比表</strong></summary><br>

| | **Magisk 内置** | **Zygisk Next** | **NeoZygisk** | **ReZygisk** |
| :--- | :--- | :--- | :--- | :--- |
| **核心优势** | 官方且简单 | 检测规避 | 隐身/痕迹清理 | 速度/开源 |
| **许可证** | GPL-3.0 | 专有 | GPL-3.0 | GPL-3.0 / AGPL-3.0 |
| **支持的 Root** | 仅 Magisk | Magisk、KSU、APatch | Magisk、KSU、KSU Next、APatch | Magisk、KSU、APatch |
| **隐藏方式** | 基础 DenyList | ZN Linker + 匿名内存 + Shamiko | Ptrace 注入 + 卸载挂载 | 自定义链接器 + maps 隐藏 |
| **优势** | ✅ 稳定、文档完善<br>✅ 架构覆盖最广（含 x86） | ✅ 功能最丰富<br>✅ 社区最大 | ✅ 内存中难以追踪<br>✅ 极简且开源 | ✅ **最快（原生 C）**<br>✅ 完全开源且可审计 |
| **取舍** | ❌ 仅支持 Magisk<br>❌ 容易被检测 | ❌ 闭源<br>❌ ZN Linker 仍属实验性 | ❌ 仅支持 64 位<br>❌ 社区较小 | ❌ 处于 RC 阶段<br>❌ 存在一些兼容性问题 |

<br>
</details>
