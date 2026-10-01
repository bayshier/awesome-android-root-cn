---
layout: doc
title: "Android 临时 Root：方法与解决方案"
description: "对比 Android 的各类临时 root 方法，包括锁定 Bootloader 的选项、Bootloader 修改、重启后的表现、设备限制与安全风险。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/temporary-root-solutions
  - - meta
    - name: author
      content: Awesome Android Root
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: "Android 临时 Root：方法与解决方案"
  - - meta
    - property: og:description
      content: "对比 Android 临时 root、Bootloader 修改工具与标准的 Magisk、KernelSU、APatch root 方式，附设备限制与安全提示。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/temporary-root-solutions
  - - meta
    - property: og:locale
      content: zh_CN
  - - meta
    - property: og:site_name
      content: Awesome Android Root
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: "Android 临时 Root：方法与解决方案"
  - - meta
    - name: twitter:description
      content: "Android 临时 root：Kaeru、Fenrir 与 GhostLock 系列工具、支持机型的注意事项，以及与永久 root 的区别。"
  - - meta
    - name: article:author
      content: Awesome Android Root
  - - meta
    - name: article:published_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - name: article:modified_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - name: article:section
      content: 指南
  - - meta
    - name: article:tag
      content: Bootloader
  - - meta
    - name: article:tag
      content: 临时 Root
  - - meta
    - name: article:tag
      content: Play Integrity
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "@id": "https://awesome-android-root.zhoe.org/rooting-guides/temporary-root-solutions#article",
        "headline": "Android 临时 Root：方法与解决方案",
        "description": "对 Android 临时 root、Bootloader 修改工具及其局限性的实用对比。",
        "image": "https://awesome-android-root.zhoe.org/images/og.png",
        "author": { "@id": "https://awesome-android-root.zhoe.org/#organization" },
        "publisher": { "@id": "https://awesome-android-root.zhoe.org/#organization" },
        "datePublished": "2026-08-07",
        "dateModified": "2026-09-13",
        "mainEntityOfPage": {
          "@id": "https://awesome-android-root.zhoe.org/rooting-guides/temporary-root-solutions#webpage"
        },
        "articleSection": "Android Root 指南",
        "inLanguage": "zh-CN",
        "isAccessibleForFree": true
      }

---

# Android 临时 Root：方法与解决方案

本站的大部分内容介绍的是在 Bootloader 解锁后修补 **boot 镜像**的 root 框架（Magisk、KernelSU、APatch）。本页则涵盖两类与此模式不同但彼此相关的类别：

1. **Bootloader 修改与伪装工具** - 直接修补 Bootloader（LK）本身的 payload，主要面向 MediaTek 芯片，用于添加自定义 fastboot 命令、隐藏已解锁状态，或攻破安全启动链。
2. **临时 root（仅限当前开机）** - 内核漏洞利用，仅在内存中为当前这次开机授予 root，无需解锁 Bootloader、无需刷入任何内容，也不会熔断 Knox/保修熔丝。每次重启后 root 都会失效，必须重新触发。


> [!CAUTION]
> 本页介绍的一切都运行在操作系统之下——要么在 Bootloader 中，要么在内核中。一次错误的刷写或一次失败的漏洞利用都可能**让你的设备变砖**。这些是由小团队维护的研究级、机型专属工具，而不是打磨完善的消费级应用。使用前请完整阅读每个项目的文档，并保存一份官方固件副本。

## 临时 Root 方案对比

**临时 root** 一词指仅限当前开机、设备重启后即失效的 root。Bootloader 修补则不同：它可以跨重启持续存在，但通常需要解锁并刷入机型专属内容。在点开项目链接之前，先用下表选对方向。

| 方案 | 永久？ | 需要解锁 Bootloader？ | 重启后仍有效？ | 主要限制 |
| :--- | :--- | :--- | :--- | :--- |
| 标准 Magisk、KernelSU 或 APatch | 通常是，直到被移除或更新替换了镜像 | 需要 | 通常是 | 需要可解锁的设备、完全对应的镜像或内核，且更新需谨慎。 |
| MediaTek Kaeru 或 Fenrir Bootloader 修改 | 是，直到修补过的 Bootloader 被还原 | 需要，用于刷入修改 | 是 | 限定 MediaTek 且因设备而异；LK/preloader 改动不当可能导致手机变砖。 |
| GhostLock 系列临时 root | 否 | 不需要 | 否；每次重启后需重新执行 | 仅支持特定的存在漏洞的内核构建与补丁级别。 |

## MediaTek Bootloader 修改与伪装工具

这些工具直接修补 MediaTek 设备上的 LK（Little Kernel）Bootloader 镜像，而不是 boot/init_boot 分区。因此它们能做到普通 root 框架做不到的事：添加 fastboot 命令、移除已解锁 Bootloader 的警告，或伪造上报的锁定状态，让 Play Integrity 在设备实际已解锁的情况下看到"已锁定"。

