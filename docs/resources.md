---
layout: doc
title: Android Root 资源大全 2026
description: "Android root 资源完整合集：安全 root、第三方 ROM 与设备定制所需的工具、社区、指南与专家资料。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/resources
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Android Root 资源大全 2026 - 完整指南与工具合集
  - - meta
    - property: og:description
      content: Android root 资源终极合集，包含安全设备定制与 root 权限所需的工具、社区、指南与专家资料。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/resources
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
    - property: og:image:secure_url
      content: https://awesome-android-root.zhoe.org/images/og.png
  - - meta
    - property: og:image:alt
      content: Android Root 资源 - 完整指南与工具合集
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
      content: Android Root 资源 2026 - 完整合集
  - - meta
    - name: twitter:description
      content: Android root 所需的一切——工具、社区、指南与专家资源，尽在一个综合合集之中。
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
  - - meta
    - name: twitter:image:alt
      content: Android Root 资源 2026 - 工具、社区与指南
  - - meta
    - name: author
      content: Awesome Android Root Project
  - - meta
    - property: article:author
      content: https://github.com/awesome-android-root/awesome-android-root
  - - meta
    - property: article:section
      content: 资源
  - - meta
    - property: article:tag
      content: Android Root
  - - meta
    - property: article:tag
      content: 资源
  - - meta
    - property: article:tag
      content: 工具
  - - meta
    - property: article:published_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - property: article:modified_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - name: robots
      content: index, follow, max-image-preview:large
---

# Android Root 资源中心 2026

> Android root、定制与恢复的综合参考资料。

---

## 快速导航

