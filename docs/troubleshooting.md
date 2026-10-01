---
layout: doc
title: "Android Root 故障排除：无限重启、模块与 root 问题"
description: "修复常见 Android root 问题：无限重启、root 失效、模块不兼容、Play Integrity 检测、Recovery 与刷入错误。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/troubleshooting
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:site_name
      content: Awesome Android Root
  - - meta
    - property: og:title
      content: "Android Root 故障排除：无限重启、模块与 root 问题"
  - - meta
    - property: og:description
      content: 诊断 Android root 无限重启、root 失效、模块故障、Play Integrity 检测、Recovery 与刷入错误。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/troubleshooting
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og.png
  - - meta
    - property: og:image:secure_url
      content: https://awesome-android-root.zhoe.org/images/og.png
  - - meta
    - property: og:image:alt
      content: Android Root 故障排除指南 - 修复常见 root 问题
  - - meta
    - property: og:image:width
      content: '1200'
  - - meta
    - property: og:image:height
      content: '630'
  - - meta
    - property: og:image:type
      content: image/png
  - - meta
    - property: og:locale
      content: en_US
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
      content: Android Root 故障排除指南 - 修复无限重启与错误
  - - meta
    - name: twitter:description
      content: 针对无限重启、root 失效、模块不兼容、完整性校验与 Recovery 问题的实用修复方法。
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
  - - meta
    - name: twitter:image:alt
      content: Root 故障排除指南 - 修复无限重启与安装错误
  - - meta
    - name: robots
      content: index, follow
---


# Android Root 故障排除

使用本指南按症状优先诊断已 root 的 Android 设备：无限重启、root 失效、模块故障、完整性或检测问题，或 Recovery/刷入问题。从破坏性最小的检查开始，并在还原镜像或清除数据之前，牢记设备的具体型号、版本号和 root 框架。

