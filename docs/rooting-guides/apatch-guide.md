---
layout: doc
title: APatch Root 完整指南
description: "通过实用的 2026 指南掌握 APatch root：兼容性检查、安全安装流程、OTA 后保住 root 以及恢复步骤。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/apatch-guide
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: APatch Root 完整指南 - 现代基于内核的 Android root
  - - meta
    - property: og:description
      content: 在最新的 boot/init_boot 指引下安全安装 APatch，涵盖 OTA 处理、模块基础与故障排除。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/apatch-guide
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/apatch-guide.png
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
      content: APatch Root 完整指南
  - - meta
    - name: twitter:description
      content: "面向现代 Android 设备的最新 APatch 设置：兼容性、安装、OTA 与恢复。"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/apatch-guide.png
  - - meta
    - name: twitter:image:alt
      content: APatch 安装指南 - 现代基于内核的 Android root
  - - meta
    - name: author
      content: Awesome Android Root Project
  - - meta
    - property: article:author
      content: https://github.com/awesome-android-root/awesome-android-root
  - - meta
    - property: article:section
      content: Android root
  - - meta
    - property: article:tag
      content: APatch
  - - meta
    - property: article:tag
      content: 内核 root
  - - meta
    - property: article:tag
      content: Android root
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

# APatch Root 安装指南

APatch 是面向现代 Android 设备的基于内核的 root 方案。本指南聚焦一套安全、可重复的工作流：先验证兼容性，修补正确的镜像，尽可能先测试启动，然后再永久刷入。

## 快速导航

