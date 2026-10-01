---
layout: doc
title: "系统"
description: "面向已 root Android 设备的系统调整、OEM UI 修改、启动工具、应用管理、权限与诊断。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/apps-and-modules/system
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
      content: "系统 | Awesome Android Root"
  - - meta
    - property: og:description
      content: "面向已 root Android 设备的系统调整、OEM UI 修改、启动工具、应用管理、权限与诊断。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/apps-and-modules/system
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
      content: "系统 | Awesome Android Root"
  - - meta
    - name: twitter:description
      content: "面向已 root Android 的系统级工具：系统调整与 VBMeta 模块、系统界面与 OEM 框架定制（AOSP、HyperOS、One UI、OxygenOS 等）、启动与开机、应用与包管理、权限以及系统诊断。"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
---

# 系统

**系统**工具让你修改 Android 本身的运作方式：系统调整与 **VBMeta** 模块、System UI 与
OEM 框架修改（**AOSP、ColorOS、HyperOS、NothingOS、One UI、Onyx、OxygenOS、ZUI**）、启动与开机
定制、**应用与包管理**、权限（**AppOps**）以及系统诊断。应用与
Magisk/KernelSU/LSPosed 模块按主题一同列出。


## App & Package Management

- **[⭐ App Manager](https://github.com/MuntashirAkon/AppManager)** - 功能齐全的 Android 包管理器与查看器。 `FOSS` | [🌱](https://f-droid.org/packages/io.github.muntashirakon.AppManager/)
- **[⭐ Disable Target API Block](https://github.com/buttercookie42/DisableTargetAPIBlock)** - 禁用 Android 14 对旧应用的安装阻止。 `FOSS` `[LSP]`
- **[⭐ Droid-ify](https://github.com/Droid-ify/client)** - 具有 Material UI 的 F-Droid 客户端，可利用 root 自动更新应用。 `FOSS` | [🌱](https://f-droid.org/packages/com.looker.droidify)
- **[⭐ Hail](https://github.com/aistra0528/Hail)** - 停用 / 隐藏 / 暂停 / 卸载 Android 应用。 `FOSS` | [🌱](https://f-droid.org/packages/com.aistra.hail/)
- **[⭐ InstallerX-Revived](https://github.com/wxxsfxyzm/InstallerX-Revived)** - 现代化且功能丰富的 Android 应用安装器。 `FOSS` `[LSP]`
- **[⭐ Zygisk Detach](https://github.com/j-hc/zygisk-detach)** - 通过 hook binder 将已安装应用与 Play Store 脱钩的 Zygisk 模块。 `FOSS` `[M]` `[K]`
- **[AlterInstaller](https://github.com/chenxiaolong/AlterInstaller)** - 伪装 Android 包管理器的安装来源字段，绕过安装限制。 `FOSS` `[M]` `[K]`
- **[App Manager](https://play.google.com/store/apps/details?id=com.lb.app_manager)** - 功能丰富、支持批量操作的应用管理器。 `Proprietary`
- **[AppControl-X](https://github.com/risunCode/AppControl-X)** - 通过 root 或 Shizuku 冻结、强制停止、清除数据并卸载应用，还可监控 CPU、内存、存储与电池。 `FOSS`
- **[AppDash: App Manager & Backup](https://play.google.com/store/apps/details?id=flar2.appdashboard&hl=en)** - 轻松管理设备上安装的 APK 与应用。 `Proprietary`
- **[Aurora Store](https://github.com/whyorean/AuroraStore)** - 一个 Google Play Store 客户端，可搜索、查看应用详情并直接下载 APK 到你的设备。 `FOSS` | [🌱](https://f-droid.org/packages/com.aurora.store/)
- **[Auto Uninstaller](https://github.com/MeRaazi/auto-uninstaller)** - 自动卸载黑名单中的应用。 `FOSS` `[K]`
- **[BanUninstall](https://github.com/TinyHai/BanUninstall/)** - 防止应用被卸载或应用数据被清除。 `FOSS` `[LSP]`
- **[BetterKnownInstalled](https://github.com/Pixel-Props/BetterKnownInstalled)** - 修补软件包以修复 DroidGuard UNKNOWN_INSTALLED 问题。 `FOSS` `[LSP]`
- **[Buge App Manager](https://github.com/BugeStudioTeam/Buge-App-Manager)** - 采用 Material Design 3 Expressive 构建，专为高级应用与权限管理设计。 `FOSS`
- **[F-Droid Privileged Extension](https://gitlab.com/fdroid/privileged-extension)** - 让 F-Droid 无需“未知来源”即可安装和删除应用，并在后台安装更新。 `FOSS` | [🌱](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged/)
- **[Ice Box](https://play.google.com/store/apps/details?id=com.catchingnow.icebox)** - 冻结并隐藏不常用的应用。 `Proprietary`
- **[Inure](https://github.com/Hamza417/Inure)** - 优雅美观的高级 Android 应用管理器，适用于已 root 与未 root 设备。 `FOSS` | [🌱](https://f-droid.org/en/packages/app.simple.inure/) | [▶️](https://play.google.com/store/apps/details?id=app.simple.inure.play)
- **[InxLocker](https://github.com/Chimioo/InxLocker)** - 拦截/转发 Android 系统的应用安装与卸载请求，将其重定向到你指定的安装器应用。 `FOSS` `[LSP]`
- **[Let Me Downgrade](https://github.com/DavidBerdik/Let-Me-Downgrade)** - 在 Android 12 至 15 QPR1 上添加应用降级支持。 `FOSS` `[LSP]` | [🌱](https://f-droid.org/packages/com.berdik.letmedowngrade/) | [▶️](https://play.google.com/store/apps/details?id=com.berdik.letmedowngrade)
- **[Neo Store](https://github.com/NeoApplications/Neo-Store)** - 拥有现代 UI 和大量额外功能的 F-Droid 客户端。 `FOSS` | [🌱](https://f-droid.org/packages/com.machiav3lli.fdroid)
- **[Package Manager](https://github.com/SmartPack/PackageManager)** - 功能强大的应用，可管理 Android 设备上安装的系统应用与用户应用。 `FOSS` | [🌱](https://f-droid.org/packages/com.smartpack.packagemanager) | [▶️](https://play.google.com/store/apps/details?id=com.smartpack.packagemanager)
- **[PI (PackageInstaller)](https://github.com/SanmerApps/PI)** - 通过 root 或 Shizuku 安装服务来安装和更新 APK 的包安装器。 `FOSS`
- **[Play Store Self Update Blocker](https://github.com/himanshujjp/PlayStoreSelfUpdateBlocker)** - 阻止 Google Play Store 自动更新自身。对于想在较新 Play Integrity API 规则下保持有效设备证明的用户很有用。 `FOSS` `[M]` `[K]`
- **[Play Version Spoofer](https://github.com/byemaxx/PlayVersionSpoofer)** - 阻止 Google Play Store 自动更新自身。 `FOSS` `[LSP]`
- **[Thor](https://github.com/trinadhthatakula/Thor)** - Android 应用管理器与应用安装器工具。 `FOSS` | [🌱](https://apt.izzysoft.de/fdroid/index/apk/com.valhalla.thor) | [▶️](https://play.google.com/store/apps/details?id=com.valhalla.thor)
- **[Universal Installer](https://github.com/pass-with-high-score/universal-installer)** - 安装和管理 APK 包，支持拆分 APK。 `FOSS` `[LSP]`
- **[Update Locker](https://github.com/Xposed-Modules-Repo/ru.mike.updatelocker/)** - 通过 Google Play Market、华为 AppGallery、三星 Galaxy Store 等主流应用市场，阻止选定应用的更新（及自动更新）。 `Proprietary`
- **[Updates Manager Extended](https://github.com/Senliast/xposed-modules/tree/main/Updates_Manager_Extended)** - 允许针对特定应用阻止更新（包括自动更新），无论它们来自哪个应用商店。 `FOSS` `[LSP]`

> [!TIP]
>
> 查看我们的 **[Zygisk Detach 指南 ↗](../general-guides/stop-android-app-auto-updates-play-store.md)**

## Boot & Startup

- **[Live Boot](https://play.google.com/store/apps/details?id=eu.chainfire.liveboot)** - 在 Android 上获得类似 Linux 的实时启动画面。 `Proprietary`
- **[Live Boot Module](https://github.com/symbuzzer/livebootmodule)** - 为 Android 设备启用 Unix 风格（详细输出）的启动动画。 `FOSS` `[M]` `[K]`
- **[Samsung Boot Animation Module](https://github.com/John0n1/SMbootFX)** - 通过 Magisk 为三星设备提供自定义启动动画。 `FOSS` `[M]`
- **[video-to-bootanimation](https://github.com/Magisk-Modules-Alt-Repo/video-to-bootanimation)** - 可将视频设为 Android 设备开机动画的 Magisk 模块。 `FOSS` `[M]`

## Permissions & AppOps

- **[AppOps](https://play.google.com/store/apps/details?id=rikka.appops)** - 便捷地控制隐藏的 appops。 `Proprietary`
- **[Permission Ruler](https://play.google.com/store/apps/details?id=com.stefanosiano.permissionruler&hl=en)** - 在熄屏时自动管理应用权限，增强隐私保护。 `Proprietary`
- **[PermissionManagerX](https://github.com/mirfatif/PermissionManagerX)** - Android 扩展权限管理器，可查看和设置 Manifest 权限与 AppOps。 `FOSS` | [🌱](https://f-droid.org/packages/com.mirfatif.permissionmanagerx) | [▶️](https://play.google.com/store/apps/details?id=com.mirfatif.permissionmanagerx)
- **[Thanox](https://github.com/Tornaco/Thanox)** - 系统管理工具，提供应用启动管理、后台管理、权限管理等便捷功能。 `FOSS` `[LSP]` | [▶️](https://play.google.com/store/apps/details?id=github.tornaco.android.thanos.pro&hl=en&gl=US)

> [!TIP]
> 查看[防火墙工具](security.md#firewalls-filtering)了解对应用的网络控制

## System Information & Diagnostics

- **[Castro - system info](https://play.google.com/store/apps/details?id=com.itemstudio.castro)** - 关于设备的大量信息集合，以及一套监控设备状态的工具。 `Proprietary`
- **[Device Info HW](https://play.google.com/store/apps/details?id=ru.andr7e.deviceinfohw)** - 面向 Android 设备的软硬件信息应用。 `Proprietary`
- **[Infamick Script](https://github.com/Infamousmick/Infamick-script/)** - 强大的系统实用脚本，可轻松访问各种系统信息与设置。 `FOSS` `[M]`
- **[VD Infos](https://github.com/VD171/VD-Infos/)** - 读取多项详细信息，展示可以从你正在使用的设备中捕获哪些内容。又名 VDInfos、VDInfo、VD Info。 `FOSS`

## System Tweaks

- **[AnyWebView](https://github.com/neoblackxt/AnyWebView)** - 检测所有已安装的 WebView，并将其添加到开发者选项的 WebView 实现列表中。 `FOSS` `[LSP]` | [🌱](https://apt.izzysoft.de/packages/com.thinkdifferent.anywebview)
- **[Cromite SystemWebView](https://github.com/hddq/magisk-cromite-webview)** - 用 Cromite WebView 替换 Android 系统 WebView。 `FOSS` `[M]`
- **[Disable Low Ram Flag](https://github.com/Magisk-Modules-Alt-Repo/disable-low-ram)** - 在 Android Go 设备上禁用低内存（Low-RAM）标志。 `FOSS` `[M]`
- **[HyperOS Accessibility Fix](https://github.com/chickendrop89/hyperos-accessibility-fix)** - 阻止 HyperOS 随机禁用无障碍服务。 `FOSS` `[M]` `[K]`
- **[HyperOS Security Center](https://github.com/Mods-Center/HyperOS-Security-Center)** - 高级应用信息工具、系统应用 Wi-Fi 管理、移除 root/账户限制等。 `Proprietary` `[M]` `[K]`
- **[Multi Userui Enabler](https://github.com/InsertX2k/multiuseruienabler)** - 尝试启用多用户 UI 的 Magisk 模块。 `FOSS` `[M]`
- **[Noogle Magisk](https://github.com/SelfRef/noogle-magisk)** - 在原生 Android 11-15 上移除/替换 Google 应用的 Magisk 模块。 `FOSS` `[M]`
- **[Secure Element Access](https://github.com/jqssun/android-se-access)** - 为受信任的应用启用安全元件（Secure Element）访问。 `FOSS`
- **[TWRP A/B Retention Script](https://github.com/Magisk-Modules-Repo/twrp-keep)** - 在 A/B OTA 更新后保持 TWRP 处于已安装状态。 `FOSS` `[M]`
- **[Vanadium WebView & Browser](https://github.com/NoneBaiano/Vanadium-WebViewBrowser)** - 用 Vanadium WebView 替换系统 WebView 并安装 Vanadium 浏览器。 `FOSS` `[M]` `[K]`

### VBMeta Mods

<details><summary><strong>什么是 VBMeta</strong></summary>

- VBMeta 是 Android Verified Boot（AVB）的关键组件，这项安全特性旨在**确保 Android 设备在启动过程中运行软件的完整性**。

<br>
</details>

- **[Android VBMeta Fixer](https://github.com/reveny/Android-VBMeta-Fixer)** - 一个 Magisk/KernelSU/APatch 模块，修复 Android 上的 VBMeta 检测。 `FOSS` `[M]` `[K]`
- **[VBMeta Disguiser](https://github.com/Astoritin/VBMetaDisguiser)** - 伪装 vbmeta 的属性。 `FOSS` `[M]` `[K]`
- **[VBMeta Tool](https://github.com/KOWX712/vbmeta_tool)** - 命令行工具，通过 root 读取设备的 vbmeta 摘要（`verifiedBootHash`）。 `FOSS`

## System UI & Framework

|  | | | | | | | | |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [AOSP (Android Open Source Project)](#aosp-android-open-source-project) | [ColorOS (Oppo)](#coloros-oppo) | [HyperOS (Xiaomi)](#hyperos-xiaomi) | [NothingOS](#nothingos) | [One UI (Samsung)](#one-ui-samsung) | [Onyx](#onyx) | [Oxygen OS (OnePlus)](#oxygen-os-oneplus) | [Pixel](#pixel) | [ZUI](#zui) |
|  | | | | | | | |

### AOSP (Android Open Source Project)

- **[⭐ PixelXpert](https://github.com/siavash79/PixelXpert)** - Xposed+Magisk 混合模块，允许进行 AOSP 原本未设计的自定义。 `FOSS` `[M]` `[LSP]`
- **[PIXELIFY NEXT](https://github.com/BasGame1/Pixelify-Next)** - 启用 Pixel UI 和部分专属功能的 Magisk 模块。 `FOSS` `[M]`
- **[PixelUpdater](https://github.com/PixelUpdater/PixelUpdater)** - Pixel Updater 是一款用于从 Google OTA 服务器安装 Android A/B OTA 更新的应用。 `FOSS` `[M]`
- **[SystemUI Tuner](https://github.com/zacharee/Tweaker?tab=readme-ov-file)** - 查看并修改 Android 设备上的隐藏设置。 `FOSS` `[M]`

### ColorOS (Oppo)

- **[ColorOS Feature Enhance](https://github.com/ItosEO/ColorFeatureEnhance)** - 以可视化方式编辑和管理 ColorOS 功能开关。 `FOSS` `[LSP]`
- **[LuckyTool](https://github.com/Xposed-Modules-Repo/com.luckyzyx.luckytool/blob/main/README_EN.md)** - ColorOS 的扩展功能与优化模块。 `Proprietary` `[LSP]`
- **[OPCameraPro](https://github.com/Xposed-Modules-Repo/com.tlsu.opluscamerapro)** - ColorOS 和 realmeUI 模块，提供多种 AI 功能，增强相机及其他拍照相关调整。 `Proprietary` `[LSP]`
- **[Oplus Launcher Radius Optimization](https://github.com/Qjj7679/Oplus-Luncher-RadiusOptimization)** - 优化 ColorOS 系统桌面上最近任务卡片的圆角。 `FOSS` `[LSP]`
- **[OShin](https://github.com/suqi8/OShin/blob/master/README_EN.md)** - 与 ColorOS 深度集成的辅助模块，旨在增强和优化你的操作系统体验。 `FOSS` `[LSP]`

### HyperOS (Xiaomi)

- **[⭐ HyperCeiler](https://github.com/ReChronoRain/HyperCeiler/blob/main/README_en-US.md)** - 面向 HyperOS 的广泛自定义。 `FOSS` `[LSP]`
- **[Better Miui Express](https://github.com/Robotxm/BetterMiuiExpress)** - 阻止 MIUI/HyperOS 的快递小组件跳转到淘宝、菜鸟等第三方应用，并使用自定义界面显示快递详情。 `FOSS` `[LSP]`
- **[ClipboardList](https://github.com/HChenX/ClipboardList/blob/master/README-en.md)** - 移除剪贴板与常用语功能的 20 条数量限制和时间限制。仅适用于 MIUI 和 HyperOS。 `FOSS` `[LSP]`
- **[ColorOS_Control_Center](https://github.com/Mods-Center/ColorOS_Control_Center)** - 用 ColorOS 风格的快捷设置替换 HyperOS 控制面板，具有可自定义的方形磁贴。 `Proprietary`
- **[Fingerprint Catalog](https://github.com/custombeta/fingerprint-cataloge)** - 让你在 HyperOS 上创建、上传、导入并应用自己的指纹图标与动画。 `Proprietary` `[LSP]`
- **[Hyper Helper](https://github.com/HowieHChen/XiaomiHelper/blob/master/README_EN-US.md)** - 仅适用于 HyperOS 的轻量级定制模块。 `FOSS` `[LSP]`
- **[Hyper Unlocked](https://github.com/ukriu/HyperUnlocked)** - 在低端小米设备上解锁所有可能解锁的高端功能。 `FOSS` `[M]`
- **[HyperStar](https://github.com/YunZiA/HyperStar/blob/master/README_EN-US.md)** - 一个 LSPosed 模块，主要用于自定义小米 HyperOS 控制中心，并附带一些功能。 `FOSS` `[LSP]`
- **[Janus](https://modules.lsposed.org/module/org.pysh.janus/)** - 为小米背面屏幕增强多任务、应用快捷方式、手势、通知镜像与省电功能。 `Proprietary` `[LSP]`
- **[Pengeek](https://github.com/monwf/customiuizer)** - 按你的喜好自定义 HyperOS。适用于基于 Android 14 的 HyperOS。 `FOSS` `[LSP]`
- **[XiaoAi Plug](https://github.com/lm060719/XiaoAi-plug)** - Hook `com.miui.voiceassist`，允许更换 AI 模型。 `FOSS` `[LSP]`

> [!TIP]
> 查看此资源获取更多 [HyperOS 修改 ↗](https://github.com/ImKKingshuk/Awesome-HyperOS)

### NothingOS

- **[NothingTweaks](https://github.com/RevealedSoulEven/NothingTweaks)** - 基于 Xposed 框架的 Nothing OS 定制模块。 `FOSS` `[LSP]`

### One UI (Samsung)

- **[⭐ KnoxPatch](https://github.com/salvogiangri/KnoxPatch)** - 让三星应用/功能在你的已 root Galaxy 设备上重新正常工作。为获得更好体验，请同时[阅读此内容 ↗](https://github.com/salvogiangri/KnoxPatch?tab=readme-ov-file#knoxpatch-enhancer) 。 `FOSS` `[LSP]`
- **[One Design](https://github.com/Xposed-Modules-Repo/qyz.onedesign)** - 在系统层面自定义多个应用，提供功能增强与系统优化。 `Proprietary` `[LSP]`
- **[One UI X](https://github.com/SoClear/OneUIX)** - 移除恼人的限制，为三星 One UI 的状态栏、快速设置和原生应用等注入强大增强。 `FOSS` `[LSP]`
- **[OneLab](https://github.com/pigerzhu/OneLab)** - 面向三星设备的 One UI 功能扩展与折叠屏应用适配。 `FOSS` `[LSP]`
- **[Samsung Dex Standalone Mode](https://github.com/supermarsx/magisk-samsung-dex-standalone-mode)** - 以 systemless 方式启用 Samsung DeX 独立模式。 `FOSS` `[M]`

### Onyx

- **[OnyxTweaks](https://github.com/timschneeb/OnyxTweaks)** - 面向运行 Android 12 的 Onyx Boox 电子墨水设备的 Xposed 模块，为 SystemUI、Android Framework 和 Onyx 桌面添加更多修改。 `FOSS` `[LSP]`

### Oxygen OS (OnePlus)

- **[Oxygen-Customizer](https://github.com/DHD2280/Oxygen-Customizer/)** - 开源的 Oxygen OS 定制应用。 `FOSS` `[LSP]`

### Pixel
- **[PixelInjector](https://github.com/hxreborn/pixelinjector)** - 包含一系列明确取舍调整的 Xposed 模块，专为 Pixel 手机打造。 `FOSS` `[LSP]`

### ZUI

- **[BetterZUIKey](https://github.com/CommandPrompt-Wang/BetterZUIKey)** - 用于在联想 ZUXOS 设备上覆盖键盘快捷键的 LSPosed 模块。 `FOSS` `[LSP]`
- **[Unf**k ZUI Tablet](https://github.com/Xposed-Modules-Repo/xyz.cirno.unfuckzui/)** - 调整通知图标大小、恢复 AOSP 风格的安装器/权限对话框、强制屏幕旋转状态持久化，并允许包查询等。 `Proprietary` `[LSP]`
- **[ZTool](https://github.com/qwqawa64/ZUX-ZTool)** - 为 ZUXOS 系统提供优化与自定义功能。 `FOSS` `[LSP]`
