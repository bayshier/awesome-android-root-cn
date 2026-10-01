---
layout: doc
title: 如何解锁 Android Bootloader | 完整指南
description: "了解如何安全解锁 Android Bootloader：警告事项、OEM 解锁、ADB 与 Fastboot、各厂商专属步骤以及常见错误。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/how-to-unlock-bootloader
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: 如何解锁 Android Bootloader | 完整指南
  - - meta
    - property: og:description
      content: 一步步解锁 Android Bootloader，包含数据清空警告、OEM 解锁、ADB/Fastboot，以及 Pixel、Samsung、Xiaomi、OnePlus 和 Motorola 的专属指引。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/how-to-unlock-bootloader
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/bootloader.png
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
      content: 如何解锁 Android Bootloader | 完整指南
  - - meta
    - name: twitter:description
      content: 通过实用的准备工作、厂商专属说明和故障排除解锁 Android Bootloader。
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:creator
      content: "@awsm_and_root"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/bootloader.png
  - - meta
    - name: twitter:image:alt
      content: Android Bootloader 解锁指南
  - - meta
    - name: author
      content: Awesome Android Root Project
  - - meta
    - property: article:author
      content: https://github.com/awesome-android-root/awesome-android-root
  - - meta
    - property: article:section
      content: Bootloader 解锁
  - - meta
    - property: article:tag
      content: Bootloader 解锁
  - - meta
    - property: article:tag
      content: Android Bootloader
  - - meta
    - property: article:tag
      content: Fastboot
  - - meta
    - property: article:tag
      content: OEM 解锁
  - - meta
    - property: article:published_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - property: article:modified_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - name: robots
      content: index, follow
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "@id": "https://awesome-android-root.zhoe.org/rooting-guides/how-to-unlock-bootloader#article",
        "headline": "How to Unlock an Android Bootloader | Complete Guide",
        "description": "Warnings, preparation, ADB and Fastboot, manufacturer-specific instructions and troubleshooting for Android bootloader unlocking.",
        "image": "https://awesome-android-root.zhoe.org/images/og/bootloader.png",
        "author": { "@id": "https://awesome-android-root.zhoe.org/#organization" },
        "publisher": { "@id": "https://awesome-android-root.zhoe.org/#organization" },
        "datePublished": "2025-05-25",
        "dateModified": "2026-09-13",
        "mainEntityOfPage": {
          "@id": "https://awesome-android-root.zhoe.org/rooting-guides/how-to-unlock-bootloader#webpage"
        },
        "articleSection": "Bootloader Unlocking",
        "inLanguage": "en-US",
        "isAccessibleForFree": true
      }

---

# 如何解锁 Android Bootloader

**解锁 Bootloader 通常是永久 root、安装第三方 Recovery 或第三方 ROM 之前的第一步。**具体流程因厂商和机型而异，但一般需要先启用 OEM 解锁，使用 ADB/Fastboot 或厂商工具，并且会恢复出厂设置。在执行任何命令之前，请先确认确切的机型和地区。

## 快速导航