- [入门指南](#🚀-getting-started)
- [核心工具](#核心工具)
- [固件与设备数据](#固件与设备数据)
- [模块与应用仓库](#module-app-repositories)
- [学习与参考](#学习与参考)
- [社区与支持](#社区与支持)
- [急救与恢复](#急救与恢复)
- [进阶工程](#进阶工程)
- [视频教程](#视频教程)
- [官方项目链接](#官方项目链接)

---

## 🚀 入门指南

### 核心清单

| 步骤 | 说明 | 资源 |
|:-----|:------------|:---------|
| **1. 学习基础** | 理解 root 权限意味着什么 | [什么是 Root？](./rooting-guides/index.md#理解-root-权限) |
| **2. 安全检查** | 了解风险与收益 | [Root 安全吗？](./faqs.md#root-安全吗) |
| **3. 设备指南** | 找到你的具体设备 | [设备指南](./rooting-guides/index.md#机型专属指南) |
| **4. 准备工作** | 备份并解锁 Bootloader | [Bootloader 指南](./rooting-guides/how-to-unlock-bootloader.md) |

### Android 版本兼容性

| Android 版本 | 推荐方法 | 内核 | 备注 |
|:----------------|:-------------------|:-------|:------|
| **Android 16** | APatch / KernelSU | GKI 2.0 | 开发者预览 - 实验性支持 |
| **Android 15** | APatch / KernelSU / Magisk | GKI 2.0 | 所有方法均稳定 |
| **Android 14** | Magisk / APatch / KernelSU | GKI 2.0 | 成熟且经过充分测试 |
| **Android 13** | Magisk / KernelSU | GKI / 旧版 | 广泛的设备支持 |
| **Android 12–12L** | Magisk | GKI / 旧版 | 兼容性最广 |
| **Android 11 及以下** | Magisk | 旧版 | 长期支持 |

> [!TIP]
> **GKI（通用内核镜像）**设备——通常为搭载内核 5.10+ 的 Android 12+ 设备——拥有最广泛的方法兼容性。可在**设置 → 关于手机 → 内核版本**中查看你的内核版本。

---

## 核心工具

### Root 方案

| 方案 | 最适合 | Android | Zygisk | 隐藏 Root | 状态 | 来源 |
|:---------|:---------|:--------|:-------|:----------|:-------|:-------|
| **[Magisk](./rooting-guides/magisk-guide.md)** | 通用兼容 | 6.0+ | ✅ 内置 | DenyList | 活跃 | [GitHub](https://github.com/topjohnwu/Magisk) |
| **[KernelSU](./rooting-guides/kernelsu-guide.md)** | 内核级隐藏 root | 12+ (GKI) | 通过模块 | 内置 | 活跃 | [GitHub](https://github.com/tiann/KernelSU) |
| **[KernelSU Next](./rooting-guides/kernelsu-guide.md)** | 高级内核 root，支持更广泛的内核 | 4.4–6.6 内核 | 通过模块 | 内置 + SUSFS | 活跃 | [GitHub](https://github.com/KernelSU-Next/KernelSU-Next) |
| **[APatch](./rooting-guides/apatch-guide.md)** | 现代 GKI 设备 | 12+ (GKI) | 通过模块 | 基于 KPM | 活跃 | [GitHub](https://github.com/bmax121/APatch) |
| **[LSPosed (Fork)](./rooting-guides/lsposed-guide.md)** | Xposed framework 模块 | 8.1–16 | 必需 | 不适用 | 活跃 | [GitHub](https://github.com/JingMatrix/LSPosed) |
| **[GhostLock 临时 Root](./rooting-guides/root-without-unlocking-bootloader.md)** | 临时 root，锁定 Bootloader（CVE-2026-43499） | 部分设备，≤ 约 2026 年 6 月补丁 | 通过 KSU | Bootloader 读取官方系统 | 窗口正在关闭 | [指南](./rooting-guides/root-without-unlocking-bootloader.md) |

> [!NOTE]
> **Magisk** 仍是兼容性最广的方案。**KernelSU** 和 **APatch** 在 GKI 设备上提供更出色的隐藏能力，但需要内核级集成。**KernelSU Next** 是一种高级内核级 root 方案，支持从 4.4 到 6.6 的内核，将兼容性扩展到非 GKI 及较旧的设备。**GhostLock 临时 root** 则完全是另一回事：一种在*锁定*的 Bootloader 上授予仅限当前会话 root 权限的内核漏洞利用——在考虑使用之前，请先阅读[专门指南](./rooting-guides/root-without-unlocking-bootloader.md)。
 
> [!TIP]
> 就目前最佳的 root 隐藏效果而言，社区推荐 **KernelSU Next + SUSFS**。对于 Xposed 模块，**LSPosed**（JingMatrix fork）是仍在积极维护的选择。


### Zygisk 实现

| 工具 | 用途 | 兼容性 | 来源 |
|:-----|:--------|:--------------|:-------|
| **Magisk 内置 Zygisk** | Magisk 中的默认 Zygisk | Magisk 24+ | 内置于 [Magisk](https://github.com/topjohnwu/Magisk) |
| **ZygiskNext** | 面向 KSU/Magisk/APatch 的独立 Zygisk | Magisk、KernelSU、APatch | [GitHub](https://github.com/LSPosed/ZygiskNext) |
| **ReZygisk** | 透明的开源 Zygisk 分支 | Magisk、KernelSU、APatch | [GitHub](https://github.com/PerformanC/ReZygisk) |

> [!TIP]
> 请在上表中比较各 Zygisk 实现的优势与取舍。

### 非 root 特权工具

| 工具 | 用途 | 需要 Root | 来源 |
|:-----|:--------|:--------------|:-------|
| **Shizuku** | 无需完整 root 即可委派 ADB/系统 API 访问 | 否 | [GitHub](https://github.com/RikkaApps/Shizuku) |
| **Dhizuku** | 通过 Shizuku 委派设备所有者权限 | 否 | [GitHub](https://github.com/iamr0s/Dhizuku) |
| **aShell You** | 现代化的 ADB shell 界面 | 否 | [GitHub](https://github.com/DP-Hridayan/aShellYou) |

### Recovery 与刷入工具

#### 第三方 Recovery

| Recovery | 特性 | 兼容性 | 来源 |
|:---------|:---------|:--------------|:-------|
| **TWRP** | 行业标准 | 通用 | [twrp.me](https://twrp.me/) |
| **OrangeFox** | 增强的界面，内置工具 | 部分设备 | [orangefox.download](https://orangefox.download/) |
| **PitchBlack** | 带附加功能的 TWRP 分支 | 部分设备 | [pitchblackrecovery.com](https://pitchblackrecovery.com/) |
| **SkyHawk** | 轻量级替代选择 | 部分设备 | [GitHub](https://github.com/SHRP) |
| **AOSP Recovery 源码** | 官方基础 Recovery | 参考 | [AOSP](https://android.googlesource.com/platform/bootable/recovery/) |

#### 平台工具

| 工具 | 用途 | 平台 | 来源 |
|:-----|:--------|:---------|:-------|
| **ADB & Fastboot** | 核心 Android 调试/刷入工具 | 全部 | [Android SDK](https://developer.android.com/studio/releases/platform-tools) |
| **Android Flash Tool** | 基于网页的刷入（Pixel/AOSP） | 网页 | [flash.android.com](https://flash.android.com/) |
| **Heimdall** | 开源 Samsung 刷入工具 | 全部 | [GitHub](https://github.com/Benjamin-Dobell/Heimdall) |
| **Odin** | Samsung 固件刷入（官方） | Windows | Samsung 社区分发 |
| **Mi Flash Tool** | Xiaomi Fastboot 刷入 | Windows | [xiaomiflashtool.com](https://xiaomiflashtool.com/) |
| **SP Flash Tool** | MediaTek SoC 刷入 | Windows/Linux | [spflashtool.com](https://spflashtool.com/) |
| **MTK Client** | 开源 MediaTek 绕过/刷入工具 | Python | [GitHub](https://github.com/bkerler/mtkclient) |
| **QFIL（Qualcomm）** | Qualcomm EDL 模式刷入 | Windows | Qualcomm 官方软件包 |
| **LineageOS Recovery** | 官方 LineageOS Recovery 构建 | 因设备而异 | [LineageOS Wiki](https://wiki.lineageos.org/devices/) |


### 固件来源

| 品牌 | 官方来源 | 替代来源 | 备注 |
|:------|:----------------|:------------|:------|
| **Google Pixel** | [工厂镜像](https://developers.google.com/android/images) | [OTA 镜像](https://developers.google.com/android/ota) | 直接来自 Google |
| **Samsung** | [Samsung Developers](https://developer.samsung.com/) | SamMobile、Frija、SamFW | 因地区而异 |
| **Xiaomi** | [MIUI ROM](https://c.mi.com/global/miuidownload/) | [Xiaomi Firmware Updater](https://xiaomifirmwareupdater.com/) | Fastboot 与 Recovery |
| **OnePlus** | [OnePlus Support](https://www.oneplus.com/support) | Oxygen Updater 应用 | payload.bin 格式 |
| **Nothing** | [Nothing Support](https://nothing.tech/support) | 渠道有限 | 新品牌 |
| **Motorola** | [Motorola Support](https://motorola-global-portal.custhelp.com/) | [Lolinet Mirrors](https://mirrors.lolinet.com/firmware/moto/) | 请核实地区 |
| **ASUS** | [ASUS Support](https://www.asus.com/support/) | 直接下载 | ROG 与 Zenfone |
| **Realme** | [Realme Support](https://www.realme.com/support/software-update) | realme-updater | OZIP 格式 |

### 模块与应用仓库

| 仓库 | 类型 | 内容 | 链接 |
|:-----------|:-----|:--------|:-----|
| **MMRL** | Magisk 模块 | 社区模块 | [GitHub](https://github.com/MMRLApp/MMRL) |
| **Fox MMRL** | 模块管理器 | 替代客户端 | [GitHub](https://github.com/Fox2Code/FoxMagiskModuleManager) |
| **LSPosed 模块** | Xposed 模块 | 应用修改 | [仓库](https://github.com/Xposed-Modules-Repo) |
| **Root 应用索引** | 精选合集 | 650+ 个 root 应用 | [合集](./apps-and-modules/index.md) |
| **IzzyOnDroid** | F-Droid 仓库 | FOSS 开源应用 | [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) |
| **KernelSU 模块仓库** | KernelSU 模块 | 官方模块仓库 | [modules.kernelsu.org](https://modules.kernelsu.org/) |


### 提取与实用工具

| 工具 | 用途 |来源 |
|:-----|:--------|:-------|
| **Payload-Dumper-Android** | 在 Android 上无需电脑即可从 OTA.zip 或 payload.bin 提取分区 | [GitHub](https://github.com/rajmani7584/Payload-Dumper-Android) |
| **payload-dumper-go** | 提取 payload.bin | [GitHub](https://github.com/ssut/payload-dumper-go) |
| **payload-dumper-py** | Python payload 提取器 | [GitHub](https://github.com/vm03/payload_dumper) |
| **payload-dumper-rust** | Android OTA payload 提取器 | [GitHub](https://github.com/rhythmcache/payload-dumper-rust) |
| **AnyKernel3** | 内核打包/刷入框架 | [GitHub](https://github.com/osm0sis/AnyKernel3) |



---

### 支持 root 的 GKI 内核构建

| 项目 | 特性 | 来源 |
|:--------|:---------|:-------|
| **WildKernels GKI** | KernelSU/KernelSU-Next（支持 WildKSU 管理器）、SUSFS root 隐藏补丁、BBG Baseband Guard 安全防护 | [GitHub](https://github.com/WildKernels/GKI_KernelSU_SUSFS) |
| **WildKernels OnePlus** | 面向 OnePlus GKI 设备的 KSU + SUSFS 构建 | [GitHub](https://github.com/WildKernels/OnePlus_KernelSU_SUSFS) |

---

## 学习与参考

### 综合指南

| 指南类别 | 说明 | 链接 |
|:---------------|:------------|:-----|
| **Root 综合主指南** | 完整的 root 工作流 | [索引](./rooting-guides/index.md) |
| **设备专属指南** | 各品牌专属流程 | [设备指南](./rooting-guides/index.md#机型专属指南) |
| **方法对比** | 选择合适的 root 方法 | [对比](./rooting-guides/root-framework-comparison.md) |
| **精简预装** | 安全移除不需要的应用 | [精简预装指南](./general-guides/android-apps-debloating.md) |
| **广告拦截** | 全系统去除广告 | [广告拦截指南](./general-guides/android-adblocking.md) |
| **第三方 Recovery 基础** | 刷入与备份工作流 | [如何安装第三方 Recovery](./rooting-guides/how-to-install-custom-recovery.md) |
| **临时 Root（无需解锁）** | 在锁定的 Bootloader 上使用 GhostLock（CVE-2026-43499）获取临时 root | [不解锁 Bootloader 获取 Root](./rooting-guides/root-without-unlocking-bootloader.md) |
| **Bootloader 修改与临时 Root** | Kaeru、Fenrir 及锁定 Bootloader 方案 | [临时 root 方案](./rooting-guides/temporary-root-solutions.md) |

---

## 社区与支持

### 主要社区

| 平台 | 关注点 | 最适合 | 链接 |
|:---------|:------|:---------|:-----|
| **XDA Developers** | 开发中心 | ROM、内核、修改 | [论坛](https://forum.xda-developers.com/) |
| **X/Twitter** | 综合 root 讨论 | 快速求助、讨论 | [X](https://x.com/awsm_and_root) |
| **r/Magisk** | Magisk 专属 | 模块、故障排除 | [Reddit](https://reddit.com/r/Magisk) |
| **r/LineageOS** | 第三方 ROM | ROM 支持 | [Reddit](https://reddit.com/r/LineageOS) |
| **Telegram 群组** | 实时聊天 | 快速响应 | 多个频道 |
| **Pixel 社区** | Pixel 专属 root | 设备更新 | [Reddit](https://reddit.com/r/GooglePixel) |
| **ReZygisk Telegram** | ReZygisk 支持 | 模块更新与讨论 | [Telegram](https://t.me/rezygisk) |


### 开发者社区

| 社区 | 关注点 | 平台 |
|:----------|:------|:---------|
| **Android Developers** | 官方文档 | [developer.android.com](https://developer.android.com/) |
| **AOSP** | Android 开源项目 | [source.android.com](https://source.android.com/) |
| **GrapheneOS Discord** | 加固与安全见解 | [grapheneos.org](https://discord.com/invite/grapheneos) |

---

## 固件与设备数据

### 厂商解锁政策

| 品牌 | 解锁方式 | 保修影响 | 等待期 | 可否恢复 | 指南 |
|:------|:--------------|:----------------|:------------|:-----------|:------|
| **Google Pixel** | OEM unlock 开关 | 保修保留 | 无 | ✅ | [指南](./rooting-guides/how-to-root-pixel-phone.md) |
| **OnePlus** | OEM unlock 开关 | 保修失效 | 无 | ✅ | [指南](./rooting-guides/how-to-root-oneplus-phone.md) |
| **Xiaomi** | Mi Unlock Tool | 保修失效 | 7–30 天 | ✅ | [指南](./rooting-guides/how-to-root-xiaomi-phone.md) |
| **Samsung** | OEM unlock（视地区而定） | 保修失效 + Knox 触发 | 无 | ❌ Knox 永久触发 | [指南](./rooting-guides/how-to-root-samsung-phone.md) |
| **Nothing** | OEM unlock 开关 | 保修失效 | 无 | ✅ | [指南](./rooting-guides/how-to-root-nothing-phone.md) |
| **Motorola** | 申请解锁码 | 保修失效 | 无 | ✅ | [指南](./rooting-guides/how-to-root-motorola-phone.md) |
| **ASUS** | ASUS Unlock 应用 | 保修失效 | 无 | ✅ | ASUS Unlock 工具 |
| **Realme** | 深度测试应用 | 保修失效 | 需要申请 | ✅ | Realme 社区 |
| **Sony** | 通过网站申请解锁码 | 保修失效 + 丢失 DRM 密钥 | 无 | ⚠️ DRM 永久丢失 | Sony 开发者门户 |
| **Fairphone** | OEM unlock 开关 | 保修保留 | 无 | ✅ | Fairphone 文档 |
| **OPPO** | 已停止 | 不适用 | 不适用 | 不适用 | 已不可用 |
| **Huawei** | 自 2018 年起被封锁 | 不适用 | 不适用 | 不适用 | 仅第三方途径（有风险） |

### 热门第三方 ROM

| ROM | 基础 | 侧重点 | Root 支持 | 网站 |
|:----|:-----|:------|:-------------|:--------|
| **LineageOS** | AOSP | 稳定、隐私、广泛的设备支持 | 可选（附加组件） | [lineageos.org](https://lineageos.org/) |
| **GrapheneOS** | AOSP | 强化安全 | 不建议 | [grapheneos.org](https://grapheneos.org/) |
| **CalyxOS** | AOSP | 兼顾隐私与易用性 | 可选 | [calyxos.org](https://calyxos.org/) |
| **/e/OS (Murena)** | LineageOS | 去 Google 化，内置 microG | 可选 | [e.foundation](https://e.foundation/) |
| **crDroid** | LineageOS | 高度定制 | 内置支持 | [crdroid.net](https://crdroid.net/) |
| **Evolution X** | AOSP | Pixel 特性 + 定制 | 内置支持 | [evolution-x.org](https://evolution-x.org/) |
| **Paranoid Android** | AOSP | 独特的 UX 特性 | 可选 | [paranoidandroid.co](https://paranoidandroid.co/) |
| **PixelOS** | AOSP | 非 Pixel 设备上的 Pixel 体验 | 内置支持 | [pixelos.net](https://pixelos.net/) |
| **Pixel Experience** | AOSP | Pixel 特性（覆盖更多设备） | 内置支持 | [pixelexperience.org](https://pixelexperience.org/) |

> [!NOTE]
> 一些 ROM（如 Evolution X）本身已在 ROM 内置了伪装功能。在添加 PIF 之前，请先查阅你的 ROM 文档，你可能并不需要它。CrDroid、InfinityX 和 Matrixx 等第三方 ROM 默认已内置 Keybox 注入。你可以不使用 PIF 模块，而是使用 TrickyStore + 来自你自己 ROM 的 Keybox 注入。

---

## 急救与恢复

### 常见问题与解决方法

| 问题 | 症状 | 解决方法 | 指南 |
|:------|:---------|:---------|:------|
| **无限重启（Bootloop）** | 卡在 logo 界面 | 刷入官方固件 | [修复指南](./troubleshooting.md#device-won-t-boot-bootloop) |
| **软变砖** | 系统错误 | 通过第三方 Recovery 还原 | [恢复指南](./troubleshooting.md#变砖设备恢复) |
| **硬变砖** | 完全无响应 | EDL/下载模式 | 设备论坛 |
| **IMEI 丢失** | 无网络 | 还原备份 | 见设备论坛 |
| **SafetyNet 校验失败** | 应用检测 | 隐藏 root 的方法 | [隐藏指南](./troubleshooting.md#play-integrity-与银行类应用) |

### 按芯片组分类的急救工具

| 芯片组 | 工具 | 模式 | 用途 |
|:--------|:-----|:-----|:--------|
| **Qualcomm** | QFIL/EDL 工具 | EDL (9008) | 深度刷入恢复 |
| **MediaTek** | SP Flash Tool | 下载模式 | 完整刷入恢复 |
| **Samsung Exynos** | Odin/Heimdall | 下载模式 | 固件还原 |
| **Kirin（Huawei）** | HiSuite | Fastboot | 有限的恢复能力 |

### 关键备份

| 备份类型 | 时机 | 工具 | 还原方法 |
|:------------|:-----|:-----|:---------------|
| **EFS/IMEI** | 首次 root 之前 | TWRP/DD | 第三方 Recovery |
| **Boot 镜像** | 修补之前 | 官方固件 | Fastboot 刷入 |
| **完整 Nandroid 备份** | 重大修改之前 | TWRP | TWRP 还原 |
| **Persist 分区** | 解锁后进行一次 | DD 命令 | Fastboot/Recovery |

---

## 进阶工程

### 开发与调试

| 资源 | 用途 | 链接 |
|:---------|:--------|:-----|
| **Android Debug Bridge** | 命令参考 | [ADB 文档](https://developer.android.com/studio/command-line/adb) |
| **Fastboot 命令** | Bootloader 操作 | [Fastboot 文档](https://developer.android.com/studio/releases/platform-tools) |
| **内核编译** | 自定义内核开发 | [内核指南](https://source.android.com/docs/setup/build/building-kernels) |
| **SELinux 策略** | 安全配置 | [SELinux 文档](https://source.android.com/docs/security/features/selinux) |
| **Android 安全公告** | 安全更新 | [安全更新](https://source.android.com/docs/security/bulletin) |
| **Android Verified Boot** | 信任链详解 | [AVB 文档](https://source.android.com/docs/security/features/verifiedboot) |
| **动态分区** | 灵活的分区方式 | [动态分区](https://source.android.com/docs/core/ota/dynamic_partitions) |
| **通用内核镜像** | GKI 架构 | [GKI 文档](https://source.android.com/docs/core/architecture/kernel/generic-kernel-image) |

### 安全与合规参考

| 主题 | 覆盖内容 | 链接 |
|:------|:---------|:-----|
| **Play Integrity API** | 关于 root 检测的官方指引 | [开发者文档](https://developer.android.com/google/play/integrity) |
| **A/B 系统更新** | 无缝更新流程 | [A/B 系统](https://source.android.com/docs/core/ota/ab) |
| **Project Treble** | HAL 抽象层 | [Treble 文档](https://source.android.com/docs/core/architecture) |
| **Mainline 模块** | 模块化更新交付 | [Mainline](https://source.android.com/docs/core/architecture/modular-system) |

---

## 视频教程

### 推荐频道

| 频道 | 内容类型 | 质量 | 链接 |
|:--------|:-------------|:--------|:-----|
| **XDA TV** | 官方教程 | 专业 | [YouTube](https://www.youtube.com/user/xdadevelopers) |
| **HowToMen** | Android 修改 | 循序渐进 | [YouTube](https://www.youtube.com/@howtomen) |
| **Sam Beckman** | 评测与教程 | 制作精良 | [YouTube](https://www.youtube.com/@sambeckman) |
| **TechDoctorUK** | Android TV 与手机 | 内容全面 | [YouTube](https://www.youtube.com/results?search_query=TechDoctorUK) |

⚠️ **请务必将视频教程与文字文档对照核实，以确保准确性**

---

## 官方项目链接

### 项目资源

| 资源 | 说明 | URL |
|:---------|:------------|:----|
| **官方网站** | 主站 | [awesome-android-root.zhoe.org](https://awesome-android-root.zhoe.org) |
| **GitHub 仓库** | 源代码 | [GitHub](https://github.com/awesome-android-root/awesome-android-root) |
| **Issue 跟踪器** | 错误报告 | [Issues](https://github.com/awesome-android-root/awesome-android-root/issues) |
| **讨论区** | 社区问答 | [Discussions](https://github.com/awesome-android-root/awesome-android-root/discussions) |
| **参与贡献** | 如何提供帮助 | [贡献指南](./contributing.md) |
| **Twitter/X** | 最新动态 | [@awsm_and_root](https://x.com/awsm_and_root) |

### 快速参考

| 需求 | 首选资源 | 备用资源 |
|:-----|:----------------|:----------------|
| **紧急求助** | [故障排除](./troubleshooting.md#紧急恢复) | [XDA 设备论坛](https://forum.xda-developers.com/) |
| **Root 应用** | [应用合集](./apps-and-modules/index.md) | [F-Droid](https://f-droid.org/) |
| **寻找模块** | [MMRL](https://github.com/MMRLApp/MMRL) | [Telegram 频道](https://t.me/magiskmod_update) |
| **固件** | 厂商官网 | [固件数据库](#固件来源) |

---

## ⚠️ 法律与安全须知

> **重要提示：** 对设备进行 root 操作：
> - 可能使保修失效
> - 操作不当可能导致设备变砖
> - 可能暴露安全漏洞
> - 可能触发防篡改机制
> 
> **务必：**
> - 在 root 之前备份你的数据
> - 使用官方固件来源
> - 仔细遵循指南
> - 了解相关风险

---

## 🤝 参与贡献

这是一个社区驱动的项目。欢迎贡献！

- **报告问题：** [Issue 跟踪器](https://github.com/awesome-android-root/awesome-android-root/issues)
- **提交更新：** [Pull Request](https://github.com/awesome-android-root/awesome-android-root/pulls)
- **参与讨论：** [社区论坛](https://github.com/awesome-android-root/awesome-android-root/discussions)
- **贡献准则：** [贡献指南](./contributing.md)

---

<div align="center">

**维护者：** [Awesome Android Root 社区](https://github.com/awesome-android-root/awesome-android-root)

[首页](https://awesome-android-root.zhoe.org) | [Root 应用](./apps-and-modules/index.md) | [指南](./rooting-guides/index.md) | [常见问题](./faqs.md)

</div>