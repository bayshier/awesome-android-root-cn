---
layout: doc
title: Nothing 与 CMF 手机 Root 指南
description: "所有 Nothing 与 CMF by Nothing Phone 机型的 Root 总指南，包含 Bootloader 解锁与 Nothing OS 上的 Magisk 安装。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-nothing-phone
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: Nothing 与 CMF by Nothing 手机 Root 完全指南 - 所有机型
  - - meta
    - property: og:description
      content: 通过我们涵盖 Bootloader 解锁、第三方 Recovery 和 Nothing OS 上 Magisk 安装的全面指南 Root 任意 Nothing Phone。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-nothing-phone
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/nothing.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: Nothing 与 CMF by Nothing 手机 Root 完全指南 - 所有机型
  - - meta
    - name: twitter:description
      content: 通过 Bootloader 解锁和 Magisk 安装指南 Root 任意 Nothing 与 CMF by Nothing 手机。
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:creator
      content: "@awsm_and_root"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/nothing.png
  - - meta
    - name: twitter:image:alt
      content: Nothing Phone Root 指南 - 所有机型
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
      content: Nothing Phone
  - - meta
    - property: article:tag
      content: Nothing OS
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

# Nothing 与 CMF 手机 Root 指南

通过简单直接的流程 Root Nothing Phone 设备。

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


## 设备兼容性

所有 Nothing 和 CMF by Nothing Phone 机型都支持解锁 Bootloader 和 Root。没有地区限制 - 所有设备均可在全球范围内解锁。

**用于识别固件的代号：**
- Phone (1): `Spacewar` · Phone (2): `Pong` · Phone (2a): `Pacman`/`PacmanPro` · Phone (3): `Metroid` · Phone (3a): `Asteroids`
- CMF Phone (1): `Tetris` · CMF Phone (2): `Galaga`

> [!NOTE]
> 所有 Nothing 手机均可在全球范围内解锁。目前没有已知的不兼容机型。

> [!TIP]
> **不想解锁？** 在 Nothing Phone (1) 上，社区工具 **root-my-nothing** 可通过 **GhostLock 漏洞（CVE-2026-43499）授予临时 Root** - 在 Bootloader 仍锁定的情况下安装 KernelSU，重启后一切复原。参见[不解锁 Bootloader 进行 Root](./root-without-unlocking-bootloader.md)。

---

## 前置条件

### 关键要求

::: danger 开始之前
**数据清除：** 解锁 Bootloader 会清除包括内部存储在内的所有内容。

**备份所有内容：** 照片、联系人、短信、应用数据、验证器代码。

**保修失效：** 解锁 Bootloader 将永久失去制造商保修。

**Glyph Interface：** 在某些第三方 ROM 上可能无法使用。完全切换前请先测试。
:::

### 硬件要求

- Nothing Phone 设备（任意机型）
- 质量良好的 USB-C 数据线
- 电脑（Windows、macOS 或 Linux）
- 电量 50% 以上

### 软件要求

**电脑端：**

