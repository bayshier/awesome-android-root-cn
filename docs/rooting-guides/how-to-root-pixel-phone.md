---
layout: doc
title: Google Pixel Root 指南
description: Google Pixel 设备 Root 完全指南。涵盖 Pixel 1 到 Pixel 10 Pro 的所有机型。包括 Bootloader 解锁、Magisk 安装与 OTA 处理。
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-pixel-phone
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: Google Pixel Root 指南
  - - meta
    - property: og:description
      content: 通过涵盖 Bootloader 解锁、出厂镜像和 Magisk 安装的全面指南 Root 任意 Google Pixel 设备。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-pixel-phone
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/google-pixel.png
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
      content: Google Pixel Root 指南
  - - meta
    - name: twitter:description
      content: 通过涵盖 Bootloader 解锁、出厂镜像和 Magisk 安装的全面指南 Root 任意 Google Pixel 设备。
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/google-pixel.png
  - - meta
    - name: twitter:image:alt
      content: Google Pixel Root 指南 - Bootloader 解锁与 Magisk 安装
  - - meta
    - name: author
      content: Awesome Android Root 项目
  - - meta
    - property: article:author
      content: https://github.com/awesome-android-root/awesome-android-root
  - - meta
    - property: article:section
      content: 设备 Root
  - - meta
    - property: article:tag
      content: Google Pixel
  - - meta
    - property: article:tag
      content: Magisk
  - - meta
    - property: article:tag
      content: Bootloader 解锁
  - - meta
    - property: article:tag
      content: Android Root
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

# Google Pixel Root 指南

通过 Android 中最简单的 Root 流程 Root 任意 Google Pixel 设备。干净的 Bootloader 解锁、官方出厂镜像以及 Magisk 支持。

