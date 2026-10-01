---
layout: doc
title: Xiaomi/Redmi/POCO Root 指南
description: Xiaomi、Redmi 和 POCO 设备 Root 完全指南。带你搞定 HyperOS/MIUI、Mi Unlock Tool、防回滚保护以及 Magisk 安装。
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-xiaomi-phone
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: Xiaomi Root 完全指南 - 支持所有机型
  - - meta
    - property: og:description
      content: 通过我们涵盖 Mi Unlock Tool、Bootloader 解锁和 MIUI/HyperOS 上 Magisk 安装的全面指南 Root 任意 Xiaomi 设备。
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/rooting-guides/how-to-root-xiaomi-phone
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/xiaomi.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: Xiaomi Root 完全指南 - 所有机型
  - - meta
    - name: twitter:description
      content: 使用 Mi Unlock Tool 和 Magisk 安装指南 Root 任意 Xiaomi 设备。
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:creator
      content: "@awsm_and_root"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/xiaomi.png
  - - meta
    - name: twitter:image:alt
      content: Xiaomi Root 指南 - 所有机型
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
      content: Xiaomi Root
  - - meta
    - property: article:tag
      content: MIUI
  - - meta
    - property: article:tag
      content: HyperOS
  - - meta
    - property: article:tag
      content: Mi Unlock Tool
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

# Xiaomi Root 完全指南

本页面聚焦 Xiaomi/Redmi/POCO 的特有内容（Mi Unlock、ARB、HyperOS、payload 提取）。通用准备步骤和 Magisk 步骤请参见：[Root 主指南](./index.md)、[Bootloader 解锁](./how-to-unlock-bootloader.md)和 [Magisk 指南](./magisk-guide.md)。

## 🔗 重要资源
- [📖 Root 主指南](./index.md) - 通用 Root 原则与安全须知
- [🔓 Bootloader 解锁](./how-to-unlock-bootloader.md) - Bootloader 通用概念
- [🛠️ 第三方 Recovery](./how-to-install-custom-recovery.md) - TWRP 安装指南
- [❓ 常见问题与故障排除](../faqs.md) - 常见问题的解决方案

## Xiaomi Root 的复杂性

Xiaomi 是解锁/Root 政策最严格的厂商之一。

- 需要 Mi 账号，且强制等待期
- 验证步骤因地区/固件而异，且会随时间变化
- HyperOS 收紧了解锁规则（尤其是国行（CN）机型）
- MIUI/HyperOS 采用强化的 AVB 2.0、动态分区和防回滚机制
- Play Integrity 取代了 SafetyNet；隐藏 Root 需要额外步骤

## 重要警告

::: danger ⚠️ Xiaomi 特有风险
- Mi 账号/设备可能受到限制（账号/设备可能被标记）
- 在许多地区，解锁后保修可能失效
- Xiaomi Wallet/Mi Pay 及某些地区性服务可能被禁用
- Root 后 OTA 和系统更新会更麻烦（但并非不可能）
- 防回滚（ARB）保护：刷入来自更低 ARB 索引版本的镜像可能导致变砖
- 部分机型解锁后 Widevine 可能从 L1 降为 L3（影响高清串流）
:::

## 设备兼容性

### 设备兼容性