- [什么是 Bootloader？](#什么是-android-bootloader)
- [该不该解锁？](#该不该解锁-bootloader)
- [重要警告与数据清空](#前提条件)
- [所需条件](#必要条件)
- [启用开发者选项、OEM 解锁和 USB 调试](#通用准备所有设备)
- [各厂商专属说明](#各厂商专属指南)
- [常见错误](#故障排除)
- [解锁后要做什么](#解锁后的步骤)

**继续阅读：** [Pixel root 指南](./how-to-root-pixel-phone.md) · [Samsung root 指南](./how-to-root-samsung-phone.md) · [OnePlus root 指南](./how-to-root-oneplus-phone.md) · [Motorola root 指南](./how-to-root-motorola-phone.md)

**相关指南：** [Magisk root 指南](./magisk-guide.md) · [KernelSU 指南](./kernelsu-guide.md) · [APatch 指南](./apatch-guide.md) · [第三方 Recovery 安装](./how-to-install-custom-recovery.md) · [常见问题](../faqs.md)

---

## 什么是 Android Bootloader？

Bootloader 是设备的启动管理器——开机时运行的第一个程序，负责加载操作系统并执行安全策略。

## 该不该解锁 Bootloader？

**解锁后可以实现：**
- **安装第三方 Recovery**（TWRP、OrangeFox）
- 通过 Magisk、KernelSU 获得 **root 权限**
- **安装第三方 ROM**（LineageOS、GrapheneOS）
- **修改内核**以进行性能调优
- **高级系统修改**与调整

### 已锁定与已解锁

| 已锁定的 Bootloader | 已解锁的 Bootloader |
|-------------------|---------------------|
| 最高安全性 | 完全的定制自由 |
| OTA 更新无缝进行 | 可安装第三方 ROM |
| 银行应用正常工作 | 可安装第三方 Recovery |
| 无法安装第三方软件 | 可获得 root 权限 |
| 修改空间有限 | 保修失效（通常） |

> [!TIP]
> **无法解锁，或觉得解锁的代价不值得？** 在一小部分设备上，**GhostLock** 漏洞（CVE-2026-43499）可在**已锁定的 Bootloader 上提供临时的、重启即失效的 root**——无需清空数据，不会熔断 Knox。它不能刷入 ROM 或 Recovery，但或许能满足偶尔的 root 需求。参见[不解锁 Bootloader 获得 root](./root-without-unlocking-bootloader.md) 以及更全面的[临时 root 方案](./temporary-root-solutions.md)页面。

---

## 前提条件

### ⚠️ 关键警告

::: danger 不可逆的后果
**数据清空** - 解锁 Bootloader 会彻底清除所有数据。开始前请备份一切。

**保修失效** - 大多数制造商会永久取消保修。部分设备会显示永久性的解锁警告。

**银行应用** - 许多金融类应用会检测到已解锁的 Bootloader 并拒绝运行。

**设备安全** - 已解锁的 Bootloader 会降低设备安全性。他人接触到设备即可威胁数据安全。
:::

### 必要条件

**硬件**
- Bootloader 可解锁的 Android 设备
- 电量 50% 以上
- 质量良好的 USB 数据线（支持数据传输）
- 电脑（Windows、macOS 或 Linux）

**软件**
- [Android Platform Tools](https://developer.android.com/studio/releases/platform-tools)（ADB/Fastboot）
- 机型对应的 USB 驱动（Windows）
- 厂商专属工具（Mi Unlock Tool、Odin 等）

**知识储备**
- 基本的命令行使用
- 识别设备型号与版本变体
- 能够严格按说明操作

### 各厂商政策概览

| 厂商 | 常见解锁方式 | 等待期 | 重要限制 |
|--------------|----------------|-----------------|---------------------|
| Google Pixel | Fastboot 命令 | 通常没有 | 必须提供 OEM 解锁开关；运营商版本可能有所不同。 |
| OnePlus | Fastboot 命令 | 通常没有 | T-Mobile 及部分地区版本有额外限制。 |
| Nothing | Fastboot 命令 | 通常没有 | 请确认该机型当前的解锁政策。 |
| Xiaomi/Redmi/POCO | Mi Unlock Tool | 通常 7–30 天 | 需绑定 Mi 账号，并受 Xiaomi 政策约束。 |
| Motorola | 解锁码 | 通常没有 | 机型必须符合解锁码申请条件。 |
| Samsung | 下载模式，因机型而异 | 不定 | 没有通用的 Fastboot 解锁；地区、芯片组和 One UI 版本都有影响。 |
| Huawei | 当前设备上一般不可用 | 不适用 | 官方一般不提供解锁码。 |

**注意：**
- 美国运营商锁定的机型（Verizon、AT&T）通常无法解锁 Bootloader
- 务必确认你所购机型的可解锁性

> [!IMPORTANT]
> ### Bootloader 解锁：耻辱墙
> 这个由社区维护的[仓库](https://github.com/melontini/bootloader-unlock-wall-of-shame)记录了那些让 Bootloader 解锁变得困难或不可能的公司。购买新设备前请先查看。

如需另一个政策参考，请查看 [Wikipedia 上的 Android Bootloader 解锁概览](https://en.m.wikipedia.org/wiki/Bootloader_unlocking#Android)。


---

## 通用准备（所有设备）

无论厂商是谁，在尝试解锁 Bootloader 之前都请完成以下步骤。

### 步骤 1：启用开发者选项

1. 打开**设置**
2. 进入**关于手机**（或**关于设备**）
3. 找到**版本号**
4. 快速连点**版本号** 7 次
5. 在提示时输入 PIN/密码
6. 屏幕出现"开发者选项已启用"的提示

### 步骤 2：启用关键开发者设置

1. 进入**设置** > **系统** > **开发者选项**
2. 启用 **OEM 解锁**（关键 - 解锁必需）
3. 启用 **USB 调试**（允许与电脑通信）
4. 如有提供，启用 **USB 调试（安全设置）**

**如果 OEM 解锁缺失或呈灰色不可选：**
- 连接 WiFi 并等待 24-48 小时
- 换一个网络（移动数据 vs WiFi）
- 部分运营商设备永久屏蔽该选项
- 设备可能不支持解锁

### 步骤 3：安装 Platform Tools

**Windows：**
1. 下载 [Platform Tools](https://developer.android.com/studio/releases/platform-tools)
2. 解压到 `C:\platform-tools\`
3. 添加到 PATH，或在该目录下使用命令提示符

**macOS：**
```bash
brew install android-platform-tools
```

**Linux（Ubuntu/Debian）：**
```bash
sudo apt install android-tools-adb android-tools-fastboot
```

**Linux（Arch）：**
```bash
sudo pacman -S android-tools
```

### 步骤 4：安装 USB 驱动（仅 Windows）

下载并安装厂商专属驱动：
- [Google USB Driver](https://developer.android.com/studio/run/win-usb)（Pixel）
- [Samsung USB Driver](https://developer.samsung.com/android-usb-driver)
- Xiaomi USB 驱动：随 Mi Unlock Tool 附带
- 其他 OEM 请查看此列表：[OEM USB Drivers](https://developer.android.com/studio/run/oem-usb#Drivers)


### 步骤 5：测试 ADB 连接

1. 用 USB 将设备连接到电脑
2. 在设备上选择**文件传输**模式
3. 在提示时允许 USB 调试（勾选"一律允许使用这台计算机进行调试"）
4. 打开终端/命令提示符
5. 测试连接：

```bash
adb devices
```

预期输出：
```
List of devices attached
1234567890ABCDEF    device
```

如果设备未列出：
- 重新插拔 USB 数据线
- 更换 USB 端口
- 重装驱动（Windows）
- 确认已启用 USB 调试

### 步骤 6：备份数据

**必备备份：**
- 照片和视频（Google Photos、云存储）
- 联系人（Google 通讯录同步）
- 短信（SMS Backup & Restore）
- 应用数据（Google 备份、Helium，或参见[备份应用](../apps-and-modules/backup#backup-restore)）
- 重要文档
- 双重验证恢复码

**提醒：** 解锁 Bootloader 将清空所有内容。

---

## 各厂商专属指南

选择你的设备厂商查看详细说明。

### Google Pixel

**机型：** 所有 Pixel 设备（Pixel 1 至 Pixel 9 系列）

**步骤：**

1. 完成[通用准备](#通用准备所有设备)

2. 进入 Fastboot 模式：
```bash
adb reboot bootloader
```

硬件方式：关机后按住电源键 + 音量下键

3. 确认 Fastboot 连接：
```bash
fastboot devices
```

4. 解锁 Bootloader：
```bash
fastboot flashing unlock
```

5. 用音量键移动到 "Unlock the bootloader"（解锁 Bootloader）

6. 按电源键确认

7. 设备将恢复出厂设置并重启

8. 验证解锁：
```bash
adb reboot bootloader
fastboot getvar unlocked
```

应返回：`unlocked: yes`

**注意：**
- 最简单的解锁流程
- 无需等待期或审批
- 运营商版本通常也可行（请确认有 OEM 解锁开关）
- 准备好下一步了？参见 [Pixel root 指南](./how-to-root-pixel-phone.md)

---

### Xiaomi / Redmi / POCO

**要求：**
- Mi 账号（在设备上登录满 7 天以上）
- Mi Unlock Tool（仅 Windows）
- 7-30 天等待期

**阶段 1：申请解锁权限**

1. 在设备上添加 Mi 账号
   - 设置 > 更多设置 > 开发者选项
   - Mi 账号解锁状态 > 添加账号和设备
   - 保持设备联网

2. 等待审批（7-30 天）
   - 国际版 ROM：通常 7 天（168 小时）
   - 中国版 ROM：通常 30 天（720 小时）
   - 在 Mi 账号解锁状态中查看剩余时间

**阶段 2：使用 Mi Unlock Tool 解锁**

1. 下载 [Mi Unlock Tool](https://en.miui.com/unlock/)（Windows）

2. 安装并启动 Mi Unlock Tool

3. 让设备进入 Fastboot 模式：
```bash
adb reboot bootloader
```

4. 用 USB 将设备连接到电脑

5. 用同一 Mi 账号登录 Mi Unlock Tool

6. 点击 "Unlock"（解锁）按钮

7. 工具会检查资格并解锁设备

8. 设备将恢复出厂设置并重启

**故障排除：**
- "无法验证设备"：等待完整的等待期
- "账号未绑定"：确认已在设备上添加 Mi 账号
- "解锁失败"：更换 USB 端口、重装驱动

**下一步：** 机型专属说明参见 [Xiaomi root 指南](./how-to-root-xiaomi-phone.md)

> [!TIP]
> #### 绕过 Mi Unlock 等待期
> 有用户报告使用旧版本 Mi Unlock Tool 或修改版工具获得了成功。查看这份 [XDA 指南](https://xdaforums.com/t/how-to-unlock-bootloader-on-xiaomi-hyperos-all-devices-except-cn.4654009/)。请谨慎操作。

---

### OnePlus

**机型：** 大多数 OnePlus 设备（T-Mobile 版本请另行确认）

**步骤：**

1. 完成[通用准备](#通用准备所有设备)

2. 进入 Fastboot 模式：
```bash
adb reboot bootloader
```

3. 确认 Fastboot 连接：
```bash
fastboot devices
```

4. 解锁 Bootloader（两个命令都试一试）：
```bash
fastboot oem unlock
```

较新机型使用：
```bash
fastboot flashing unlock
```

5. 用音量键选择 "UNLOCK THE BOOTLOADER"（解锁 Bootloader）

6. 按电源键确认

7. 设备将恢复出厂设置并重启

**注意：**
- 与 Pixel 一样流程直接
- T-Mobile 版本可能存在限制
- 部分机型开机时显示 "Bootloader Unlocked" 警告
- 继续阅读 [OnePlus root 指南](./how-to-root-oneplus-phone.md)

---

### Samsung Galaxy

**关键：** Samsung 的解锁尤其依赖机型和地区。许多美国和加拿大运营商 Snapdragon 版本是锁死的，而部分国际版 Exynos 和 Snapdragon 版本提供解锁途径。在支持的机型上，解锁会永久熔断 Knox。近期的 One UI 版本可能在部分机型上移除 OEM 解锁开关，因此开始前请核实确切的机型、CSC/地区和固件。

**兼容性检查：**

1. 从 Play Store 安装 "Phone INFO SAM" 应用

2. 查看 "OEM Lock" 状态：
   - "ON (U)" = 永久锁定（无法解锁）
   - "OFF" = 或许可以解锁

**解锁流程（仅 Exynos）：**

1. 完成[通用准备](#通用准备所有设备)

2. 将设备完全关机

3. 进入下载模式（Download Mode）：
   - 按住音量下键 + 电源键（或音量下键 + Bixby 键 + 电源键）
   - 出现警告时按音量上键

4. 长按音量上键以解锁 Bootloader

5. 按屏幕上的警告提示操作

6. 设备将恢复出厂设置

7. 开机画面显示 "Custom"（Knox 已永久熔断）

**Knox 的后果：**
- Knox EFUSE 被物理熔断（永久，无法恢复）
- Samsung Pay 被禁用
- 安全文件夹被禁用
- Samsung Pass 被禁用
- Samsung Health 可能无法使用
- 保修永久失效
- 转卖价值明显下降

**下一步：**
- 继续阅读 [Samsung root 指南](./how-to-root-samsung-phone.md)
- 或考虑无需 root 的[第三方 ROM 替代方案](./custom-rom-installation.md)

---

### Motorola

**步骤：**

**阶段 1：获取解锁码**

1. 访问 [Motorola Bootloader Unlock](https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-a)

2. 登录或注册 Motorola 账号

3. 完成[通用准备](#通用准备所有设备)

4. 进入 Fastboot 模式：
```bash
adb reboot bootloader
```

5. 获取设备标识：
```bash
fastboot oem get_unlock_data
```

6. 复制返回的字符串（合并所有行，去掉空格和 "(bootloader)" 字样）

7. 在 Motorola 网站上提交该字符串

8. 通过电子邮件接收解锁码（通常在几小时内）

**阶段 2：应用解锁码**

1. 如果尚未处于 Fastboot 模式，先进入 Fastboot 模式

2. 应用解锁码：
```bash
fastboot oem unlock UNLOCK_CODE
```

将 `UNLOCK_CODE` 替换为邮件中的解锁码

3. 在设备屏幕上确认解锁

4. 设备将恢复出厂设置并重启

**注意：**
- 每次开机都会显示永久性的 "Bootloader Unlocked" 警告
- 保修失效
- 拿到解锁码后流程通常很顺利
- 下一步：[Motorola root 指南](./how-to-root-motorola-phone.md)

---

### Nothing Phone

**机型：** Nothing Phone (1)、(2)、(2a)

**步骤：**

1. 完成[通用准备](#通用准备所有设备)

2. 进入 Fastboot 模式：
```bash
adb reboot bootloader
```

3. 解锁 Bootloader：
```bash
fastboot flashing unlock
```

4. 用音量键选择解锁选项

5. 按电源键确认

6. 设备将恢复出厂设置并重启

**注意：**
- 流程与 Pixel 类似
- 社区支持良好
- Nothing OS 相关的特别注意事项很少
- 继续阅读 [Nothing Phone root 指南](./how-to-root-nothing-phone.md)

---

### Sony Xperia

**步骤：**

**阶段 1：确认资格**

1. 访问 [Sony Developer Portal](https://developer.sony.com/develop/open-devices/get-started/unlock-bootloader/)

2. 输入 IMEI（在拨号盘输入 `*#06#`）

3. 确认是否显示 "bootloader unlock allowed: yes"
   - 如果为 no：该设备无法解锁

**阶段 2：获取解锁码**

1. 注册 Sony Developer 账号

2. 填写设备信息和 IMEI

3. 接收解锁码

**阶段 3：解锁**

1. 进入 Fastboot 模式

2. 应用解锁码：
```bash
fastboot oem unlock 0xUNLOCK_CODE
```

将 `UNLOCK_CODE` 替换为收到的解锁码

3. 设备解锁并重启

**DRM 密钥丢失：**
- 相机画质下降（尤其是弱光环境）
- 部分 DRM 保护的内容可能无法播放
- 无法恢复
- 部分第三方 ROM 包含相机修复

---

### 其他厂商

**ASUS ROG Phone：**
- ASUS 提供官方解锁工具
- 从 ASUS 支持网站下载
- 按应用内说明操作

**Realme：**
- 通过深度测试（Deep Testing）应用
- 7 天等待期
- 支持的机型有限

**OPPO：**
- 通过深度测试（Deep Testing）应用
- 7 天等待期
- 支持的机型非常有限

**Huawei/Honor：**
- 自 2018 年起不再支持
- 较新的机型无法解锁

---

## 解锁后的步骤

手机重启并完成初始设置后，请选择一种 root 方式，而不是随意刷入文件。继续阅读 [Magisk root 指南](./magisk-guide.md)、[KernelSU 指南](./kernelsu-guide.md)或 [APatch 指南](./apatch-guide.md)。如果需要先装 Recovery，请按照[第三方 Recovery 安装指南](./how-to-install-custom-recovery.md)操作。
成功解锁 Bootloader 后：

### 步骤 1：初始设置

设备会进入设置向导（所有数据已被清除）。

1. 完成 Android 设置流程
2. 重新启用开发者选项（连点版本号 7 次）
3. 重新启用 USB 调试
4. 可选：重新启用 OEM 解锁（为以后的修改做准备）

### 步骤 2：验证解锁

```bash
adb reboot bootloader
fastboot getvar unlocked
```

应返回：`unlocked: yes` 或 `unlocked: 1`

或：
```bash
fastboot oem device-info
```

查看是否有 "Device unlocked: true"

### 步骤 3：后续步骤

**典型路径：**

1. **安装第三方 Recovery**（可选但推荐）
   - [TWRP 安装指南](./how-to-install-custom-recovery.md) - 让 root 和备份更方便

2. **为设备获取 root** - 选择你偏好的方式：
   - [Magisk 指南](./magisk-guide.md) - 最流行，对新手最友好
   - [KernelSU 指南](./kernelsu-guide.md) - 进阶的内核级 root，隐藏能力更强
   - [APatch 指南](./apatch-guide.md) - 另一种基于内核的方案
   - [对比所有方式](./root-framework-comparison.md)

3. **root 后的配置**
   - 安装[必备入门应用](../apps-and-modules/#新手必备套装必装应用)
   - 配置[系统级广告拦截](../general-guides/android-adblocking.md)
   - [安全移除预装软件](../general-guides/android-apps-debloating.md)
   - 浏览 [650+ 个 root 应用和模块](../apps-and-modules/)

### 步骤 4：安全注意事项

**重要提醒：**
- 银行应用可能检测到已解锁的 Bootloader（参见 [root 隐藏方案](../apps-and-modules/root-management#root-hiding-play-integrity)）
- 设置强屏幕锁
- 只安装可信软件
- 谨慎对待 root 权限
- 保持设备软件更新
- 遇到常见问题请查阅[故障排除指南](../troubleshooting.md)

---

## 故障排除

### OEM 解锁缺失或呈灰色不可选

**原因：**
- 运营商限制（永久）
- FRP（恢复出厂设置保护）处于激活状态
- 设备未联网
- 初始设置后等待时间不够

**解决办法：**
- 连接 WiFi 并等待 24-48 小时
- 改用移动数据代替 WiFi（或反过来）
- 移除 Google 账号、恢复出厂设置并等待 48 小时
- 如果是运营商设备，可能被永久锁定

### Fastboot 无法识别设备

**症状：** 电脑在 Fastboot 模式下检测不到设备

**解决办法：**
- 安装正确的 USB 驱动（Windows）
- 更换 USB 端口（USB 2.0 往往更稳定）
- 更换 USB 数据线（必须支持数据传输）
- 改用硬件按键而非 ADB 进入 Fastboot
- 换一台电脑
- 禁用 USB 选择性暂停（Windows 电源选项）

### "Remote: Not Allowed" 错误

**原因：**
- 未启用 OEM 解锁
- 设备不支持解锁
- 运营商限制

**解决办法：**
- 确认开发者选项中已启用 OEM 解锁
- 检查设备兼容性
- 确认不是运营商锁定机型

### 解锁后设备无法启动

**症状：** 卡在开机 logo 或无限重启

**解决办法：**
1. 等待 10 分钟（解锁后首次开机可能很慢）
2. 强制重启：长按电源键 10-15 秒
3. 进入 Recovery 并清除缓存
4. 在 Recovery 中恢复出厂设置
5. 通过 Fastboot 刷入官方固件

**预防：** 解锁前务必先下载官方固件，以备紧急恢复。

### "Waiting for Device" 提示

**原因：** Fastboot/ADB 连接问题

**解决办法：**
- 确认设备出现在 `fastboot devices` 或 `adb devices` 中
- 重装 USB 驱动（Windows）
- 更换 USB 端口
- 改用 USB 2.0 端口而不是 USB 3.0
- 暂时禁用杀毒软件
- 以管理员身份运行命令提示符（Windows）

### 解锁过程被中断

如果解锁过程中断电或断开连接：

1. 重启进入 Fastboot 模式
2. 再次尝试解锁命令
3. 如果无限重启，刷入官方 boot.img：
```bash
fastboot flash boot boot.img
fastboot reboot
```
4. 如果仍有问题，刷入完整官方固件

---

## 更多资源

**官方文档：**
- [Android 开发者 Bootloader 指南](https://source.android.com/docs/core/architecture/bootloader)
- [Fastboot 文档](https://android.googlesource.com/platform/system/core/+/master/fastboot/)

**社区资源：**
- [XDA Developers 论坛](https://forum.xda-developers.com/) - 机型专属指南
- [Bootloader 解锁耻辱墙](https://github.com/melontini/bootloader-unlock-wall-of-shame) - 厂商限制追踪

**紧急恢复：**
- 提前下载好官方固件
- 了解设备的 EDL/下载模式
- 收藏机型专属的救砖指南

**相关指南：**
- [主 root 指南](./index.md) - 完整总览
- [第三方 Recovery 安装](./how-to-install-custom-recovery.md) - 下一步
- [Magisk root 指南](./magisk-guide.md) - 主要 root 方式
- [常见问题](../faqs.md) - 更多问答
- [故障排除指南](../troubleshooting.md) - 常见问题

---

## 安全提醒

解锁 Bootloader 是 Android 定制必不可少的第一步，但它会带来永久性的后果：

- 所有数据将被清除
- 保修将失效
- 安全性将降低
- 部分应用可能无法使用

**只有在以下情况下才继续：**
- 你了解这些风险
- 你已备份所有数据
- 你接受这些后果
- 你能应对故障排除

**准备就绪后：** 前往[第三方 Recovery 安装](./how-to-install-custom-recovery.md)或 [root 安装](./index.md#选择-root-方案)

----

:sparkles: 祝你的 Android 定制之旅顺利。