- **[Kaeru](https://github.com/R0rt1z2/kaeru)** - ARMv7 payload，可在 MediaTek LK Bootloader 内实现任意代码执行。注入后，它可以注册自定义 fastboot 命令、重映射按键组合启动模式，并移除已解锁 Bootloader 的开机警告。Bootloader 锁定状态伪装为可选功能，通过 fastboot 开关。`FOSS`（AGPL-3.0）
- **[Fenrir](https://github.com/R0rt1z2/fenrir)** - 概念验证漏洞利用，针对 Nothing Phone (2a) / CMF Phone 1 以及少数其他 MediaTek 设备上的安全启动缺陷。它通过修补 `bl2_ext` 让 Preloader 跳过校验，从 EL3 起打破信任链，并能将设备的锁定状态伪装为"已锁定"，使已解锁设备也能通过强 Play Integrity。`FOSS`（AGPL-3.0）

### 配套工具链

Kaeru 和 Fenrir 都构建在同一开发者团体的小型 MediaTek Bootloader 工具生态之上。它们可与上述工具配合使用，也可作为移植到新设备的起点：

- **[mtkclient](https://github.com/bkerler/mtkclient)** - 最主要的 MediaTek 逆向工程与刷写工具（BROM/preloader 读写、分区转储、seccfg 解锁）。包含用于在刷写过程中获得代码执行的 `kamakiri` 漏洞利用链。`FOSS`
- **[lkpatcher](https://github.com/R0rt1z2/lkpatcher)** - 简化 LK 镜像中已知安全策略的修补流程（分区列举、策略分析、基于 JSON 的自定义补丁），无需手工改写字节。`FOSS`
- **[liblk](https://github.com/R0rt1z2/liblk)** - 用于解析和重建 MediaTek LK 镜像的 Python 库；`lkpatcher` 与 Kaeru/Fenrir 注入器都构建在它之上。`FOSS`
- **[amonet](https://github.com/R0rt1z2/amonet)** - 较早期的 BootROM + LK 漏洞利用链，主要针对 Amazon 品牌的 MediaTek 设备——它们的 BROM 阶段被锁定，单靠 `mtkclient` 无法触及。`FOSS`

## 临时 Root（仅限当前开机）：GhostLock / CVE-2026-43499 系列

2026 年年中，Linux 内核 rtmutex 代理锁回滚路径中的一个释放后使用（use-after-free）漏洞（CVE-2026-43499，绰号 **GhostLock**）被发现可以由无特权应用进程触达多个在售 Android 内核。与上面的 Bootloader 工具不同，这是纯粹的内核漏洞利用：无需解锁 Bootloader，无需刷写，也不会熔断 Knox eFuse。它通过 ADB/Shizuku 投放原生 payload，运行后在内存中取得 root shell，并借此加载 KernelSU（或 ReSukiSU）管理器——仅对当前这次开机有效。重启即失效，步骤必须重新执行。

> [!TIP]
> GhostLock 现在有了自己的专属页面：**[无需解锁 Bootloader 的 Root：GhostLock 临时 Root 指南](./root-without-unlocking-bootloader.md)**。其中介绍了这个漏洞是什么、能做什么和不能做什么，并列出了全部相关应用与项目（Root My Galaxy、Root My Pixel、Root My Device、GhostLock App、ghostlock-oneplus 以及各机型移植版），附支持设备表。

主要工具：

- **[Root My Galaxy](https://github.com/BuSung-dev/Root-My-Galaxy)** - 面向骁龙版 Galaxy 旗舰（S24/S25 系列、S24 FE、A56 等）的原创一键 root 应用。`FOSS`（Apache-2.0）
- **[Root My Pixel](https://github.com/alex193a/Root-My-Pixel)** - 面向 Google Pixel 设备的移植版，通过 Shizuku 投放 payload。`FOSS`
- **[ghostlock-oneplus](https://github.com/JoinChang/ghostlock-oneplus)** - 针对 Bootloader 处于锁定状态的 OnePlus/OPPO/realme（以及部分 Xiaomi）设备的独立漏洞利用。`FOSS`
- **[CyberMeowfia（IonStack 研究）](https://github.com/NebuSec/CyberMeowfia)** - NebuSec 对 CVE-2026-43499 的原始分析文章与漏洞利用源码，上述工具均构建于其上。

社区移植版还在持续增加——Galaxy S22 Ultra / Z Fold6 / A17、OPPO Find N2、iQOO Z9 5G / vivo T3 5G、POCO M6 Pro、采用 5.X 内核的 Amazon 设备、Nothing Phone (1)、Galaxy Tab S7+，甚至 Meta Quest 1——全部详细信息都列在 [GhostLock 专属页面](./root-without-unlocking-bootloader.md)上。

> [!IMPORTANT]
> 这是一个正在收窄的狭窄窗口，不是通用的 root 方案：
> - 仅适用于安全补丁大致在 **2026 年 6 月**及之前的固件（也有人在 2026 年 7 月的构建上碰过运气；这没有保证，且每次 OTA 都会让窗口进一步收窄）。
> - 支持范围是逐设备、逐内核构建列出的清单。在假定你的手机可用之前，先查看各项目的 supported-targets 文件。
> - 较新的芯片组/内核构建（例如 Galaxy S26 系列）出厂采用的布局不受此特定 payload 影响。
> - root **不会**在重启后保留。没有持久化步骤；每次想要恢复 root 都得重新运行工具。
> - 这类漏洞利用预期会被修补。请把任何基于特定 CVE 的临时 root 工具视为短命方案，依赖之前先查看对应仓库的最新状态。

## 与标准 root 方案的区别

| | Magisk / KernelSU / APatch | Kaeru / Fenrir（Bootloader 修改） | GhostLock 系列（临时 root） |
|---|---|---|---|
| 需要解锁 Bootloader | 是 | 是（用于刷入修补后的镜像） | **否** |
| 重启后仍有效 | 是（直到 OTA） | 是（直到重新刷写/重新锁定） | **否**，每次开机都要重新运行 |
| 熔断 Knox / 保修熔丝 | 取决于 OEM | 取决于 OEM | **不会** |
| 能否伪装锁定状态以通过强 Play Integrity | 否（需要 [Tricky Store](https://github.com/5ec1cff/TrickyStore) 等工具） | 能，内置（Fenrir/Kaeru） | Bootloader 本来就读作已锁定 |
| 作用范围 | boot/init_boot 分区 | Bootloader（LK）本身 | 内核，仅限内存 |
| 设备支持 | 广泛 | 仅 MediaTek，需逐机型移植 | 逐机型，取决于补丁级别 |

关于在正常 root 的设备上用 DenyList/Shamiko/Tricky Store 解决这一问题的另一面，请参阅 [Root 隐藏与 Play Integrity 应用](/apps-and-modules/root-management#root-hiding-play-integrity)部分。

## 临时 Root 常见问题

### 什么是临时 root？

临时 root 是只在当前这次 Android 开机期间保存在内存中的 root 权限。它不会安装持久的修补 boot 镜像，因此设备重启后 root 会话即结束。

### 临时 root 重启后还在吗？

不在。本文介绍的 GhostLock 系列在重启后必须重新触发，而且 OTA 修补了存在漏洞的内核之后可能就彻底失效。

### 临时 root 能安装 root 模块吗？

部分工具会加载 KernelSU 这类会话式 root 管理器，在这次开机期间可能支持兼容的模块。不要想当然地认为所有 Magisk 或 KernelSU 模块都能用，也不要认为模块或其改动会在重启后保留。

### 临时 root 会解锁 Bootloader 吗？

不会。GhostLock 式的临时 root 会让 Bootloader 保持锁定。当你需要刷入 Recovery、第三方 ROM 或永久 root 镜像时，它不能作为解锁的通用替代品。

### 临时 root 安全吗？

它避免了一些 Bootloader 解锁伴随的数据清除和熔丝变化，但仍然会以 root 身份运行提权代码。请使用链接中的源码或发布版本，核实目标构建版本完全对应，做好备份，并清楚漏洞可能被修补或被滥用。

### 哪些设备支持临时 root？

没有通用的设备列表。支持与否取决于具体型号、内核构建和安全补丁级别。请查看项目的 supported-targets 文档和 [GhostLock 设备支持表](./root-without-unlocking-bootloader.md#device-support-at-a-glance)，不要凭手机系列推断支持情况。

### 重启后会发生什么？

临时 root 会话和所有仅限当前会话的管理器状态都会消失。手机回到正常的 Bootloader 锁定状态，如果固件仍然存在漏洞，则需要再次运行工具。

## 安全与法律提示

- 本页所有工具都是由个人而非厂商维护的研究/概念验证软件。请预期它们不够完善、需要机型专属的移植工作，并可能在下次 OTA 后失效。
- Bootloader 修补（Kaeru、Fenrir）存在真实的变砖风险——如果你为具体的 Bootloader 版本用错了偏移量。动手之前，请先转储并保存官方 LK/preloader 镜像。
- 内核漏洞利用式临时 root（GhostLock 系列）对设备本身的风险相对较低（无需刷写），但它仍然是在你自己的设备上以 root 身份运行的提权代码；只从源码构建或使用链接仓库的发布版本，拿不准就先读代码。
- 适用于本仓库一切内容的一般免责声明，请参阅项目的[法律与安全](../legal-disclaimer.md)页面。

## 相关资源

- [无需解锁 Bootloader 的 Root：GhostLock 临时 Root 指南](./root-without-unlocking-bootloader.md)
- [Root 框架对比](../rooting-guides/root-framework-comparison.md)
- [如何解锁 Android Bootloader](../rooting-guides/how-to-unlock-bootloader.md)
- [故障排除：Play Integrity 与银行类应用](../troubleshooting.md#play-integrity-与银行类应用)
- [Root 隐藏与 Play Integrity 应用](/apps-and-modules/root-management#root-hiding-play-integrity)

[↑ 返回顶部](#mediatek-bootloader-modification-spoofing-tools)