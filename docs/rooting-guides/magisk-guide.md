---
layout: doc
title: "Magisk Root 指南：安装、模块与故障排除"
description: "学习 Magisk 安装、boot 镜像修补、模块、Zygisk、DenyList、Play Integrity 以及受支持 Android 设备的故障排除。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/magisk-guide
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: "Magisk Root 指南：安装、模块与故障排除"
  - - meta
    - property: og:description
      content: "通过 boot 镜像修补、systemless 模块、Zygisk、DenyList 安装 Magisk，并获得实用的故障排除指导。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/magisk-guide
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/magisk-guide.png
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
      content: "Magisk Root 指南：安装、模块与故障排除"
  - - meta
    - name: twitter:description
      content: Magisk 安装、boot 镜像修补、模块、Zygisk、root 隐藏与 Play Integrity 故障排除。
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:creator
      content: "@awsm_and_root"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/magisk-guide.png
  - - meta
    - name: twitter:image:alt
      content: Magisk Root 指南 - 通用 Systemless Root
  - - meta
    - name: author
      content: Awesome Android Root Project
  - - meta
    - property: article:author
      content: https://github.com/awesome-android-root/awesome-android-root
  - - meta
    - property: article:section
      content: Android Rooting Solutions
  - - meta
    - property: article:tag
      content: Magisk Root
  - - meta
    - property: article:tag
      content: Systemless Root
  - - meta
    - property: article:tag
      content: Android Rooting
  - - meta
    - property: article:tag
      content: Magisk Modules
  - - meta
    - property: article:tag
      content: Root Management
  - - meta
    - property: article:tag
      content: Play Integrity Fix
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
        "name": "Complete Magisk Root Installation Guide",
        "description": "Step-by-step guide to install Magisk systemless root on Android devices",
        "totalTime": "PT45M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD", 
          "value": "0"
        },
        "tool": [
          {"@type": "HowToTool", "name": "Android Device with Unlocked Bootloader"},
          {"@type": "HowToTool", "name": "Computer with ADB/Fastboot"},
          {"@type": "HowToTool", "name": "Magisk APK"},
          {"@type": "HowToTool", "name": "Stock Boot Image"}
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Download Required Files",
            "text": "Download latest Magisk APK and extract boot.img from device firmware"
          },
          {
            "@type": "HowToStep",
            "name": "Patch Boot Image",
            "text": "Use Magisk app to patch the stock boot image creating magisk_patched.img"
          },
          {
            "@type": "HowToStep",
            "name": "Flash Patched Boot",
            "text": "Use fastboot to flash the patched boot image to device"
          },
          {
            "@type": "HowToStep",
            "name": "Install Magisk Manager",
            "text": "Install Magisk app for root management and module installation"
          }
        ]
      }
---

# Magisk Root 指南：安装、模块与 Root 管理

Magisk 通过修补后的 boot 或 init_boot 镜像提供 systemless root。本指南涵盖安装方式选择、boot 镜像修补、模块、Zygisk、DenyList、Play Integrity，以及更新或模块出错时的恢复方法。

## 快速导航

