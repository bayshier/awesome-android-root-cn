---
layout: doc
title: "隐私"
description: "用于隐藏文件、伪造设备 ID、控制应用数据访问和减少跟踪的隐私应用与模块，面向已 root Android。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/apps-and-modules/privacy
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - name: author
      content: Awesome Android Root
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:site_name
      content: Awesome Android Root
  - - meta
    - property: og:title
      content: "隐私 | Awesome Android Root"
  - - meta
    - property: og:description
      content: "用于隐藏文件、伪造设备 ID、控制应用数据访问和减少跟踪的隐私应用与模块，面向已 root Android。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/apps-and-modules/privacy
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og.png
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
    - name: twitter:title
      content: "隐私 | Awesome Android Root"
  - - meta
    - name: twitter:description
      content: "面向已 root Android 设备的隐私工具：隐私应用、Magisk 模块、KernelSU 模块和 LSPosed 模块，用于控制数据访问、隐藏私密文件、伪造设备 ID 和位置，以及隔离应用。"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
---

# 隐私

面向已 root Android 设备的**隐私**工具 - root 应用、Magisk 模块、KernelSU 模块、LSPosed 模块以及
其他用于提升隐私和控制数据访问的工具：隐藏私密文件与应用、防止跟踪、伪造设备身份或位置，
以及将应用与你的数据隔离。

