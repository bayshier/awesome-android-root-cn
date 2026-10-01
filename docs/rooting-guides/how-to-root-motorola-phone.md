---
layout: doc
title: Motorola Root 完全指南
description: "所有 Motorola 手机的 Root 总指南 - Edge 系列、Moto G 系列，包含 Bootloader 解锁码、Magisk 安装以及 A/B 分区处理。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-motorola-phone
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: Motorola Root 完全指南 - 支持所有机型
  - - meta
    - property: og:description
      content: 通过我们涵盖 Bootloader 解锁码、Magisk 安装以及特殊 A/B 分区流程的全面指南 Root 任意 Motorola 设备。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-motorola-phone
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/motorola.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: Motorola Root 完全指南 - 所有机型
  - - meta
    - name: twitter:description
      content: 通过 Bootloader 解锁码和 Magisk 安装指南 Root 任意 Motorola 手机。
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:creator
      content: "@awsm_and_root"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/motorola.png
  - - meta
    - name: twitter:image:alt
      content: Motorola Root 指南 - 所有机型
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
      content: Motorola Root
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

# Motorola Root 指南

通过官方解锁码系统 Root Motorola 设备。涵盖 Edge 60、Edge 50、Edge 40、Edge 30、Moto G 系列以及旧款 Moto 设备。

## 快速导航