- [什么是 Magisk](#认识-magisk)
- [前置条件](#前置条件)
- [安装方法](#安装方法)
- [安装后设置](#安装后设置)
- [模块管理](#模块管理)
- [Root 隐藏](#root-隐藏与-play-integrity)
- [故障排除](#故障排除)

**相关指南：**
- [Root 主指南](./index.md) - Root 完整概览
- [解锁 Bootloader](./how-to-unlock-bootloader.md) - 必需的第一步
- [Root 方案对比](./root-framework-comparison.md) - 与 KernelSU 和 APatch 的比较
- [故障排除指南](../troubleshooting.md)
- [常见问题](../faqs.md) - 常见问题解答

**Magisk 主题导航：** [安装](#安装方法) · [boot 镜像修补](#方法-1boot-镜像修补推荐) · [Magisk 模块](#模块管理) · [Zygisk 与 DenyList](#root-隐藏与-play-integrity) · [Play Integrity](#认识-play-integrity) · [故障排除](#故障排除)

---

## 认识 Magisk

Magisk 是一种 systemless root 方案，无需修改系统分区即可提供超级用户权限。它使用 Magic Mount 以覆盖方式应用修改，使 root 可逆且对 OTA 友好。

### 核心特性

- **Magic Mount 覆盖**：在只读分区（包括 Android 13+ 上的 EROFS）之上虚拟化修改
- **Boot/init_boot 修补**：修改启动链（而非 /system）
- **Zygisk**：向 Zygote 进程注入代码，以支持强大的用户空间模块
- **可逆**：卸载即可完全恢复官方镜像（前提是你保留了原始文件）

### Magisk 与其他方案对比

| 特性 | Magisk | KernelSU | APatch |
|---------|--------|----------|---------|
| 易用性 | 优秀 | 中等 | 中等 |
| 模块支持 | 优秀 | 优秀 | 良好 |
| Root 隐藏 | 良好 | 优秀 | 优秀 |
| 设备支持 | 通用 | 有限 | 有限 |
| 需要第三方内核 | 否 | 是 | 否 |

**在以下情况下选择 Magisk：**
- 你想要最简单的安装方式
- 你需要丰富的模块（探索 [650+ 应用](../apps-and-modules/)）
- 你想要最大兼容性
- 你是 root 新手

> [!TIP]
> 与其他 root 方案的详细对比：[Root 方案对比](./root-framework-comparison.md)

---

## 前置条件

### 关键要求

::: danger 必备前提
**已解锁的 Bootloader** - Magisk 要求解锁 Bootloader。请先完成[解锁 Bootloader](./how-to-unlock-bootloader.md)。

**官方固件** - 下载你设备的官方固件，用于提取 boot 镜像。

**完整备份** - 操作前备份所有重要数据。

**电量 50% 以上** - 确保电量充足，防止中途断电。
:::

### 硬件要求

- 已解锁 Bootloader 的 Android 设备
- 电量 50% 或以上
- 质量良好的 USB 数据线（支持数据传输）
- 电脑（Windows、macOS 或 Linux）

### 软件要求

**电脑上：**
- [Android Platform Tools](https://developer.android.com/studio/releases/platform-tools)（ADB/Fastboot）
- 设备专用 USB 驱动（仅 Windows）
- 你设备的官方固件

**设备上：**
- 来自 [GitHub](https://github.com/topjohnwu/Magisk/releases) 的最新 Magisk APK
- 文件管理器应用
- 至少 500MB 可用存储空间

### 兼容性

Magisk 支持 Android 6.0 及以上版本，包括最新的 Android 版本。它适用于大多数可解锁 Bootloader 的设备。

**检查设备兼容性：**
1. 确认 Bootloader 可解锁
2. 确认能获取到官方固件
3. 查看[设备专属指南](./index.md#机型专属指南)或 [XDA 论坛](https://forum.xda-developers.com/)了解设备相关信息

---

## 安装方法

共有三种安装方法。请根据你的设备和熟悉程度选择。

### 方法 1：Boot 镜像修补（推荐）

**最适用于：** 大多数用户、所有现代设备

这是官方且最安全的方法。

#### 第 1 步：下载所需文件

**Magisk APK：**
1. 访问 [Magisk GitHub Releases](https://github.com/topjohnwu/Magisk/releases)
2. 下载最新的稳定版 APK
3. 传输到设备

**官方 boot 镜像：**

确定正确的分区：
- Android 13+（大多数设备）：`init_boot.img`
- Android 12 及更早：`boot.img`
- 在 Magisk 应用中查看：显示 "Ramdisk: Yes/No"

从固件中提取：
- Google Pixel：从 [Google](https://developers.google.com/android/images) 下载出厂镜像
- Samsung：从 AP 文件中提取
- Xiaomi：从 fastboot ROM 中提取
- 其他设备：对 OTA 包使用 payload-dumper-go

#### 第 2 步：修补 boot 镜像

1. **在设备上安装 Magisk APK**
   - 为文件管理器启用"安装未知应用"权限
   - 安装下载好的 APK

2. **将 boot 镜像传输**到设备
   - 将 boot.img 或 init_boot.img 复制到 Download 文件夹

3. **在 Magisk 中修补镜像**
   - 打开 Magisk 应用
   - 点击 Magisk 旁边的"安装"
   - 选择"选择并修补一个文件"
   - 选择你的 boot/init_boot 镜像
   - 等待修补完成
   - 记下输出位置（通常在 Download 文件夹）

输出文件名为：`magisk_patched_[random].img`

#### 第 3 步：刷入修补后的镜像

**传输到电脑：**
```bash
adb pull /sdcard/Download/magisk_patched_xxxxx.img
```

**重启到 fastboot：**
```bash
adb reboot bootloader
```

**验证 fastboot 连接：**
```bash
fastboot devices
```

**刷入修补后的镜像：**

对于 boot.img：
```bash
fastboot flash boot magisk_patched_xxxxx.img
```

对于 init_boot.img（Android 13+）：
```bash
fastboot flash init_boot magisk_patched_xxxxx.img
```

**重启设备：**
```bash
fastboot reboot
```


**Samsung（Odin 设备）：**
1. 将生成的 magisk_patched-xxxxx.tar 复制到电脑。
2.  打开 Odin（Windows），将修补后的 TAR 加载到 AP。
3. 取消勾选“Auto Reboot”，开始刷入。完成后，强制重启到 Recovery（断开 USB 的同时按住电源键 + 音量上键），如有需要请恢复出厂设置（VaultKeeper 机制所致；首次解锁时数据已被清空）。
4) 首次开机会较慢；打开 Magisk 完成收尾。KNOX 会被永久触发；Samsung Pay/安全文件夹可能无法再使用。

#### 第 4 步：验证安装

1. 首次开机可能需要 2-5 分钟
2. 打开 Magisk 应用
3. 应显示：
   - Magisk：已安装（版本号）
   - 应用：最新（版本号）

::: tip 成功检查
如果 Magisk 应用同时显示 Magisk 和应用的版本号，说明安装成功！
:::

---

### 方法 2：第三方 Recovery 安装（旧式）

**最适用于：** 老旧设备、习惯使用 Recovery 的用户

**注意：** 在现代 Android 上不再受官方支持。请改用方法 1。

如果必须使用 Recovery（[安装指南](./how-to-install-custom-recovery.md)）：

1. 使用方法 1 修补 boot 镜像
2. 启动到第三方 Recovery（TWRP/OrangeFox）
3. 安装 > 安装镜像
4. 选择修补后的 boot 镜像
5. 选择 Boot 分区
6. 滑动以刷入
7. 重启系统

---

### 方法 3：直接安装（进阶）

**最适用于：** 从其他 root 方案切换、临时 root

**场景 A：已获取 root**

1. 安装 Magisk APK
2. 打开 Magisk 应用
3. 点击 安装 > 直接安装
4. 重启

**场景 B：临时引导方法**

1. 修补 boot 镜像（方法 1 第 2 步）
2. 不刷入而直接引导修补后的镜像：
```bash
fastboot boot magisk_patched_xxxxx.img
```
3. 设备以临时 root 启动
4. 打开 Magisk > 安装 > 直接安装
5. 使 root 永久化
6. 重启

**场景 C：转储当前 boot 镜像**

如果无法获取官方固件：

```bash
adb shell su -c "dd if=/dev/block/by-name/boot of=/sdcard/boot.img"
```

或者对于 init_boot：
```bash
adb shell su -c "dd if=/dev/block/by-name/init_boot of=/sdcard/init_boot.img"
```

然后按方法 1 继续修补。

---

## 安装后设置

### 初始配置

**1. 验证 root 权限**

使用 root 检测应用或终端测试：
```bash
adb shell
su
```

应当授予 root 权限。

**2. 配置 Magisk 设置**

打开 Magisk > 设置：

**Magisk 标签页：**
- 保留强制加密（Preserve force encryption）：取决于个人偏好
- 保留 AVB 2.0/dm-verity：保持启用
- Recovery 模式：使用第三方 Recovery 时启用

**应用标签页：**
- 隐藏 Magisk 应用：使用银行类应用时推荐
- 还原镜像（Restore images）：保持启用
- 授予 shell root 权限：需要 ADB root 时启用

**Zygisk：**
- 启用 Zygisk：推荐（许多模块必需）
- 强制执行 DenyList：需要隐藏 root 时启用
- 配置 DenyList：添加会检测 root 的应用

**3. 安全设置**

配置超级用户访问：
- 超级用户访问：仅应用
- 多用户模式：仅机主
- 挂载命名空间模式：隔离（推荐）
- 自动响应：询问（推荐）
- 请求超时：10 秒

启用身份验证：
- 生物识别验证：启用
- 需要验证：启用

---

## 模块管理

### 安装模块

**安装流程：**

1. 下载模块 ZIP 文件
2. 打开 Magisk 应用
3. 点击"模块"标签页
4. 点击"从存储安装"
5. 选择模块 ZIP
6. 等待安装完成
7. 按提示重启

::: warning 模块安全
只从可信来源安装模块。恶意模块可能损坏你的系统。
:::

**可信模块来源：**
- 官方 GitHub 仓库
- [Magisk 模块管理器](https://github.com/MMRLApp/MMRL)
- [我们精选的模块合集](../apps-and-modules/)
- XDA Developers 论坛
- 仅限知名开发者

### 管理已安装的模块

**启用/禁用模块：**
- 点击列表中的模块
- 切换开关
- 重启生效

**移除模块：**
- 点击模块
- 点击"移除"
- 重启生效

**模块问题：**

如果模块导致无限重启：
1. 启动到安全模式（开机时按住电源键 + 音量下键）
2. 打开 Magisk
3. 禁用问题模块
4. 重启

或通过 Recovery：
```bash
rm -rf /data/adb/modules/[module_name]
```

或通过 ADB：
```bash
adb wait-for-device shell magisk --remove-modules
```

---

## Root 隐藏与 Play Integrity

### 认识 Play Integrity

Google Play Integrity 已取代 SafetyNet。共有三个等级：

| 等级 | 说明 | 已 root 设备 |
|-------|-------------|----------------|
| 基础（Basic） | 基础应用完整性 | 轻松通过 |
| 设备（Device） | 设备完整性验证 | 可借助 Play Integrity Fix 通过 |
| 强（Strong） | 硬件证明 | 几乎不可能 |

**已 root 设备的现实情况：**
- 基础与设备完整性：可使用 Play Integrity Fix（PIF）模块通过。
- 强完整性：在 Bootloader 已解锁的情况下无法通过。

### 配置 Root 隐藏

**第 1 步：隐藏 Magisk 应用**

1. Magisk > 设置
2. 点击"隐藏 Magisk 应用"
3. 输入自定义名称（例如 "Settings"）
4. 应用将以新名称和图标重新打包

**第 2 步：启用 DenyList**

1. Magisk > 设置
2. 启用 "Zygisk"（如未启用）
3. 启用"强制执行 DenyList"
4. 点击"配置 DenyList"

**第 3 步：配置 DenyList**

将以下应用加入 DenyList：
- 所有银行/金融类应用
- 支付类应用（Google Wallet 等）
- 会检测 root 的应用
- 带反作弊的游戏

::: warning 重要
如果你在使用 Play Integrity Fix（PIF）模块，**切勿**将 Google Play Services（GMS）或 Google Play Store 加入 DenyList。否则会破坏该模块伪装设备完整性的能力。
:::

对每个应用：
- 展开应用条目
- 勾选所有子进程
- 全部启用

**第 4 步：清除应用数据**

配置 DenyList 之后：
1. 设置 > 应用
2. 清除以下应用的数据：
   - Google Play Store
   - Google Wallet / Pay
   - 银行类应用
3. 重启设备
4. 重新打开这些应用

### 进阶 Root 隐藏

**安装 Shamiko 模块：**

Shamiko 比内置的 DenyList 更有效地隐藏 root。

1. 从 [GitHub](https://github.com/LSPosed/LSPosed.github.io/releases) 下载 Shamiko
2. 通过 Magisk 安装
3. 重启
4. DenyList 中的条目现在会被更有效地隐藏

**注意：** 使用 Shamiko 时，你必须在 Magisk 设置中**配置** DenyList，但**不要强制执行**它。Shamiko 会读取该列表并自动处理隐藏。

> [!TIP]
> 查看我们的 [Root 隐藏章节](../apps-and-modules/root-management.md#root-hiding-play-integrity)

### 测试 Play Integrity

**测试用应用：**

1. **Play Integrity API Checker** - 标准检测工具
2. **SPIC (Simple Play Integrity Checker)** - 开源且快速
3. **TB Checker** - 功能全面的检测工具

---

## 更新与维护

### 更新 Magisk

**应用内更新：**

<details><summary>👉 点击展开详情</summary>

1. Magisk > 设置
2. 更新通道：稳定版（推荐）
3. 有可用更新时：
   - 点击"安装"按钮
   - 选择"直接安装"
   - 完成后重启

**手动更新：**

1. 下载最新的 Magisk APK
2. 直接覆盖安装现有应用
3. 打开 Magisk
4. 点击 安装 > 直接安装
5. 重启

</details>

### OTA 系统更新

<details><summary>👉 点击展开详情</summary>

**对于 A/B 设备（大多数现代设备）：**

1. 下载 OTA 更新（先不要安装）
2. 等待"准备安装"通知
3. 打开 Magisk
4. 点击"安装"
5. 选择"安装到未使用槽位（OTA 后）"
6. 等待完成
7. 从系统更新界面重启
8. 确认 Magisk 仍然安装

**对于非 A/B 设备：**

1. 卸载 Magisk（还原镜像）
2. 安装 OTA 更新
3. 重新修补新的 boot 镜像
4. 刷入修补后的镜像
5. 重新安装模块

</details>

### 备份与恢复

<details><summary>👉 点击展开详情</summary>

**备份重要文件：**
- 原始 boot/init_boot 镜像
- Magisk 安装文件
- 模块 ZIP 文件
- DenyList 配置（截图）
- 使用[备份工具](../apps-and-modules/backup#backup-restore)进行完整设备备份

**恢复到官方系统：**

1. Magisk > 卸载
2. 选择"还原镜像"
3. 重启
4. root 已移除，系统已还原

或者刷入官方 boot 镜像：
```bash
fastboot flash boot stock_boot.img
```

</details>

---

## 故障排除

### 安装问题

**安装后 Magisk 显示 N/A**

<details><summary>👉 点击展开详情</summary>

原因：
- 刷入了错误的分区（boot 与 init_boot 混淆）
- 镜像与设备/Android 版本不匹配
- 刷入到了 A/B 设备的非活动槽位

解决方法：
1. 确认设备对应的正确分区
2. 使用正确的 boot 镜像重新修补
3. 刷入当前活动槽位
4. 在 Magisk 应用中查看 "Ramdisk" 状态

</details>

**刷入后设备无限重启**

<details><summary>👉 点击展开详情</summary>

解决方法：
1. 启动到 fastboot
2. 刷入官方 boot 镜像：
```bash
fastboot flash boot stock_boot.img
fastboot reboot
```
3. 确认镜像与设备匹配
4. 尝试其他 Magisk 版本
5. 高级解决方法参见[紧急恢复指南](../troubleshooting.md#紧急恢复)

</details>

**Fastboot 检测不到设备**

<details><summary>👉 点击展开详情</summary>

解决方法：
- 重新安装 USB 驱动（Windows）
- 尝试 USB 2.0 接口
- 更换 USB 数据线
- 更新 Platform Tools
- 换一台电脑尝试

</details>

### Root 权限问题

**应用检测不到 root**

<details><summary>👉 点击展开详情</summary>

解决方法：
1. 确认 Magisk 显示"已安装"
2. 检查超级用户请求标签页
3. 授予 shell root 权限：Magisk > 设置
4. 使用 root 检测应用测试
5. 重新安装 Magisk

</details>

**root 随机丢失**

<details><summary>👉 点击展开详情</summary>

原因：
- 模块冲突
- 更新 Magisk 时未使用直接安装
- 系统更新覆盖了 boot

解决方法：
1. 打开 Magisk > 安装 > 直接安装
2. 移除最近安装的模块
3. 重启设备

</details>

### 模块问题

**模块导致无限重启**

<details><summary>👉 点击展开详情</summary>

解决方法：

通过 Recovery：
1. 启动到 TWRP/第三方 Recovery
2. 文件管理器
3. 进入 `/data/adb/modules/`
4. 删除问题模块文件夹
5. 重启

通过 ADB：
```bash
adb wait-for-device shell
magisk --remove-modules
```

通过安全模式：
1. 强制重启：长按电源键 10 秒以上
2. 在开机 Logo 出现时进入安全模式
3. 打开 Magisk
4. 禁用模块
5. 正常重启

</details>

**模块不工作**

<details><summary>👉 点击展开详情</summary>

解决方法：
1. 确认已启用 Zygisk（如模块需要）
2. 检查模块与 Android 版本的兼容性
3. 重新安装模块
4. 查看模块日志：`/data/adb/modules/[module]/`
5. 联系模块开发者

</details>

### 银行类应用问题

**尽管配置了 DenyList，应用仍检测到 root**

<details><summary>👉 点击展开详情</summary>

解决方法：
1. 用其他名称隐藏 Magisk 应用
2. 彻底清除应用数据
3. 安装 Shamiko 模块
4. 尝试 [Play Integrity Fix 模块](../apps-and-modules/root-management#root-hiding-play-integrity)
5. 检查应用是否要求设备/强完整性（可能无法通过）
6. 参见[银行类应用综合解决方案](../troubleshooting.md#play-integrity-与银行类应用)

</details>

**应用启动时崩溃**

<details><summary>👉 点击展开详情</summary>

解决方法：
1. 暂时将应用移出 DenyList
2. 清除应用缓存和数据
3. 重新安装应用
4. 检查是否有针对该应用的 Magisk 模块
5. 尝试旧版本应用

</details>

### Play Integrity 失败

<details><summary>👉 点击展开详情</summary>

**基础或设备完整性失败**

解决方法：
1. 尝试最新的 [Play Integrity Fix 模块](../apps-and-modules/root-management#root-hiding-play-integrity)
2. 清除 Google Play Store 数据。
3. 重启设备。
4. 如果仍然失败，当前指纹可能已被封禁。等待 PIF 更新或使用自定义 `pif.json`。

**强完整性失败**

现实情况：以下情况下无法通过：
- Bootloader 已解锁
- 第三方 boot 镜像
- 硬件证明

</details>

---

## 最佳实践

### 安全建议

1. **只向可信应用授予 root**
2. **定期查看超级用户日志**
3. **保持 Magisk 更新**
4. **重大更改前先备份**
5. **先在非关键设备上测试模块**

### 模块管理

1. **一次只安装一个模块**
2. **每次安装后进行测试**
3. **记录已安装模块清单**
4. **移除不用的模块**
5. **谨慎更新模块**

---

## 下一步

**安装 Magisk 之后：**

1. **安装必备模块：**
   - [LSPosed 框架](./lsposed-guide.md) - 高级应用修改与 Xposed 模块
   - [广告拦截模块](../apps-and-modules/ad-blocking#ad-tracker-blocking) - 全系统广告拦截
   - [性能模块](../apps-and-modules/performance#性能优化) - 设备优化与电池管理

2. **探索 root 应用：**
   - [浏览 650+ 个 Root 应用](../apps-and-modules/) - 按类别精选的合集
   - [新手工具包](../apps-and-modules/#新手必备套装必装应用) - root 新手必备应用

3. **学习高级功能：**
   - [第三方 ROM 安装](./custom-rom-installation.md) - 更进一步
   - [广告拦截指南](../general-guides/android-adblocking.md) - 拦截所有广告
   - [精简预装指南](../general-guides/android-apps-debloating.md) - 移除预装冗余

---


## 社区资源

**官方资源：**
- [Magisk GitHub](https://github.com/topjohnwu/Magisk) - 源代码与发布版本
- [Magisk 文档](https://topjohnwu.github.io/Magisk/) - 官方文档
- [XDA Magisk 论坛](https://forum.xda-developers.com/f/magisk.5903/) - 社区支持

**模块仓库：**
- [Magisk Module Manager](https://github.com/Magisk-Modules-Alt-Repo) - 模块合集
- [Magisk Modules Repo](https://github.com/Magisk-Modules-Repo) - 官方仓库

**支持社区：**
- [Reddit r/Magisk](https://www.reddit.com/r/Magisk/) - 社区讨论
- [Telegram Magisk](https://t.me/magiskapp) - 官方聊天群
- [XDA 设备论坛](https://forum.xda-developers.com/) - 设备专属帮助

### 求助

**求助时请提供：**
- 设备型号与 Android 版本
- 已安装的 Magisk 版本
- 使用的安装方法
- 确切的错误信息或现象
- Magisk 日志（Magisk > 保存日志）
- 已尝试过的步骤

