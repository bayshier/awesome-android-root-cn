---
layout: doc
title: OnePlus Root 完全指南
description: "所有 OnePlus 设备的 Root 总指南 - OnePlus 15、13、12、11、10、Nord 系列，包含 Bootloader 解锁与 OxygenOS 上的 Magisk 安装。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-oneplus-phone
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: OnePlus Root 完全指南 - 支持所有机型
  - - meta
    - property: og:description
      content: 通过我们涵盖 Bootloader 解锁、MSM 工具、第三方 Recovery 和 OxygenOS 上 Magisk 安装的全面指南 Root 任意 OnePlus 设备。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-oneplus-phone
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/oneplus.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: OnePlus Root 完全指南 - 所有机型
  - - meta
    - name: twitter:description
      content: 通过 Bootloader 解锁和 Magisk 安装指南 Root 任意 OnePlus 手机。
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:creator
      content: "@awsm_and_root"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/oneplus.png
  - - meta
    - name: twitter:image:alt
      content: OnePlus Root 指南 - 所有机型
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
      content: OnePlus Root
  - - meta
    - property: article:tag
      content: OxygenOS
  - - meta
    - property: article:tag
      content: Bootloader 解锁
  - - meta
    - property: article:tag
      content: Magisk 安装
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

# OnePlus Root 指南

通过简单直接的 Bootloader 解锁 Root OnePlus 设备。涵盖 OxygenOS 和 ColorOS、OnePlus 15、13、12、11、10、9、Nord 系列以及旧款设备。

## 快速导航

