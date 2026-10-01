---
layout: doc
title: Magisk vs KernelSU vs APatch
description: Magisk、KernelSU 与 APatch root 框架的详细对比，包含实用建议与迁移注意事项。
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/root-framework-comparison
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:site_name
      content: Awesome Android Root
  - - meta
    - property: og:title
      content: Magisk vs KernelSU vs APatch - 2026 年哪种 Root 方案最好？
  - - meta
    - property: og:description
      content: Android root 框架的实用对比，包含推荐方案、风险与迁移注意事项。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/root-framework-comparison
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og.png
  - - meta
    - property: og:image:secure_url
      content: https://awesome-android-root.zhoe.org/images/og.png
  - - meta
    - property: og:image:alt
      content: Magisk vs KernelSU vs APatch - Root 框架对比
  - - meta
    - property: og:image:width
      content: '1200'
  - - meta
    - property: og:image:height
      content: '630'
  - - meta
    - property: og:image:type
      content: image/png
  - - meta
    - property: og:locale
      content: zh_CN
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
      content: Magisk vs KernelSU vs APatch - Root 框架对比
  - - meta
    - name: twitter:description
      content: Android root 框架的实用对比，包含推荐方案、风险与迁移注意事项。
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
  - - meta
    - name: twitter:image:alt
      content: Root 框架对比 - Magisk vs KernelSU vs APatch
  - - meta
    - name: author
      content: Awesome Android Root 项目
  - - meta
    - property: article:author
      content: https://github.com/awesome-android-root/awesome-android-root
  - - meta
    - property: article:section
      content: Android Root
  - - meta
    - property: article:tag
      content: Magisk
  - - meta
    - property: article:tag
      content: KernelSU
  - - meta
    - property: article:tag
      content: APatch
  - - meta
    - property: article:tag
      content: Root 框架对比
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

# Magisk vs KernelSU vs APatch

Root 框架更新迭代很快。请先用本页选定方案，然后在刷入任何内容之前，到官方文档核实机型专属说明与当前要求。

**相关指南：** 
- [Root 主指南](./index.md)
- [Magisk 指南](./magisk-guide.md)
- [KernelSU 指南](./kernelsu-guide.md)
- [APatch 指南](./apatch-guide.md)

::: warning 刷 root 之前
解锁 Bootloader 通常会清空数据，削弱设备安全性，并可能影响 OTA、保修、DRM、钱包、银行以及工作资料（work profile）应用。请提前准备好官方固件包和恢复预案。
:::

## 快速推荐

| 如果你想…… | 选择 | 理由 |
|---|---|---|
| 对大多数设备而言最安全的默认选择 | **Magisk** | 兼容性广、模块生态最大、故障排除最容易 |
| 内核级 root 且有强大的按应用控制 | **KernelSU** | root 运行于内核空间；App Profiles 可限制 UID、用户组、capabilities 与 SELinux 规则 |
| 基于 KernelPatch 的替代方案 | **APatch** | 在兼容的 ARM64 设备上很有用，尤其适合需要 APModule/KPModule 支持的场景 |
| 不解锁 Bootloader 获得 root（临时） | **[GhostLock 临时 root](./root-without-unlocking-bootloader.md)** | 在特定设备上通过 CVE-2026-43499 获取仅限当前开机的 root；不熔断 Knox，但重启后一切失效 |
| 银行、钱包、企业或反作弊应用需要最大可靠性 | **不 root** | 没有任何框架能保证 Play Integrity 或应用自身检测一定通过 |

## 快速对比

