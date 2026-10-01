---
layout: doc
title: "如何 Root Samsung Galaxy：Odin、AP 与 Magisk"
description: "了解如何 Root Samsung Galaxy：机型与地区相关的 Bootloader 检查、Download Mode、Odin AP 修补、Magisk，以及 Knox 与 One UI 的注意事项。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-samsung-phone
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: "如何 Root Samsung Galaxy：Odin、AP 与 Magisk"
  - - meta
    - property: og:description
      content: Samsung Galaxy Root 指南，涵盖 Bootloader 解锁资格、OEM 解锁、Download Mode、Odin AP 修补、Magisk，以及 Knox 与 One UI 的差异。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-samsung-phone
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/samsung.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: "如何 Root Samsung Galaxy：Odin、AP 与 Magisk"
  - - meta
    - name: twitter:description
      content: 符合条件的 Samsung Galaxy 机型的 Root 步骤，包含 Odin AP 修补、Magisk 以及机型特定的限制。
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:creator
      content: "@awsm_and_root"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/samsung.png
  - - meta
    - name: twitter:image:alt
      content: Samsung Galaxy Root 指南：Odin、AP 修补与 Magisk
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
      content: Samsung Galaxy Root
  - - meta
    - property: article:tag
      content: One UI
  - - meta
    - property: article:tag
      content: Knox 安全
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

# 如何 Root Samsung Galaxy：Odin、AP 与 Magisk

Samsung 并没有统一的 Root 流程。Bootloader 是否可解锁、芯片组、CSC/地区、Android 版本和 One UI 版本共同决定了 Galaxy 设备能否被 Root。本指南先讲解相关检查，然后再针对真正符合条件的机型介绍 Download Mode、Odin AP 文件修补和 Magisk。

## 快速导航