1. **Platform Tools**（ADB/Fastboot）
   - 下载：[Android Platform Tools](https://developer.android.com/studio/releases/platform-tools)

2. **USB 驱动**（Windows）
   - 通常自动安装
   - 或下载通用 Android 驱动

3. **官方固件**（用于恢复）
   - 从 [GitHub](https://github.com/spike0en/nothing_archive) 下载
   - 官方更新通过 OTA 获取
   - Nothing Phone (2) OTA：[XDA 帖子](https://xdaforums.com/t/nothing-phone-2-official-ota-zip-full-incremental.4604803/)

**设备端：**

1. **Magisk APK**
   - 下载：[Magisk GitHub](https://github.com/topjohnwu/Magisk/releases)

### 设备准备

**步骤 1：启用开发者选项**

1. 设置 > 关于手机
2. 连续点击“版本号”7 次
3. 输入 PIN 码/密码

**步骤 2：启用所需设置**

设置 > 系统 > 开发者选项：
- **OEM 解锁**：启用
- **USB 调试**：启用

**步骤 3：验证 ADB**

```bash
adb devices
# 接受调试提示
# 应显示 "device" 状态
```

---

## 解锁 Bootloader

### 步骤 1：进入 Fastboot 模式

**方法 1：ADB**
```bash
adb reboot bootloader
```

**方法 2：物理按键**
1. 关机
2. 按住音量减 + 电源键
3. 出现 fastboot 界面时松开

### 步骤 2：解锁 Bootloader

```bash
# 验证连接
fastboot devices

# 解锁 Bootloader
fastboot flashing unlock

# 或者（如果上面那条不生效）
fastboot oem unlock
```

**设备端操作：**
1. 出现警告界面
2. 使用音量键移动
3. 选择 "UNLOCK THE BOOTLOADER"（解锁 Bootloader）
4. 按电源键确认
5. 设备清除数据并重启

### 步骤 3：完成设置

自动恢复出厂设置后：
1. 完成 Android 设置
2. 重新启用开发者选项
3. 重新启用 USB 调试

---

## Root 安装

### 确定正确的镜像

| 设备世代 | 需要修补的镜像 |
|---|---|
| 所有 Nothing 手机（Android 13+） | `init_boot.img` |
| Phone (1)（Android 12） | `boot.img` |

**如果不确定，请在 Magisk 应用中查看“Ramdisk”字段。**

### 方法 1：修补 boot 镜像

**步骤 1：提取 boot 镜像**

对于 Nothing Phone (2) 和 (2a)：
1. 下载 OTA 更新包或固件
2. 提取 payload.bin
3. 使用 payload-dumper-go：
```bash
./payload-dumper-go -o extracted payload.bin
```
4. 在 extracted/ 中找到 init_boot.img

对于 Nothing Phone (1)：
- 检查当前 Android 版本
- Android 13+ 使用 init_boot.img
- Android 12 使用 boot.img

**步骤 2：传输到设备**

```bash
adb push init_boot.img /sdcard/Download/
# 或者
adb push boot.img /sdcard/Download/
```

**步骤 3：安装 Magisk 并修补**

```bash
adb install magisk.apk
```

**注意：** 请使用 [GitHub Releases](https://github.com/topjohnwu/Magisk/releases) 中的最新版 Magisk

在设备上：
1. 打开 Magisk
2. 安装 > 选择并修补一个文件
3. 选择 boot/init_boot 镜像
4. 等待修补完成

**步骤 4：传输修补后的镜像**

```bash
adb pull /sdcard/Download/magisk_patched_xxxxx.img ./
```

**步骤 5：刷入修补后的镜像**

```bash
adb reboot bootloader

# 针对 Android 13/14
fastboot flash init_boot magisk_patched_xxxxx.img

# 针对 Android 12
fastboot flash boot magisk_patched_xxxxx.img

fastboot reboot
```

**步骤 6：验证 Root**

1. 打开 Magisk 应用
2. 应显示：
   - Magisk：已安装
   - 应用：最新

测试：
```bash
adb shell
su
id
# 返回：uid=0(root)
```

---

## Root 后设置

### 配置 Magisk

**设置：**
- **Zygisk**：启用
- **Enforce DenyList**：启用
- **隐藏 Magisk 应用**：针对银行类应用

**DenyList 配置：**
- Google Play Services
- Google Play 商店
- 银行类应用
- 支付类应用

### Nothing OS 优化

**电池优化：**
1. 设置 > 电池
2. 找到 Magisk 和 Root 应用
3. 设为“不受限制”

**后台活动：**
1. 设置 > 应用
2. Magisk 和 Root 应用
3. 允许后台活动

### 推荐模块

- **Play Integrity Fix** - 银行类应用兼容性
- **Shamiko** - Root 隐藏
- **LSPosed** - 框架
- **Systemless Hosts** - 广告屏蔽

---

## OTA 处理

### 针对 A/B 设备（所有 Nothing 手机）

**步骤 1：下载 OTA**

设置 > 系统 > 系统更新

下载但先不要重启

**步骤 2：Magisk 安装**

1. Magisk > 安装
2. “安装到未使用的插槽（OTA 后）”
3. 等待完成
4. 在提示时重启

更新后 Root 得以保留！

---

## 故障排除

<details><summary> 点按展开常见问题与解决方法</summary>

### Bootloader 问题

**OEM 解锁呈灰色**

解决方法：
1. 移除所有账号
2. 恢复出厂设置
3. 等待 24 小时
4. 重试

**Fastboot 检测不到设备**

解决方法：
- 更新 Platform Tools
- 尝试 USB 2.0 端口
- 更换数据线
- 重新安装驱动

### 安装问题

**Magisk 显示 N/A**

解决方法：
1. 确认镜像正确
2. 检查 Android 版本
3. 重新修补正确的镜像
4. 刷入正确的分区

**Root 后无限重启**

```bash
fastboot flash init_boot stock_init_boot.img
# 或者
fastboot flash boot stock_boot.img
fastboot reboot
```

### Glyph Interface 问题

**Root 后 Glyph 无法使用**

通常在 Magisk 下仍可正常使用。如果出现问题：
1. 检查与 Glyph 相关的模块
2. 重新安装 Nothing OS 官方系统
3. 某些第三方 ROM 可能不支持 Glyph

</details>

---

## 取消 Root 与恢复

### 移除 Root

```bash
# Magisk > 卸载 > 还原镜像
```

### 刷入官方固件

通过 fastboot：
```bash
# 刷入官方镜像
fastboot flash boot stock_boot.img
fastboot flash init_boot stock_init_boot.img
fastboot reboot
```

### 重新锁定 Bootloader

::: danger 重新锁定警告
只有在完全恢复官方系统时才能操作！
:::

```bash
fastboot flashing lock
```

---

## 第三方 ROM

### 可用 ROM

**LineageOS：**
- 提供 Nothing Phone (1) 和 (2) 的官方构建版本
- Phone (3a) 系列可用（非官方）

**crDroid：**
- Phone (3a) 系列可用
- 基于 LineageOS 23

**/e/OS：**
- 注重隐私的选择
- Phone (2) 可用

**OrangeFox Recovery：**
- Phone (2)、(3) 和 (3a) 系列可用
- TWRP 的替代品

**注意：** Glyph Interface 的支持情况因 ROM 而异！大多数第三方 ROM 对 Glyph 的支持有限或不支持。

---

## 设备专属说明

### Nothing Phone (3) 系列

**Nothing Phone (3)：**
- 2025 年 7 月发布
- Snapdragon 8s Gen 4
- Android 15/16
- 单色 LED 背屏（489 颗 LED）
- IP68 防水
- 承诺 5 次 Android 大版本升级

**Nothing Phone (3a/3a Pro)：**
- 2025 年 3 月发布
- Snapdragon 7s Gen 3
- Android 15/16
- 承诺 3 次 Android 大版本升级
- IP64 防水
- 共用代号：`Asteroids`

### CMF Phone (2) Pro
- 2025 年 4 月发布
- Dimensity 7300 Pro 芯片
- 无 Glyph Interface（CMF 品牌）

---

## 最佳实践

### 安全

1. 使用敏感应用时**隐藏 Magisk**
2. 正确**配置 DenyList**
3. **只用可信模块**
4. **保持 Magisk 为最新版本**

---

## 社区资源

**Nothing 官方：**
- [Nothing 支持](https://nothing.tech/support) - 官方网站
- [Nothing 社区](https://nothing.community/) - 论坛

**开发者社区：**
- [XDA Nothing 论坛](https://xdaforums.com/c/nothing.12583/) - 开发讨论
- [Reddit r/NothingTech](https://www.reddit.com/r/NothingTech/) - 社区

**Awesome Android Root 资源：**
- [常见问题](../faqs)
- [故障排除指南](../troubleshooting) 

### 寻求帮助

**请提供：**
- 确切的 Nothing Phone 机型
- Nothing OS 版本
- Android 版本
- 错误信息
- 已尝试的步骤

---

## 下一步

**Root 之后：**

1. **必备应用：**
   - [Root 应用合集](../apps-and-modules/)

2. **增强体验：**
   - [广告屏蔽指南](../general-guides/android-adblocking.md)
   - [精简应用指南](../general-guides/android-apps-debloating.md)
   - [LSPosed 指南](./lsposed-guide.md)

3. **探索 ROM：**
   - [第三方 ROM 指南](./custom-rom-installation.md)
   - 切换前先测试 Glyph 支持


