---
layout: doc
title: Android Root 指南
description: "最全面的 Android Root 指南。通过分步说明学习 Magisk、KernelSU 与 APatch，包含机型专属指南与 root 隐藏技巧。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/  
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: Android Root 指南 | Awesome Android Root
  - - meta
    - property: og:description
      content: 最全面的 Android Root 指南，涵盖 Magisk、KernelSU、APatch 的安装方法，并为 Pixel、Samsung、Xiaomi、OnePlus 等机型提供专属教程。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/  
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og.png  
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: Android Root 指南 | Awesome Android Root
  - - meta
    - name: twitter:description
      content: 完整的 Android root 教程，包含 Magisk、KernelSU、APatch 指南与机型专属说明，安全刷入 root。涵盖 Vector/LSPosed 框架与 Play Integrity 绕过。
  - - meta
    - name: author
      content: Awesome Android Root 项目
  - - meta
    - property: article:author
      content: https://github.com/awesome-android-root/awesome-android-root  
  - - meta
    - property: article:section
      content: Android Root 教程
  - - meta
    - property: article:tag
      content: Android Root
  - - meta
    - property: article:tag
      content: Magisk
  - - meta
    - property: article:tag
      content: KernelSU 教程
  - - meta
    - property: article:tag
      content: APatch Root
  - - meta
    - property: article:tag
      content: 解锁 Bootloader
  - - meta
    - property: article:tag
      content: 第三方 Recovery
  - - meta
    - property: article:tag
      content: Vector 框架
  - - meta
    - property: article:tag
      content: LSPosed 框架
  - - meta
    - property: article:tag
      content: Play Integrity Fix
  - - meta
    - property: article:tag
      content: Android 深度定制
  - - meta
    - property: article:published_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - property: article:modified_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - name: robots
      content: index, follow, max-image-preview:large
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Android Root 指南",
        "description": "使用 Magisk、KernelSU 或 APatch root Android 设备的完整教程，包含安全实践与 Play Integrity 绕过方法",
        "totalTime": "PT2H",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "tool": [
          {"@type": "HowToTool", "name": "Android 设备"},
          {"@type": "HowToTool", "name": "装有 ADB/Fastboot 的电脑"},
          {"@type": "HowToTool", "name": "USB 数据线（支持数据传输）"}
        ],
        "supply": [
          {"@type": "HowToSupply", "name": "Magisk APK"},
          {"@type": "HowToSupply", "name": "第三方 Recovery（TWRP/OrangeFox）"},
          {"@type": "HowToSupply", "name": "官方 Boot/Init_Boot 镜像"}
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "准备设备并备份数据",
            "text": "启用开发者选项，备份所有重要数据，并将设备充电至 50% 以上"
          },
          {
            "@type": "HowToStep", 
            "name": "解锁 Bootloader",
            "text": "启用 OEM 解锁，并使用 fastboot 命令解锁 Bootloader"
          },
          {
            "@type": "HowToStep",
            "name": "安装第三方 Recovery（可选）",
            "text": "刷入 TWRP 或 OrangeFox 以获得高级 Recovery 功能"
          },
          {
            "@type": "HowToStep",
            "name": "修补并刷入 Boot 镜像",
            "text": "使用 Magisk/KernelSU/APatch 修补官方 boot.img 或 init_boot.img，然后通过 fastboot 刷入"
          },
          {
            "@type": "HowToStep",
            "name": "Root 后设置与隐藏 Root",
            "text": "安装 root 管理器，配置 DenyList，并为银行类应用设置 Play Integrity Fix 模块"
          }
        ]
      }
---

# Android Root 指南

通过全面教程掌握 Android root：涵盖解锁 Bootloader、安装 root 以及高级定制技巧。

## 快速导航

