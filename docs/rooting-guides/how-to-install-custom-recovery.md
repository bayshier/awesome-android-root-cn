---
layout: doc
title: 第三方 Recovery 安装完整指南
description: "安装第三方 Recovery 的权威指南——TWRP、OrangeFox、SKYHAWK。通往 root、第三方 ROM 和高级 Android 修改的大门。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/how-to-install-custom-recovery
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: 第三方 Recovery 安装完整指南 - TWRP 等
  - - meta
    - property: og:description
      content: 通过这份覆盖 TWRP、OrangeFox 和 SKYHAWK 的全面指南安装第三方 Recovery，实现 Android root 与 ROM 刷入。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/how-to-install-custom-recovery
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/custom-recovery.png
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
      content: 第三方 Recovery 安装完整指南
  - - meta
    - name: twitter:description
      content: 安装 TWRP、OrangeFox、SKYHAWK 第三方 Recovery，实现 Android root 与自定义。
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:creator
      content: "@awsm_and_root"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/custom-recovery.png
  - - meta
    - name: twitter:image:alt
      content: 第三方 Recovery 安装指南 - TWRP、OrangeFox、SKYHAWK
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
      content: 第三方 Recovery
  - - meta
    - property: article:tag
      content: TWRP
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


# 第三方 Recovery 安装指南

安装第三方 Recovery，解锁高级 Android 修改，包括 root、第三方 ROM 和全面的系统备份。

## 快速导航