大多数 Bootloader 可解锁的 Xiaomi/Redmi/POCO 设备都可以 Root。请在 [XDA 论坛](https://forum.xda-developers.com/)查询你具体机型的支持情况。

### 不兼容 / 受限设备

- **国行（CN）版本：** 规则最严格；许多机型无法通过官方途径解锁
- **运营商/企业/教育版本：** 通常被锁定或不受支持
- **印度版本：** 有额外验证检查；等待时间有时更长
- **较新的 HyperOS 设备：** 除标准等待期外，可能还需要额外的资格审查

## 前置条件与准备

### Mi 账号准备
1. [创建](https://global.account.xiaomi.com/fe/service/register?_locale=en&_uRegion=ZA)/准备一个专用的 Mi 账号（避免在过程中修改密码）。
2. 插入一张可用的 SIM 卡（在解锁完成前保持插着）。
3. 在手机上绑定 Mi 账号并等待计时结束。
4. 通过短信验证手机号，并在 Mi Cloud 中开启查找设备。
5. 绑定时手机需保持移动数据可用；电脑上的 Mi Unlock 必须能联网。

关于等待时间的说明：Xiaomi 的计时器现在是可变的。用户报告有 72 小时、168 小时（7 天），某些地区/设备上甚至长达 360–720 小时。具体数值由服务器分配。

### 所需工具
1. Mi Unlock Tool（仅限 Windows）：https://www.miui.com/unlock/index_en.html
2. Platform Tools（ADB/Fastboot）：https://developer.android.com/studio/releases/platform-tools
3. Magisk APK（最新稳定版）：https://github.com/topjohnwu/Magisk/releases
4. 与你的机型/版本完全匹配的官方固件：
   - Xiaomi Firmware Updater：https://xmfirmwareupdater.com/
   - MIUI/HyperOS 官方下载：https://c.mi.com/global/miuidownload/index
5. USB 驱动：
   - [Google USB Driver](https://developer.android.com/studio/run/win-usb) 或 Xiaomi USB 驱动；除非确有需要，避免使用过时的 Mi PC Suite（“小米助手”）。

可选但推荐：
- payload 提取工具：
  - payload-dumper-go: https://github.com/ssut/payload-dumper-go
  - payload-dumper-ng: https://github.com/vm03/payload_dumper

### 设备准备
1. **启用开发者选项：**
   - 设置 → 关于手机 → 连续点击 MIUI/HyperOS 版本 7 次
   - 开发者选项：启用 USB 调试；启用 OEM 解锁（如有）
2. **绑定 Mi 账号：**
   - 设置 → Mi 账号：登录
   - 开发者选项 → Mi Unlock Status → 绑定
   - 保持 SIM 卡插入且移动数据可用；等待期间不要恢复出厂设置
3. **备份数据：**
   - Mi Cloud/本地备份；解锁会清除数据，请将文件复制到电脑
   - 记录 IMEI/序列号；解锁并 Root 后考虑备份 EFS/persist 分区
4. **充电至 70% 以上**，并使用质量良好的 USB 数据线连接 USB 2.0/3.0 端口

### 连接验证
```bash
adb devices
adb reboot bootloader
fastboot devices
fastboot getvar product
fastboot getvar current-slot
```

## Bootloader 解锁流程

### 步骤 1：绑定账号 + 等待期
- 在开发者选项 → Mi Unlock Status 下绑定 Mi 账号。
- 等待服务器指定的时长（通常为 72–168 小时；有时更长）。
- 保持 SIM 卡插着并登录同一 Mi 账号。避免重置/退出登录/修改密码。

### 步骤 2：Mi Unlock Tool 设置
- 使用 Windows，以管理员身份运行该工具。
- 使用与设备上绑定的相同 Mi 账号登录。
- 确保电脑网络稳定（一些用户反映不使用 VPN/代理时成功率更高）。

### 步骤 3：进入 Fastboot 模式
- adb reboot bootloader
- 或：关机 → 按住音量减 + 电源键

### 步骤 4：使用 Mi Unlock Tool 解锁
1. 以 fastboot 模式连接设备。
2. 点击“解锁”→ 按提示确认。
3. 如果计时未结束，会显示剩余时间；否则将继续进行。
4. 解锁会清除设备数据。完成后，Bootloader 即被解锁。

验证：
```bash
fastboot oem device-info
# 预期输出：(bootloader) Device unlocked: true
```

:::tip 💡 **必看**
绕过 Bootloader 解锁限制请参见[替代绕过方法](#替代绕过方法社区方法风险自负)
:::

### 解锁问题故障排除

常见错误与提示：
- “Couldn’t verify device”（无法验证设备）/ 10008 / 86006 / 86012：
  - 设备与电脑使用同一 Mi 账号
  - 切换手机的移动数据；绑定步骤期间关闭 Wi‑Fi
  - 在 Mi Cloud 中开启查找设备；确保 SIM 卡在位且手机号已验证
  - 更换 USB 端口/数据线；重装驱动；换一台电脑
  - 换个时间再试；Xiaomi 服务器可能不稳定
- “Current account is not bound to this device”（当前账号未绑定此设备）：
  - 在开发者选项 → Mi Unlock Status 中重新绑定
  - 保持登录状态；中途不要切换账号
- 地区限制 / 不支持的设备：
  - 国际版/欧版通常没问题；国行机型经常被阻断
  - 在 XDA/Telegram 上查看你设备的论坛以获取机型相关信息
- 等待时间卡住：
  - 几天后重新绑定（不要太频繁），确保移动数据可用后再试

## Root 安装方法

重要：在 Android 13+（GKI）上，许多 Xiaomi 设备使用 init_boot 分区存放 ramdisk。如果存在 init_boot，Magisk 必须修补 init_boot；否则修补 boot。你可以检查 ROM 内容，或运行：
```bash
fastboot getvar all 2>&1 | findstr /i "init_boot"
```
如果你的固件包含 init_boot.img，就修补它；否则修补 boot.img。

### 方法 A：修补并刷入（推荐）

#### 步骤 1：获取正确的镜像
1. 下载与你当前运行的完全相同的版本。
   - 如有可能使用 Fastboot ROM（镜像已解压好）
   - 对于 Recovery/OTA 包（payload.bin），使用 payload-dumper-go 提取
2. 确定要修补的分区：
   - 如果存在 init_boot.img → 使用 init_boot.img
   - 否则 → 使用 boot.img

切勿修补或刷入来自不同版本或不同 ARB 索引的镜像。

#### 步骤 2：使用 Magisk 修补（参见 [Magisk 指南](./magisk-guide.md#方法-1boot-镜像修补推荐)）
1. 将镜像传输到手机：
   ```bash
   adb push init_boot.img /sdcard/Download/   # 如果存在
   # 或者
   adb push boot.img /sdcard/Download/
   ```
2. 安装/打开 Magisk 应用（APK）。
3. 点击安装 → “选择并修补一个文件” → 选择你推送的镜像。
4. Magisk 会在 /Download 中生成 magisk_patched-*.img。

将修补后的镜像拉取到电脑：
```bash
adb pull /sdcard/Download/magisk_patched-*.img ./
```

#### 步骤 3：先安全试启动，再永久安装
1. 重启到 fastboot：
   ```bash
   adb reboot bootloader
   ```
2. 试启动修补后的镜像（不写入刷机）：
   ```bash
   fastboot boot magisk_patched-*.img
   ```
   - 设备将以 Root 状态启动一次。打开 Magisk → 安装 → 直接安装，使其永久生效于当前插槽。
   - 这种方式可以避免刷错插槽或导致无限重启。

如果你的设备不支持 fastboot boot（少见），可以直接刷入：
- 如果使用 init_boot：
  ```bash
  fastboot flash init_boot magisk_patched-*.img
  ```
- 如果在 A/B 设备上使用 boot，建议指定当前活动插槽：
  ```bash
  fastboot getvar current-slot
  fastboot flash boot_a magisk_patched-*.img    # 如果 current-slot 是 a
  fastboot flash boot_b magisk_patched-*.img    # 如果 current-slot 是 b
  ```
然后执行：
```bash
fastboot reboot
```

**注意：**
- 不要为 Magisk 禁用 AVB/verity。Magisk 在 AVB 完好的情况下即可工作。
- 如果出现无限重启，用 fastboot 刷回同一版本的官方镜像（init_boot/boot）。

### 方法 B：第三方 Recovery + Magisk

在 Android 12+/HyperOS 上，第三方 Recovery 通常位于 vendor_boot 中（没有独立的 recovery 分区）。在 Android 14 及以上系统中 /data 解密成功率不稳定，因此不要依赖 Recovery 进行备份。

#### 步骤 1：引导启动 Recovery 镜像（先不要刷入）
- TWRP/OrangeFox/SkyHawk 的构建因设备/Android 版本而异。
- 优先先用 fastboot boot：
  ```bash
  fastboot boot recovery.img
  ```
  如果你的设备需要基于 vendor_boot 的 Recovery，请按照维护者的说明操作（有些需要刷入 vendor_boot；有些则安装到 boot 的 ramdisk 中）。

如果你的设备仍有 recovery 分区（较旧的 MIUI）：
```bash
fastboot flash recovery recovery.img
fastboot reboot recovery
```

#### 步骤 2：从 Recovery 安装 Magisk
- Magisk 不再以传统 ZIP 形式发布。将 APK 重命名为 .zip 供 Recovery 刷入，或者使用 Recovery 的“安装 APK/安装 Magisk”功能（如果可用）。
  - 例如：将 Magisk-vXX.X.apk 重命名为 Magisk-vXX.X.zip 后刷入。
- 或者，如果 Recovery 支持，也可以侧载 APK/ZIP。
- 重启系统；打开 Magisk 完成设置。

注意：
- 在较新的 HyperOS 上，使用方法 A（修补 init_boot/boot）比通过 Recovery 刷入更可靠。

### 当前的 Bootloader 限制
- 较新的 HyperOS 设备（2023 年底/2024 年及以后）可能需要额外的“资格”检查。国行机型限制最严格。
- 等待时间不一；有用户为 72 小时，有用户为 168 小时，还有些更久。
- 社区的“绕过”脚本/应用可能暂时有效，之后可能被 Xiaomi 封堵。使用风险自负。

## Xiaomi 特有优化

### MIUI/HyperOS 精简（谨慎操作）
- 优先通过 ADB/app ops 停用系统应用，而不是卸载：
  - 使用 adb shell pm disable-user --user 0 PACKAGE
- 常见可停用的应用（请在你自己的系统版本上确认）：Mi Browser、Mi Video、Mi Music、Feedback、Analytics、Scanner（如不使用）、Mi Roaming、Mi Mover、Facebook 残留组件、合作伙伴应用。
- **不要动核心包：**
  - com.android.systemui
  - com.miui.home
  - com.miui.system
  - com.miui.securitycenter
  - 任何包含 “telephony”、“ims”、“provision”、“overlay”、“updater” 的包，除非你清楚影响。

## 故障排除指南

### Mi Unlock Tool 问题

检查设备状态：
```bash
fastboot oem device-info
```

常见错误：
- “Device is locked”（意外出现）：
  - 确保已完成最后一次“解锁”操作（等待期结束后）。
  - 重试 Mi Unlock；更换数据线/USB 端口。
- “Couldn’t verify device” / 错误代码 10008/86006/86012：
  - 设备与电脑使用同一 Mi 账号；绑定期间开启移动数据
  - 开启查找设备；在 Mi 账号中验证手机号
  - 更换电脑/时间/网络；有用户反映通过 VPN 连接新加坡/香港/德国后成功
- “Current account is not bound to this device”：
  - 在开发者选项 → Mi Unlock Status 中重新绑定；保持登录状态
- 驱动/连接问题：
  - 重新安装 Google USB 驱动或 Xiaomi 驱动
  - 在设备管理器中，确认 fastboot 模式下出现“Android Bootloader Interface”

ADB 问题：
```bash
adb kill-server
adb start-server
adb devices
```

### MIUI/HyperOS 特有问题

**误删系统应用：**
- 引导启动第三方 Recovery（如已安装）并增量刷入与你完全一致的 ROM 版本
- 如果无限重启仅由 Root 相关更改引起，可刷回官方 boot/init_boot
- 如果你的 Recovery 支持你所装 Android 版本的解密，请保留 nandroid 备份

**电池/杀后台：**
- 为依赖 Root 的应用禁用 MIUI 电池优化
- 允许自启动；将后台活动设为“无限制”
- 考虑使用能抑制后台查杀的模块/应用（因系统版本而异）

**Play Integrity（SafetyNet 替代品）：**
- 通过设备完整性验证通常需要：
  - 最新版 Magisk + 启用 Zygisk
  - Play Integrity Fix 模块（最新维护的分支）
  - 正确配置 DenyList（Google Play services、GMS、钱包/银行应用）
  - 配置完成后清除 Play 商店/服务数据，然后等待几分钟

## 成功验证

### Root 权限确认
- 打开 Magisk → 应显示“已安装”及当前版本
- adb shell su -c "id" → 预期输出 uid=0(root) gid=0(root)
- 可选：安装一个 Root 检测应用

## 保持更新

### OTA 更新管理（已解锁已 Root 的 HyperOS/MIUI）
- 在 Xiaomi 设备上，解锁 Bootloader 通常**不会**阻断 OTA。Root 可能会。
- 使用 Magisk 安全地获取 OTA：
  1. 在 Magisk 中：还原镜像（如有）
  2. 正常应用 OTA（设置 → 系统更新）
  3. OTA 完成后不要重启；打开 Magisk → 安装 → “安装到未使用的插槽（OTA 后）”
  4. 然后重启
- 或者，手动侧载或用 fastboot 刷入更新，然后为更新后的版本重新修补新的 init_boot/boot。

**注意：**
- OTA 后 Bootloader 不会重新上锁，除非你明确选择“clean all and lock”刷机方式。
- 如果 OTA 失败，通过 recovery/fastboot 增量刷入相同版本并重新 Root。

### 第三方 ROM 选择
- **Xiaomi.eu** 的 LineageOS、EvolutionX、Pixel Experience、AOSP Extended 构建版本
- 阅读你设备的 XDA 帖子，了解固件前提条件（modem/vendor）、dynamic/super 分区刷入说明以及 AVB/vbmeta 注意事项
- 大多数 ROM 需要 Bootloader 已解锁；许多需要通过 fastbootd（用户态 fastboot）刷入：
  ```bash
  adb reboot fastboot  # 在动态分区设备上进入 fastbootd
  ```

---

::: tip 💡 Xiaomi Root 成功要点
- 耐心等待解锁计时；不要频繁重新绑定或重置
- 使用移动数据绑定账号；保持 SIM 卡插入
- 始终修补并刷入与你的系统版本和 ARB 索引完全匹配的镜像
- 优先先用 fastboot boot 启动修补后的镜像；然后在 Magisk 中直接安装
- 在 Android 13+/HyperOS 上，Magisk 的目标通常是 init_boot
- 除非 ROM 明确要求，避免禁用 AVB/verity
:::

---

## 高级技巧与方法

### 替代绕过方法（社区方法，风险自负）

绕过方法可能暂时有效，待 Xiaomi 在服务端封堵后就会失效。它们可能违反服务条款，并有账号/设备被标记的风险。

#### 方法 1：HyperOS-BootLoader-Bypass-V2
- 仓库：https://github.com/mrzzoxo/HyperOS-BootLoader-Bypass/releases/tag/V2
- 修改版 Settings APK（社区）：https://t.me/RedmiNote134G/72
- 步骤（概要，来自用户反馈）：
  1. 在设备上登录你的 Mi 账号
  2. 卸载 Mi Community 应用
  3. 安装修改版 Settings.apk（启用 MIUI 14 风格界面）
  4. 开关一次 USB 调试并启用 OEM 解锁
  5. 连接电脑；运行 bypass.cmd
  6. 仅使用移动数据；在 Mi Unlock Status 中绑定账号
  7. 使用 Mi Unlock Tool；按计时提示操作（通常为 72 小时/168 小时）
- 注意：
  - 过程中不要退出登录/重置或更新固件
  - 成功率因设备/地区/固件而异；国行设备最不可能成功

#### 方法 2：AQLR 绕过（XDA）
- 帖子：https://xdaforums.com/t/how-to-unlock-bootloader-on-xiaomi-hyperos-all-devices-except-cn.4654009/
- 需要 Python，按帖子内的说明操作，通常配合修改版 Settings APK 使用
- 以命令行为主；适合高级用户

### 特定设备故障排除

数据库中标记为“不支持”的设备仍可能可以解锁：
- 尝试更早的 MIUI 版本（仅在 ARB 允许时；先确认）
- 尝试更旧版本的 Mi Unlock Tool（例如 7.6.727.43）
- 查阅 XDA/Telegram 上针对你设备的帖子

国行 ROM 设备（⚠️）：
- 自 2022 年政策变化以来，可选方案非常有限
- 在国行硬件上刷国际版 ROM 有风险，且可能无济于事
- 存在付费/EDL 服务，但风险高，通常不建议

---


## 🔗 更多资源

### 官方链接
- Mi Unlock Tool: https://en.miui.com/unlock/download_en.html
- Xiaomi Community: https://new.c.mi.com/global/
- MIUI Downloads: https://c.mi.com/global/miuidownload/index
- Xiaomi Global Support: https://www.mi.com/global/support/

### 社区资源
- XDA Xiaomi Forums: https://xdaforums.com/c/xiaomi.12005/
- xiaomi.eu: https://xiaomi.eu/
- Xiaomi Firmware Updater: https://xiaomifirmwareupdater.com/
- r/Xiaomi: https://reddit.com/r/Xiaomi
- MIUI Updates Tracker (Telegram): https://t.me/MIUIUpdatesTracker

---

## ⚠️ 最终免责声明

按照本指南操作，即表示你知晓：
- 在你所在地区，解锁后保修可能失效
- 不采取额外的 Play Integrity 缓解措施时，银行/DRM 应用可能无法使用
- Root 会扩大攻击面；仅向可信应用授予 su
- 你可能违反 Xiaomi 的服务条款；账号/设备可能受到限制
- ARB 和分区操作失误可能导致设备变砖
- 一切风险自负；本内容仅供学习参考

需要更多帮助？请查看我们的[常见问题](../faqs.md)或 [Root 主指南](./index.md)，获取更深入的故障排除和高级技巧。