- [Samsung 特有风险](#samsung-root-的挑战)
- [机型与地区兼容性](#设备兼容性)
- [前置条件](#前置条件)
- [Bootloader 解锁](#解锁-bootloader)
- [Root 安装](#root-安装)
- [故障排除](#故障排除)

**相关指南：**
- [Root 主指南](./index.md) - 通用 Root 概念
- [Bootloader 解锁](./how-to-unlock-bootloader.md) - 机型与地区检查
- [Magisk 指南](./magisk-guide.md) - 完整的 Magisk 文档
- [Samsung 故障排除](#故障排除) - Odin、Download Mode 与 Root 失败

---
## Samsung Root 的挑战

::: warning BOOTLOADER 解锁资格因机型而异
Samsung 并未对所有 Galaxy 设备实行统一的解锁政策。部分国际版机型提供 OEM 解锁选项，而许多美版/加拿大版运营商定制机型则没有。较新的 Galaxy 世代和 One UI 版本可能改变可用选项，因此在更新或尝试 Root 之前，请核实确切的型号、CSC/地区和固件。

不要把适用于某一 Galaxy 机型的指南当作其他机型或地区也可解锁的依据。
:::


::: danger ⚠️ Samsung 特有风险
- **Knox 永久熔断（0x1）** – **无法逆转**，影响 Samsung Pay、Health、Secure Folder
- **保修完全失效** – Knox 熔断后 Samsung 将拒绝一切售后服务
- **运营商限制** – 美版运营商机型（Verizon、AT&T）通常**无法解锁 Bootloader**
- **银行与金融应用检测** – 通过 **Play Integrity** 和 **SafetyNet** 进行强化 Root 检测
- **OTA 更新被阻断** – 除非临时卸载 Root，否则官方更新会失败
- **Samsung Cloud 与 Find My Mobile** – 可能将设备标记为存在安全风险
:::

::: tip 💡 想要不触发 Knox 就获得 Root？
在一部分经过专门验证的 Galaxy 固件版本上，**GhostLock** 漏洞（CVE-2026-43499）或许能在 **Bootloader 保持锁定的情况下提供临时 Root**。但这不是通用的 Samsung Root 方法：重启后 Root 即失效，且支持情况取决于具体固件。当前的限制请参见[不解锁 Bootloader 进行 Root](./root-without-unlocking-bootloader.md)。
:::



---

## 设备兼容性

Samsung 的 Root 流程复杂且因机型而异。国际版 Exynos 设备和部分国际版 Snapdragon 设备更有可能提供解锁途径，但型号和地区才是决定性因素。

| 设备情况 | 动手之前需要核实的事项 |
| :--- | :--- |
| 国际版或无锁机型 | 是否出现 **OEM 解锁**选项，以及设备是否接受 Download Mode 中的解锁确认。 |
| 美版或加拿大版运营商机型 | 运营商的 Bootloader 政策；许多变体即使硬件相似也不提供解锁途径。 |
| 新一代 Galaxy 或最新 One UI 固件 | 确切的型号、CSC/地区和固件版本；不要从较旧的 S 或 A 系列指南推断支持情况。 |
| Snapdragon 与 Exynos 变体 | 芯片组和地区固件，因为 Root 步骤和解锁可用性可能不同。 |

### 不兼容 / 受限设备

::: warning 先核实，不要想当然
OEM 解锁选项缺失或永久呈灰色是一个停止信号，而不是可以随便找个 Odin 文件绕过的问题。如果无法确认确切的机型和地区可以解锁，请不要刷入修补过的 AP 文件。
:::

::: warning KNOX 后果（永久性）
- Knox EFUSE 已物理熔断 - **无法逆转**
- Samsung Pay/Wallet、Secure Folder、Samsung Pass 永久禁用
- 保修永久失效
- 某些银行类应用即使做了 Root 隐藏也可能拒绝运行
:::

**尝试之前：** 请在 [XDA 论坛](https://forum.xda-developers.com/)上查询你的具体变体机型的可解锁性。

---

## 前置条件

### 关键要求

::: danger 开始之前
**Knox 将被熔断：** 永久且不可逆。请慎重考虑。

**数据清除：** 解锁会清除所有内容。请先备份。

**保修失效：** Samsung 将拒绝一切售后服务。

**银行类应用：** 即使做了 Root 隐藏也可能无法使用。

**美版运营商机型：** 大多数根本无法解锁 Bootloader。
:::

### 硬件要求

- Samsung Galaxy 设备（国际版或美版无锁）
- Windows 电脑（Odin 仅支持 Windows）
- 质量良好的 USB 数据线（推荐 Samsung 原装）
- 电量 50% 以上

### 软件要求

**电脑端：**

1. **Samsung USB 驱动**
   - 下载：[Samsung Developers](https://developer.samsung.com/android-usb-driver)
   - 在连接设备之前安装

2. **Odin 刷入工具**
  - 从 [XDA Odin 帖子](https://xdaforums.com/t/patched-odin-3-13-1.3762572/)下载官方 Odin 压缩包；本指南的 AP 修补步骤不需要 patched Odin。
  - 该帖子警告称，标注为 Odin 3.14.4 的压缩包是伪造的。请按照针对你具体机型的说明获取所需版本，不要仅凭文件名判断真伪。
  - 如有可能，请将压缩包的 SHA-256 与来自独立可信来源的哈希值进行比对。使用最新的安全软件扫描压缩包，但不要把扫描无异常当作真实性的证明。
  - Patched Odin 版本会修改行为并可能绕过检查；只有在针对具体机型的说明明确要求时才使用。运行 Odin 之前请先解压压缩包。

3. **官方固件**
   - 从 [SamFrew](https://samfrew.com/)、[Bifrost](https://github.com/zacharee/Bifrost) 或 [Frija](https://github.com/SlackingVeteran/frija/releases) 下载
   - 与确切的机型和地区匹配
   - 包含：AP、BL、CP、CSC 文件

**设备端：**

1. **Magisk APK**
   - 下载：[Magisk GitHub](https://github.com/topjohnwu/Magisk/releases)
   - 最新稳定版

2. **文件管理器**
   - Samsung“我的文件”（预装）
   - 或 Play 商店中的任意一款

### 设备准备

**步骤 1：核实机型与版本**

设置 > 关于手机：
- 型号（例如 SM-G998B、SM-S918U）
- Android 版本
- 版本号（build number）
- 基带版本（用于确定 CSC 地区）

**步骤 2：启用开发者选项**

1. 设置 > 关于手机
2. 点击软件信息
3. 连续点击版本号 7 次
4. 输入 PIN 码/密码
5. 开发者选项现已可用

**步骤 3：启用所需设置**

设置 > 开发者选项：
- **OEM 解锁**：启用（关键）
- **USB 调试**：启用

**步骤 4：备份所有内容**

- Samsung Cloud 备份
- 用 Google 相册备份照片
- 短信备份
- 导出联系人
- 保存验证器代码
- 记录已安装的应用

---

## 解锁 Bootloader

### 步骤 1：确认 OEM 解锁可用

设置 > 开发者选项 > OEM 解锁

如果呈灰色：
- 运营商锁定设备（无法解锁）
- 恢复出厂设置后等待 7 天
- 移除所有 Google 账号
- 连接互联网

### 步骤 2：进入 Download Mode

**方法 1：ADB**
```bash
adb reboot download
```

**方法 2：物理按键**
1. 完全关闭设备
2. 按住音量加 + 音量减
3. 按住按键的同时连接 USB 数据线
4. 按音量加继续
5. 出现 Download Mode 界面

### 步骤 3：解锁 Bootloader

**设备端操作：**
1. 长按音量加
2. 出现 Bootloader 解锁警告
3. 使用音量键选择 "Unlock bootloader"（解锁 Bootloader）
4. 按电源键确认
5. 设备自动恢复出厂设置
6. 显示 "Custom binary blocked by FRP lock"（正常现象）

**设备将重启并完全清除数据。**

---

## Root 安装

### 方法 1：AP 文件修补（主要方法）

**步骤 1：下载固件**

1. 确定确切的机型和 CSC：
```bash
adb shell getprop ro.product.model
adb shell getprop ro.csc.countryiso_code
```

2. 从 SamFrew 下载匹配的固件
3. 解压固件 ZIP
4. 其中的文件：
   - **AP_[model]_[version].tar.md5**（系统镜像）
   - **BL_[model]_[version].tar.md5**（Bootloader）
   - **CP_[model]_[version].tar.md5**（基带）
   - **CSC_[model]_[version].tar.md5**（地区数据）

**步骤 2：传输并修补 AP 文件**

```bash
# 将 AP 文件传输到设备
adb push AP_*.tar.md5 /sdcard/Download/

# 安装 Magisk APK
adb install Magisk-v27.0.apk
```

**设备端操作：**
1. 打开 Magisk 应用
2. 点击 Magisk 旁边的“安装”
3. 选择“选择并修补一个文件”
4. 进入 Download 文件夹
5. 选择 AP 文件
6. 点击“开始”（Let's Go）
7. 等待修补完成（2-5 分钟）

**输出：** Download 文件夹中的 `magisk_patched_[random].tar`

**将修补后的文件传回电脑：**
```bash
adb pull /sdcard/Download/magisk_patched_*.tar ./
```

**步骤 3：使用 Odin 刷入**

1. **启动到 Download Mode：**
```bash
adb reboot download
```

2. **以管理员身份运行 Odin**
3. **设备应显示在 Odin 中（蓝色框内显示 COM 端口）**

4. **加载固件文件：**

点击各个按钮并选择对应文件：
- **BL**：原始 BL 文件（不改动）
- **AP**：经 Magisk 修补的 AP 文件（已修补）
- **CP**：原始 CP 文件（不改动）
- **CSC**：原始 CSC 文件（不要用 HOME_CSC）

5. **配置 Odin 选项：**

Options（选项）标签页：
- ✅ Auto Reboot（自动重启）
- ✅ F. Reset Time（重置计时）
- ❌ Re-Partition（重新分区，务必取消勾选！）

::: warning 关键设置
对于较新的 Samsung 设备，**必须勾选 Auto Reboot**。如果不勾选，则需要手动进入 Recovery。
:::

6. **点击 START**

Odin 开始刷入文件：
- 显示进度条
- 需要 3-5 分钟
- 完成后显示绿色的 “PASS!”

**步骤 4：必须进行的恢复出厂设置**

::: danger 关键步骤
对于 One UI 4.0+（Android 12+），必须恢复出厂设置才能正确完成 Root。
:::

**刷入完成后立即操作：**

1. 设备自动重启
2. 当 Samsung 标志出现时，立即：
3. 按住**音量加 + 电源键**
4. 进入 Recovery 模式

**在 Recovery 中：**
1. 使用音量键移动
2. 选择 "Wipe data/factory reset"（清除数据/恢复出厂设置）
3. 选择 "Factory data reset"（恢复出厂设置）
4. 选择 “Yes” 确认
5. 清除完成后，选择 "Reboot system now"（立即重启系统）

**步骤 5：完成设置并验证 Root**

1. 重新完成 Android 设置
2. 重新安装 Magisk APK
3. 打开 Magisk 应用
4. 可能显示“需要额外设置”
5. 点击“确定”并重启
6. 重启后，Magisk 显示：
   - Magisk：已安装（版本号）
   - 应用：最新（版本号）

测试 Root：
```bash
adb shell
su
id
# 应显示：uid=0(root)
```

::: tip 成功！
如果 Magisk 显示已安装且 su 命令可用，说明 Root 成功！
:::


### 步骤 6：确认 Knox 熔断状态

完成设置后：
1. 拨打 `*#0*#` 进入工程模式
2. 查看 Knox 保修状态
3. 应显示 “0x1”（已熔断，永久性）


---

### 方法 2：TWRP Recovery（旧款设备）

适用于支持 TWRP 的旧款 Samsung 设备：

1. 从 [TWRP 网站](https://twrp.me/Devices/Samsung/)下载适用于你设备的 TWRP
2. 通过 Odin 刷入 TWRP（AP 槽位）
3. 启动到 TWRP Recovery
4. 刷入 Magisk ZIP
5. 重启系统

**注意：** 由于 A/B 分区和加密机制的变化，大多数现代 Samsung 设备已不支持 TWRP。


### 确认 Knox 熔断状态

完成设置后：
1. 拨打 `*#0*#` 进入工程模式
2. 查看 Knox 保修状态
3. 应显示 “0x1”（已熔断，永久性）


---

## Root 后设置

### 配置 Magisk

**步骤 1：基础设置**

Magisk > 设置：
- **Zygisk**：启用（隐藏功能所需）
- **Enforce DenyList**：启用
- **隐藏 Magisk 应用**：重命名以避免被检测

**步骤 2：配置 DenyList**

由于 Knox 检测，这一步对 Samsung 至关重要：

添加到 DenyList：
- Google Play Services（全部）
- Google Play 商店（全部）
- Samsung 应用：
  - Samsung Health
  - Samsung Members
  - Samsung Galaxy Store
  - Samsung Pay（反正也无法使用）
- 银行类应用
- 支付类应用
- 任何依赖 Knox 的应用

**步骤 3：安装必要模块**

Samsung 设备推荐：
- **Play Integrity Fix** - 针对银行类应用
- **Shamiko** - 增强 Root 隐藏
- **Systemless Hosts** - 广告屏蔽

### Samsung 特有的 Root 隐藏

**额外步骤：**

1. **隐藏 Magisk 应用：**
   - Magisk > 设置
   - “隐藏 Magisk 应用”
   - 输入自定义名称（例如 “Settings”）

2. **清除应用数据：**

配置完 DenyList 后：
```bash
# 清除 Google Play Services
pm clear com.google.android.gms

# 清除 Play 商店
pm clear com.android.vending

# 清除 Samsung Health
pm clear com.sec.android.app.shealth
```

3. **重启设备**

---

## OTA 处理

Root 之后 Samsung 的 OTA 更新会被阻断。

### 为 OTA 取消 Root

**步骤 1：卸载 Magisk**

1. Magisk > 卸载
2. 选择“还原镜像”
3. 重启
4. Root 已移除

**步骤 2：安装 OTA**

1. 设置 > 软件更新
2. 下载并安装
3. 设备正常更新

**步骤 3：重新 Root**

1. 下载新固件的 AP 文件
2. 使用 Magisk 修补
3. 使用 Odin 刷入
4. Root 已恢复

### 替代方案：手动刷入固件

1. 下载最新固件
2. 修补 AP 文件
3. 使用 Odin 刷入完整固件
4. 恢复出厂设置
5. Root 恢复且系统已更新

---

## 故障排除

### Bootloader 问题

**OEM 解锁呈灰色**

原因：
- 运营商锁定设备
- FRP 锁处于激活状态
- 未连接互联网

解决方法：
1. 移除所有账号
2. 恢复出厂设置
3. 等待 7 天
4. 连接互联网
5. 再次检查

如果仍然呈灰色：设备被运营商锁定（无法解锁）

**卡在 Download Mode**

解决方法：
```bash
# 退出 Download Mode
按住音量减 + 电源键 10 秒

# 强制重启
按住电源键 + 音量减 + Bixby 键 10 秒
```

### Odin 问题

**Odin 检测不到设备**

解决方法：
1. 重新安装 Samsung USB 驱动
2. 换一个 USB 端口（USB 2.0）
3. 以管理员身份运行 Odin
4. 暂时禁用杀毒软件
5. 换一条 USB 数据线
6. 重启电脑

**Odin 中出现 FAIL! 错误**

常见原因：
- 固件与机型不匹配
- 下载文件损坏
- 勾选了 Re-Partition（请取消勾选）
- 电量过低
- 数据线松脱

解决方法：
1. 确认固件与机型完全匹配
2. 重新下载固件
3. 取消勾选 Re-Partition
4. 给设备充电
5. 更换更好的数据线

**卡在 Samsung 标志界面**

解决方法：
1. 进入 Recovery（音量加 + 电源键）
2. 再次恢复出厂设置
3. 清除 cache 分区
4. 如果问题依旧，重新刷入官方固件

### Root 问题

**Magisk 显示 N/A**

原因：
- 修补了错误的 AP 文件
- 未恢复出厂设置
- 固件不匹配

解决方法：
1. 确认固件版本正确
2. 再次恢复出厂设置
3. 重新修补并重新刷入 AP

**Play Integrity 校验失败**

解决方法：
1. 启用 Zygisk
2. 正确配置 DenyList
3. 隐藏 Magisk 应用
4. 安装 Play Integrity Fix
5. 安装 Shamiko 模块
6. 清除 Google Play Services
7. 重启

注意：由于 Knox 已熔断，某些应用可能始终无法通过检测。

**Samsung 应用检测到 Root**

实际情况：
- Samsung Health：功能受限
- Samsung Pay：无法使用（Knox 0x1）
- Secure Folder：永久禁用
- Samsung Pass：无法使用

依赖 Knox 的功能没有任何解决办法。

---

## 取消 Root 与恢复

### 仅移除 Root

```bash
# Magisk > 卸载 > 还原镜像
# Root 已移除，但 Knox 仍处于熔断状态（0x1）
```

### 刷入官方固件

**完整恢复：**

1. 下载官方固件
2. 使用 Odin 刷入所有文件：
   - BL、AP、CP、CSC（未修补）
3. 恢复出厂设置
4. 设备恢复官方系统，但 Knox 仍为 0x1

### Knox 状态

::: danger KNOX 无法重置
Knox 一旦熔断为 0x1 就是永久性的。刷入官方固件**不会**重置 Knox 计数器。eFuse 已被物理熔断。
:::

---

## 社区资源

**Samsung 官方资源：**
- [Samsung 固件](https://samfrew.com/) - 官方固件下载
- [Frija 工具](https://github.com/SlackingVeteran/frija) - 固件下载器
- [Samsung Developers](https://developer.samsung.com/) - 驱动与工具

**社区论坛：**
- **[Samsung XDA 论坛](https://xdaforums.com/c/samsung.11975/)** – 机型相关的开发讨论
- **[Odin 官方及 patched 版本下载](https://xdaforums.com/t/patched-odin-3-13-1.3762572/)** – 包含针对特定压缩包警告的社区帖子；请选择你的设备所需的版本
- **[One UI Mods 社区](https://t.me/oneuimods)** – Samsung 定制
- **[r/Samsung](https://www.reddit.com/r/samsung/)** – 最新设备讨论
- **[Samsung 固件数据库](https://samfrew.com/)** – 固件下载

**重要 Samsung 资源：**
- **[Samsung Smart Switch](https://www.samsung.com/us/support/owners/app/smart-switch)** – 备份工具
- **[SamFrew](https://samfrew.com/)** – 固件下载
- **[Heimdall](https://glassechidna.com.au/heimdall/)** – 开源替代方案

**第三方 ROM 资源：**
- [LineageOS](https://lineageos.org/) - 官方构建版本
- [XDA ROM 开发](https://forum.xda-developers.com/) - 第三方 ROM


### 寻求帮助

**求助时请提供：**
- 确切型号（SM-XXXXX）
- 地区/CSC 代码
- 当前固件版本
- One UI 版本
- 确切的错误信息
- Odin 日志（如有）
- 已尝试过的步骤

---

## 下一步

**Root 你的 Samsung 之后：**

1. **必备应用：**
   - [Root 应用合集](../apps-and-modules/) - 精选列表

2. **增强体验：**
   - [广告屏蔽指南](../general-guides/android-adblocking.md) - 全系统屏蔽
   - [精简应用指南](../general-guides/android-apps-debloating.md) - 移除 Samsung 预装应用
   - [LSPosed 指南](./lsposed-guide.md) - 应用修改

3. **考虑其他选择：**
   - [第三方 ROM 指南](./custom-rom-installation.md) - LineageOS、Evolution X
   - 探索 Samsung 专属 ROM
   - 加入开发社区
