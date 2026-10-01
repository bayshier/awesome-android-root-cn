---
layout: doc
title: 第三方 ROM 安装完整指南
description: "安装第三方 Android ROM 的权威指南——LineageOS、GrapheneOS、Pixel Experience、CalyxOS。用注重隐私的替代系统焕新你的设备。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/custom-rom-installation
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: 第三方 ROM 安装完整指南 - 所有 Android 替代系统
  - - meta
    - property: og:description
      content: 通过这份覆盖 LineageOS、GrapheneOS、Pixel Experience 及其他注重隐私替代系统的全面指南，安装第三方 Android ROM。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/custom-rom-installation
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/custom-rom.png
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
    - name: twitter:title
      content: 第三方 ROM 安装完整指南 - Android 替代系统
  - - meta
    - name: twitter:description
      content: 按分步指南安装 LineageOS、GrapheneOS、Pixel Experience 等第三方 Android ROM。
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:creator
      content: "@awsm_and_root"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/custom-rom.png
  - - meta
    - name: twitter:image:alt
      content: 第三方 ROM 安装指南 - LineageOS、GrapheneOS 等
  - - meta
    - name: author
      content: Awesome Android Root Project
  - - meta
    - property: article:author
      content: https://github.com/awesome-android-root/awesome-android-root
  - - meta
    - property: article:section
      content: Android 修改
  - - meta
    - property: article:tag
      content: 第三方 ROM
  - - meta
    - property: article:tag
      content: LineageOS
  - - meta
    - property: article:tag
      content: GrapheneOS
  - - meta
    - property: article:tag
      content: Android 隐私
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

# 第三方 ROM 安装完整指南

**焕新你的 Android 体验**——刷入注重隐私、强化安全的第三方 ROM，让设备重获新生、体验更佳。

## 🔗 核心资源
- **[📖 主 Root 指南](./index.md)**——通用 root 原则与安全须知
- **[🔓 解锁 Bootloader](./how-to-unlock-bootloader.md)**——必需的第一步
- **[🛠️ 第三方 Recovery](./how-to-install-custom-recovery.md)**——安装前提
- **[❓ 常见问题与故障排除](../faqs.md)**——常见问题的解决方案

---