> [!TIP]
> 相关页面：[安全](/apps-and-modules/security.md)工具和[广告拦截](/apps-and-modules/ad-blocking.md)
> 可在网络层面拦截跟踪器。徽章含义请参阅[术语表](/apps-and-modules/#glossary)。


## 应用隔离

- **[Insular](https://gitlab.com/secure-system/Insular)** - 隔离你的"老大哥"应用。基于出色的 Island 的分支。`FOSS` | [🌱](https://f-droid.org/packages/com.oasisfeng.island.fdroid)
- **[Island](https://github.com/oasisfeng/island/tree/dev)** - 应用隔离与克隆。`FOSS` | [▶️](https://play.google.com/store/apps/details?id=com.oasisfeng.island)
- **[Shelter](https://gitea.angry.im/PeterCxy/Shelter)** - 隔离并克隆应用。`FOSS` | [🌱](https://f-droid.org/app/net.typeblog.shelter)
- **[TargetedHide](https://github.com/VisionR1/TargetedHide)** - 对特定目标应用隐藏文件、文件夹和软件包。`FOSS` `[LSP]`

## 设备 ID 与伪造

- **[Device Faker](https://github.com/Seyud/device_faker/)** - 基于 Zygisk 的设备型号伪造模块，可为不同应用配置不同的设备型号。`FOSS` `[M]` `[K]`
- **[DeviceID/SSAID Changer](https://github.com/sidex15/deviceidchanger)** - 一个简单的 WebUI 模块，可在已 root 的 Android 设备上通过 APatch、KSU（及其分支）或 Magisk 更改 SSAID/DeviceID。`FOSS` `[M]` `[K]`
- **[Geergit](https://github.com/pyshivam/geergit-discussion)** - 更改（MASK）手机中的各种 ID。`Proprietary` `[LSP]`
- **[HideMyAndroid](https://github.com/Xposed-Modules-Repo/com.wowsoftware.hidemyandroid/)** - 具备配置隔离与伪造功能的 Android 反检测模块。`Proprietary` `[LSP]`
- **[MAC Editor for Android](https://github.com/jqssun/android-mac-editor)** - 在 Android 上安全编辑 Wi-Fi MAC 地址。`FOSS` `[LSP]`
- **[MACsposed](https://github.com/DavidBerdik/MACsposed)** - 为 Android 12 到 15 添加 MAC 地址伪造支持。`Proprietary` `[LSP]`
- **[Mantle](https://github.com/get-mantle/Mantle)** - Xposed 模块，可按应用隐藏硬件 ID、广告 ID、build 属性、运营商与 SIM 数据、Wi-Fi/蓝牙 MAC 以及位置信息。`Proprietary` `[LSP]`
- **[Mantle Verify](https://github.com/get-mantle/Mantle-Verify)** - 配套诊断应用，显示普通应用可读取的设备、网络和账户标识符，并确认哪些伪造值已生效。`Proprietary`
- **[Privacy Kit](https://github.com/Xposed-Modules-Repo/com.sal.privacykit)** - 面向 LSPosed 的按应用 Android 标识符伪造。`Proprietary` `[LSP]`
- **[Privacy Kit Lite](https://github.com/Mohithash/privacy-kit-lite)** - 纯本地运行的按应用 Android 标识符伪造，带有可配置的 LSPosed 运行时钩子。`FOSS` `[LSP]` | [🌱](https://f-droid.org/en/packages/com.sal.privacykit.lite/)
- **[SpoofMyDevice](https://github.com/BuSung-dev/SpoofMyDevice)** - Xposed 模块及配套应用，用于构建、保存和应用伪造的 Android 设备档案到选定的应用。`FOSS` `[LSP]`
- **[SSAID (Android ID Modifier)](https://github.com/HSSkyBoy/AndroidIDChange)** - 一款现代化的 Android SSAID（Android ID）检查、修改、备份和管理工具。`FOSS` `[LSP]`
- **[Telephony Spoofer](https://github.com/BrianWalczak/TelephonySpoofer)** - 伪造蜂窝网络信息，包括 eSIM 兼容性。`FOSS` `[LSP]`

## 位置与 GPS

- **[AnyWhere](https://github.com/cxOrz/AnyWhere)** - 位置模拟工具，用于调试 LBS 应用以及用户测试地理定位功能。`FOSS` `[LSP]`
- **[FakeGPS-next](https://github.com/Elysia-SHY/FakeGPS-next)** - Android 虚拟定位与路线巡航模拟工具。`FOSS` `[LSP]`
- **[GPS Setter](https://github.com/jqssun/android-gps-setter)** - 可为任何特定应用或整个系统模拟位置。`FOSS` `[LSP]` | [🌱](https://f-droid.org/packages/io.github.jqssun.gpssetter)
- **[Hide Mock Location](https://github.com/auag0/HideMockLocation)** - 隐藏模拟位置设置。`FOSS` `[LSP]`
- **[HLocation](https://github.com/sparr-sherrya/hlocation-release)** - 位置伪造框架，在系统与应用进程之间同步伪造 GPS 及相关环境信号，实现更一致的位置虚拟化。`FOSS` `[LSP]`
- **[Location Indicator Whitelist](https://github.com/gilbsgilbs/LocationIndicatorWhitelist)** - 防止应用在 Android 12+ 上不断触发烦人的位置通知圆点。`FOSS` `[LSP]`
- **[Location Joystick](https://github.com/fzer0x/LocationJoystick)** - 通过悬浮摇杆控制模拟位置的实时位置伪造器。`Proprietary` `[LSP]`
- **[LocationMax](https://github.com/Xposed-Modules-Repo/com.huaMax)** - 使用 LSPosed/Xposed 的已 root Android 设备位置模拟模块。`Proprietary` `[LSP]`
- **[XposedFakeLocation](https://github.com/noobexon1/XposedFakeLocation)** - 可全局或针对特定应用伪造设备位置，无需使用开发者选项中的"模拟位置"。`FOSS` `[LSP]`

## 隐私工具

- **[⭐ Amarok](https://github.com/deltazefiro/Amarok-Hider)** - 一键隐藏私密文件与应用的 Android 应用。`FOSS` | [🌱](https://f-droid.org/zh_Hans/packages/deltazero.amarok.foss/)
- **[Do Not Try Accessibility](https://github.com/Nitsuya/DoNotTryAccessibility)** - 钩住系统框架，让应用认为无障碍服务未启用。`FOSS` `[LSP]`
- **[FuseFixer](https://github.com/5ec1cff/FuseFixer)** - 钩住 MediaProvider Fuse 守护进程，阻止应用通过 `Android/data` 目录的特殊行为（Unicode 大小写折叠技巧）探测软件包是否存在。`FOSS` `[LSP]`
- **[FuseHide](https://github.com/XiaoTong6666/FuseHide)** - 在 Android 12+ 上运行时对 MediaProvider 隐藏选定的存储路径，并可调试/修复 `Android/data` 的 Unicode 大小写折叠场景。`FOSS` `[LSP]`
- **[GreenDotHide](https://github.com/Dorian399/GreenDotHide)** - 隐藏指示敏感权限使用情况的绿点。仅适用于 MIUI/HyperOS。`FOSS` `[LSP]`
- **[IAmNotADeveloper](https://github.com/xfqwdsj/IAmNotADeveloper)** - 隐藏 Android 开发者相关开关的状态。`FOSS` `[LSP]`
- **[Image Copy Hide](https://github.com/cookieof/ImageCopyHide)** - 自动将 /sdcard/DCIM/Camera 中的文件复制并隐藏到 /sdcard/wot/cptp。`FOSS` `[M]` 
- **[microG Installer Revived Again](https://modules.kernelsu.org/module/microg_installer_revived_again/)** - 将 microG GmsCore、GsfProxy、Companion/Play Store 和 MapsV1 以特权权限提升为系统组件。`FOSS` `[M]` `[K]`
- **[MicroGPlus](https://bitgapps.io/extra)** - 安装 microG 服务和其他实用应用。`Proprietary` `[M]` `[K]`
- **[Oplus16 Hide Zoom Window](https://github.com/jhl337/Oplus16_HideZoomWindow)** - 使小窗不出现在截屏和屏幕录制中（为 ColorOS 16 设计）。`FOSS` `[LSP]`
- **[PrivacyFlip](https://github.com/dorumrr/privacyflip)** - 根据锁屏/解锁状态自动禁用/启用 Wi-Fi、蓝牙、移动数据、位置服务、NFC，甚至摄像头/麦克风传感器。`FOSS` | [🌱](https://f-droid.org/packages/io.github.dorumrr.privacyflip/)
- **[Stealth Debug](https://github.com/sp11xy/StealthDebug)** - 隐藏 USB 调试属性。`FOSS` `[M]`
- **[Tarnhelm](https://github.com/lz233/Tarnhelm)** - 清理分享链接的魔法。`FOSS` `[LSP]`
- **[Transparent Screenshot](https://github.com/Dszsu/Transparent_screenshot)** - 在截屏、录屏和屏幕投射时隐藏应用窗口。`FOSS` `[LSP]`
- **[Turn Off Sensors](https://github.com/KatelynTheStargazer/TurnOffSensors-Magisk)** - 通过 Android 的 sensor_privacy 服务在开机时禁用设备传感器。`FOSS` `[M]`