| 方面 | Magisk | KernelSU | APatch |
|---|---|---|---|
| **安装方式** | 修补你设备对应的正确 boot 相关镜像 | 使用受支持的内核路径，通常是 GKI/LKM 或自编译内核 | 使用 KernelPatch 修补官方 `boot.img` |
| **最适合** | 新手、主力机、重度模块用户 | 高级玩家、开发者、受支持的 GKI/第三方内核 | 高级用户与特殊场景 |
| **主要前提** | 解锁 Bootloader + 完全对应的官方镜像 | 受支持的内核/KMI 路径；Manager 必须显示支持 | ARM64 + 与 KernelPatch 兼容的内核 + 所需的 KALLSYMS 配置 |
| **模块** | Magisk 模块、Zygisk 模块 | 基于 metamodule 的体系；许多 Magisk 模块需要兼容的 metamodule | APModule 加上用于内核级代码的 KPModule |
| **Root 控制** | 基于应用的 MagiskSU 授权弹窗 | 提供细粒度权限的 App Profiles | 基于 SuperKey 的访问控制 |
| **隐藏 / 完整性** | 仅靠社区工具；无法保证 | 应用通常较难察觉，但没有保证 | 应用通常较难察觉，但没有保证 |
| **OTA 表现** | 通常需要还原/重新修补，或走未使用分区槽流程 | LKM 方式对 OTA 更友好，但不保证 | OTA 支持取决于设备与安装路径 |
| **故障排除** | 最容易；社区最大 | 中等；懂内核更有帮助 | 最难；生态较小 |
| **最新版本** | ![GitHub 最新版本](https://img.shields.io/github/v/release/topjohnwu/Magisk) | ![GitHub 最新版本](https://img.shields.io/github/v/release/tiann/KernelSU) | ![GitHub 最新版本](https://img.shields.io/github/v/release/bmax121/APatch) |

## 框架详解

### Magisk

**默认首选。** Magisk 是最成熟、文档最丰富的 root 方案。它提供 MagiskSU、Magisk 模块、MagiskBoot，以及可选的 Zygisk（用于在应用进程中运行代码）。

**适合使用 Magisk 的情况：**
- 你是第一次接触 root。
- 你希望你的设备已有现成指南、模块和修复方案的概率最大。
- 你希望在模块导致设备无限重启时有最简单的恢复路径。

**注意事项：**
- 你必须为设备修补正确的镜像（`boot.img`、`init_boot.img`，或视分区布局而定修补 Recovery 镜像）。
- 不要刷入他人修补好的镜像。
- root 隐藏并非内置保证；Play Integrity 和应用检测手段在不断变化。

### KernelSU

**最适合受支持的内核。** KernelSU 从内核空间授予 root，只有被授权的应用才能访问或看到 `su`。它的 App Profiles 提供比传统应用式超级用户授权弹窗更严格的控制。

**适合使用 KernelSU 的情况：**
- 你的设备/内核受支持，或者你能编译/使用可信的启用 KernelSU 的内核。
- 你想要细粒度的 root 配置文件与内核级控制。
- 你熟悉 KMI、boot 镜像以及内核相关的恢复操作。

**注意事项：**
- 模块挂载由 metamodule 负责，因此全新安装需要配置合适的 metamodule 才能进行 systemless 修改。
- 内核/KMI 不匹配可能导致无限重启。
- 某些 OEM 安全机制和内核可能会阻止特定的安装方式。

### APatch

**适合作为进阶替代方案。** APatch 基于 KernelPatch，在内核空间运行 root 控制，并支持 APModule 与用于内核代码注入的 KPModule。

**适合使用 APatch 的情况：**
- 你的 ARM64 设备满足 APatch 的要求。
- 你明确需要 APModule/KPModule 或 KernelPatch 的行为特性。
- Magisk 或 KernelSU 不适合你的固件。

**注意事项：**
- APatch 修补的是 `boot.img`；不要修补 `init_boot.img` 或随手拿来的镜像。
- SuperKey 的风险高于普通的 root 密码：请使用强度高且保密的密钥。
- 兼容性在很大程度上取决于内核配置以及设备/OEM 的行为。

## 机型建议

请依据 **Bootloader 能否解锁、固件是否可得、内核支持情况以及 Recovery 选项**来选择——不要只看品牌。

| 设备系列 | 实用建议 |
|---|---|
| **Google Pixel** | Magisk 通常最省事。如果存在受支持的内核路径，KernelSU 也是不错的选择。 |
| **Samsung Galaxy** | 务必仔细调研。安装 root 可能永久熔断 Knox 相关保护，且部分地区版本无法解锁。KernelSU LKM 在受 Knox 保护的设备上可能无法使用。 |
| **Xiaomi / Redmi / POCO** | 通常从 Magisk 入手。KernelSU/APatch 取决于 ROM、内核与 Bootloader 状态。 |
| **OnePlus / Nothing** | 可解锁时通常对 root 友好；优先 Magisk，若内核路径受支持可考虑 KernelSU。 |
| **Motorola / ASUS** | 解锁政策与固件获取因型号/地区而异。刷入前保存好完全对应的官方镜像。 |
| **OPPO / Realme / vivo / Honor** | Bootloader 往往是最大障碍。规划 root 之前先核实当前的地区政策。 |

::: danger Samsung Knox
在受 Knox 保护的 Samsung 设备上，root 或刷入自定义二进制文件可能永久破坏依赖 Knox 的功能，例如 Samsung Wallet/Pay、Secure Folder 和 Samsung Pass。重新锁定 Bootloader 或刷回官方固件通常也无法恢复这些功能。
:::

## Play Integrity 与 root 检测

没有任何 root 框架能保证银行、钱包、流媒体、工作资料或反作弊应用持续正常工作。

- **基本检查（basic）**能否通过取决于 ROM、指纹、root 痕迹以及当前的检测手段。
- **设备/强完整性（device/strong）**要难得多，因为它们依赖 Google/OEM 的信任信号，例如验证启动状态、认证固件与硬件级证明。
- 社区模块可能暂时有效，但这是一场猫鼠游戏。不要仅凭绕过宣传来购买设备或选择框架。

如果这些应用对你而言比 root 更重要，请保留一台不 root 的手机。

## 安全安装清单

安装或迁移之前：

- [ ] 备份内部存储与应用数据。
- [ ] 下载与你当前系统构建完全对应的固件。
- [ ] 保存官方 `boot.img`、`init_boot.img`、`vendor_boot.img`、`vbmeta.img` 以及 Recovery 镜像（如果设备有）。
- [ ] 确认 Bootloader 解锁步骤，以及解锁是否会清除数据。
- [ ] 确认可以进入 fastboot/下载模式，并掌握恢复用命令。
- [ ] 阅读你设备的论坛/群组，了解已知的无限重启、分区槽问题与 OTA 坑点。
- [ ] 同一时间只安装一种 root 框架。

## 迁移指南

::: warning 不要叠加多种 root 框架
切换要干净彻底。混用多个框架的修补镜像、模块和管理器是导致无限重启与 OTA 失效的常见原因。
:::

### Magisk → KernelSU

1. 导出模块列表与各应用的 root 授权设置。
2. 停用/卸载有风险的模块。
3. 还原官方 boot 相关镜像，或彻底卸载 Magisk。
4. 为你的设备安装与 KernelSU 兼容的内核/LKM 方案。
5. 安装 KernelSU Manager。
6. 如果需要 systemless 模块，安装兼容的 metamodule。
7. 逐个重装模块，并配置 App Profiles。

### Magisk → APatch

1. 备份并保存当前的官方 `boot.img`。
2. 彻底卸载 Magisk 或还原官方 boot 镜像。
3. 使用 APatch Manager 修补官方 `boot.img`。
4. 设置一个强 SuperKey 并妥善保密。
5. 刷入修补后的 `boot.img`。
6. 添加模块之前先测试 root。

### KernelSU/APatch → Magisk

1. 移除模块，并记录各应用的授权情况。
2. 还原官方 boot 相关镜像，或刷入该 ROM 干净的内核/boot 镜像。
3. 在目标设备上用 Magisk 修补正确的镜像。
4. 刷入、开机，然后只重装需要的模块。

## 决策清单

只要符合以下任意一条，就选 **Magisk**：
- 你是 root 新手。
- 你依赖大量 Magisk/Zygisk 模块。
- 你想要最庞大的支持社区。
- 你不清楚自己的设备用的是什么内核。

以下条件全部满足，才选 **KernelSU**：
- 你的设备有确认可用的受支持内核路径。
- 你理解 KMI/内核兼容性。
- 你想要更强的按应用 root 隔离与配置文件。

以下条件全部满足，才选 **APatch**：
- 你的设备是 ARM64 且与 APatch 兼容。
- 你理解 SuperKey 的风险。
- 你需要 APModule/KPModule 或 KernelPatch 特性。

如果符合以下情况，就选**不 root**：
- 银行/钱包/企业/反作弊应用的可靠性比定制更重要。
- 你无法自行恢复官方固件。
- 丢失数据或失去保修不可接受。

## 常见问题

**总体来说哪个最好？**  
大多数用户选 Magisk。使用受支持内核的高级玩家选 KernelSU。进阶 KernelPatch 用例选 APatch。

**哪个隐藏 root 效果最好？**  
没有哪个能可靠做到。内核级方案能减少部分用户空间痕迹，但现代应用使用的信号远不止 `su` 可见性这一项。

**Magisk 模块能在 KernelSU/APatch 上使用吗？**  
有的能，有的不能。挂载方式、Zygisk 依赖、SELinux 修改和服务脚本都有影响。每次只测试一个模块。

**OTA 更新还能正常吗？**  
有时可以。始终假定 OTA 之后可能需要重新恢复 root，并在相关情况下为两个分区槽都保存官方镜像。

**root 之后还能重新锁定 Bootloader 吗？**  
通常不能。在分区已被修改的情况下重新锁定可能导致变砖或清除数据。先完全恢复官方状态，再遵循机型专属说明。

## 官方资源

- **Magisk：** [GitHub](https://github.com/topjohnwu/Magisk) · [文档](https://topjohnwu.github.io/Magisk/) · [安装指南](https://topjohnwu.github.io/Magisk/install.html)
- **KernelSU：** [GitHub](https://github.com/tiann/KernelSU) · [文档](https://kernelsu.org/) · [安装](https://kernelsu.org/guide/installation.html) · [Metamodule](https://kernelsu.org/guide/metamodule.html)
- **APatch：** [GitHub](https://github.com/bmax121/APatch) · [文档](https://apatch.dev/) · [安装](https://apatch.dev/install.html)
- **Google：** [Play Integrity 判定结果](https://developer.android.com/google/play/integrity/verdicts)

::: tip 最终原则
拿不准时，先从 Magisk 开始——除非你设备的社区针对你的具体型号、ROM 和内核明确推荐 KernelSU 或 APatch。
:::