- [设备兼容性](#设备兼容性)
- [前置条件](#前置条件)
- [获取解锁码](#获取解锁码)
- [解锁 Bootloader](#解锁-bootloader)
- [Root 安装](#root-安装)
- [故障排除](#故障排除)

**相关指南：**
- [Root 主指南](./index.md) - 通用 Root 概念
- [Bootloader 解锁](./how-to-unlock-bootloader.md) - 详细的解锁指南
- [Magisk 指南](./magisk-guide.md) - 完整的 Magisk 文档
- [第三方 ROM](./custom-rom-installation.md) - 安装第三方 ROM
- [Root 应用](../apps-and-modules/) - 最佳 Root 应用合集

---

## 设备兼容性

大多数 Bootloader 可解锁的 Motorola 设备都可以 Root。请在 [XDA 论坛](https://forum.xda-developers.com/)查询你具体机型的支持情况。

### 不兼容 / 受限设备

::: danger 无法 Root
- **运营商专属机型**（Verizon、AT&T、Tracfone）- 不提供 Bootloader 解锁码
- **Amazon 定制设备** - 永久锁定
- **ThinkShield / 企业设备** - 被策略锁定
- **预付费运营商锁定版本** - 通常无法解锁
:::

### 镜像类型快速参考

| 设备世代 | 需要修补的镜像 |
|---|---|
| 新款 Edge/Moto G（Android 13+） | `init_boot.img` |
| 旧款 Moto G/Edge（Android 12 及更早） | `boot.img` |

**如果不确定，请查看 Magisk 的“Ramdisk”字段。**

## 前置条件

### 关键要求

::: danger ⚠️ 开始之前

**保修失效：** 一旦获取解锁码，你的设备将不再受 Motorola 保修覆盖。

**需要解锁码：** 必须在 Motorola 官方网站申请。可能需要几分钟到几小时。

**数据清除：** 解锁会清除包括内部存储在内的所有数据。

**运营商检查：** 存在一些限制，例如运营商专属机型。要确认你的手机是否支持解锁 Bootloader，你需要访问 Motorola 的页面并按流程操作。
:::

### 硬件要求

- Motorola 设备（可解锁机型）
- 质量良好的 USB 数据线（如遇问题可多试几条）
- 电脑（Windows、macOS、Linux）
- 电量 50% 以上

### 软件要求

**电脑端：**

1. **Platform Tools**
   - 下载：[Android Platform Tools](https://developer.android.com/studio/releases/platform-tools)

2. **Motorola USB 驱动**（Windows）
   - 下载：[Motorola USB 驱动](https://en-us.support.motorola.com/app/usb-drivers)

3. **网页浏览器**
   - 用于申请解锁码
   - 有效的电子邮箱（推荐 Gmail）

**设备端：**

1. **Magisk APK**
   - 下载：[Magisk GitHub Releases](https://github.com/topjohnwu/Magisk/releases)
   - Android 兼容性：Android 6.0 及更高

2. **Motorola 账号**
   - 用于申请解锁码

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
# 应显示设备
```

---

## 获取解锁码

Motorola 要求使用从其官网申请的官方解锁码。

### 步骤 1：收集设备信息

**获取设备 ID 字符串：**

```bash
# 重启到 fastboot
adb reboot bootloader

# 获取设备 ID（唯一字符串）
fastboot oem get_unlock_data

# 输出会是多行
# 将所有行合并为一个字符串复制
# 去掉空格和 (bootloader) 前缀
```

**输出示例：**
```
(bootloader) 0A40040192024205#4C4D3556313230
(bootloader) 30373731363031303332323239#BD00
(bootloader) 8A672BA4746C2CE02328A2AC0C39F95
(bootloader) 1A3E5#1F53280002000000000000000
(bootloader) 0000000
```

复制每行中的代码部分（去掉 `(bootloader)` 部分和所有空格），拼成一个字符串：
```
0A40040192024205#4C4D355631323030373731363031303332323239#BD008A672BA4746C2CE02328A2AC0C39F951A3E5#1F532800020000000000000000000000
```

::: tip 数据清理工具
在去除多余内容、空格和多余行时，注意不要误删解锁码的一部分。你可以把它粘贴到 Motorola 在线的 dataScrubTool 中自动清理。
:::

### 步骤 2：申请解锁码

1. 访问 [Motorola Bootloader 解锁](https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-a)

2. 登录你的 Motorola 账号

3. 解锁设备并安装自制软件可能导致设备停止工作，并禁用重要特性和功能。

4. 在网站上粘贴该字符串。点击 "Can my device be unlocked?"（我的设备能否解锁？）。你将收到一封包含解锁密钥的邮件。

5. **查收邮件：**
   - 尽量使用 Gmail 作为 Motorola 账号邮箱。如果没有收到解锁码（通常大约一分钟左右就会收到），可以尝试更换账号邮箱后重新申请。

### 步骤 3：保存解锁码

- 一字不差地复制解锁码
- 保存到文本文件
- 妥善保存以便后续使用

---

## 解锁 Bootloader

### 步骤 1：进入 Fastboot 模式

```bash
adb reboot bootloader
```

或使用物理按键：
1. 关机
2. 按住音量减 + 电源键
3. 出现 fastboot 界面时松开

### 步骤 2：使用解锁码解锁

```bash
# 验证 fastboot 连接
fastboot devices

# 使用邮件中的解锁码解锁
fastboot oem unlock UNIQUE_KEY_FROM_EMAIL
```

**设备端操作：**
- 可能出现警告界面
- 设备自动清除数据
- Bootloader 解锁
- 设备重启

### 步骤 3：验证解锁

重启后：
```bash
adb reboot bootloader
fastboot getvar unlocked
# 应返回：yes
```

开机时你会看到“Bootloader 已解锁”警告 - 这是正常现象。

---

## Root 安装

### 确定正确的镜像

| 设备世代 | 需要修补的镜像 |
|---|---|
| 新款 Edge/Moto G（Android 13+） | `init_boot.img` |
| 旧款设备（Android 12 及以下） | `boot.img` |

**如果不确定，请打开 Magisk 应用查看“Ramdisk”字段。如果 Ramdisk = 是，使用 `boot.img`。如果你的设备有独立的 `init_boot` 分区，使用 `init_boot.img`。**

### 方法 1：修补 boot 镜像（标准方法）

**步骤 1：获取官方固件**

1. 从 [Motorola Rescue and Smart Assistant（Software Fix）](https://en-us.support.motorola.com/app/softwarefix)或 [Lolinet Motorola 固件镜像站](https://mirrors.lolinet.com/firmware/moto/)下载。
2. 如果使用 Motorola Rescue and Smart Assistant 软件，安装程序必须在基于 x86 的 Windows 电脑上运行。下载固件镜像时必须指定确切的机型，也可以提供 IMEI 号。
3. 在安装目录中找到 `boot.img` 或 `init_boot.img`。

::: warning 固件版本匹配
如果你在 Root 之前已经安装过官方更新：不要从初始/首发固件中提取 init_boot.img。务必从与你当前版本号一致的更新后固件中提取 init_boot.img。
:::

**步骤 2：传输到设备**

```bash
# 较新设备（Android 13+）
adb push init_boot.img /sdcard/Download/

# 较旧设备（Android 12 及以下）
adb push boot.img /sdcard/Download/
```

**步骤 3：使用 Magisk 修补**

```bash
# 安装 Magisk
adb install magisk.apk
```

在设备上：
1. 打开 Magisk
2. 安装 > 选择并修补一个文件
3. 选择 boot/init_boot 镜像
4. 等待修补完成

**步骤 4：刷入修补后的镜像**

```bash
# 将修补后的镜像取回电脑
adb pull /sdcard/Download/magisk_patched_xxxxx.img ./

# 重启到 fastboot
adb reboot bootloader

# 刷入（使用与设备对应的正确分区）
# 对于有 init_boot 分区的设备：
fastboot flash init_boot magisk_patched_xxxxx.img

# 对于使用 boot.img 的设备：
fastboot flash boot magisk_patched_xxxxx.img

# 重启
fastboot reboot
```

**步骤 5：验证 Root**

1. 打开 Magisk 应用
2. 应显示“已安装”及版本号
3. 测试：`adb shell su`

### 方法 2：Fastboot Boot + 直接安装（Edge 50 Fusion 及类似机型）

某些 Motorola 设备（尤其是联发科芯片的机型，如 Edge 50 Fusion）无法使用标准刷入方法。请使用以下替代方案：

1. 像其他 Motorola 设备一样解锁 Bootloader
2. 安装 Magisk 应用
3. 使用 Magisk 修补 boot.img 并传输到电脑
4. 执行 `adb reboot bootloader`
5. 执行 `fastboot boot patched_boot.img`
6. 打开 Magisk 应用并选择“直接安装”
7. 重启 - 设备现已 Root

---

## Root 后设置

### 配置 Magisk

**设置：**
- **Zygisk**：启用
- **Enforce DenyList**：启用

**DenyList：**
- Google Play Services
- Google Play 商店
- 银行类应用
- 支付类应用

### Motorola 优化

**电池：**
1. 设置 > 电池
2. Magisk 和 Root 应用 > 设为“不受限制”

**后台：**
- 允许 Root 应用后台活动
- 为 Magisk 禁用电池优化

### 推荐模块

- **Play Integrity Fix**（替代 Universal SafetyNet Fix）
- **Shamiko**（隐藏 Root 避免检测）
- **LSPosed**（Xposed 框架）
- **Systemless Hosts**（广告屏蔽支持）

---

## OTA 处理

### 针对 A/B 设备（所有现代 Motorola 机型）

**流程：**
1. 下载 OTA
2. Magisk > 安装到未使用的插槽
3. 重启
4. Root 得以保留

::: warning
Root 之后，OTA 更新可能失败并提示“package verification failed（更新包校验失败）”。唯一的更新方法是下载完整固件包，然后自行使用 Rescue and Smart Assistant 或 fastboot 刷入。
:::

---

## 故障排除

<details><summary>点击展开故障排除</summary><br>

### 解锁码问题

**未收到解锁码**

解决方法：
- 检查垃圾邮件文件夹
- 最长等待 24 小时
- 重新提交申请
- 尽量使用 Gmail 作为 Motorola 账号邮箱
- 联系 Motorola 支持

**解锁码无效**

解决方法：
- 确认复制正确 - 没有多余空格
- 在去除多余内容、空格和多余行时，注意不要误删解锁码的一部分

### Bootloader 问题

**OEM 解锁呈灰色**

原因：
- 运营商锁定设备
- ThinkShield/企业机型
- 设备不符合条件

如果呈灰色：设备很可能无法解锁。

**设备在 Motorola 网站上显示 “Not Eligible”（不符合条件）**

- 该网站经常给出错误的“不符合条件”回复
- 设备的 CID 是决定其是否有资格解锁的因素之一
- 使用以下命令检查你的 CID：`fastboot getvar cid`
- 尝试重新提交或换一个浏览器

### “Preflash Validation Failed”（刷入前校验失败）

这是刷入修补镜像时常见的 Motorola 特有错误。

**原因：** 可能有多种情况，包括刷入了较旧的镜像，或 DMVerity/Verification 仍然启用。如果 DMVerity/Verification 仍处于启用状态而你尝试刷入已 Root 的镜像，刷入会被拒绝，因为设备能检测到镜像已被修改。

**解决方法 1：使用 fastbootd 模式**
重启进入 Fastboot-Fastboot 模式（fastbootd），而不是 Fastboot-bootloader。在仍处于 bootloader 模式时执行：`fastboot reboot fastboot`。在 fastbootd 模式下重新刷入镜像 - 这次应该能成功。

**解决方法 2：禁用 vbmeta 校验**
```bash
fastboot flash --disable-verity --disable-verification vbmeta vbmeta.img
```

**解决方法 3：使用 fastboot boot 方法**
不直接刷入，而是使用 `fastboot boot patched_boot.img`，然后在 Magisk 应用内执行直接安装。

### 安装问题

**刷入后 Magisk 不工作**

解决方法：
1. 在 Edge 50 Ultra 等某些设备上，仅刷入修补后的 boot.img 无效 - 你可能需要改为修补 init_boot.img
2. 确认固件版本与当前系统版本一致
3. 重新修补并刷入
4. 清除 Magisk 数据

**无限重启**

```bash
# 恢复官方镜像
fastboot flash boot stock_boot.img
# 或者
fastboot flash init_boot stock_init_boot.img
fastboot reboot
```

</details>

---

## 取消 Root 与恢复

### 移除 Root

```bash
# Magisk > 卸载 > 还原镜像
```

### 刷入官方系统

```bash
# 刷入官方固件镜像
fastboot flash boot stock_boot.img
# 或对于较新设备：
fastboot flash init_boot stock_init_boot.img
fastboot reboot
```

### 重新锁定 Bootloader

::: danger 重新锁定警告
如果 Bootloader 不是通过官方方法解锁的，请不要重新锁定。重新锁定之前，请重新刷入官方固件、恢复出厂设置、重启，并确认一切工作正常。重新锁定后保修仍然失效。
:::

```bash
fastboot oem lock
```

---

## 第三方 ROM

### 热门 ROM

**LineageOS：**
- 许多 Moto G 和 Edge 设备都有官方支持
- 稳定且维护良好

**Pixel Experience：**
- 类 Pixel 界面
- 性能良好

**crDroid：**
- 功能丰富
- 开发活跃

**Evolution X：**
- 高度可定制
- 支持范围不断扩大

---

## 最佳实践

### 安全

1. 为敏感应用**配置 DenyList**
2. **只用可信模块** - 核实来源
3. **保持 Magisk 为最新版本** - 最新版本支持 Android 16 引入的新 sepolicy 二进制格式
4. 每次更新前**备份 boot 镜像**

---

## 社区资源

**Motorola 官方：**
- [Bootloader 解锁](https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-a) - 官方解锁入口
- [支持设备信息](https://en-us.support.motorola.com/app/answers/detail/a_id/87215) - 官方资格说明
- [Motorola USB 驱动](https://en-us.support.motorola.com/app/usb-drivers) - 官方驱动
- [Motorola Rescue & Smart Assistant](https://en-us.support.motorola.com/app/softwarefix) - 官方固件工具

**开发者社区：**
- [XDA Motorola 论坛](https://xdaforums.com/c/motorola.11990/) - 开发与指南
- [XDA Bootloader 解锁指南](https://xdaforums.com/t/guide-un-locking-motorola-bootloader.4079111/) - 全面的解锁参考
- [Reddit r/MotoG](https://www.reddit.com/r/MotoG/) - Moto G 社区
- [Reddit r/Motorola](https://www.reddit.com/r/Motorola/) - Motorola 综合讨论

**Awesome Android Root 帮助资源：**
- [常见问题](../faqs)
- [故障排除指南](../troubleshooting)

### 寻求帮助

**请提供：**
- 确切的 Motorola 机型和代号
- Android 版本和版本号
- 解锁码状态
- 确切的错误信息（尤其是 fastboot 输出）
- 已尝试的步骤
- 修补时使用的 Magisk 版本

---

## 下一步

**Root 之后：**

1. **必备应用：**
   - [Root 应用合集](../apps-and-modules/)

2. **增强：**
   - [广告屏蔽指南](../general-guides/android-adblocking.md)
   - [精简应用指南](../general-guides/android-apps-debloating.md)
   - [LSPosed 指南](./lsposed-guide.md)

3. **探索 ROM：**
   - [第三方 ROM 指南](./custom-rom-installation.md)
   - LineageOS，稳定
   - Pixel Experience，界面纯净