> [!TIP]
> **想找特定机型的指南？**
> 请在[**机型专属指南部分 ↗**](#机型专属指南)中选择你的厂商

::: info 步骤
**准备好了吗？** 选择你的路径：
- [前提条件与安全须知](#前提条件与安全须知) - 关键准备工作
- [通用 Root 流程](#通用-root-流程) - 适用于所有设备的四步指南
- [机型专属指南](#机型专属指南) - 为你的设备量身定制的说明
- [Root 方案对比](#选择-root-方案) - Magisk vs KernelSU vs APatch
- [无需解锁 Bootloader 的 Root](./root-without-unlocking-bootloader.md) - GhostLock 临时 root
:::

> [!NOTE]
> **需要帮助？**
> 请访问[故障排除](#故障排除)或[常见问题](../faqs.md)

---

## 理解 Root 权限

Root 权限授予 Android 上的**超级用户（管理员）特权**，让你完全掌控设备的操作系统和硬件。

### Root 能做什么

- **系统级控制**，掌控文件、进程与硬件
- **绕过厂商限制**，适用于任何 Android 版本
- **安装功能强大的应用**，它们需要深度系统集成（参见 [Root 应用](../apps-and-modules/)）
- **修改核心系统文件**，并通过 Magic Mount、OverlayFS 或 KPM 定制系统的方方面面
- **访问隐藏的硬件功能**与高级内核级配置
- 通过 APatch KPM 实现**内核级代码注入**（inline-hook、syscall-table-hook）
- 通过 KernelSU App Profiles（uid、gid、capabilities、SELinux）实现**细粒度的 root 权限控制**

### 收益与风险

| 收益 | 风险 |
|----------|-------|
| 完全掌控设备 | 保修失效（通常是永久性的） |
| [系统级广告拦截](../general-guides/android-adblocking.md) | 配置不当会降低安全性 |
| [性能调优](../apps-and-modules/performance#性能优化) | 银行类应用需要主动隐藏 root（[解决方案](../troubleshooting.md#play-integrity-与银行类应用)） |
| 隐私增强（防火墙、权限控制） | OTA 更新需要手动重新修补 |
| [精简预装软件](../general-guides/android-apps-debloating.md) | 设备存在变砖风险 |
| 完整的应用+数据备份（Swift Backup、Neo Backup） | Play Integrity 可能随时意外失效 |
| 内核级调整（CPU、GPU、调度器） | 已解锁设备通常无法达到 Strong Integrity |
| 自由安装第三方 ROM | 解锁 Bootloader 会清空所有数据 |

### Root 适合你吗？

| **✅ 适合 Root 的情况：** | **❌ 不适合 Root 的情况：** |
|---------------------------|---------------------|
| 希望完全掌控自己的设备 | 完全依赖银行/金融类应用 |
| 系统级广告拦截是首要需求 | 不适应终端/命令行操作 |
| 热衷深度定制与主题美化 | 需要 100% 的保修保障 |
| 重视隐私与反追踪 | 希望无缝的自动 OTA 更新 |
| 愿意学习并动手排查问题 | Android 新手且厌恶风险 |
| 将设备作为主力机并做好备份 | 偏好官方系统、零维护的体验 |

---

## 前提条件与安全须知

### 重要警告

::: danger ⚠️ 不可逆的后果
**数据丢失** - 解锁 Bootloader 会彻底清除设备上的所有数据。开始之前请备份全部内容。

**保修失效** - 在大多数设备上，解锁 Bootloader 会导致厂商保修永久失效。

**Samsung Knox** - 解锁 Bootloader 会永久熔断 Knox eFuse。Samsung Pay、Secure Folder、Samsung Pass 将**永远**失去——即使你重新锁定 Bootloader 也无法找回。

**安全风险** - 如果使用不当，root 权限可能使设备暴露于恶意软件。只授予可信应用 root 权限。能力越大，责任越大。

**银行与金融类应用** - 许多金融应用会主动检测 root。绕过 Play Integrity 是一场持续的猫鼠游戏，需要不断维护。

**变砖风险** - 操作不当可能对设备造成永久性损坏。请严格按说明操作，并[准备好恢复预案](../troubleshooting.md#紧急恢复)。
:::

### 基本要求

**硬件：**
- 拥有**可解锁 Bootloader** 的 Android 设备（开始前先确认——部分运营商定制机型无法解锁）
- 电量**不低于 50%**（刷入过程中断电 = 变砖）
- 质量可靠、**支持数据传输**的 USB 数据线（不能是仅充电线）
- 一台电脑（Windows、macOS 或 Linux——Linux 通常最为可靠）

**软件：**
- [Android Platform Tools](https://developer.android.com/studio/releases/platform-tools)（ADB/Fastboot）- 务必保持更新！
- 机型对应的 USB 驱动（仅 Windows 需要——参见 [OEM 驱动列表](https://developer.android.com/studio/run/oem-usb)）
- 你设备的官方固件（恢复时必不可少）
- 数据备份方案（Swift Backup、Neo Backup 或手动复制）

**所需文件：**
- 官方 `boot.img` 或 `init_boot.img`（从你设备的固件中提取——Android 13+ 设备通常使用 `init_boot.img`）
- 最新版 root 方案 APK/ZIP（Magisk、KernelSU 或 APatch）
- 第三方 Recovery 镜像（可选，但建议准备）

**知识储备：**
- 基本的命令行/终端操作能力
- 清楚自己设备的具体型号与版本
- 能够认真查阅资料并严格遵循说明
- 应急恢复预案（知道如何刷入官方固件）

### Root 前检查清单

1. ✅ **备份所有数据** - 照片、联系人、短信、应用数据（参见[备份应用](../apps-and-modules/backup#backup-restore)）
2. ✅ **给设备充电** - 电量至少 50%
3. ✅ **确认 Bootloader 可解锁** - 检查开发者选项中的 OEM 解锁开关（灰色不可用 = 很可能是运营商锁定机型）
4. ✅ **下载必要文件** - 官方固件、root 方案（APK+ZIP）、Recovery 镜像
5. ✅ **研究你的设备** - 仔细阅读 XDA 论坛与机型专属指南
6. ✅ **准备恢复预案** - 知道如何通过 fastboot/Recovery 恢复官方固件
7. ✅ **确认正确的分区** - 判断你的设备使用 `boot.img` 还是 `init_boot.img`（Android 13+ 通常是 `init_boot.img`）

---

## 选择 Root 方案

目前有三种主流 root 方案，各有优势与取舍。**Magisk** 兼容性最广、生态最大；**KernelSU** 提供内核级 root 和细粒度的应用控制；**APatch** 则将内核修补与模块支持结合在一起。

### 快速对比

| 特性 | Magisk | KernelSU | APatch |
|---------|---------|----------|---------|
| **指南** | [Magisk 指南](./magisk-guide.md) | [KernelSU 指南](./kernelsu-guide.md) | [APatch 指南](./apatch-guide.md) |
| **目标用户** | 新手、大多数用户 | GKI 设备、注重隐私的用户 | 开发者、特殊场景 |
| **架构** | Systemless（boot/init_boot/vendor_boot） | 内核级（GKI/LKM） | 内核修补（KernelPatch） |
| **Android 支持** | Android 6.0+ | GKI 2.0（内核 5.10+） | ARM64，内核 3.18+ |
| **安装难度** | 简单（修补并刷入） | 中等（需要兼容的内核） | 中等（仅限 ARM64） |
| **模块生态** | 1000+ 个 Magisk 模块 | 通过 metamodule 使用改版 Magisk 模块 | APModule + KPM（内核级） |
| **模块挂载** | 内置 Magic Mount | 需要 metamodule | 默认 Magic Mount；可选 OverlayFS |
| **Root 隐藏** | 良好（DenyList + Shamiko + PIF） | 优秀（应用配置文件，uid/gid/selinux 控制） | 良好（SuperKey 凭证体系） |
| **社区** | 最大 | 不断增长 | 较小 |
| **开发活跃度** | 活跃 | 非常活跃 | 活跃 |
| **独特优势** | 生态与广泛兼容性 | 内核空间，仅授权应用可见 su | 无需内核源码即可进行 KPM 内核代码注入 |
| **OTA 处理** | OTA 后需重新修补 | 部分 OTA 流程可借助 LKM 存活 | 初步支持 A/B OTA |

### 决策指南

**如果你符合以下情况，选 Magisk：**
- 你是 root 新手，想要最简单的路径
- 你需要最大的模块兼容性
- 你需要跨 Android 版本的通用设备支持
- 你偏好应用内更新和最庞大的社区

**如果你符合以下情况，选 KernelSU：**
- 你的设备运行 GKI 内核（5.10+），且你想要内核级安全
- 你看重细粒度的应用配置文件（uid、gid、groups、capabilities、SELinux）
- 你想要最佳的 root 隐蔽性（只有授权应用才能看到 `su`）
- 你能接受为模块支持而配置 metamodule

**如果你符合以下情况，选 APatch：**
- 你的特定固件上 Magisk/KernelSU 无法使用
- 你需要无需内核源码的内核级代码注入（KPM）
- 你的设备是 ARM64 且内核兼容
- 你既想要类 Magisk 的模块，又想要内核修补

> [!IMPORTANT]
> 有关包含迁移指南的详细对比，请参阅 [Root 框架对比](./root-framework-comparison.md)

> [!TIP]
> **无法（或不想）解锁 Bootloader？** 上述三种框架都以解锁 Bootloader 为前提。在少数 2024-2026 年的设备上，**GhostLock** 漏洞（CVE-2026-43499）可以在 Bootloader 保持锁定的情况下提供**临时的、仅限当前开机的 root**——不熔断 Knox，不清除数据。它能做什么、不能做什么，请参阅[无需解锁 Bootloader 的 Root](./root-without-unlocking-bootloader.md)；更全面的介绍见 [Android 临时 Root：方法与解决方案](./temporary-root-solutions.md)页面。

---

## 通用 Root 流程

无论厂商或 root 方案如何，所有 Android 设备都遵循同一个四步 root 流程。现代设备（Android 13+）通常使用 `init_boot.img` 而非 `boot.img` 来进行 root 修补——请核实你设备的具体情况。

### 第 1 步：解锁 Bootloader

解锁 Bootloader 是必不可少的第一步，后续所有修改都以此为基础。

**快速步骤：**
1. **启用开发者选项**（设置 > 关于手机 > 连点 7 次"版本号"）
2. **启用 OEM 解锁**（开发者选项 > OEM 解锁）
3. **启用 USB 调试**（开发者选项 > USB 调试）
4. **进入 fastboot 模式**（电源键 + 音量下键，或 `adb reboot bootloader`）
5. **执行解锁命令**（`fastboot flashing unlock` 或 `fastboot oem unlock`）

> [!CAUTION]
> ⚠️ 此步骤会**清空所有数据**。请先备份全部内容。在 Samsung 设备上，这还会**永久熔断 Knox**（Samsung Pay、Secure Folder、Samsung Pass 将永远失去）。

**[📖 如何解锁 Android Bootloader](./how-to-unlock-bootloader.md)**

### 第 2 步：安装第三方 Recovery（可选但建议执行）

第三方 Recovery 提供高级功能和更安全的修改流程。虽然并非所有现代 root 方案都严格要求它，但它在备份和应急恢复方面价值极高。

**热门选择：**
- **TWRP** - 支持最广泛，开发活跃
- **OrangeFox** - 界面现代，更新频繁，支持 EROFS
- **SKYHAWK** - 功能丰富的 Recovery 项目
- **PitchBlack** - 基于 TWRP 并增强功能

**流程：**
1. **下载机型对应的 Recovery 镜像**
2. **进入 fastboot 模式**
3. **刷入 Recovery 镜像** - `fastboot flash recovery recovery.img`
4. **启动到 Recovery** - 继续之前先测试功能是否正常

> [!NOTE]
> 一些现代设备（尤其是 A/B 分区方案）可能没有独立的 Recovery 分区。这种情况下，可以使用 `fastboot boot recovery.img` 临时启动 Recovery 而无需刷入。

**[📖 第三方 Recovery 安装指南](./how-to-install-custom-recovery.md)**

### 第 3 步：安装 Root 方案

选择并安装你偏好的 root 方案。现代做法是修补 boot 镜像。

#### 方案 A：Magisk（适合大多数用户）

1. 从[官方 GitHub](https://github.com/topjohnwu/Magisk/releases) 下载最新的 **Magisk APK**
2. 从你设备的官方固件中提取正确的镜像：
   - **Android 13+（大多数设备）：** `init_boot.img`
   - **Android 12 及更早：** `boot.img`
   - **部分 Samsung 设备：** `boot.img` + `vendor_boot.img`（Magisk v30.3+）
3. 将镜像传到设备上，使用 Magisk 应用进行修补
4. 通过 fastboot 刷入修补后的镜像（`fastboot flash init_boot magisk_patched...img`）
5. 重启并完成 Magisk 应用设置

> [!TIP]
> Magisk 现已支持 XZ 压缩模块和 16k 页大小的设备。请使用 [GitHub](https://github.com/topjohnwu/Magisk/releases) 上的最新稳定版本。

**[📖 完整 Magisk 指南](./magisk-guide.md)**

#### 方案 B：KernelSU

1. 确认你的设备拥有 **GKI 兼容内核**（内核 5.10+ 且支持 GKI 2.0）
2. 为你的设备下载支持 KernelSU 的内核，或使用 LKM（可加载内核模块）模式
3. 通过 fastboot 或 KernelSU 应用刷入内核
4. 安装 **KernelSU Manager** 应用
5. 安装一个 **metamodule**（meta-overlayfs 或 Meta-Hybrid Mount）——模块要正常工作必须有它
6. 配置 App Profiles 以实现细粒度的 root 权限控制

> [!WARNING]
> KernelSU **不再内置模块挂载功能**。全新安装必须配置 metamodule，模块才能正常工作。详情参见 [KernelSU 指南](./kernelsu-guide.md)。

**[📖 完整 KernelSU 指南](./kernelsu-guide.md)**

#### 方案 C：APatch

1. 确认设备兼容性（ARM64，内核 3.18–6.12）
2. 下载 **APatch Manager** 并准备好官方 `boot.img`
3. 通过 APatch 应用修补 boot 镜像（设置一个强 SuperKey）
4. 通过 fastboot 刷入修补后的镜像
5. 配置 APatch Manager，并按需安装 APModule/KPM

> [!NOTE]
> APatch 结合了 Magisk 便捷的 boot.img 安装方式与 KernelSU 强大的内核修补能力。KPM 无需内核源码即可对内核函数进行 inline-hook 和 syscall-table-hook。

**[📖 完整 APatch 指南](./apatch-guide.md)**

### 第 4 步：Root 后配置

root 安装成功后，请完成以下关键步骤：

1. **验证 root 权限** - 使用 root 检测应用确认超级用户权限生效
2. **安装必备应用** - 访问[入门套装：必备应用](../apps-and-modules/#新手必备套装必装应用)
3. **配置 root 隐藏**（对银行类应用至关重要）：
   - **Magisk：** 启用 Zygisk + DenyList，安装任意 Play Integrity Fix 模块 + [Tricky Store](https://github.com/5ec1cff/TrickyStore) + [Shamiko](https://github.com/LSPosed/LSPosed.github.io)（或开源的 [Zygisk Assistant](https://github.com/snake-4/Zygisk-Assistant)）
   - **KernelSU：** 使用 App Profiles，安装 Zygisk Next + PIF + Tricky Store
   - **APatch：** 使用 SuperKey 凭证体系 + PIF 模块
4. **创建完整备份** - 使用 Swift Backup、Neo Backup 或 Recovery 的 nandroid 备份

**推荐后续步骤：**
- [系统级广告拦截](../general-guides/android-adblocking.md) - 消除所有应用中的广告
- [精简预装软件](../general-guides/android-apps-debloating.md) - 安全移除预装冗余软件
- [安装 LSPosed / Vector 框架](./lsposed-guide.md) - 使用 Xposed 模块深度定制应用
- [浏览 650+ 个 Root 应用](../apps-and-modules/) - 探索必备工具

---

## 机型专属指南

针对特定厂商和机型的详细 root 教程。

### 📱 [Google Pixel 系列](./how-to-root-pixel-phone.md)

### 📱 [Samsung Galaxy 系列](./how-to-root-samsung-phone.md)

### 📱 [Xiaomi 设备](./how-to-root-xiaomi-phone.md)

### 📱 [OnePlus 设备](./how-to-root-oneplus-phone.md)

### 📱 [Motorola 设备](./how-to-root-motorola-phone.md)

### 📱 [Nothing Phone 系列](./how-to-root-nothing-phone.md)

> [!TIP]
> **找不到你的设备？** 请查看 [XDA Developers 论坛](https://forum.xda-developers.com/)，或搜索机型对应的 Telegram 群组。大多数 Bootloader 可解锁的设备都遵循上述通用流程。

> [!NOTE]
> **ASUS（ROG/Zenfone）、Realme/OPPO：** 请查看 [Root 框架对比](./root-framework-comparison.md#机型建议)，获取针对这些设备的 root 方案建议。

---

## 故障排除

### 常见问题与解决方法

**设备无法启动（无限重启）**

症状：设备卡在开机 logo，不断重启

解决方法：
1. 启动到 Recovery 模式（电源键 + 音量上键，因设备而异）
2. 在 Recovery 中清除缓存分区
3. 如有备份则从备份恢复
4. 通过 fastboot 刷入官方 `boot.img` / `init_boot.img` 以撤销 root
5. 通过 fastboot/Recovery 刷入完整官方固件
6. 到你机型的 XDA 论坛寻求帮助

**无法检测到 Root**

症状：root 检测应用显示没有 root，应用无法获取超级用户权限

解决方法：
1. 确认 root 管理器应用已安装且正在运行
2. 检查 Zygisk 是否已启用（Magisk 设置中）
3. 在应用弹窗提示时授予 root 权限
4. 重新修补并重新刷入 boot 镜像
5. 确认修补后的镜像没有被 OTA 覆盖

**银行类应用无法使用（Play Integrity）**

症状：应用检测到 root 后拒绝运行，Play Integrity 检查失败

> [!WARNING]
> 绕过 Play Integrity 是一场**猫鼠游戏**——Google 会不断更新检测手段。没有一劳永逸的解决方案。

解决方法（2026 年最佳实践）：
1. **Magisk：** 启用 Zygisk → 配置 DenyList（添加银行类应用）→ 强制执行 DenyList
2. 安装 Play Integrity Fix 模块（提供可用的设备指纹）
3. 安装 **[Tricky Store](https://github.com/5ec1cff/TrickyStore)** 实现高级密钥认证伪造
4. 安装 **[Shamiko](https://github.com/LSPosed/LSPosed.github.io)**（闭源）或 **[Zygisk Assistant](https://github.com/snake-4/Zygisk-Assistant)**（开源）以获得更好的 root 隐藏效果
5. 隐藏 Magisk 应用（设置 → 隐藏 Magisk 应用 → 以随机名称重新打包）
6. 使用 **[Zygisk Next](https://github.com/LSPosed/ZygiskNext)**（替代 Zygisk 实现，KernelSU 上也可用）
7. 配置好隐藏后清除银行类应用的数据
8. 参阅[详细的 Play Integrity 故障排除](../troubleshooting.md#play-integrity-与银行类应用)

> [!NOTE]
> **Strong Integrity**（部分钱包/支付应用要求）在已解锁 Bootloader 的设备上通常**无法实现**。即使应用了所有修复方法，某些应用仍可能拒绝运行。关键的银行业务可考虑使用一台未 root 的备用设备。

**OTA 更新失败**

症状：系统更新无法安装，或导致无限重启

解决方法：
1. **Magisk：** OTA 前在 Magisk 应用中使用"还原镜像"（Restore Images），OTA 后使用"安装到未使用分区槽"（Install to Inactive Slot）
2. 手动刷入完整 OTA 包，然后重新修补并重新刷入 root
3. **KernelSU：** 部分 OTA 流程可借助 LKM 模式存活，但每次更新后都要验证
4. **APatch：** 已有初步的 A/B OTA 支持（实验性）
5. 考虑换用内置 OTA + root 支持的第三方 ROM

**无法识别 Fastboot**

症状：电脑在 fastboot 模式下检测不到设备

解决方法：
1. 安装正确的 [USB 驱动](https://developer.android.com/studio/run/win-usb)（Windows）
2. 换用 USB 2.0 接口（USB 3.0 在 fastboot 下经常出问题）
3. 使用高质量、支持数据传输的 USB 数据线（不能是仅充电线）
4. Linux 下：添加 udev 规则，以 root 运行 `fastboot` 或配置权限
5. 在另一台电脑上尝试 `fastboot devices`

### 应急恢复

**安全模式（禁用所有模块）**

如果某个模块导致无限重启：
1. 开机时按住**电源键 + 音量下键**（或你设备进入安全模式的按键组合）
2. 这会暂时禁用所有 Magisk 模块
3. 卸载出问题的模块并重启

**恢复出厂设置保护（FRP）**

如果恢复出厂设置后被锁在外面：
1. 使用之前同步过的 Google 账号凭据
2. 按照厂商专属的 FRP 绕过方法操作
3. 刷入包含全部分区的官方固件
4. 如果是正规渠道购买，可联系厂商支持

**彻底变砖恢复（EDL/9008 模式）**

如果设备无法开机或无法进入任何模式：
1. 尝试**紧急下载模式**（EDL/9008）——因设备而异
2. 使用厂商专属的救砖工具（OnePlus 用 MSM Tool，Samsung 用 Odin 等）
3. 在 XDA 搜索机型专属的救砖指南
4. 硬件级变砖可能需要专业维修

**预防提示：**
- 📥 开始之前务必先下载好官方固件
- 💾 定期创建备份（Swift Backup、Neo Backup、Recovery nandroid）
- 📖 动手之前仔细阅读你机型的 XDA 论坛
- 🔑 保存好官方 `boot.img` 和 `init_boot.img` 的副本
- 🧪 每次只测试一个模块，每次安装之间重启
- 📋 加入机型专属的 Telegram/Discord 社区以获取实时帮助

---

## 更多资源

### 框架与进阶指南

**Vector / LSPosed 框架**

面向已 root 设备的高级应用修改框架。生态已经发生变化：最初的 LSPosed 于 2024 年 1 月归档，目前的版本要么是闭源的（lsposed.zip），要么是完全开源的 **Vector** 分支。

- **Vector（推荐）：** [GitHub](https://github.com/JingMatrix/Vector) - 完全开源（GPLv3），维护活跃，支持 Android 8.1–17 Beta
- **LSPosed（闭源）：** [lsposed.zip](https://lsposed.zip/) - 原团队的构建版本，API 101 稳定
- 需要 Zygisk（Magisk）或 Zygisk Next/NeoZygisk（KernelSU）
- 支持 Xposed 模块，实现按应用定制、隐私控制和 UI 调整
- API 101 是当前标准；Vector 的 CI 构建已支持该标准

> [!IMPORTANT]
> 有关在 Vector（开源）与 lsposed.zip（闭源）之间如何选择、安装方法以及模块管理的完整解析，请参阅我们的[完整 Vector/LSPosed 指南](./lsposed-guide.md)。

**第三方 ROM 安装**

用注重隐私的第三方 ROM 替换官方 Android 系统：
- 需要已解锁的 Bootloader，通常还需要第三方 Recovery
- 热门选择：LineageOS、PixelOS、crDroid、GrapheneOS（现已支持 Zygisk Next）
- 减少遥测数据收集，移除预装冗余软件，延长设备使用寿命

**[📖 第三方 ROM 安装指南](./custom-rom-installation.md)**

### Root 隐藏与 Play Integrity 资源

2026 年，绕过 Play Integrity 对银行类应用至关重要。关键工具：

| 工具 | 用途 | 状态 |
|------|---------|--------|
| **[Tricky Store](https://github.com/5ec1cff/TrickyStore)** | 高级密钥认证伪造 | 活跃维护 |
| **[Shamiko](https://github.com/LSPosed/LSPosed.github.io)** | 以 systemless 方式隐藏 Zygisk/模块，避开检测 | 闭源 |
| **[Zygisk Assistant](https://github.com/snake-4/Zygisk-Assistant)** | Shamiko 的开源替代品 | 活跃维护（FOSS） |
| **[Zygisk Next](https://github.com/LSPosed/ZygiskNext)** | 独立的 Zygisk 实现，适用于 Magisk/KernelSU | 活跃维护 |
| **[Play Integrity Fork](https://github.com/osm0sis/PlayIntegrityFork)** | 社区维护的 PIF 脚本 | 活跃维护 |


> [!TIP]
> 完整且最新的列表请参阅我们的 [Root 隐藏与 Play Integrity 应用](../apps-and-modules/root-management#root-hiding-play-integrity)

---

## 社区与支持

### **官方资源**
- [GitHub 仓库](https://github.com/awesome-android-root/awesome-android-root) - 源代码与问题反馈
- [故障排除指南](../troubleshooting.md) - 常见问题与修复方法
- [常见问题](../faqs.md) - 常见疑问
- [Root 应用合集](../apps-and-modules/) - 精选应用与模块
- [X (Twitter) 动态](https://x.com/awsm_and_root) - 项目新闻与更新

### **外部社区**
- [XDA Developers](https://forum.xda-developers.com/) - 机型专属论坛（最大的 Android 玩机社区）
- [r/AndroidRoot](https://www.reddit.com/r/androidroot/) - root 求助与讨论
- [r/Magisk](https://www.reddit.com/r/Magisk/) - Magisk 专属支持
- [r/KernelSU](https://www.reddit.com/r/KernelSU/) - KernelSU 社区
- **Telegram 群组** - 机型专属和框架专属群组（搜索你的设备）

### 求助时

提供以下信息可加快故障排除：
- **设备型号**与具体版本（例如 Pixel 8 Pro `husky`，而不只是"Pixel 8"）
- **Android 版本**与构建号（例如 Android 16 QPR2，构建号 BP1A）
- **root 方案与版本**（例如 Magisk v30.7、KernelSU v3.2）
- **已安装的模块**（列出所有已启用的 Magisk/KernelSU/APatch 模块）
- **完整的错误信息**（截图或复制的文本）
- **已尝试过的步骤**（避免他人重复建议你已做过的事情）
- 如适用，附上错误状态的**截图**

---

## 下一步

### 你的进阶路线
1. **[解锁 Bootloader](./how-to-unlock-bootloader.md)** - 必不可少的第一步
2. **[安装 Recovery](./how-to-install-custom-recovery.md)** - 可选但建议执行
3. **[选择你的 Root 方案](#选择-root-方案)** - Magisk、KernelSU 或 APatch
4. **[跟随机型专属指南](#机型专属指南)** - 为你的手机量身定制
5. **[配置 root 隐藏](#第-4-步root-后配置)** - 银行类应用必备
6. **[安装 Vector/LSPosed](./lsposed-guide.md)** - 解锁应用定制能力

> [!IMPORTANT]
> - 加入我们的[社区讨论](../about.md#community-support)
> - 为[项目](../contributing.md)做贡献
> - 通过 [X (Twitter)](https://x.com/awsm_and_root) 获取最新动态

---

🎉 **欢迎来到 Android 自由的世界！**

通往无限可能的 Android 之旅从此开始！2026 年，root 社区比以往任何时候都更强大