- [什么是 APatch](#认识-apatch)
- [兼容性与要求](#兼容性与要求)
- [boot 与 init_boot：该修补哪个](#boot-与-initboot该修补哪个)
- [安装步骤](#安装步骤)
- [安装后的安全设置](#安装后的设置)
- [模块管理](#模块管理)
- [OTA 更新](#ota-处理)
- [故障排除与恢复](#故障排除)

**相关指南：**
- [主 root 指南](./index.md) - root 总览与框架选择
- [解锁 Bootloader](./how-to-unlock-bootloader.md) - 必需的第一步
- [Root 框架对比](./root-framework-comparison.md) - APatch vs Magisk vs KernelSU
- [通用故障排除](../troubleshooting.md)
- [常见问题](../faqs.md)

---

## 认识 APatch

APatch 会修补你的启动链镜像（`boot.img` 或 `init_boot.img`），并以 systemless 风格提供内核级 root 权限。

### 核心特性

- **内核态 root 模型** - root 控制来自内核侧组件
- **系统分区保持不动** - 无需重新挂载 `/system`
- **对现代 Android 友好** - 在使用 `init_boot` 的较新设备上尤其有用
- **模块支持** - APModule 生态，并对某些其他模块风格提供部分交叉兼容

### APatch 与其他 root 方案对比

| 特性 | APatch | Magisk | KernelSU |
|---------|--------|--------|----------|
| 架构 | 基于内核 | 用户态 root 方案 | 基于内核 |
| 典型安装方式 | 修补 + 刷入启动链镜像 | 修补 + 刷入镜像 | 依赖内核的安装方式 |
| 模块模型 | APModule（外加部分兼容性） | Magisk 模块 | KSU 模块 |
| Zygisk 风格工作流 | 通过社区替代方案 | 原生支持 | 通过替代方案 |
| OTA 工作流 | 重新修补更新后的镜像 | 内置路径 + 个别需手动恢复的情形 | 感知槽位/镜像的工作流 |

> [!CAUTION]
> **不要**在同一活动槽位上同时运行 APatch 与 Magisk 或 KernelSU。同一时间只使用一套 root 方案。

---

## 兼容性与要求

### 官方给出的兼容性信号

根据 APatch 上游文档与仓库说明：

- **架构：** 仅支持 ARM64
- **内核范围：** Linux 内核 3.18 至 6.12（上游声明的范围）
- **实际 Android 目标：** 现代 Android 构建（社区使用中普遍以 Android 10+ 为基线）

### 必备前提

::: danger 必要要求
**已解锁的 Bootloader** - 安装 APatch 之前的硬性前提。

**完全匹配的官方固件** - 镜像必须与你当前的构建指纹一致。

**完整备份** - 刷入失败可能需要完整还原。

**电量 50% 以上** - 避免修补/刷入过程中断。
:::

### 所需工具

**电脑：**
- [Android Platform Tools](https://developer.android.com/tools/releases/platform-tools)（最新的 `adb`/`fastboot`）
- OEM USB 驱动（Windows）
- 镜像提取工具（用于 payload/固件压缩包）

**设备：**
- 来自 [GitHub Releases](https://github.com/bmax121/APatch/releases/latest) 或 [F-Droid](https://f-droid.org/packages/me.bmax.apatch/) 的最新 APatch 管理器
- 文件管理器
- 500MB 以上可用存储空间

---

## boot 与 init_boot：该修补哪个

刷错目标分区是导致无限重启的首要原因之一。

### `boot.img`

- 传统 boot 分区
- 常见于许多较旧设备以及众多 Android 12 及更早版本的构建

### `init_boot.img`

- 许多 Android 13+ 设备采用的较新启动链布局
- 常见于 Pixel 7/8/9 一代以及许多较新的 OEM 构建

### 如何确定正确的目标

**方法一（推荐）：** 通过 APatch 应用检测
1. 安装/打开 APatch
2. 进入安装流程
3. 查看 APatch 期望哪个分区/镜像

**方法二：** 检查块设备名称

```bash
adb shell ls -l /dev/block/by-name/ | grep -E "boot|init_boot"
```

存在 `init_boot` 通常意味着采用了现代的 split-ramdisk 布局。

::: tip 安全规则
始终修补从**手机当前正在运行的同一构建**中提取的镜像。
:::

---

## 安装步骤

## 步骤 1：提取正确的官方镜像

你需要从与当前完全一致的固件构建中提取 `boot.img` 或 `init_boot.img`。

### Pixel

1. 从 [Google Factory Images](https://developers.google.com/android/images) 下载出厂镜像
2. 解压外层压缩包
3. 解压内层的 `image-*.zip`
4. 取出 `boot.img` 或 `init_boot.img`

### OnePlus/OPPO/Realme（payload OTA）

1. 下载完整 OTA 包
2. 提取 `payload.bin`
3. 使用 payload dumper 提取镜像

### Xiaomi/Redmi/POCO

1. 下载完整的 Fastboot ROM
2. 解压压缩包
3. 使用 `images/` 目录中的镜像

### Samsung

Samsung 常使用 Odin 流程和压缩镜像（`*.lz4`）。APatch 的流程并不那么直接，且因设备而异。仅在拥有经过验证的机型专属方法时才继续。

## 步骤 2：在 APatch 中修补镜像

```bash
adb push boot.img /sdcard/Download/
# 或
adb push init_boot.img /sdcard/Download/
```

在 APatch 管理器中：
1. 打开 APatch
2. 点击安装/修补镜像
3. 选择你的官方 `boot.img` 或 `init_boot.img`
4. 等待修补完成

修补后的文件会保存到存储中（通常在 Download 文件夹）。

## 步骤 3：先测试启动（如果设备支持）

```bash
adb pull /sdcard/Download/apatch_patched*.img ./
adb reboot bootloader
fastboot devices
fastboot boot apatch_patched_xxxxx.img
```

如果临时启动成功且 root 可用，再继续永久刷入。

> [!WARNING]
> 部分设备/Bootloader 不支持 `fastboot boot`。如果不支持，请跳过测试启动，并准备好官方镜像以便立即恢复。

## 步骤 4：永久刷入

```bash
adb reboot bootloader

# 补丁目标是 boot
fastboot flash boot apatch_patched_xxxxx.img

# 或补丁目标是 init_boot
fastboot flash init_boot apatch_patched_xxxxx.img

fastboot reboot
```

### A/B 槽位注意事项

```bash
fastboot getvar current-slot
```

如有需要，明确指定槽位分区：

```bash
fastboot flash boot_a apatch_patched_xxxxx.img
# 或
fastboot flash init_boot_b apatch_patched_xxxxx.img
```

::: warning 已验证启动说明
不要把禁用 AVB 当作 APatch 的默认安装步骤。APatch 的工作流被设计为无需大范围禁用验证即可运行。
:::

## 步骤 5：验证 root

1. 首次启动可能耗时更长
2. 打开 APatch 管理器并确认已安装状态
3. 验证 shell root：

```bash
adb shell
su
id
```

预期输出中包含 `uid=0(root)`。

---

## 安装后的设置

### 推荐的安全基线

在 APatch 设置中：
- 默认 SU 动作：提示
- 较短的提示超时（防止误触请求）
- 授权时使用生物识别或设备认证
- 启用 root 访问日志

### root 权限管理习惯

- 只授予受信任的应用
- 定期撤销陈旧/不再使用的授权
- 安装新模块后检查日志

### 管理器隐藏与敏感应用

如果你的构建支持管理器隐藏/重打包，请谨慎使用，并在每次更改后逐一测试关键应用。

---

## 模块管理

### 模块现状须知

- APatch 的模块支持变化很快
- 并非每个 Magisk 或 KernelSU 模块都兼容
- 从维护良好、近期有更新的模块入手

### 安全的模块工作流

1. 每次只安装一个模块
2. 重启并测试系统稳定性
3. 保留一个确认可用的启动镜像以便回滚
4. 避免一次性堆叠多个改变系统行为的模块

### 如果模块导致启动问题

1. 进入 Bootloader
2. 刷入官方 `boot`/`init_boot` 以恢复
3. 启动系统并移除有问题的模块
4. 重新修补并只重装必要的模块

---

## OTA 处理

APatch 的 root 存续依赖镜像，因此 OTA 之后通常需要重新修补更新后的启动链镜像。

### A/B 设备

1. 下载 OTA
2. 从该 OTA 中提取更新后的 `boot.img` 或 `init_boot.img`
3. 用 APatch 修补新镜像
4. 将修补后的镜像刷入正确的目标槽位/分区
5. 重启并验证 root

### 非 A/B 设备

1. 安装更新
2. 提取当前构建对应的更新后的启动链镜像
3. 重新修补并刷入

::: tip OTA 规则
始终修补来自**新安装构建**的镜像，而不是较旧的固件包。
:::

---

## root 隐藏与 Play Integrity

Play Integrity 的行为会在服务端频繁变化。没有任何永久绕过的保证。

### 实际预期

- **基本完整性（basic integrity）：** 经过细致设置有时可以通过
- **设备/强完整性（device/strong integrity）：** 在已解锁/已 root 的设备上通常无法通过
- 银行/支付类应用的表现因地区、应用版本和后端策略而异

### 更稳妥的策略

- 对敏感应用保持拒绝 root 访问
- 只使用你的使用场景所需的最少模块集合
- 每次 OTA 或应用大版本更新后重新测试

---

## 卸载

最可靠的途径：还原官方启动链镜像。

```bash
adb reboot bootloader

fastboot flash boot stock_boot.img
# 或
fastboot flash init_boot stock_init_boot.img

fastboot reboot
```

如果需要完全干净的状态，请为你的设备刷入完整官方固件。

---

## 机型专属注意事项

### Pixel

- Pixel 7/8/9：通常修补 `init_boot`
- Pixel 6 及更早：通常修补 `boot`

### OnePlus/OPPO/Realme

- 较新的 Android 构建频繁使用 `init_boot`
- OTA 提取通常围绕 `payload.bin` 展开

### Xiaomi/Redmi/POCO

- 较新的 HyperOS/MIUI 构建可能使用 `init_boot`
- 更换固件时注意防回滚限制

### Samsung

- 基于 Odin 的流程，许多机型没有标准的 Fastboot 刷入
- 一旦 root/解锁，Knox 熔断永久生效
- 只使用 Samsung 专属方法

---

## 故障排除

<details><summary>👉 点击展开详情</summary><br>

### 刷入后无限重启

常见原因：
- 分区目标错误（`boot` 与 `init_boot` 混淆）
- 镜像来自错误的固件构建
- A/B 设备上槽位选错

恢复方法：

```bash
fastboot flash boot stock_boot.img
# 或
fastboot flash init_boot stock_init_boot.img
fastboot reboot
```

### APatch 修补镜像失败

- 将 APatch 管理器更新到最新稳定版
- 从原始固件包重新提取镜像
- 确认镜像未损坏/未被错误重命名
- 确保设备上有足够的可用存储

### `fastboot` 无法检测到设备

- 更新 platform-tools
- 更换数据线/USB 端口
- 确认 OEM 解锁与 Bootloader 模式
- 在 Windows 上重装驱动

### OTA 后 root 丢失

- 从已安装的 OTA 构建中提取更新后的镜像
- 重新修补并刷入正确的分区/槽位

</details>

---

## 下一步

1. 先只安装必要的模块
2. 保留与你确切构建/槽位对应的官方镜像和笔记
3. 探索实用的 root 用例：
   - [Android 广告拦截](../general-guides/android-adblocking.md)
   - [Android 精简预装](../general-guides/android-apps-debloating.md)
   - [Root 应用合集](../apps-and-modules/)

---

## 社区资源

**官方：**
- [APatch 文档](https://apatch.dev/)
- [APatch GitHub](https://github.com/bmax121/APatch)
- [最新发布](https://github.com/bmax121/APatch/releases/latest)
- [官方 Telegram 频道](https://t.me/APatchChannel)

**项目帮助：**
- [故障排除指南](../troubleshooting.md)
- [常见问题](../faqs.md)

寻求帮助时，请提供：
- 设备型号与构建号
- Android 版本
- APatch 管理器版本
- 修补的分区（`boot`/`init_boot`）
- A/B 设备上的当前槽位（`a`/`b`）
- 确切的错误文本与已尝试的步骤