:::danger 紧急情况优先
如果您的设备无法启动，请立即前往[紧急恢复](#紧急恢复)。
:::

## 快速导航

### 紧急问题
- [设备无法启动（无限重启）](#device-won-t-boot-bootloop)
- [root 不生效](#root-不生效)
- [变砖设备恢复](#变砖设备恢复)

### root 方案问题
- [Magisk 故障排除](#magisk-故障排除)
- [KernelSU 故障排除](#kernelsu-故障排除)
- [APatch 故障排除](#apatch-故障排除)

### 具体问题
- [Bootloader 与 Fastboot 问题](#bootloader-与-fastboot-问题)
- [OTA 更新问题](#ota-更新问题)
- [Play Integrity 与银行类应用](#play-integrity-与银行类应用)
- [应用检测与兼容性](#应用检测与兼容性)
- [设备特定问题](#设备特定问题)
- [性能与优化](#性能与优化)

### 问题索引

| 问题 | 从这里开始 |
| :--- | :--- |
| 无限重启 | 先看[紧急恢复](#紧急恢复)，再看 [Magisk 无限重启恢复](#device-won-t-boot-bootloop)。 |
| root 消失或未被检测到 | 先看[root 不生效](#root-不生效)，再看 [Magisk](./rooting-guides/magisk-guide.md) 或 [KernelSU](./rooting-guides/kernelsu-guide.md) 指南。 |
| 模块无法安装或导致无限重启 | 看 [Magisk 模块故障排除](#magisk-模块不工作) 或 [KernelSU 模块故障排除](#modules-don-t-install-don-t-work)。 |
| Play Integrity、银行类应用或 root 检测 | 看 [Play Integrity 与银行类应用](#play-integrity-与银行类应用) 以及 [root 管理工具](./apps-and-modules/root-management.md#root-hiding-play-integrity)。 |
| 无法启动 Recovery 或刷入镜像 | 看 [Bootloader 与 Fastboot 问题](#bootloader-与-fastboot-问题)、[变砖设备恢复](#变砖设备恢复) 以及[第三方 Recovery 指南](./rooting-guides/how-to-install-custom-recovery.md)。 |

---

## 紧急恢复

### 设备无法启动（无限重启）

**症状：** 设备卡在开机 logo、无限循环，或只能启动到 Recovery/Fastboot。

**立即采取的措施：**

1. **尝试 Magisk 安全模式**（如果已安装 Magisk）
   - 在开机早期按住音量减键以触发模块安全模式（时机因设备/Magisk 版本而异）
   - 如果可通过 Recovery/ADB 访问：
     ```bash
     adb shell magisk --remove-modules
     # 或手动执行
     adb shell rm -rf /data/adb/modules/*
     adb reboot
     ```

2. **启动到 Recovery/Bootloader**
   - 电源键 + 音量键组合因设备而异：
     - **Pixel：** 电源键 + 音量减，选择 Recovery
     - **Samsung：** 在 USB 连接状态下按电源键 + 音量加（旧机型还需加按 Bixby 键）
     - **Xiaomi：** 电源键 + 音量加
     - **OnePlus：** 电源键 + 音量减
     - **大多数其他设备：** 电源键 + 音量加（Recovery），电源键 + 音量减（Bootloader）
   - 详细说明：[第三方 Recovery 安装](./rooting-guides/how-to-install-custom-recovery.md)

3. **清除 Dalvik/ART 缓存**
   - 第三方 Recovery：清除 → 高级清除 → Dalvik/ART 缓存 + 缓存
   - 官方 Recovery："Wipe cache partition"（清除缓存分区，如果您的设备上有该选项）

4. **撤销最近的更改**
   - 移除您最近刷入的模块/内核/ROM
   - 如有 NANDroid 备份，则恢复最近一次备份

**高级恢复步骤：**

1. **如果已安装第三方 Recovery（TWRP/OrangeFox）**

   **方案 A：移除最近安装的模块**
   ```bash
   # 启动到 TWRP
   # 挂载 system 和 data 分区
   # 打开终端
   
   # 列出 Magisk 模块
   ls /data/adb/modules
   
   # 移除有问题的模块
   rm -rf /data/adb/modules/[module-name]
   
   # 重启
   ```

   **方案 B：禁用所有模块**
   ```bash
   # 在 TWRP 终端中
   touch /data/adb/magisk/disable
   # 或
   touch /data/adb/modules/disable
   
   # 重启
   ```

   **方案 C：恢复备份**
   - TWRP → Restore → 选择最近的备份
   - 恢复 boot、system、data 分区
   - 重启

2. **刷入正确的官方/已修补镜像**
   
   **对于 Android 13+ 设备**（Pixel 7/8/9/10、部分 Samsung/OnePlus/Xiaomi）：
   - 修补/刷入 `init_boot.img`（而非 boot.img）
   
   **对于较旧的设备：**
   - 修补/刷入 `boot.img`
   
   **命令（A/B 设备）：**
   ```bash
   # 进入 bootloader/fastboot 模式
   adb reboot bootloader
   fastboot devices
   
   # 将修补后的镜像刷入两个 slot
   fastboot flash init_boot_a magisk_patched.img
   fastboot flash init_boot_b magisk_patched.img
   fastboot reboot
   ```
   
   **恢复官方系统：**
   ```bash
   fastboot flash init_boot stock_init_boot.img
   # 或者对于较旧的设备
   fastboot flash boot stock_boot.img
   fastboot reboot
   ```

3. **刷入完整官方固件**
   - **Pixel：** 使用 [Android Flash Tool](https://flash.android.com)（网页版）或出厂镜像脚本（[指南](./rooting-guides/how-to-root-pixel-phone.md)）
   - **Samsung：** 使用 Odin 刷入完整固件（AP/BL/CP/CSC）。使用 HOME_CSC 保留数据（[指南](./rooting-guides/how-to-root-samsung-phone.md)）
   - **Xiaomi/POCO/Redmi：** 使用 Mi Flash Tool 刷入 fastboot ROM - 小心防回滚（Anti-Rollback）（[指南](./rooting-guides/how-to-root-xiaomi-phone.md)）
   - **OnePlus：** MSMDownloadTool 或 fastboot 刷机包（[指南](./rooting-guides/how-to-root-oneplus-phone.md)）
   - 更多设备指南：[全部 root 指南](./rooting-guides/)

4. **恢复出厂设置（最后手段）**
   - 官方 Recovery：Wipe data/factory reset（清除数据/恢复出厂设置）
   - Fastboot：执行 `fastboot -w`，然后执行 `fastboot reboot`
   - **警告：** 会清除所有用户数据

**紧急命令速查：**

```bash
# 重启到不同模式
adb reboot bootloader
adb reboot recovery
fastboot reboot fastboot   # 用户空间 fastboot（fastbootd），用于动态分区

# 不刷入直接引导 Recovery
fastboot boot recovery.img

# 禁用所有 Magisk 模块
adb shell magisk --remove-modules

# 刷入原厂镜像
fastboot flash boot stock_boot.img
fastboot flash init_boot stock_init_boot.img

# 切换活动 slot（A/B 设备）
fastboot getvar current-slot
fastboot set_active a    # 或 b

# 完整清除
fastboot -w
```

**实用提示：**
- 始终保留一份官方 boot/init_boot 镜像副本
- 在 A/B 设备上，使用 Magisk 的"安装到未活动 slot（OTA 后生效）"功能
- 不要混用不同版本 build 的镜像
- Build 指纹必须匹配

---

### root 不生效

**症状：** 应用提示"没有 root"，超级用户授权弹窗不出现，或管理器显示 N/A。

**基本验证：**

1. **检查 root 管理器状态**
   - **Magisk：** 应用应显示版本号，应显示"Installed"。如果显示 N/A，说明安装失败
   - **KernelSU：** 应用显示内核受支持/已启用。如果不支持，刷入支持 KSU 的内核
   - **APatch：** 应用显示 KernelPatch 状态。检查 SuperKey 配置
   - 使用简单的 root 检测应用或 Termux + `su` 进行测试

2. **验证镜像是否正确**
   ```bash
   adb shell su -c "echo Root works"
   ```
   如果显示 "su: not found" → 说明 root 未安装

**按 root 方案的解决方案：**

**Magisk：**

1. **重新安装到当前 slot**
   - 从[官方 GitHub](https://github.com/topjohnwu/Magisk/releases) 下载最新 Magisk APK（截至 2026 年 2 月为 v30.7）
   - 打开 → 安装 → 直接安装（OTA 后则选择"安装到未活动 slot"）
   - 重启
   - 详细说明请参阅[完整 Magisk 指南](./rooting-guides/magisk-guide.md)

2. **确保目标镜像正确**
   - **Android 13+：** 修补 `init_boot.img`（而非 boot.img）
   - **较旧的设备：** 修补 `boot.img`
   - 从与设备完全一致的固件 build 中提取

3. **启用 Zygisk（如需要）**
   - 设置 → 启用 Zygisk
   - 为不能看到 root 的应用配置 DenyList
   - 更改后重启

4. **检查模块冲突**
   - 禁用所有模块，然后逐一重新启用
   - 参见[紧急恢复](#紧急恢复)

5. **Android 16 QPR2 兼容性**
   - Magisk 现已支持 Android 16 QPR2 引入的新 sepolicy 二进制格式。如果运行 Android 16，请确保使用最新稳定版（v30.7+）。
   - Magisk 30.7 发布时已支持 Android 16 QPR2；如果您最近更新了固件，请先更新 Magisk 再重新修补。

**KernelSU：**
- KernelSU 官方支持 Android GKI 2.0 设备（内核 5.10+）。较旧的内核（4.14+）也受支持，但需要手动编译内核。
- 将内核与您的 ROM/固件版本和 vendor 分区匹配
- 使用官方 KernelSU Manager
- KernelSU 现已为最高至 android16-6.12 的内核提供 LKM 模块
- 安装帮助请参阅[完整 KernelSU 指南](./rooting-guides/kernelsu-guide.md)

**APatch：**
- APatch 是适用于 Android 内核版本 3.18 – 6.12 的通用 root 解决方案
- 不要在同一活动 slot 上同时运行 APatch 与 Magisk 或 KernelSU。一次只使用一套 root 方案。
- 请按照适用于您的设备/ROM 的 [APatch 官方指南](./rooting-guides/apatch-guide.md) 操作

**彻底重装（Magisk）：**

```bash
# 方法 A：修补并刷入
# 1) 从当前固件中提取正确的镜像（boot.img 或 init_boot.img）
# 2) 在设备上用 Magisk 修补
# 3) 如果是 A/B 设备，用 fastboot 刷入两个 slot

fastboot flash init_boot_a magisk_patched.img
fastboot flash init_boot_b magisk_patched.img
fastboot reboot
```

**方法 B：通过 Recovery 刷入**（配备第三方 Recovery 的旧设备）
- 启动到 TWRP/OrangeFox
- 刷入 Magisk ZIP/APK（将 .apk 重命名为 .zip）
- 重启，如有需要再安装 Magisk 应用

---

### 变砖设备恢复

**判断变砖类型：**

- **软砖（可恢复）：** 能进入 fastboot/下载模式/Recovery；设备有生命迹象。恢复几率高
- **硬砖：** 无任何反应、无指示灯、电脑无法识别。能否恢复取决于 SoC；可能需要专业维修

**软砖恢复：**

1. **进入 Recovery/Bootloader**
   - 尝试所有按键组合（参见[设备无法启动](#device-won-t-boot-bootloop)）

2. **刷入官方固件**
   - **Pixel：** 出厂镜像/Android Flash Tool
   - **Samsung：** 使用 Odin 刷入完整固件。使用 HOME_CSC 保留数据。Bootloader 解锁后 KNOX 0x1 熔断即永久生效
   - **Xiaomi：** 使用 Mi Flash Tool 刷入 fastboot ROM。小心防回滚（ARB）
   - **OnePlus：** MSMDownloadTool 或 fastboot 刷机包

3. **系统损坏时恢复出厂设置**
   ```bash
   fastboot -w
   fastboot reboot
   ```

**硬砖的处理选项：**

恢复方式因 SoC/厂商而异：
- **Qualcomm EDL (9008)：** 需要测试点或专用线缆；许多设备需要授权账号
- **OnePlus MSM 工具：** 可完整救砖恢复到出厂状态（旧机型）
- **Samsung Smart Switch 紧急恢复：** 成功率有限，因机型而异
- **专业维修：** 对贵重设备进行 JTAG/ISP/主板级维修

**预防措施：**
- 确认固件/版本号完全匹配
- 保持设备电量充足；不要中断刷入操作
- 刷入前务必备份

---

## Magisk 故障排除

### 安装失败

#### 错误："Cannot patch boot image"（无法修补 boot 镜像）

**原因：**
- boot 镜像损坏
- 固件版本错误
- 存储空间不足

**解决方案：**

1. **验证 boot 镜像**
   ```bash
   # 检查 boot 镜像完整性
   file boot.img
   # 应显示："Android bootimg"
   ```

2. **清除 Magisk 缓存**
   - 设置 → 应用 → Magisk
   - 清除缓存和数据
   - 重新安装 Magisk

3. **从固件中提取 boot**
   - 使用 payload-dumper-go（适用于 Pixel/OnePlus）
   - 使用固件提取工具
   - 核对 MD5 哈希是否匹配

4. **尝试其他修补方式**
   - 改为通过 Recovery 安装
   - 在电脑上使用 Magisk 修补
   - 使用 fastboot 模式安装

---

#### 错误："Installation failed! This device is not supported"（安装失败！不支持此设备）

**解决方案：**

1. **更新 Magisk**
   - 下载最新版本（v30.7+，支持 Android 16 QPR2）
   - Alpha/Beta 版可能率先支持较新的设备

2. **检查设备兼容性**
   - 某些设备需要特殊版本的 Magisk build
   - 在 XDA 搜索特定设备的版本

3. **尝试改用 KernelSU 或 APatch**
   - 某些设备与 Magisk 不兼容
   - 在 Magisk 不可用时，KernelSU 或 APatch 或许可行

---

### Magisk 模块不工作

**诊断步骤：**

1. **检查模块状态**
   - Magisk → 模块
   - 留意 "!" 图标（表示存在问题）

2. **查看模块日志**
   ```bash
   adb shell
   su
   cat /cache/magisk.log
   ```

3. **在安全模式下测试**
   - 禁用所有模块
   - 逐一启用
   - 找出冲突的模块

**常见模块问题：**

| 问题 | 解决方案 |
|:---|:---|
| 模块显示 "!" | 不兼容或已损坏 - 重新安装 |
| 模块已启用但不工作 | 查看日志，核实兼容性 |
| 重启后模块消失 | Magisk 核心问题 - 重装 Magisk |
| 某些模块导致无限重启 | 通过 Recovery 禁用，检查兼容性 |

---

### DenyList / root 隐藏不生效

**适用于 Magisk v24+（当前版本）：**

1. **配置 DenyList**
   - 设置 → 启用 Zygisk
   - 设置 → 配置 DenyList
   - 添加需要隐藏 root 的应用

2. **强制执行 DenyList**
   - 启用 "Enforce DenyList"
   - 重启设备

3. **额外隐藏（任选一种策略）：**

   **策略 A：Shamiko（热门选择）**
   - 安装 Shamiko 模块
   - Shamiko 与强制执行的 DenyList 不兼容 - 使用 Shamiko 时请关闭 "Enforce DenyList"
   - 将目标应用加入 DenyList（Shamiko 会读取它，但使用自己的隐藏机制）
   - 重命名 Magisk 应用（设置 → 隐藏 Magisk 应用）

   **策略 B：Zygisk Assistant / NoHello**
   - 为获得最佳效果，如果并未同时使用 Shamiko、Zygisk Assistant 或 NoHello，请启用 Magisk 的 Enforce DenyList 选项

4. **配置完成后清除目标应用数据**
   - 强制停止银行类/目标应用
   - 清除其缓存和数据
   - 重启，然后重新打开应用

**高级检测规避：**

```bash
# 隐藏 Magisk 应用（通过 Magisk 设置或手动操作）
# 隐藏系统属性
resetprop --delete ro.debuggable
resetprop --delete ro.secure
```

---

### Magisk 破坏 OTA 更新

**症状：** OTA 无法安装，或 OTA 后出现无限重启

**解决方案：**

1. **OTA 之前（准备工作）：**
   ```bash
   # 备份当前环境
   # 禁用所有模块
   # 卸载 Magisk（还原镜像）
   # 应用 OTA
   # 用新 boot 镜像重新 root
   ```

2. **OTA 失败后：**
   - 启动到 Recovery
   - 刷入新固件中的官方 boot
   - 刷入新修补的 boot
   - 重启

**预防措施：**
- OTA 前务必卸载 Magisk，或使用"安装到未活动 slot"功能
- 谨慎使用 OTA 保留类模块
- 考虑使用第三方 ROM 获得更无缝的更新体验

---

## KernelSU 故障排除

### 安装问题

#### 错误："No KernelSU detected"（未检测到 KernelSU）/ 应用显示 "Unsupported"（不支持）

**原因：**
- 刷入了错误的内核
- 内核未内置 KernelSU
- LKM 模块未加载

**解决方案：**

1. **验证内核**
   ```bash
   adb shell
   su -c "cat /proc/version"
   # 版本字符串中应显示 KernelSU
   ```

2. **了解运行模式**
   - 自 0.9.0 版本起，KernelSU 在 GKI 设备上支持两种运行模式：GKI 模式：使用 KernelSU 提供的通用内核镜像（GKI）替换设备原内核。
   - **LKM 模式：** 将 KernelSU 作为内核模块加载（推荐用于 GKI 设备）。使用 `ksud boot-patch` 将 LKM 修补进 boot 镜像。
   - 内核版本和 Android 版本不一定相同！如果您发现内核版本是 android12-5.10.101，而 Android 系统版本却是 Android 13 或其他版本，不必惊讶。

3. **使用 ksud 工具修补**
   - KernelSU 提供的 ksud 工具可以帮助您快速修补官方固件后再刷入。该工具支持 macOS、Linux 和 Windows，您可以从 GitHub Release 下载对应版本。

4. **编译带 KernelSU 的内核（高级）**
   - 按照 KernelSU 文档操作
   - 编译自定义内核
   - 刷入并测试

---

### 模块无法安装 / 不工作

**诊断：**

1. **检查是否安装了 metamodule（最常见的问题！）**
   - KernelSU 需要 **metamodule** 才能挂载模块
   - 没有 metamodule 时，模块虽已安装但不会被挂载
   - 打开 KernelSU Manager → 模块，确认 metamodule 处于启用状态

2. **检查模块兼容性**
   - KernelSU 模块使用不同的格式
   - 部分 Magisk 模块不兼容

**解决方案：**

1. **先安装 metamodule**
   - 下载 [meta-overlayfs](https://github.com/KernelSU-Modules-Repo/meta-overlayfs)（官方）
   - 或 [mountify](https://github.com/backslashxx/mountify)、[meta-hybrid_mount](https://github.com/YuzakiKokuban/meta-hybrid_mount)
   - 通过 KernelSU Manager → 模块安装
   - 重启后再次尝试安装模块

2. **转换 Magisk 模块**
   - 部分模块稍作修改即可使用
   - 查看模块开发者的说明

3. **寻找 KernelSU 替代模块**
   - KernelSU 模块生态正在不断壮大
   - 查看 KernelSU 模块仓库

---

### KernelSU 重启后失效

**原因：**
- 内核被还原
- 安全补丁干扰
- A/B 设备上只刷入了一个 slot

**解决方案：**

1. **重启后检查内核状态**
   ```bash
   cat /proc/version
   ```

2. **如有需要禁用 AVB**
   ```bash
   fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
   ```

3. **将内核刷入两个 slot**（A/B 设备）
   ```bash
   fastboot flash boot_a kernelsu-boot.img
   fastboot flash boot_b kernelsu-boot.img
   ```

---

### KernelSU-Next（分支）

KernelSU-Next 是一个分支（fork），通过 LTS 模式支持 4.x – 5.4 的 Non-GKI 内核（3.x 为实验性），通过 GKI 模式支持 5.10 – 6.6 的 GKI 内核（6.6+ 为实验性），同时内置 Magic Mount 和 OverlayFS 并可在设置中一键切换，还配备了重新设计的管理器应用。

- 警告：Non-GKI 设备不要升级到主线 KernelSU v3.x 版本！Non-GKI 设备请改用 KernelSU-Next。
- KernelSU-Next 最新版本为 v3.1.0（2026 年 2 月）

---

### App Profile 问题

**KernelSU 使用 profile 系统而非按应用授予权限**

**配置：**

1. **设置 profile**
   - KernelSU Manager → Profiles
   - 为不同使用场景创建 profile
   - 将应用分配到 profile
   - 只有获得许可的应用才能访问或看到 su；其他所有应用对其毫无感知。KernelSU 允许自定义 su 的 uid、gid、组、capabilities 和 SELinux 规则，从而强化 root 权限。

2. **profile 未生效**
   - 强制停止应用
   - 清除应用缓存
   - 重新应用 profile
   - 重启

---

## APatch 故障排除

### 修补失败

**常见错误与解决方案：**

| 错误 | 解决方案 |
|:---|:---|
| "Unsupported boot image"（不支持的 boot 镜像） | 尝试其他提取方法；检查内核版本兼容性 |
| "Patching timeout"（修补超时） | 增加超时时间，或在电脑上用 kptools 尝试 |
| "Verification failed"（校验失败） | 禁用 AVB/DM-verity |
| "Flash failed"（刷入失败） | 使用其他刷入方式 |

**通用步骤：**

1. **核实 boot 镜像来源**
   - 始终修补从手机当前正在运行的同一 build 中提取的镜像。您需要与当前固件 build 完全一致的 boot.img 或 init_boot.img。
   - 核对 MD5 哈希

2. **设置强 SuperKey**
   - SuperKey 长度应为 8-63 个字符，须包含数字和字母，但不能包含特殊字符。严禁设置 12345678 这类弱密钥。最新版本的 APatch 强制要求使用强密钥。

3. **尝试其他修补方式**
   - 在电脑上使用 kptools 修补，而非在设备上操作
   - 最新版本的 APatch Manager 支持通过 TWRP 等第三方 Recovery 直接刷入。将 APatch Manager 的文件后缀从 .apk 改为 .zip，之后即可通过 Recovery 的刷入功能刷入该 .zip 文件。APatch 会被自动安装，就像 Magisk 一样。

4. **检查设备兼容性**
   - APatch 允许修改兼容 ARM64 设备（内核版本 3.18 至 6.1）上的 Linux 内核。官方文档目前列出的支持上限为内核版本 6.12。
   - 部分较旧的 APatch 版本中 KernelPatch 不支持 6.6 - 请查看最新的发行说明。

---

### APatch 模块系统

APatch 提供两类主要模块：APM 用于类似 Magisk 的模块；KPM 用于直接修改内核并向其中注入代码。

**挂载方式变化：**
- APatch 已改用 Magic Mount 而非 OverlayFS 以获得更好的兼容性。不过，您仍然可以通过创建 /data/adb/.overlay_enable 文件将 OverlayFS 作为默认挂载方式。
- 您可以创建 /data/adb/.litemode_enable 来跳过所有挂载，从而将检测风险降到最低。

---

### APatch 重启后不保留

**如果 APatch 在重启后消失：**

1. **检查安装方式**
   - 永久安装还是临时安装
   - 刷入正确的分区

2. **刷入两个 slot（A/B 设备）**
   ```bash
   fastboot flash boot_a apatched-boot.img
   fastboot flash boot_b apatched-boot.img
   ```

3. **如有需要禁用校验**
   ```bash
   fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
   ```

### APatch OTA 更新

APatch 的 root 保留基于镜像，因此 OTA 后通常需要重新修补更新后的 boot 链镜像。请始终从新安装的 build 中提取镜像进行修补，而不是从旧的固件包。

---

## Bootloader 与 Fastboot 问题

### Bootloader 无法解锁

**各厂商的解决方案：**

**Google Pixel：**
```bash
# 在开发者选项中启用 OEM 解锁
# 启动到 fastboot
fastboot flashing unlock
# 或者对于较新的设备
fastboot flashing unlock_critical
```

**Samsung：**

:::danger One UI 8 / Android 16 重大变化
One UI 8（Android 16）取消了 Samsung Galaxy 设备的 Bootloader 解锁支持。开发者选项中的 OEM 解锁开关被移除；解锁逻辑从固件中剔除。全球范围内受影响：S25 系列、Z Fold 7、Z Flip 7，以及所有已更新到 One UI 8 的设备。通过官方途径完全无法 root、刷第三方 ROM 和第三方内核。适用于所有地区。

⚠️ **如果您计划 root 或解锁 Bootloader，在经过验证的解锁方法出现之前，切勿更新到 One UI 8**
:::

- 对于仍停留在 One UI 7 或更早版本的设备：
  - 美国/加拿大运营商机型没有官方 Bootloader 解锁
  - 国际版机型：查看 Samsung Developer 网站
  - Knox 将永久且不可逆地熔断。数据清除：解锁会清空所有数据。保修失效：Samsung 将拒绝所有保修服务。

**Xiaomi/Redmi/POCO：**
- 在 Xiaomi 官网申请解锁权限
- 等待期不定（通常 3-7 天，最长可达 30 天）
- 使用官方 Mi Unlock Tool
- 解锁会清除所有数据

**OnePlus：**
```bash
fastboot oem unlock
# 或者较新机型
fastboot flashing unlock
```

**Nothing Phone：**
- 支持官方解锁
- 在开发者选项中启用 OEM 解锁
- 使用 fastboot 解锁命令

**如果解锁命令失败：**
- 将 SDK Platform Tools 更新到最新版本
- 尝试更换 USB 数据线/接口（USB 2.0 接口通常效果更好）
- 在开发者选项中启用 USB 调试
- 确保开发者选项中的 "Allow bootloader unlock" 已启用
- 某些设备在解锁过程中需要联网

---

### fastboot/ADB 无法识别设备

**Windows：**

1. **安装驱动**
   - 下载 [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools)
   - 安装通用 ADB 驱动
   - 安装厂商专用驱动（Samsung、Xiaomi 等）

2. **禁用驱动程序强制签名**
   ```powershell
   # 高级启动 → 疑难解答 → 高级选项 → 启动设置
   # 选择"禁用驱动程序强制签名"
   # 然后安装未签名驱动
   ```

**Linux：**

1. **配置 udev 规则**
   ```bash
   sudo nano /etc/udev/rules.d/51-android.rules
   # 添加：
   SUBSYSTEM=="usb", ATTR{idVendor}=="18d1", MODE="0666", GROUP="plugdev"
   # Google - 18d1，Samsung - 04e8，Xiaomi - 2717，OnePlus - 2a70
   
   # 重新加载规则
   sudo udevadm control --reload-rules
   sudo udevadm trigger
   ```

**Mac：**
- 通常无需配置即可使用
- 确保已启用 USB 调试
- 在设备上信任这台电脑
- 对于 Apple Silicon Mac，某些情况下可能需要禁用 SIP

---

### AVB 与验证启动错误

**这是什么：**
- Android Verified Boot（AVB）会阻止已修改的系统启动
- dm-verity 检查系统完整性

**当您看到如下错误时：**
- "dm-verity corruption"
- "AVB verification failed"
- "Can't load Android system"

**解决方案：**

```bash
# 下载与您的固件对应的 vbmeta.img
# 以禁用校验的方式刷入
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img

# 某些设备需要使用以下写法
fastboot flash vbmeta --disable-verity --disable-verification vbmeta.img

# 对于 A/B 设备，刷入两个 slot
fastboot --disable-verity --disable-verification flash vbmeta_a vbmeta.img
fastboot --disable-verity --disable-verification flash vbmeta_b vbmeta.img
```

**重要提示：**
- 大多数现代 Magisk 安装不需要禁用 AVB
- 仅当您的设备/ROM/内核文档明确要求时才禁用
- 部分第三方 ROM 需要此步骤

---

## OTA 更新问题

### 使用 Magisk 在 OTA 后保留 root（A/B 设备）

**推荐方法：**

1. **通过系统更新器安装 OTA**
   - 出现提示时先不要重启

2. **将 Magisk 安装到未活动 slot**
   - 打开 Magisk Manager
   - 安装 → "安装到未活动 slot（OTA 后生效）"
   - 等待完成

3. **重启**
   - 现在可以重启了
   - OTA 已应用且 root 得到保留

**如果 OTA 已经失败：**

1. **刷入新版本的官方 boot**
   ```bash
   # 下载新固件
   # 提取 boot/init_boot.img
   fastboot flash boot_a stock_boot.img
   fastboot flash boot_b stock_boot.img
   fastboot reboot
   ```

2. **用新镜像重新 root**
   - 从新固件中提取正确的镜像
   - 使用 Magisk 修补
   - 刷入修补后的镜像

### 非 A/B 设备

**流程：**
1. 卸载 Magisk（还原镜像）
2. 正常应用 OTA
3. 重新修补新的 boot 镜像
4. 通过 fastboot 或第三方 Recovery 刷入

### 使用 APatch 在 OTA 后保留 root

APatch 的 root 保留基于镜像，因此 OTA 后通常需要重新修补更新后的 boot 链镜像。请始终从新安装的 build 中提取镜像进行修补，而不是从旧的固件包。

---

## Play Integrity 与银行类应用

### 了解 Play Integrity

**完整性级别：**
- **MEETS_BASIC_INTEGRITY：** 设备在基本层面上看起来未被修改
- **MEETS_DEVICE_INTEGRITY：** 设备通过设备级完整性校验
- **MEETS_STRONG_INTEGRITY：** 基于硬件的证明（在已解锁的 Bootloader 上通常无法通过）

**重要提示：** 绕过受保护应用的安全要求违反其服务条款。本节聚焦于合法的兼容性最佳实践。

**现实预期（2026）：**
- 现实目标：BASIC + DEVICE。Strong integrity 需要 Bootloader 处于锁定状态 - 在第三方 ROM 上无法实现。
- Play Integrity 的行为会在服务端频繁变化。无法保证永久绕过。
- MEETS_STRONG_INTEGRITY 只有在拥有有效 keybox 的情况下才能实现。

### 当前模块组合（2026）

Play Integrity 生态已发生显著演变。当前的典型组合包括：

1. **Zygisk 实现**（任选其一）：
   - Magisk 内置 Zygisk
   - ZygiskNext、ReZygisk 或 NeoZygisk（适用于 KernelSU/APatch）

2. **Play Integrity 修复模块**（任选其一）：
   - PlayIntegrityFork - 一个为 Play Integrity API 修复 "MEETS_DEVICE_INTEGRITY" 的 Zygisk 模块。在 Android 13+ 的 ROM 上，它仍有助于通过 Google Wallet 以及 Google Messages RCS 支持的校验。
   - PlayIntegrityFix (PIF) - chiteroman 的原版（chiteroman 的官方 PIF 已从 GitHub 移除；存在社区镜像，例如 [KOWX712 的镜像](https://github.com/KOWX712/PlayIntegrityFix)）
   - PIF-Next - 不是 root 隐藏模块；它仅与 TrickyStore 集成，用于确保有效的硬件证明

3. **root 隐藏**（任选其一）：
   - Shamiko - 向检测隐藏 root 与 Magisk
   - Zygisk Assistant / NoHello

4. **密钥证明**（用于 STRONG integrity）：
   - 如要尝试通过 STRONG integrity，仅建议使用最新的官方 Tricky Store 或 TEESimulator 版本。
   - Tricky Store Addon - 更新目标列表
   - 需要有效的 keybox（因设备而异，可能需要定期刷新）

**按 root 方案的配置：**

| root 方案 | Zygisk | PIF 模块 | root 隐藏 |
|:---|:---|:---|:---|
| Magisk | 内置 Zygisk | PlayIntegrityFork / PIF | Shamiko 或 DenyList |
| KernelSU | ZygiskNext / ReZygisk / NeoZygisk | PlayIntegrityFork / PIF | App Profiles + Shamiko |
| APatch | ZygiskNext / ReZygisk / NeoZygisk | PlayIntegrityFork / PIF | 内置排除 + Shamiko |

**测试工具：**
- SPIC（Simple Play Integrity Checker）
- Play Store → 设置 → 连续点击"Play Store 版本"七次 → 常规 → 开发者选项 → 验证完整性
- 打开 Play Store → 设置 → 连续点击“Play Store 版本”七次，进入“常规” → “开发者选项” → “验证完整性”，您的证明结果会立即显示！
- 注意：YASNAC 已是过时工具（SafetyNet），不再具有权威性

**检查设备认证：**
- Play Store → 设置 → 关于 → "Play Protect 认证"
- 应显示"设备已认证"

**现实情况：**
- STRONG integrity 通常需要锁定的 Bootloader + 有效 keybox
- 您可能需要每 2-3 天运行一次 PIF 和/或从 Tricky Store 获取新 keybox，才能让 Google Wallet 持续可用。
- 无论怎么配置，某些应用在已 root/已解锁的设备上都无法使用
- 可以考虑：
  - 用一台未做修改的备用设备运行关键应用
  - 基于浏览器的替代方案
  - 工作资料隔离（不尝试绕过安全机制）

**以严格著称的应用：**
- Google Wallet/Pay
- 银行类应用（因地区和应用而异）
- 麦当劳应用
- Revolut
- Netflix（部分地区）
- Pokemon GO
- 企业 MDM 应用

---

## 设备特定问题

### Google Pixel（6/7/8/9/10 系列）

**常见问题：**

1. **修补了错误的镜像**
   - **Android 13+：** 必须修补 `init_boot.img`（而非 boot.img）
   - 修补 boot.img 会导致 root 失败
   - 使用 payload-dumper-go 从出厂镜像的 payload.bin 中提取

2. **Pixel 10 系列**
   - Pixel 10 系列于 2025 年 8 月发布，出厂预装 Android 16。
   - Pixel 10 Pro 可使用 SukiSU/SUSFS 进行 root，并需要 metamodule、带有效 keybox 的 TrickyStore 以及 PIFork 才能获得 Strong Integrity。
   - 使用 init_boot.img 修补流程

3. **Android 16 QPR2 root 问题**
   - 在某些 2026 年的固件更新后，部分用户失去了 root 且重新 root 失败，导致无限重启。
   - Magisk 30.7 发布时已支持 Android 16 QPR2 - 请确保使用最新版 Magisk
   - 如果固件更新后 root 失败，请尝试等待针对您特定 build 的 Magisk 更新

4. **OTA 更新**
   - 使用"安装到未活动 slot（OTA 后生效）"方法
   - 保持两个 slot 同步

5. **使用 Fastbootd 刷入**
   ```bash
   # 对动态分区使用用户空间 fastboot
   adb reboot fastboot
   # 或从 bootloader 执行
   fastboot reboot fastboot
   ```

**相关资源：**
- [Pixel 手机 root 指南](./rooting-guides/how-to-root-pixel-phone.md)

---

### Samsung Galaxy（S21-S25、Fold/Flip）

:::danger One UI 8（Android 16）Bootloader 锁定
One UI 8（Android 16）取消了 Samsung Galaxy 设备的 Bootloader 解锁支持。开发者选项中的 OEM 解锁开关已被移除。全球范围内受影响：S25 系列、Z Fold 7、Z Flip 7，以及所有已更新到 One UI 8 的设备。

如果您想 root Samsung 设备，在社区找到变通方法之前，**切勿更新到 One UI 8**。已处于 One UI 7 或更早版本的设备仍可使用现有方法解锁。
:::

**常见问题（One UI 8 之前）：**

1. **KNOX 永久熔断**
   - Bootloader 一旦解锁，KNOX 0x1 标志永久生效
   - Samsung Pay、Samsung Pass、安全文件夹可能受影响
   - Samsung Health 高级功能受限
   - 保修失效

2. **通过 Odin root**
   - 用 Magisk 修补 AP 文件
   - 在 Odin 中刷入 BL/AP/CP/CSC
   - 使用 HOME_CSC 保留数据（在合适的情况下）

3. **美国运营商机型**
   - 大多数美国/加拿大机型的 Bootloader 已锁定
   - 没有可用的官方解锁
   - 在 XDA 查询您的具体机型

4. **防回滚保护**
   - 部分机型采用熔丝式 ARB
   - 不要将固件降级到特定版本以下
   - 在下载模式中查看 "Binary" 版本

5. **Galaxy S25 系列**
   - Galaxy S25 2026 年 3 月的更新基于 One UI 8 和 Android 16。
   - 已 root 的 S25 Ultra（欧版）用户如想在不丢失数据的情况下升级到 Android 16，应使用新固件的 AP 文件按照标准 Odin 重新 root 流程操作。
   - **关键：** 如果您重新锁定 Bootloader，更新到 One UI 8 可能会永久丧失再次解锁 Bootloader 的能力。

**相关资源：**
- [Samsung 手机 root 指南](./rooting-guides/how-to-root-samsung-phone.md)

---

### Xiaomi/Redmi/POCO

**常见问题：**

1. **Mi Unlock 等待期**
   - 官方解锁需要等待 3-30 天
   - 必须使用与设备绑定的小米账号
   - 部分地区存在限制

2. **防回滚（ARB）**
   - 刷入较旧的固件可能导致硬砖
   - 检查 fastboot ROM 中的 ARB 版本
   - 谨慎使用 Mi Flash Tool 的 anti 设置

3. **HyperOS 特有问题**
   - HyperOS（MIUI 的后继者）深度定制；部分模块不兼容
   - 电池优化激进；将 root 应用加入白名单
   - 安全功能可能干扰 root

4. **A/B 与仅 A 分区**
   - 因机型而异
   - 刷入前检查分区布局

**相关资源：**
- [Xiaomi 手机 root 指南](./rooting-guides/how-to-root-xiaomi-phone.md)

---

### OnePlus

**常见问题：**

1. **OxygenOS/ColorOS 合并**
   - 较新的机型采用 ColorOS 底层
   - 分区结构已改变
   - 仔细遵循特定机型的指南

2. **MSMDownloadTool**
   - 旧机型：具备完整救砖能力
   - 新机型：可用性不一
   - 可将设备恢复到出厂状态

3. **地区差异**
   - 部分地区有锁定版本
   - 仔细核对型号

**相关资源：**
- [OnePlus 手机 root 指南](./rooting-guides/how-to-root-oneplus-phone.md)

---

### Nothing Phone (1/2/2a)

**常见问题：**

1. **支持官方解锁**
   - 在开发者选项中启用 OEM 解锁
   - 标准 fastboot 解锁流程

2. **第三方 Recovery 可用性**
   - TWRP 支持因机型而异
   - 在 XDA 查看最新 build

3. **Nothing OS 更新**
   - 频繁更新可能需要重新修补
   - 保留与您版本对应的官方镜像

**相关资源：**
- [Nothing 手机 root 指南](./rooting-guides/how-to-root-nothing-phone.md)

---

### Motorola

**常见问题：**

1. **提供官方解锁**
   - Motorola 提供解锁码
   - 查看 Motorola Developer 网站
   - 解锁后保修失效

2. **地区限制**
   - 部分运营商定制版无法解锁
   - 中国大陆机型可能存在限制

3. **Rescue and Smart Assistant**
   - 官方软砖救援工具
   - 需要官方固件包

**相关资源：**
- [Motorola 手机 root 指南](./rooting-guides/how-to-root-motorola-phone.md)

---

## 性能与优化

### root 后耗电加快

**常见原因：**
- 模块或 root 应用导致的 Wakelock
- 后台服务未优化
- 内核设置过于激进

**解决方案：**

1. **排查 Wakelock**
   ```bash
   # 查看 wakelock 统计
   adb shell dumpsys batterystats
   
   # 或使用应用
   # BetterBatteryStats、Wakelock Detector（需 root）
   ```

2. **优化 root 应用**
   - 限制拥有 root 权限的应用数量
   - 对不需要 root 的应用关闭 root 授权
   - 使用 Greenify 或类似工具强化休眠

3. **内核调优**
   - 使用保守的 governor 配置
   - 如有需要限制 CPU 最高频率
   - 调整 I/O 调度器

4. **模块审查**
   - 禁用不必要的模块
   - 某些模块会造成 Wakelock
   - 在禁用模块的状态下测试

---

### 性能调优

**CPU/GPU 优化：**

1. **Governor 选择**
   - 性能向：performance、schedutil
   - 省电向：powersave、conservative
   - 均衡向：interactive、ondemand

2. **频率调节**
   ```bash
   # 查看当前 governor
   cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
   
   # 可用的 governor
   cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors
   
   # 设置 governor（需要 root 应用或脚本）
   echo "schedutil" > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
   ```

3. **温控管理**
   - 在压力测试期间监控温度
   - 不要永久禁用温度降频
   - 仅在真正游戏时使用游戏配置

**性能类应用：**
- [性能与游戏应用](./apps-and-modules/performance.md)
- [电池管理工具](./apps-and-modules/performance.md)

**存储优化：**

1. **Trim/FSTRIM**
   - 大多数现代 ROM 会自动执行
   - 可通过 root 应用手动触发

2. **I/O 调度器**
   - 可选 BFQ、mq-deadline、noop
   - 取决于设备/内核

**警告：** 性能调优可能影响稳定性和电池续航。请充分测试每项更改，出现问题及时还原。

---

## 应用检测与兼容性

### 银行类应用检测到 root

**应对策略：**

1. **完全隐藏 root**
   - 启用所有隐藏功能（参见 [Play Integrity 部分](#play-integrity-与银行类应用)）
   - 重命名 root 管理器应用
   - 清除银行类应用数据
   - 加入 DenyList/profile/排除列表

2. **使用替代方式**
   - 使用浏览器版银行服务
   - 使用未 root 的备用设备
   - 工作资料隔离

3. **基于模块的解决方案（2026 年当前组合）**
   - Shamiko（适用于 Magisk）
   - PlayIntegrityFork 或 PIF
   - Tricky Store（用于证明）
   - Hide My Applist（通过 LSPosed）

---

### root 后应用崩溃

**常见原因：**

| 原因 | 解决方案 |
|:---|:---|
| root 检测 | 对应用隐藏 root |
| 模块冲突 | 禁用模块，找出元凶 |
| 系统文件被修改 | 恢复 system 分区 |
| 安全校验 | 使用 root 隐藏模块 |

**诊断：**

```bash
# 查看应用崩溃日志
adb logcat | grep "FATAL EXCEPTION"

# 查看模块日志
su -c "cat /cache/magisk.log | grep [app-package-name]"
```

---

### Netflix/流媒体应用问题

**问题：**
- 无法安装
- 播放错误
- "设备未认证"

**解决方案：**

1. **修复认证**
   - 确保 Play Store 显示"设备已认证"
   - 使用 PlayIntegrityFork/PIF 模块
   - 修复认证后清除应用数据

2. **使用旧版本**
   - 从 APKMirror 安装
   - 禁用自动更新
   - 使用 Zygisk Detach 阻止 Play Store 更新

---

## 日志与诊断

### 收集日志以便求助

**Magisk 日志：**
```bash
# 通过应用
Magisk → Settings → Save log

# 通过 ADB
adb shell
su
cat /cache/magisk.log > /sdcard/magisk.log
exit
adb pull /sdcard/magisk.log
```

**系统日志：**
```bash
# 完整系统日志
adb logcat > logcat.txt

# 仅筛选错误
adb logcat *:E > errors.txt

# 内核日志
adb shell dmesg > kernel.log
```

**崩溃日志：**
```bash
# 查看 tombstones
adb shell
su
ls /data/tombstones/
cat /data/tombstones/tombstone_XX
```

---

## 何时放弃并还原

**在以下情况下考虑解除 root：**
- 尽管尝试了所有办法，关键应用仍然无法使用
- 多次修复后系统仍不稳定
- 无法通过工作所需的安全校验
- 带来的麻烦多于收益

**彻底解除 root 的流程：**

1. **备份数据**
   - 复制重要文件
   - 导出应用数据
   - 记录自定义修改

2. **卸载 root**
   - Magisk → 卸载 → 完全卸载
   - 或刷入官方 boot 镜像

3. **恢复出厂设置**
   - 清除数据和缓存
   - 全新开始

4. **锁定 Bootloader（可选）**
   ```bash
   fastboot flashing lock
   # 警告：会再次清除数据
   # 警告：在某些设备上，在非官方系统状态下重新锁定可能导致变砖
   ```

---

## 获取帮助

### 如何求助

在论坛或社区求助时，请提供完整的信息：

**必要信息：**
```
Device: [Model name and number]
Firmware: [Android version, build number, security patch]
Bootloader: [Unlocked/Locked]
Root Method: [Magisk 27.x / KernelSU x.x / APatch]
Recovery: [TWRP/OrangeFox/Stock]

Problem: [Detailed description of what happened]
Steps Taken: [What you've already tried]
Error Messages: [Exact error text or screenshots]
Logs: [Attach logcat, dmesg if available]
```

**优秀示例：**
```
Device: OnePlus 9 Pro LE2125
Firmware: OxygenOS 14.0.0.600 (Android 14)
Bootloader: Unlocked
Root: Magisk 27.0
Recovery: Stock

Problem: Device bootloops after installing Module X
Steps Taken: Tried booting to recovery, can't access ADB
Error: Stuck on OnePlus logo, no response
```

### 去哪里寻求帮助

**XDA Developers**
- 设备专属论坛
- ROM 与内核讨论帖
- [https://forum.xda-developers.com/](https://forum.xda-developers.com/)

**Reddit 社区**
- [r/AndroidRoot](https://reddit.com/r/AndroidRoot)
- [r/Magisk](https://reddit.com/r/Magisk)
- [r/LineageOS](https://reddit.com/r/LineageOS)
- [r/Awesome_Android_Root](https://reddit.com/r/Awesome_Android_Root)

**Telegram 群组**
- @MagiskUpdates（官方消息）
- @KernelSU（讨论）
- 设备专属群组

**GitHub Issues**
- Magisk: [topjohnwu/Magisk](https://github.com/topjohnwu/Magisk)
- KernelSU: [tiann/KernelSU](https://github.com/tiann/KernelSU)
- APatch: [bmax121/APatch](https://github.com/bmax121/APatch)

### 最佳实践

**发帖之前：**
1. 搜索与您问题相关的现有帖子
2. 阅读设备专属指南
3. 查看近期帖子中是否有类似问题
4. 收集全部日志和信息

**发帖时：**
1. 使用描述性的标题
2. 发布到正确的版块/论坛
3. 以文件形式附带日志（不要直接贴文本）
4. 相关时附上截图
5. 保持耐心和尊重

**获得帮助之后：**
1. 回帖反馈结果
2. 标记有效的解决方案
3. 帮助遇到类似问题的其他人
4. 回馈社区

---

## 更多资源

### 快速链接

**核心指南：**
- [完整 root 指南](./rooting-guides/index.md)
- [解锁 Bootloader](./rooting-guides/how-to-unlock-bootloader.md)
- [第三方 Recovery 安装](./rooting-guides/how-to-install-custom-recovery.md)
- [root 框架对比](./rooting-guides/root-framework-comparison.md)
- [不解锁 Bootloader 进行 root（GhostLock 临时 root）](./rooting-guides/root-without-unlocking-bootloader.md)

**设备指南：**
- [Pixel](./rooting-guides/how-to-root-pixel-phone.md)
- [Samsung](./rooting-guides/how-to-root-samsung-phone.md)
- [Xiaomi](./rooting-guides/how-to-root-xiaomi-phone.md)
- [OnePlus](./rooting-guides/how-to-root-oneplus-phone.md)
- [Nothing](./rooting-guides/how-to-root-nothing-phone.md)
- [Motorola](./rooting-guides/how-to-root-motorola-phone.md)

**root 应用：**
- [必备 root 应用](./apps-and-modules/#新手必备套装必装应用)
- [广告拦截](./apps-and-modules/ad-blocking.md)
- [备份工具](./apps-and-modules/backup.md)

**通用资源：**
- [常见问题](./faqs.md)
- [参与贡献](./contributing.md)
- [关于](./about.md)

---

**还需要更多帮助？** 概念性问题请访问我们的[常见问题页面](./faqs.md)，或加入我们的[社区讨论](./resources.md#社区与支持)。