## 目录
- [认识第三方 ROM](#认识第三方-rom)
  - [为什么选择第三方 ROM？](#为什么选择第三方-rom)
  - [ROM 分类](#rom-分类)
- [前提条件与要求](#前提条件与要求)
    - [基本前提条件](#基本前提条件)
    - [所需工具](#所需工具)
    - [设备准备](#设备准备)
- [ROM 选择指南](#rom-选择指南)
- [安装流程](#安装流程)
- [安装后的设置](#安装后的设置)
- [故障排除指南](#故障排除指南)
- [保持更新](#保持更新)
- [接下来做什么？](#what-s-next)


## 认识第三方 ROM

第三方 ROM 是用来替换设备官方固件的 Android 替代发行版，可带来更强的隐私保护、更好的性能和更丰富的自定义。

### 为什么选择第三方 ROM？

- **延长设备寿命**——获得超出厂商生命周期终止（EOL）之后的更新
- **更强的隐私保护**——减少追踪/遥测
- **无预装垃圾软件**——没有厂商应用的干净系统
- **性能提升**——更好的续航与响应速度
- **深度自定义**——主题、功能与系统微调
- **更快的安全补丁**——由社区维护
- **可选的 Google 服务**——可选择 microG/沙盒化 Play/完全不装

### ROM 分类

#### 注重隐私与安全：
- **GrapheneOS**——为 Pixel 设备提供最高安全性（可重新锁定 Bootloader）
- **CalyxOS**——隐私优先，可选沙盒化 Google Play

#### 通用与功能向：
- **LineageOS**——最流行，设备支持最广
- **Pixel Experience**——为非 Pixel 设备带来 Pixel 风格体验
- **crDroid**——功能丰富，高度可定制
- **PixelOS** / ArrowOS——轻量、干净、更新频繁
- **iodéOS**——注重隐私，内置广告/追踪器拦截

#### 游戏与性能向：
- **Evolution X**——功能与性能均衡
- **Project Sakura**——注重性能的构建版本

::: warning **注意事项：**
- GrapheneOS 仅支持 Pixel 设备，并支持安全地重新锁定 Bootloader。其他大多数 ROM 都需要保持 Bootloader 解锁状态；除非 ROM 明确支持 AVB 重新锁定，否则切勿重新锁定。
:::
---

## 重要警告

::: danger ⚠️ **第三方 ROM 风险**
- **保修影响**——视地区而定，可能使保修失效（在某些司法辖区，法定保修权利可能仍然适用）
- **变砖风险**——镜像错误或分区刷错可能导致设备彻底变砖
- **应用兼容性**——银行/政务类应用依赖 Play Integrity，可能拒绝运行
- **责任自负**——更新、安全补丁、备份与恢复均需自行负责
- **重新锁定 Bootloader**——在不支持的 ROM 上重新锁定可能导致设备彻底变砖；只有当 ROM 明确支持带正确 vbmeta 签名的 AVB 2.0 时才可重新锁定
:::

---

## 前提条件与要求

### 基本前提条件
1. **[已解锁的 Bootloader](./how-to-unlock-bootloader.md)**
2. **[第三方 Recovery](./how-to-install-custom-recovery.md)**（TWRP/OrangeFox）或 ROM 自带的 Recovery
3. **兼容的 ROM**——与你设备的确切代号/变体匹配
4. **备份所有内容**——同时考虑 NANDroid 备份（如支持）和应用/数据备份
5. **手头备好官方固件**——用于紧急恢复（EDL/Odin/Mi Flash/fastboot 镜像）

### 所需工具
- 来自 Google 的**最新版 Android Platform Tools（ADB/Fastboot**）
- **USB 驱动（Windows）**：OEM 驱动或 Google USB Driver
- **第三方 Recovery 镜像/安装器 ZIP**（因设备而异）
- **ROM ZIP/镜像** + 可选的 GApps（见下方说明）
- **一台电脑**（Windows/macOS/Linux）和一根可靠的 USB 数据线

### 设备准备
- **电量充至 70% 以上**
- **使用质量良好的 USB 数据线/接口**
- **备份用户数据**（照片、2FA/密钥，以及（如适用）eSIM 信息）
- **记录设备信息：**型号、地区、代号、当前固件/Android 版本
- 若你的 Recovery 无法解密数据，进入 Recovery 前**先禁用屏幕锁定**
- **移除 Google/Samsung/Xiaomi 账户**，以免 FRP/防盗机制造成干扰

---

## ROM 选择指南

### 决策矩阵

| 需求 | 推荐 ROM | 理由 |
|------|------------------|-----|
| **最大隐私** | GrapheneOS（Pixel） | 基于硬件的安全、严格的应用沙盒、可重新锁定 |
| **隐私 + 广泛的应用兼容性** | CalyxOS | 默认注重隐私，可选沙盒化 Play |
| **设备支持最多** | LineageOS | 设备支持最广，更新成熟 |
| **Pixel 体验** | Pixel Experience / PixelOS | 在非 Pixel 设备上呈现 Pixel 外观与手感 |
| **自定义** | crDroid / Evolution X | 细粒度的功能集 |
| **轻量高性能** | ArrowOS | 干净、精简的构建 |

::: warning **GApps 说明：**
- LineageOS 推荐使用 MindTheGapps；NikGapps 也很流行。
- 在许多设备上，OpenGApps 已不再为最新的 Android 版本提供维护。
- 许多 ROM 提供“纯净版”（无 GApps）和“含 GApps”两种变体。请按自己的偏好选择。
:::

### 设备兼容性检查

#### 查找你的设备：
1. [CustomROMBay.org](https://customrombay.org/)
2. [XDA Forums](https://forum.xda-developers.com/)
3. ROM 官方网站

#### 核实型号/代号：
- 设置 → 关于手机 → 型号
- adb shell getprop ro.product.device（代号）
- fastboot getvar product
- 注意地区/运营商变体（例如 SM-G991B ≠ SM-G991U）
- 小米防回滚（ARB）机制可能在你刷入较旧固件时导致变砖——务必匹配所需的底层固件

---

## 安装流程

主要有两种安装流程：
- **基于 Recovery**（TWRP/OrangeFox/Lineage Recovery），通过 Install 或 ADB Sideload 进行
- **基于 Fastboot**（镜像/图形化网页安装器）——Pixel/GrapheneOS 常用

### 第 1 步：创建完整备份

#### 现代设备上的备份：
- TWRP/OrangeFox 的 NANDroid 并非在每台设备上都能完全支持动态分区；请核实你的 Recovery 的备份/恢复能力。
- 可考虑 Seedvault（LineageOS）、Swift Backup（需 root）或手动备份数据。
- 永远不要清除 persist/modem/EFS；丢失它们可能导致 Wi‑Fi、传感器、IMEI 损坏。

#### 操作步骤：
1. **进入 Recovery**
2. 如支持：Recovery → Backup → 选择 boot/system/data/vendor（除非有指引，否则避免选择 super）
3. 将备份复制到电脑或外部存储

### 第 2 步：下载 ROM 文件

- 与你设备/代号完全匹配的 ROM ZIP/镜像
- GApps（如需要；例如 LineageOS 用 MindTheGapps，或 NikGapps）
- 所需的固件/vendor 包（Xiaomi/OnePlus 通常需要特定的底层固件）
- 可选：Magisk/KernelSU/APatch、第三方内核、模块

**校验下载内容：**
- 优先使用 SHA-256 而非 MD5
- 如提供发布签名/摘要，请进行核对
- 确保 Android 版本/固件要求与你的设备匹配

### 第 3 步：准备设备

- 将 ROM 和附加包传输到设备/SD 卡，或准备好从电脑通过 ADB sideload 刷入
- 进入 Recovery
- 在动态分区设备上，某些操作需要进入 fastbootd：
  - 在 Bootloader 下执行：fastboot reboot fastboot（进入 fastbootd）

### 第 4 步：清除/格式化

::: warning ⚠️ 数据丢失警告
切换 ROM 系列或从官方系统转换时，通常需要进行完整的“Format Data”（格式化 Data，而不仅仅是恢复出厂设置），这会擦除内部存储。请先备份。
:::

- 小幅更新/覆盖刷入（同一 ROM 系列）时恢复出厂设置即可
- 完整的全新安装：
  - 在 TWRP/OrangeFox 中：Wipe → Format Data（输入 yes）
  - Advanced Wipe：System、Data、Cache、Dalvik/ART Cache
  - 切勿清除 persist/modem/EFS

**注意：**Recovery 的解密能力因设备而异。如果你的 Recovery 无法解密 /data，请使用 ADB sideload 或外部 SD 卡/OTG 存储。

### 第 5 步：刷入第三方 ROM

通过 Recovery 安装（典型方式）：
1. Install → 选择 ROM ZIP → 滑动/确认
2. 立即刷入 GApps（如果使用的是纯净版 ROM）。GApps 必须在首次开机前刷入。
3. 刷入附加包：Magisk（root）、KernelSU（基于内核的 root）、第三方内核等。

#### ADB sideload（LineageOS/其他 ROM）：
1. 在 Recovery 中：Apply Update → Apply from ADB
2. 在电脑上：adb sideload rom.zip
3. 然后：adb sideload gapps.zip（如需要）
4. 然后：adb sideload 附加包（例如你的 Recovery 支持时的 Magisk ZIP）

#### Fastboot 镜像（Pixel/GrapheneOS/部分 ROM）：
- 使用厂商提供的安装脚本或网页安装器（见 ROM 专属章节）
- 对于动态分区设备，脚本可能会自动重启进入 fastbootd
- 切勿错误混用 init_boot/boot 镜像；请遵循设备专属文档

#### AVB/vbmeta（进阶）：
- 仅当你的设备/ROM 说明明确要求时才禁用 verity/verification。
- 错误的 vbmeta 操作可能导致无法开机或变砖。

#### A/B slot：
- 通常由安装器/Recovery 自动处理。手动 fastboot 操作时：
  - fastboot getvar current-slot
  - fastboot set_active a 或 b
  - 部分镜像支持 _ab 目标（例如 fastboot flash boot_ab boot.img）

### 第 6 步：首次开机与设置

- 首次开机可能需要 5–20 分钟；请勿中断
- 完成设置向导
- 验证基本功能：Wi‑Fi、移动数据、通话/短信、相机、传感器、指纹、NFC、蓝牙、GPS
- 对于 eSIM：清除操作可能会抹掉激活信息；清除前请先咨询运营商

---

## 各 ROM 专属安装说明

### GrapheneOS（仅限 Pixel）

网页安装器方法：
1. 访问 https://grapheneos.org/install/web
2. 使用 Chrome/Chromium（WebUSB）
3. 按照引导流程操作（自动处理 fastboot/fastbootd、镜像和 slot）
4. 无需第三方 Recovery

优势：最高级别的安全姿态、验证启动、加固的工具链、沙盒化 Google Play（可选）

Bootloader：在 GrapheneOS 上可以安全地重新锁定。在不明确支持重新锁定的 ROM 上请勿重新锁定。

### LineageOS（大多数设备）

标准方法：
1. 下载官方构建：https://download.lineageos.org/
2. 按设备指南使用 Lineage Recovery 或 TWRP/OrangeFox
3. Lineage 官方文档推荐使用 ADB sideload
4. 如有需要，使用 MindTheGapps（推荐）或兼容的 GApps 包
5. 支持集成 Seedvault 备份

优势：支持广泛、更新稳定、基础设施可信

### Pixel Experience / PixelOS

- Pixel Experience：https://download.pixelexperience.org/
- PixelOS：在官方网站或 XDA 帖子中搜索你的设备

说明：
- 部分构建内置 GApps；其他则为“纯净版”
- 通过 Recovery/ADB sideload 安装；遵循设备帖子的说明
- 通常每月发布安全补丁

---

## 安装后的设置

### 基本配置
- 检查并安装更新（设置 → 系统 → 更新器）
- 恢复数据（Seedvault、Swift Backup、应用自带的备份）
- 检查权限与隐私设置
- 如你的运营商/ROM 支持，配置 IMS（VoLTE/VoWiFi/5G）

### 隐私优化
- 关闭 ROM 和应用中的遥测/分析
- 私人 DNS（例如 dns.adguard.com、1.1.1.1、NextDNS）
- 考虑使用 F-Droid、Obtainium、Aurora Store 等注重隐私的应用来源
- 使用口碑良好的防火墙（例如 NetGuard）并限制后台活动
- 请注意：激进的广告拦截/VPN 可能破坏推送通知；必要时将 FCM 排除在外

### 应用安装
- F-Droid——开源应用
- Aurora Store——无需 Google 账户即可访问 Play Store
- APKMirror——请核对签名；尽可能优先选择开发者官方来源

### 银行/政务类应用
- 许多应用现在强制执行 Play Integrity API（基于硬件的证明）。
- Magisk DenyList 有助于对选定应用隐藏 root；也存在 Shamiko 和“Play Integrity Fix”模块，但它们可能违反应用服务条款，且不保证有效。
- 请遵守当地法律和应用服务条款。如果此类应用至关重要，可考虑使用未 root 的官方系统，或可重新锁定的安全 ROM 配置/设备。

---

## 故障排除指南

### 常见安装问题

#### 无限重启/卡在 Logo：
- 确认 ROM 与设备的确切代号/变体匹配
- 如果切换了 ROM 系列，请 Format Data（而不只是清除）
- 重新刷入 ROM + 正确的 GApps
- 确保已安装所需的底层固件/vendor
- 检查当前活动 slot；尝试切换 slot
- 最后手段：恢复备份或重新刷回官方系统

#### Recovery 中的解密问题：
- 使用 ROM 自带的 Recovery + ADB sideload
- 刷入前移除屏幕锁定（如果安全）
- 更新到支持你 Android 版本的 Recovery 构建

#### 功能缺失（相机/IMS/传感器）：
- 刷入/更新所需的 vendor/固件包
- 查看设备帖子了解专有 blob/相机修复
- IMS 配置方式各异；部分 ROM 提供开关/工具

#### 性能/续航问题：
- 如果来自其他 ROM，请全新刷入
- 让 ROM 经过 1–3 个充电周期后逐渐稳定（索引过程）
- 更新内核/ROM；考虑为你的设备换用口碑稳定的内核
- 降低动画效果；限制行为异常的应用

#### Play Integrity/SafetyNet：
- 许多自定义环境无法通过 strong 完整性验证。basic/weak 级别或许可以达成。
- 在已解锁的设备上通过 strong 完整性验证，从设计上通常就无法实现。

### 恢复方案

#### 紧急恢复：
1. 进入 Bootloader/Fastboot
2. 动态分区设备：如有需要，执行 fastboot reboot fastboot（fastbootd）
3. 刷入官方镜像（Pixel：flash-all；Xiaomi：Mi Flash；Samsung：Odin）
4. Qualcomm EDL（9008）是最后手段；请仔细研究或寻求专业帮助

#### 备份恢复：
1. 进入 Recovery
2. 恢复 NANDroid（如果支持，且与当前分区布局一致）
3. 或重新刷入 ROM，并从 Seedvault/Swift Backup 恢复应用数据

---

## 保持更新

### 更新策略

- **手动更新：**
  - 关注官方发布/Telegram/XDA/GitHub
  - 同一 ROM 系列内的覆盖刷入（dirty flash）通常可用于月度更新
  - Android 大版本跨越或官方建议时进行全新刷入（clean flash）

- **OTA 更新：**
  - 许多 ROM 支持无缝 A/B OTA
  - LineageOS/Pixel Experience 通常自带更新器应用
  - 如果使用第三方 Recovery，请确保 OTA 兼容（virtual A/B 可能完全绕过 Recovery）

### 社区资源

- [XDA Developers](https://forum.xda-developers.com/)——设备论坛、指南、内核
- [r/LineageOS](https://reddit.com/r/LineageOS)——用户讨论
- [GitHub Issues](https://github.com/LineageOS)——缺陷与开发动态
- [常见问题与故障排除](../faqs.md)
- [加入社区](../about.md#community-support)

官方资源：
- [CustomROMBay.org](https://customrombay.org/)
- [Pixel Experience Telegram](https://t.me/s/pixelexperience)

---

::: tip 💡 **第三方 ROM 成功秘诀**
- 始终手头备有状态良好的备份和官方固件
- 刷入前完整通读你设备的 XDA/官方帖子
- 使用 ROM 推荐的 Recovery 和 GApps
- 除非 ROM 明确支持 AVB 重新锁定，否则切勿重新锁定 Bootloader
- 对每次下载都校验校验和/签名
:::

**需要更多帮助？访问我们的[常见问题板块](../faqs.md)，或查阅[主 Root 指南](./index.md)获取更多故障排除方法与技巧。**

---

::: tip **恭喜！你已成功安装第三方 ROM。**

#### 接下来做什么？
- [添加 Root 权限](./root-framework-comparison.md)——Magisk（Zygisk）、KernelSU（基于内核）、APatch
- [第三方内核](../apps-and-modules/performance#内核管理)——性能/续航调校
- [LSPosed 模块](./lsposed-guide.md)——现代 Xposed 兼容模块（Zygisk/LSPosed）
:::