::: tip 快速开始
**面向有经验的用户：** 直接跳转到 [Pixel Flasher（图形界面工具）](#method-0-pixel-flasher-gui-tool-easiest)，使用最简单的一键 Root 方法。
:::

## 快速导航

- [前置条件](#前置条件)
- [设备兼容性](#设备兼容性)
- [Bootloader 解锁](#解锁-bootloader)
- [Root 方法](#root-安装方法)
  - [Pixel Flasher（最简单）](#method-0-pixel-flasher-gui-tool-easiest)
  - [手动修补](#方法-1手动修补-boot-镜像)
  - [临时 Root](#方法-2临时-root-测试)
- [Root 后设置](#root-后设置)
- [OTA 更新](#保留-root-的-ota-更新)
- [故障排除](#故障排除)

**相关指南：**
- [Root 主指南](./index.md) - 通用 Root 概念
- [Bootloader 解锁](./how-to-unlock-bootloader.md) - 详细的解锁指南
- [Magisk 指南](./magisk-guide.md) - 完整的 Magisk 文档
- [KernelSU 指南](./kernelsu-guide.md) - 替代 Root 方案

---

## 前置条件

::: danger 数据清除警告
解锁 Bootloader 会**清除设备上的所有内容**。请先备份所有数据！
:::

### 快速检查清单

**硬件：**
- ✅ Google Pixel 设备（任意机型）
- ✅ USB-C 数据线（质量很重要）
- ✅ 电脑（Windows/macOS/Linux）
- ✅ 电量 50% 以上

**软件下载：**
1. **[Android Platform Tools](https://developer.android.com/studio/releases/platform-tools)** - ADB/Fastboot
2. **[Google USB 驱动](https://developer.android.com/studio/run/win-usb)** - 仅限 Windows
3. **[Magisk APK](https://github.com/topjohnwu/Magisk/releases)** - 最新稳定版
    - **Google Pixel / Pixel XL（第一代）：** 在 [issue #9808](https://github.com/topjohnwu/Magisk/issues/9808) 解决之前，请使用 **[Magisk v30.6](https://github.com/topjohnwu/Magisk/releases/tag/v30.6)**。
4. **[Pixel Flasher](https://github.com/badabing2005/PixelFlasher)** - 图形界面工具（可选）

### 启用开发者选项

1. **设置** → **关于手机** → 连续点击**版本号** 7 次
2. **设置** → **开发者选项** → 启用：
   - ✅ **OEM 解锁**（关键）
   - ✅ **USB 调试**

### 测试 ADB 连接

```bash
# 通过 USB 连接设备，并在设备上接受调试提示
adb devices
# 应显示设备序列号
```

---

## 设备兼容性

Google Pixel 设备是对 Root 最友好的 Android 手机。所有 Pixel 机型（从 Pixel 1 到当前世代）都支持解锁 Bootloader 和 Root。

### 不兼容的设备

::: warning 运营商锁
**Verizon 及部分运营商定制机型**的 OEM 解锁可能被永久禁用。在购买用于 Root 的设备之前，请务必确认开发者选项中存在“OEM 解锁”选项。
:::

::: tip 💡 完全不想解锁？
**Root My Pixel** 利用 GhostLock 内核漏洞（CVE-2026-43499），让受支持的 Pixel 设备在**不解锁 Bootloader 的情况下获得仅当前会话有效的临时 Root** - 通过 Shizuku 在设备上部署，重启后即被清除。参见[不解锁 Bootloader 进行 Root](./root-without-unlocking-bootloader.md)。
:::

### 镜像类型快速参考

| 设备世代 | 需要修补的镜像 |
|-------------------|----------------|
| Pixel 7 及更新 | `init_boot.img` |
| Pixel 6（Android 13+） | `init_boot.img` |
| Pixel 6（Android 12） | `boot.img` |
| Pixel 5 及更早 | `boot.img` |

::: tip 快速检查
打开 Magisk 应用 → 查看“Ramdisk”字段：
- **是** = 使用 `boot.img`
- **否** = 使用 `init_boot.img`
:::

---

## 解锁 Bootloader

### 步骤 1：进入 Fastboot
```bash
adb reboot bootloader
# 或手动操作：关机 → 按住音量减 + 电源键
```

### 步骤 2：解锁
```bash
fastboot flashing unlock
```
- 使用音量键选择 **"UNLOCK THE BOOTLOADER"**（解锁 Bootloader）
- 按电源键确认
- 设备自动清除数据并重启

::: tip 解锁耗时
该过程需要 30-60 秒。设备每次开机都会显示 Bootloader 已解锁的警告（正常现象）。
:::

### 步骤 3：重新启用 USB 调试
完成设置后，重新启用开发者选项和 USB 调试

---

## Root 安装方法

### 了解你的镜像类型

| 设备 | Android 版本 | 需要修补的镜像 |
|--------|-----------------|----------------|
| Pixel 7/8/9/10 | 所有版本 | **init_boot.img** |
| Pixel 6 | Android 13+ | **init_boot.img** |
| Pixel 6 | Android 12 | **boot.img** |
| Pixel 5 及更早 | 所有版本 | **boot.img** |

::: tip 快速检查
打开 Magisk 应用 → 查看“Ramdisk”字段：
- **是** = 使用 boot.img
- **否** = 使用 init_boot.img
:::

---

### 方法 0：Pixel Flasher（图形界面工具）- 最简单

**非常适合新手 - 通过图形界面一键 Root**

**[Pixel Flasher](https://github.com/badabing2005/PixelFlasher)** 可自动完成整个 Root 流程：

**功能：**
- ✅ 自动提取 boot 镜像
- ✅ 自动使用 Magisk 修补
- ✅ 安装 OTA 并保留 Root
- ✅ 模块管理
- ✅ 备份/恢复功能
- ✅ 支持 Windows、macOS、Linux

**快速步骤：**

1. **下载并安装**
   - 从 [GitHub](https://github.com/badabing2005/PixelFlasher/releases) 获取最新版本
   - 运行对应操作系统的安装程序

2. **连接设备**
   - 启用 USB 调试
   - 通过 USB 连接
   - Pixel Flasher 会自动检测设备

3. **Root 设备**
   - 点击 "Process Firmware"（处理固件）
   - 选择出厂镜像或让工具自动下载
   - 选择 "Patch boot with Magisk"（用 Magisk 修补 boot）
   - 点击 "Flash"（刷入）
   - 工具会自动完成所有操作

4. **验证 Root**
   - 设备重启后即已 Root
   - 打开 Magisk 进行验证

::: tip PIXEL FLASHER 的优势
- 无需命令行
- 自动检测版本
- 内置安全检查
- 支持 OTA 更新
- 支持批量操作
:::

---

### 方法 1：手动修补 boot 镜像

**适合喜欢手动控制的用户**

#### 步骤 1：获取出厂镜像
1. 访问 [Google 出厂镜像](https://developers.google.com/android/images)
2. 找到你的确切设备和版本号（build number）
3. 下载匹配的出厂镜像

#### 步骤 2：提取 boot 镜像
```bash
# 解压出厂镜像 ZIP 包
unzip pixel-factory-image.zip
cd extracted-folder/
unzip image-pixel-*.zip

# 现在你得到了 boot.img 或 init_boot.img
```

#### 步骤 3：使用 Magisk 修补
```bash
# 传输到设备
adb push init_boot.img /sdcard/Download/  # 或 boot.img

# 在设备上安装 Magisk APK
# 打开 Magisk → 安装 → 选择并修补一个文件
# 选择刚传输的镜像
# 结果：magisk_patched_*.img
```

#### 步骤 4：刷入修补后的镜像
```bash
# 拉取修补后的镜像
adb pull /sdcard/Download/magisk_patched_*.img

# 刷入
adb reboot bootloader
fastboot flash init_boot magisk_patched_*.img  # 较旧设备使用 "boot"
fastboot reboot
```

---

### 方法 2：临时 Root 测试

**在不做永久更改的情况下测试 Root**

```bash
adb reboot bootloader
fastboot boot magisk_patched_*.img  # 临时启动
# 设备以临时 Root 状态启动
# 如果满意，使用方法 1 永久刷入
```

---

## Root 后设置

### 必要的 Magisk 配置

**设置：**
- ✅ **隐藏 Magisk 应用** - 针对银行类应用
- ✅ **Zygisk** - 使用模块时需启用
- ✅ **Enforce DenyList** - 隐藏 Root

**DenyList 应用：**
- Google Play Services
- 银行类应用
- 支付类应用（Google Pay）
- 流媒体应用（Netflix）

### 推荐模块

1. **[Shamiko](https://github.com/LSPosed/LSPosed.github.io)** - 增强隐藏
2. **[LSPosed](https://github.com/LSPosed/LSPosed)** - Xposed 框架
3. **[AdAway](https://adaway.org/)** - 全系统广告屏蔽

---

## 保留 Root 的 OTA 更新

### 自动方法（Pixel Flasher）

1. 打开 Pixel Flasher
2. 选择 "Process OTA"（处理 OTA）
3. 工具会自动保留 Root

### 手动方法（Magisk）

1. 在系统设置中**下载 OTA**（不要重启）
2. **打开 Magisk** → 安装 → **安装到未使用的插槽**
3. 在提示时**重启**
4. 更新后 Root 得以保留

---

## 故障排除

<details><summary>🔧 常见问题与解决方法</summary>

### OEM 解锁选项呈灰色
- 移除所有 Google 账号
- 重置后等待 7 天
- 检查运营商锁状态

### Root 后无限重启
```bash
# 刷入官方镜像
fastboot flash boot stock_boot.img  # 或 init_boot
fastboot reboot
```

### Play Integrity 校验失败
1. 启用 Zygisk
2. 配置 DenyList
3. 安装 Play Integrity Fix（PIF）
4. 隐藏 Magisk 应用
5. 清除 Google Play Services 数据

### OTA 后丢失 Root
- 提取新的 boot 镜像
- 使用 Magisk 修补
- 刷入修补后的镜像

</details>

---

## 取消 Root / 恢复出厂设置

### 仅移除 Root
```bash
adb reboot bootloader
fastboot flash init_boot stock_init_boot.img  # 或 boot.img
fastboot reboot
```

### 完整恢复官方系统

**方案 1：Pixel Flash Tool（网页版）**
- 访问 [flash.android.com](https://flash.android.com/)
- 连接设备 → 选择版本 → 安装

**方案 2：Flash-all 脚本**
```bash
# 解压出厂镜像
./flash-all.sh  # Linux/Mac
flash-all.bat   # Windows
```

### 重新锁定 Bootloader
::: danger
只有在完全恢复官方系统时才能重新锁定！
:::
```bash
fastboot flashing lock
```

---

## 快速参考

### 重要链接

**Google 官方：**
- [出厂镜像](https://developers.google.com/android/images)
- [OTA 镜像](https://developers.google.com/android/ota)
- [网页刷入工具](https://flash.android.com/)
- [USB 驱动](https://developer.android.com/studio/run/win-usb)

**工具：**
- [Pixel Flasher](https://github.com/badabing2005/PixelFlasher) - 图形界面 Root 工具
- [Platform Tools](https://developer.android.com/studio/releases/platform-tools) - ADB/Fastboot
- [Magisk](https://github.com/topjohnwu/Magisk/releases) - Root 方案

**社区：**
- [XDA Pixel 论坛](https://xdaforums.com/c/google.11976/)
- [r/GooglePixel](https://www.reddit.com/r/GooglePixel/)
- [GrapheneOS](https://grapheneos.org/) - 隐私 ROM
- [CalyxOS](https://calyxos.org/) - 隐私 ROM

### 命令速查表

```bash
# Bootloader
adb reboot bootloader          # 进入 fastboot
fastboot flashing unlock       # 解锁 Bootloader
fastboot flashing lock         # 锁定 Bootloader

# 刷入
fastboot flash boot image.img       # 刷入 boot（旧款 Pixel）
fastboot flash init_boot image.img  # 刷入 init_boot（新款 Pixel）
fastboot boot image.img             # 临时启动

# 验证
adb shell su -c id             # 检查 Root 权限
```

---

## 下一步

Root 你的 Pixel 之后：


1. **探索 Root 应用：**
   - [Root 应用合集](../apps-and-modules/)
   - [LSPosed 指南](./lsposed-guide.md)

2. **优化性能：**
   - [精简应用指南](../general-guides/android-apps-debloating.md)
   - [广告屏蔽指南](../general-guides/android-adblocking.md)

3. **考虑第三方 ROM：**
   - [第三方 ROM 指南](./custom-rom-installation.md) - 安装步骤
   - GrapheneOS，追求最大隐私
   - CalyxOS，兼顾隐私与易用
   - LineageOS，高度可定制

---

::: tip 成功
你的 Pixel 已经 Root 成功！记得保持 Magisk 为最新版本，并在进行重大更改前始终先备份 - 但 Pixel 1 / 第一代 Pixel 设备除外，在上游问题解决之前，请继续使用 Magisk v30.6。
:::