- [设备兼容性](#设备兼容性)
- [前置条件](#前置条件)
- [Bootloader 解锁](#解锁-bootloader)
- [Root 安装](#root-安装)
- [故障排除](#故障排除)

**相关指南：**
- [Root 主指南](./index.md) - 通用 Root 概念
- [Bootloader 解锁](./how-to-unlock-bootloader.md) - 详细的解锁指南
- [Magisk 指南](./magisk-guide.md) - 完整的 Magisk 文档

---

## 前置条件

### 关键要求

::: danger 开始之前
**数据清除：** 解锁 Bootloader 会清除包括内部存储在内的所有内容。

**备份所有内容：** 照片、联系人、短信、应用数据、验证器代码。

**无等待期：** 与 Xiaomi 不同，OnePlus 解锁在启用后立即生效。

**OEM 解锁：** 必须在开发者选项中可用。部分 T-Mobile 机型无法解锁。
:::

### 设备兼容性

大多数 Bootloader 可解锁的 OnePlus 设备都可以 Root。请在 [XDA 论坛](https://forum.xda-developers.com/c/oneplus.11993/)查询你的具体机型。

::: warning 不兼容设备
- **T-Mobile 及部分运营商定制机型**的 Bootloader 可能永久锁定
- 运行 ColorOS 的**中国市场机型**可能存在额外限制
:::

::: tip 💡 Bootloader 已锁定？存在临时 Root 方案
在多款 OnePlus/OPPO/realme 设备上（OnePlus 13/15、Ace 6T、OPPO Pad 4 Pro 等），**ghostlock-oneplus** 漏洞利用 GhostLock 内核漏洞（CVE-2026-43499），可在**不解锁 Bootloader 的情况下授予仅当前会话有效的 Root** - 不刷入任何内容，重启后一切失效。参见[不解锁 Bootloader 进行 Root](./root-without-unlocking-bootloader.md)。
:::

### 硬件要求

- OnePlus 设备（任意受支持机型）
- 质量良好的 USB-C 数据线
- 电脑（Windows、macOS 或 Linux）
- 电量 50% 以上

### 软件要求

**电脑端：**

1. **Platform Tools**（ADB/Fastboot）
   - 下载：[Android Platform Tools](https://developer.android.com/studio/releases/platform-tools)
   - 解压到方便的位置

2. **OnePlus USB 驱动**（Windows）
   - 通常随 ADB 自动安装
   - 或从 OnePlus 官网下载

3. **官方固件**（用于恢复）
   - 通过 [Oxygen Updater](https://github.com/oxygen-updater/os-updater/releases/latest) 下载（推荐）
   - 或 [XDA 论坛](https://xdaforums.com/)（备选）
   - 或 https://roms.danielspringer.at/

**设备端：**

1. **Magisk APK**
   - 下载：[Magisk GitHub](https://github.com/topjohnwu/Magisk/releases)
   - 最新稳定版

::: tip 替代 Root 方案
对于 OnePlus 15 和 13 系列，推荐使用 **KernelSU** 替代 Magisk。KernelSU 直接修补内核，在绕过最新 Play Integrity（Strong Integrity）检测方面通常更有效。
:::

2. **文件管理器**
   - OxygenOS“文件”应用
   - 或 Play 商店中的任意一款

### 设备准备

**步骤 1：启用开发者选项**

1. 设置 > 关于设备
2. 连续点击“版本号”7 次
3. 输入 PIN 码/密码
4. 出现“开发者选项已解锁”提示

**步骤 2：启用所需设置**

设置 > 系统 > 开发者选项：
- **OEM 解锁**：启用（关键）
- **USB 调试**：启用
- **高级重启**：启用（可选）

**步骤 3：验证 ADB 连接**

```bash
adb devices
# 在设备上接受 USB 调试提示
# 应显示状态为 "device" 的设备
```

---

## 解锁 Bootloader

OnePlus 拥有最简单的解锁流程之一。

### 步骤 1：进入 Fastboot 模式

**方法 1：ADB 命令**
```bash
adb reboot bootloader
```

**方法 2：物理按键**
1. 关闭设备
2. 按住音量加 + 音量减 + 电源键
3. 出现 fastboot 界面时松开

### 步骤 2：验证 Fastboot 连接

```bash
fastboot devices
# 应显示设备序列号
```

### 步骤 3：解锁 Bootloader

```bash
fastboot oem unlock
```

**设备端操作：**
1. 出现警告界面
2. 使用音量键移动
3. 选择 "UNLOCK THE BOOTLOADER"（解锁 Bootloader）
4. 按电源键确认
5. 设备自动清除数据并重启

::: tip 立即解锁
与 Xiaomi 不同，OnePlus 解锁立即生效。无需等待！
:::

### 步骤 4：验证解锁状态

自动恢复出厂设置后：

```bash
adb reboot bootloader
fastboot getvar unlocked
# 应返回：yes
```

或在设备开机时检查：
- “Bootloader 已解锁”警告（正常现象）

---

## Root 安装

### 确定正确的镜像

| 设备世代 | 需要修补的镜像 |
|---|---|
| OnePlus 10 及更新（Android 13+） | `init_boot.img` |
| OnePlus 9 及更早 | `boot.img` |

**在 Magisk 中快速检查：**
- 先安装 Magisk 应用
- 查看“Ramdisk”字段
- “是” = `boot.img`，“否” = `init_boot.img`

::: tip 启动验证（Verified Boot）
请始终确保你留有官方 `vbmeta.img` 的副本。在较新的 OxygenOS 版本上刷入修补后的镜像时，可能需要使用以下命令禁用 verity：
`fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img`
:::

---

### 方法 1：修补 boot 镜像（推荐）

**步骤 1：下载官方固件**

**使用 Oxygen Updater（推荐）：**
1. 在设备上安装 [Oxygen Updater](https://github.com/oxygen-updater/os-updater/releases/latest)
2. 启动应用并确认设备名称
3. 进入 Settings > Update Method > 选择 "Full"（完整包）
4. 在设置中启用 "Advanced Mode"（高级模式）
5. 返回 Home 标签页并点击 "Download Update"（下载更新）
6. 固件 ZIP 将下载到内部存储
7. 将 ZIP 传输到电脑进行解压
8. 从下载的 ZIP 中提取 payload.bin

**替代方法（XDA 论坛）：**
1. 访问 [XDA OnePlus 论坛](https://xdaforums.com/c/oneplus.11993/)
2. 找到你的设备板块
3. 下载匹配的固件
4. 提取 payload.bin

::: tip 为什么选择 Oxygen Updater？
OnePlus 不再提供直接的固件下载。Oxygen Updater 是获取官方固件文件最可靠的方法。
:::

**步骤 2：提取 boot 镜像**

使用 payload-dumper-go：
```bash
# 下载 payload-dumper-go
# 提取镜像
./payload-dumper-go -o extracted payload.bin

# 在 extracted/ 中找到 boot.img 或 init_boot.img
```

**步骤 3：传输到设备**

```bash
# 较新设备（OnePlus 10+）
adb push init_boot.img /sdcard/Download/

# 较旧设备
adb push boot.img /sdcard/Download/
```

**步骤 4：安装 Magisk 并修补**

```bash
# 安装 Magisk APK
adb install Magisk-v27.0.apk
```

在设备上：
1. 打开 Magisk 应用
2. 点击 Magisk 旁边的“安装”
3. 选择“选择并修补一个文件”
4. 选择 boot.img 或 init_boot.img
5. 等待修补完成

**输出：** `magisk_patched_[random].img`

**步骤 5：传输修补后的镜像**

```bash
adb pull /sdcard/Download/magisk_patched_xxxxx.img ./
```

**步骤 6：刷入修补后的镜像**

```bash
# 启动到 fastboot
adb reboot bootloader

# 验证连接
fastboot devices

# 较新设备（init_boot）
fastboot flash init_boot magisk_patched_xxxxx.img

# 较旧设备（boot）
fastboot flash boot magisk_patched_xxxxx.img

# 重启
fastboot reboot
```

**步骤 7：验证 Root**

1. 首次开机需要 2-5 分钟
2. 打开 Magisk 应用
3. 应显示：
   - Magisk：已安装（版本号）
   - 应用：最新（版本号）

测试 Root：
```bash
adb shell
su
id
# 应返回：uid=0(root)
```

---

### 方法 2：TWRP Recovery（旧款设备）

适用于支持 TWRP 的 OnePlus 8 系列及更早设备：

**步骤 1：下载 TWRP**

1. 访问 [TWRP OnePlus](https://twrp.me/Devices/OnePlus/)
2. 找到你的设备
3. 下载 TWRP 镜像

**步骤 2：引导启动 TWRP**

```bash
fastboot boot twrp.img
```

**步骤 3：刷入 Magisk**

1. 下载 Magisk ZIP
2. 推送到设备：
```bash
adb push Magisk-v27.0.zip /sdcard/
```
3. 在 TWRP 中：安装 > 选择 ZIP
4. 滑动以刷入
5. 重启系统

**注意：** OnePlus 10 及更新设备通常不支持 TWRP。

---

## Root 后设置

### 配置 Magisk

**步骤 1：基础设置**

Magisk > 设置：
- **Zygisk**：启用
- **Enforce DenyList**：启用
- **隐藏 Magisk 应用**：使用银行类应用时建议开启

**步骤 2：配置 DenyList**

添加到 DenyList：
- Google Play Services（全部）
- Google Play 商店
- 银行类应用
- 支付类应用（Google Pay 等）
- 对 Play Integrity 敏感的应用

**步骤 3：安装必要模块**

OnePlus 设备推荐：
- **Play Integrity Fix** - 银行类应用兼容性
- **Shamiko** - 增强 Root 隐藏
- **LSPosed (Zygisk)** - 框架
- **Systemless Hosts** - 广告屏蔽

### OxygenOS/ColorOS 优化

**电池优化：**
1. 设置 > 电池 > 电池优化
2. 找到 Magisk 和 Root 应用
3. 设为“不优化”

**自启动权限：**
1. 设置 > 应用 > 应用管理
2. Magisk 和 Root 应用
3. 启用“自启动”

**后台限制：**
1. 设置 > 应用 > 应用管理
2. Magisk 和 Root 应用
3. 禁用“限制后台活动”

---

## OTA 处理

### 针对 A/B 设备（所有现代 OnePlus 机型）

**步骤 1：下载 OTA**

设置 > 系统 > 系统更新

下载更新但**不要重启**

**步骤 2：使用 Magisk 安装**

1. 打开 Magisk 应用
2. 点击 Magisk 旁边的“安装”
3. 选择“安装到未使用的插槽（OTA 后）”
4. 等待安装完成
5. 在提示时点击“重启”

**步骤 3：更新后验证**

- 系统启动到更新后的版本
- Magisk 仍然安装
- Root 得以保留

---

## 故障排除

<details><summary>点击展开故障排除提示</summary>

### Bootloader 问题

**“OEM 解锁”呈灰色**

原因：
- 设备保护处于激活状态
- 运营商锁定（T-Mobile）
- 账号锁定

解决方法：
1. 移除所有账号
2. 恢复出厂设置
3. 完成设置后等待 24 小时
4. 重试

如果仍然呈灰色：设备可能被运营商锁定

**Fastboot 检测不到设备**

解决方法：
- 更新 Platform Tools
- 尝试 USB 2.0 端口
- 更换 USB 数据线
- 重新安装驱动（Windows）
- 换一台电脑

### 安装问题

**Magisk 显示 "N/A"**

原因：
- 修补了错误的镜像
- 刷入了错误的分区

解决方法：
1. 确认镜像正确（boot 还是 init_boot）
2. 检查 Android 版本
3. 重新提取并修补正确的镜像
4. 刷入正确的分区

**设备无限重启**

解决方法：
```bash
# 刷入官方镜像
fastboot flash boot stock_boot.img
# 或者
fastboot flash init_boot stock_init_boot.img
fastboot reboot
```

### Root 权限问题

**应用无法获取 Root**

解决方法：
1. 打开 Magisk，检查状态
2. 给 shell 授予 root：`adb shell su`
3. 通过直接安装重新安装
4. 清除 Magisk 应用数据

**Play Integrity 校验失败**

解决方法：
1. 启用 Zygisk
2. 配置 DenyList
3. 隐藏 Magisk 应用
4. 安装 Play Integrity Fix 模块
5. 清除 Google Play Services
6. 重启

---

</details>

## 取消 Root 与恢复

### 仅移除 Root

```bash
# Magisk > 卸载 > 还原镜像
# Root 已移除，Bootloader 仍处于解锁状态
```

### 刷入官方固件

**方法 1：Fastboot ROM**

1. 下载 fastboot ROM
2. 解压并运行刷机脚本：
```bash
# Windows
flash-all.bat

# Linux/Mac
./flash-all.sh
```

**方法 2：MSM Download Tool**

用于完整恢复和救砖：
1. 下载适用于你设备的 MSM 工具（XDA）
2. 启动到 EDL 模式
3. 运行 MSM 工具
4. 完整恢复官方系统

### 重新锁定 Bootloader（可选）

::: danger 重新锁定警告
只有在完全恢复官方系统时才能重新锁定。在系统被修改的情况下重新锁定会导致变砖！
:::

```bash
fastboot oem lock
```

---


## 最佳实践

### 安全

1. 使用银行类应用时**隐藏 Magisk**
2. 正确**配置 DenyList**
3. **只安装可信模块**
4. **保持 Magisk 为最新版本**
5. **备份官方镜像**
6. **使用强设备安全措施**（PIN 码、密码、生物识别）

---

## 社区资源

**OnePlus 官方：**
- [OnePlus 论坛](https://forums.oneplus.com/) - 官方社区
- [OnePlus 支持](https://www.oneplus.com/support) - 官方支持

**固件下载：**
- [Oxygen Updater](https://github.com/oxygen-updater/os-updater/releases/latest) - 主要固件来源（应用）
- [Oxygen Updater GitHub](https://github.com/oxygen-updater/oxygen-updater) - 备用下载

**开发者社区：**
- [XDA OnePlus 论坛](https://xdaforums.com/c/oneplus.11993/) - 设备讨论
- [Reddit r/OnePlus](https://www.reddit.com/r/oneplus/) - 社区互助

### 寻求帮助

**求助时请提供：**
- 确切的 OnePlus 机型
- OxygenOS/ColorOS 版本
- Android 版本
- 修补了哪个镜像
- 确切的错误信息
- 已尝试的步骤

---

## 下一步

**Root 你的 OnePlus 之后：**

1. **必备应用：**
   - [Root 应用合集](../apps-and-modules/) - 精选列表

2. **增强体验：**
   - [广告屏蔽指南](../general-guides/android-adblocking.md) - 全系统屏蔽
   - [精简应用指南](../general-guides/android-apps-debloating.md) - 移除预装应用
   - [LSPosed 指南](./lsposed-guide.md) - 应用修改

3. **探索 ROM：**
   - [第三方 ROM 指南](./custom-rom-installation.md) - 安装指南
   - LineageOS，稳定
   - Pixel Experience，界面纯净