- [认识第三方 Recovery](#认识第三方-recovery)
- [Recovery 选择](#选择-recovery-软件)
- [前提条件](#前提条件)
- [安装指南](#安装指南)
- [安装后操作](#安装后操作)
- [故障排除](#故障排除)

**相关指南：**
- [主 Root 指南](./index.md)——root 完整概述
- [解锁 Bootloader](./how-to-unlock-bootloader.md)——必需的第一步
- [Magisk 安装](./magisk-guide.md)——通过第三方 Recovery 获取 root
- [常见问题](../faqs.md)——常见问题与解决方案

---

## 认识第三方 Recovery

第三方 Recovery 用功能更强的软件替换 Android 自带的官方 Recovery，提供高级的系统管理能力。

### Recovery 能做什么
- ⚡ 完整的设备备份（NANDroid）
- ⚡ 安装 root（Magisk、KernelSU、APatch）
- ⚡ 安装第三方 ROM
- ⚡ 系统级修改
- ⚡ 安装模块与修改补丁
- ⚡ 访问文件系统
- ⚡ 支持 ADB sideload
- ⚡ 系统修复工具

### 要求

安装第三方 Recovery 需要：
1. **已解锁的 Bootloader**——[解锁指南](./how-to-unlock-bootloader.md)
2. **正确的 Recovery 镜像**——因设备而异
3. **ADB/Fastboot 工具**——[Platform Tools](https://developer.android.com/studio/releases/platform-tools)

### 现代设备与传统设备

**传统设备（Android 9 及更早）：**
- 存在独立的 Recovery 分区
- 直接使用 fastboot flash，流程简单
- Recovery 容易持久保留

**现代设备（Android 10 及以上）：**
- A/B 分区方案（双 slot）
- 动态分区（无独立 Recovery 分区）
- Recovery 内嵌在 boot/vendor_boot/init_boot 中
- 需要临时引导或安装器 ZIP 方式

---

## 选择 Recovery 软件

目前有三种主流的第三方 Recovery 可选，各有特色。

### TWRP（Team Win Recovery Project）

**最流行、支持最广**

- ✅ 设备支持最广
- ✅ 文档丰富
- ✅ 社区庞大
- ✅ 代码库成熟稳定
- ❌ 界面设计朴素
- ❌ 在部分较新设备上存在解密问题

**最适合：**大多数用户，追求最大兼容性

**下载：**[twrp.me/Devices](https://twrp.me/Devices/)

### OrangeFox Recovery

**基于 TWRP 的现代替代品**

- ✅ Material Design 界面
- ✅ 比 TWRP 更多功能
- ✅ 设备支持良好
- ✅ 开发活跃
- ❌ 设备列表比 TWRP 小
- ❌ 部分为非官方构建

**最适合：**在受支持设备上想要现代界面的用户

**下载：**[orangefox.download](https://orangefox.download/)

### SKYHAWK Recovery（SHRP）

**功能丰富、具备高级能力的 Recovery**

- ✅ 仪表盘式界面
- ✅ 内置安全功能
- ✅ 支持主题
- ✅ 附加工具
- ❌ 设备支持有限
- ❌ 社区较小

**最适合：**受支持设备上的发烧友

**下载：**[skyhawkrecovery.github.io](https://skyhawkrecovery.github.io/)


> [!TIP]
>  **💡 快速决策指南**
> - 第一次接触第三方 Recovery？→ 选择 TWRP
> - 想要现代界面？→ 选择 OrangeFox
> - 需要高级功能？→ 选择 SKYHAWK
> - 设备不受支持？→ 到 XDA 论坛查找非官方构建

---

## 前提条件

### 重要警告

::: danger ⚠️ 必要前提
**已解锁的 Bootloader**——第三方 Recovery 要求 Bootloader 已解锁。请先完成[解锁 Bootloader](./how-to-unlock-bootloader.md)。

**设备匹配**——安装错误的 Recovery 镜像可能导致设备变砖。请核实确切的型号和代号。

**数据安全**——虽然安装 Recovery 不应擦除数据，但请务必先备份重要文件。

**保修**——安装第三方 Recovery 通常会使制造商保修失效。
:::

### 基本要求

**硬件**
- 已解锁 Bootloader 的 Android 设备
- 电量 50% 以上
- 质量良好的 USB 数据线（支持数据传输）
- 电脑（Windows、macOS 或 Linux）

**软件**
- [Android Platform Tools](https://developer.android.com/studio/releases/platform-tools)（最新版本）
- 设备专属 USB 驱动（仅 Windows 需要）
- 与你设备完全匹配的第三方 Recovery 镜像
- 官方固件备份（用于紧急恢复）

**知识储备**
- 设备型号和代号
- 分区方案（A/B 或仅 A）
- 基本的命令行使用方法

### 识别你的设备

**查找设备代号：**

方法 1：ADB 命令
```bash
adb shell getprop ro.product.device
```

方法 2：设备信息
- 设置 > 关于手机 > 型号
- 与 Recovery 网站上的设备页面对照

方法 3：CPU-Z 应用
- 从 Play Store 安装 CPU-Z
- 在“Device”标签页中查看代号

### 判断分区方案

**检查是否为 A/B 设备：**
```bash
adb reboot bootloader
fastboot getvar current-slot
```

如果返回“a”或“b”：A/B 设备
如果报错：仅 A 分区设备

**检查 Recovery 分区：**
```bash
fastboot getvar has-slot:recovery
```

返回“yes”：存在独立 Recovery 分区
返回“no”：Recovery 位于 boot/vendor_boot/init_boot 中

### 下载正确的 Recovery

1. 访问 Recovery 网站（TWRP、OrangeFox 或 SKYHAWK）
2. 搜索你的设备代号
3. 下载适用于你 Android 版本的最新版本
4. 如提供 SHA256 校验和，请进行核对

**校验下载（可选但推荐）：**

Windows PowerShell：
```powershell
Get-FileHash recovery.img -Algorithm SHA256
```

Linux/macOS：
```bash
shasum -a 256 recovery.img
```

---

## 安装指南

安装方法取决于你设备的分区方案。请按对应的路径操作。

### 第 1 步：准备

1. 将 recovery.img 放入 platform-tools 文件夹

2. 在设备上启用 USB 调试
   - 设置 > 开发者选项 > USB 调试

3. 将设备连接到电脑

4. 验证 ADB 连接：
```bash
adb devices
```

设备应出现在列表中

### 第 2 步：进入 Fastboot

**方法 1：ADB 命令（推荐）**
```bash
adb reboot bootloader
```

**方法 2：硬件按键**
- 关闭设备电源
- 按住电源键 + 音量下键（因厂商而异）

**验证 fastboot 连接：**
```bash
fastboot devices
```

应显示设备序列号

### 第 3 步：安装方法

根据你的设备类型选择方法：

#### 方法 A：传统设备（有独立 Recovery 分区）

适用于有独立 Recovery 分区的设备（通常为 Android 9 及更早）。

**刷入 Recovery：**
```bash
fastboot flash recovery recovery.img
```

**立即重启进入 Recovery：**
```bash
fastboot reboot recovery
```

或在刷入后使用硬件按键进入，以防官方 Recovery 被还原。

#### 方法 B：现代 A/B 设备（无独立 Recovery 分区）

适用于采用 A/B 分区且无独立 Recovery 分区的设备（Android 10 及以上）。

**第 1 步：临时引导 Recovery**
```bash
fastboot boot recovery.img
```

设备将临时进入 Recovery，不会永久安装。

**第 2 步：在 Recovery 中永久安装**

选项 1：使用安装器 ZIP
1. 将 Recovery 安装器 ZIP 传输到设备
2. 在 Recovery 中：Install > 选择 ZIP > 滑动确认
3. 重启进入 Recovery

选项 2：刷入正确的分区
1. 在 Recovery 中：Install > Install Image
2. 选择 recovery.img 文件
3. 选择正确的分区：
   - Boot（最常见）
   - Vendor_Boot（部分设备）
   - Init_Boot（Android 13 及以上的 GKI 设备）
4. 滑动确认

**第 3 步：验证安装**
```bash
fastboot reboot recovery
```

设备应启动进入第三方 Recovery。

#### 方法 C：Samsung 设备（Odin 方法）

Samsung 设备需要使用 Odin 工具而非 fastboot。

**要求：**
- Odin 工具（仅 Windows）
- .tar 格式的 Recovery
- Samsung USB 驱动

**步骤：**

1. 从 XDA 或 Samsung Firmware 网站下载 Odin

2. 进入下载模式（Download Mode）：
   - 关闭设备电源
   - 按住音量下键 + 电源键（或音量下键 + Bixby 键 + 电源键）
   - 出现警告时，按音量上键

3. 将设备连接到电脑

4. 打开 Odin

5. 点击“AP”按钮并选择 Recovery 的 .tar 文件

6. 取消勾选“Auto Reboot”选项

7. 点击“Start”按钮

8. 出现“PASS”后，手动重启进入 Recovery：
   - 在保持连接的状态下按住音量上键 + 电源键

**注意：**Samsung Knox 将被永久触发。无法逆转。

### 第 4 步：首次进入 Recovery

**关键：**安装完成后立即进入第三方 Recovery，以防止某些设备上的官方 Recovery 被还原。

**进入方法：**

Fastboot 命令：
```bash
fastboot reboot recovery
```

硬件按键（常见组合）：
- 电源键 + 音量上键
- 电源键 + 音量上键 + Bixby 键（Samsung）
- 电源键 + 音量下键（部分 OnePlus）

确认 Recovery 已正确加载且触屏正常工作。

---

## 安装后操作

### 验证安装

**检查 Recovery 功能：**
- 触屏界面有响应
- 存储可访问（或显示已加密）
- 主菜单显示正常
- 设备信息中显示第三方 Recovery 版本

**测试 ADB 访问：**

在 Recovery 中启用 ADB sideload，或检查：
```bash
adb devices
```

应显示设备处于 Recovery 模式。

### 创建备份

::: tip 关键的第一步
在进行任何修改之前，先创建完整备份。这样一旦出现问题，就能安全恢复。
:::

**推荐备份的分区：**

必备：
- Boot（现代设备为 vendor_boot/init_boot）
- Data（包含所有用户文件和应用）

重要：
- EFS/Modem（IMEI 和运营商数据）
- Persist（传感器校准数据）

可选：
- System（体积大，可从 ROM 恢复）
- Vendor（通常随 ROM 提供）

**在 Recovery 中创建备份：**

1. 在 Recovery 主菜单中选择“Backup”
2. 选择要备份的分区
3. 滑动开始备份
4. 等待完成（Data 分区的备份可能又大又慢）

**将备份转移到设备外：**

使用 ADB：
```bash
adb pull /sdcard/TWRP/BACKUPS/ backup_folder/
```

或通过 USB 连接后用文件管理器复制。

**妥善保存备份：**
- 外接硬盘
- 云存储
- 建议保存在多个位置

### 测试核心功能

**文件访问：**
- 检查内部存储是否可见
- 如果已加密且无法解密：使用 ADB sideload 或 OTG

**ADB sideload：**
1. 在 Recovery 中：Advanced > ADB Sideload
2. 在电脑上：`adb sideload test.zip`

**挂载选项：**
- 确认 system、data、cache 能正确挂载
- 检查 USB OTG 外部存储是否可用

### 处理加密

现代设备使用基于文件的加密（FBE），Recovery 可能无法解密。

**如果存储显示为已加密：**

选项 1：使用 ADB
```bash
adb push file.zip /sdcard/
```

选项 2：使用 OTG 存储
- 通过 OTG 转接头连接 U 盘
- 在 Recovery 中从 OTG 安装

选项 3：格式化 data（最后手段）
- 移除加密和所有数据
- Wipe > Format Data
- 输入“yes”确认
- 数据将全部丢失

---

## 核心操作

### 安装 ZIP 文件

**方法 1：从内部存储安装**

1. 将 ZIP 复制到设备内部存储
2. 在 Recovery 中：Install
3. 定位到 ZIP 文件
4. 滑动确认安装
5. 完成后重启

**方法 2：ADB sideload**

1. 在 Recovery 中：Advanced > ADB Sideload
2. 在电脑上：
```bash
adb sideload file.zip
```
3. 等待安装完成
4. 重启系统（Reboot System）

**方法 3：OTG 存储**

1. 通过 OTG 连接 U 盘
2. 在 Recovery 中：Install
3. 选择“USB OTG”存储
4. 定位到 ZIP
5. 滑动确认

### 管理备份

**创建备份：**
- Backup > 选择分区 > 滑动确认
- 保存到设备外的安全位置

**恢复备份：**
- Restore > 选择备份 > 勾选分区 > 滑动确认
- 设备将恢复到备份时的状态

**删除旧备份：**
- 使用 Recovery 的文件管理器或 ADB
- 定期释放存储空间

### 清除操作

**恢复出厂设置：**
- Wipe > Factory Reset
- 清除 data，但在大多数设备上会保留内部存储

**高级清除：**
- Wipe > Advanced Wipe
- 选择特定分区：
  - Cache（安全，清除临时文件）
  - Dalvik/ART Cache（安全，开机时重建）
  - Data（移除所有应用和设置）
  - System（移除操作系统）

::: danger 清除警告
**清除 System**——会移除你的操作系统。请提前准备好待刷入的 ROM。

**清除 Data**——会移除所有应用、设置和文件。

**格式化 Data**——会移除加密和所有数据。需要从头开始设置设备。
:::

---

## 现代设备注意事项

### A/B 分区方案

**特点：**
- 两个系统 slot（A 和 B）
- 无缝更新
- 无独立 Recovery 分区
- Recovery 位于 boot/vendor_boot/init_boot 中

**影响：**
- 必须使用临时引导或安装器 ZIP
- OTA 更新可能会移除第三方 Recovery
- 更新后需要重新安装

**检查当前活动 slot：**
```bash
fastboot getvar current-slot
```

**如有需要，切换 slot：**
```bash
fastboot set_active a
# 或
fastboot set_active b
```

### 动态分区

**特点：**
- 分区大小灵活可调
- super 分区包含 system、vendor、product
- 自 Android 10 引入

**影响：**
- 备份体积更大
- 刷入流程不同
- 部分 Recovery 可能无法完全支持

### Android Verified Boot（AVB）

**Bootloader 已解锁时：**
- AVB 验证被禁用
- 允许第三方 Recovery 和修改
- 通常无需刷入 vbmeta

**如果出现问题：**
- 查阅设备专属说明
- 部分设备可能需要修改 vbmeta

### Fastbootd 模式

**面向动态分区的用户态 fastboot：**

进入 fastbootd：
```bash
fastboot reboot fastboot
```

用途：
- 刷入动态分区
- 部分 ROM 安装
- 安装 Recovery 通常用不到

### GKI 设备（Generic Kernel Image）

**采用 GKI 的 Android 12 及以上设备：**
- Recovery 可能在 init_boot 分区
- 仔细查阅设备说明
- 刷入时使用正确的分区

---

## 故障排除

### Recovery 无法启动

**症状：**刷入 Recovery 后设备卡在 Logo 或无限重启

**解决方案：**

1. 临时引导 Recovery 进行测试：
```bash
fastboot boot recovery.img
```

2. 确认 Recovery 与你的设备和 Android 版本匹配

3. 刷入正确的分区（查阅设备说明）：
```bash
fastboot flash boot recovery.img
# 或
fastboot flash vendor_boot recovery.img
# 或
fastboot flash init_boot recovery.img
```

4. 恢复官方镜像：
```bash
fastboot flash boot stock_boot.img
```

### 重启后 Recovery 消失

**原因：**设备在首次正常开机时还原了官方 Recovery

**解决方案：**

刷入后立即进入第三方 Recovery：
```bash
fastboot reboot recovery
```

或安装 root 方案（Magisk），可防止其被还原。

### 触屏无法使用

**解决方案：**

1. 尝试其他版本的 Recovery（更新或更旧）
2. 使用硬件按键导航
3. 查看设备页面了解已知的触屏问题
4. 尝试其他 Recovery（如果用的是 TWRP，可试试 OrangeFox）

### 无法看到内部存储

**原因：**Recovery 无法解密设备加密

**解决方案：**

选项 1：使用 ADB sideload
```bash
adb sideload file.zip
```

选项 2：使用 OTG 存储
- 连接 U 盘
- 从 OTG 安装

选项 3：Format Data（会丢失数据）
- Wipe > Format Data
- 输入“yes”确认
- 移除加密和所有数据

### Fastboot 检测不到设备

**解决方案：**

1. 安装/重装 USB 驱动（Windows）
2. 改用 USB 2.0 接口而非 3.0
3. 换一根 USB 数据线
4. 以管理员身份运行（Windows）
5. 检查设备是否出现：`fastboot devices`

### “No OS Installed”警告

**原因：**Recovery 检测不到操作系统

**如果你没有清除 System：**
- 该警告是误报
- Reboot System 应该能正常开机

**如果你清除了 System：**
- 立即安装第三方 ROM
- 或从备份恢复
- 没有操作系统设备将无法开机

### Slot 问题（A/B 设备）

**安装 Recovery 后无法开机：**

检查当前活动 slot：
```bash
fastboot getvar current-slot
```

尝试另一个 slot：
```bash
fastboot set_active a
fastboot reboot
```

或：
```bash
fastboot set_active b
fastboot reboot
```

### 安装错误

**“Remote: Flashing not allowed”**
- Bootloader 未完全解锁
- 部分设备需要执行：`fastboot flashing unlock_critical`

**“Remote: Partition doesn't exist”**
- 你设备的分区名不对
- 查阅设备专属说明

**“Failed to flash”**
- 下载损坏——重新下载 Recovery
- Recovery 变体与设备不匹配
- USB 连接问题——换个接口/数据线试试

---

## 紧急恢复

### 设备无法进入任何模式

1. 尝试紧急下载模式（因厂商而异）：
   - Qualcomm：EDL 模式（测试点或特殊按键组合）
   - Samsung：下载模式（音量下键 + 电源键）
   - Xiaomi：EDL 模式（连接时按住音量下键 + 电源键）

2. 使用厂商的救砖工具：
   - Google：刷入完整的出厂镜像
   - Samsung：用 Odin 刷入官方固件
   - Xiaomi：Mi Flash Tool
   - OnePlus：MSM Download Tool

3. 到 XDA 论坛寻求设备专属帮助

### 保留 Bootloader 访问能力

**始终保持以下能力：**
- 进入 fastboot/bootloader
- 进入下载/EDL 模式
- 刷入官方固件

**提前下载并保存：**
- 你设备的官方固件
- 紧急刷机工具
- 设备驱动

---

## 下一步

第三方 Recovery 已成功安装。选择你的前进方向：

### 获取 Root

**安装 root 方案：**
- [Magisk 指南](./magisk-guide.md)——最流行，模块丰富
- [KernelSU 指南](./kernelsu-guide.md)——基于内核，隐藏效果更好
- [APatch 指南](./apatch-guide.md)——另一种方案

**必备 root 应用：**
- [Root 应用合集](../apps-and-modules/)——精选的 root 应用列表

### 体验第三方 ROM

**安装第三方 ROM：**
- [第三方 ROM 安装指南](./custom-rom-installation.md)——完整流程
- LineageOS、Pixel Experience、Paranoid Android 等

### 学习练手

**练习操作：**
- 创建并恢复备份
- 安装简单的修改补丁
- 学习 ADB sideload
- 在有备份保障的情况下安全实验

### 寻求支持

**获取帮助：**
- [常见问题](../faqs.md)——常见疑问
- [故障排除指南](../troubleshooting.md)
- [XDA 论坛](https://forum.xda-developers.com/)——设备专属帮助
- [GitHub Issues](https://github.com/awesome-android-root/awesome-android-root/issues)——报告问题

---

## 更多资源

**Recovery 官方网站：**
- [TWRP](https://twrp.me/)——TWRP 官方站点
- [OrangeFox](https://orangefox.download/)——OrangeFox 下载页
- [SKYHAWK](https://skyhawkrecovery.github.io/)——SKYHAWK Recovery

**社区资源：**
- [XDA Developers](https://forum.xda-developers.com/)——设备专属指南
- [Reddit r/AndroidRoot](https://www.reddit.com/r/androidroot/)——社区支持

**相关指南：**
- [主 Root 指南](./index.md)——完整概述
- [解锁 Bootloader](./how-to-unlock-bootloader.md)——必要前提
- [Root 框架对比](./root-framework-comparison.md)——选择 root 方案

---

## 安全提醒

**动手修改之前：**
- 创建完整备份
- 确认文件正确无误
- 明白自己在做什么
- 准备好恢复预案

**实验时：**
- 从小的改动开始
- 一次只测试一项
- 保持备份为最新
- 记录自己的操作

### 如果遇到问题：
- [🌐 GitHub](https://github.com/awesome-android-root/awesome-android-root)：参与项目的源码与开发贡献。
- [𝕏 Twitter](https://x.com/awsm_and_root)：获取最新动态和社区精选。
- [完整 FAQ](../faqs.md)
- XDA 论坛——设备专属帮助与帖子

---

::: tip 🎉 恭喜！
你已安装第三方 Recovery，或搭建了安全的临时引导流程。重大改动前请务必先备份，并遵循设备专属说明以获得最佳效果。
:::
