---
layout: doc
title: "性能与电池"
description: "内核管理器、内存调优、电池优化、充电控制与任务工具，提升已 root Android 的速度与续航。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/apps-and-modules/performance
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
      content: "性能与电池 | Awesome Android Root"
  - - meta
    - property: og:description
      content: "内核管理器、内存调优、电池优化、充电控制与任务工具，提升已 root Android 的速度与续航。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/apps-and-modules/performance
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
      content: "性能与电池 | Awesome Android Root"
  - - meta
    - name: twitter:description
      content: "面向已 root Android 的性能与电池工具：性能优化、内核管理、内存与 RAM 调优、电池优化、充电控制以及任务/进程管理应用和模块。"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
---

# 性能与电池

**性能与电池**收录能让已 root 的 Android 更快、续航更久的应用和模块：
CPU/GPU 及通用**性能优化**、**内核管理**、**内存与 RAM** 调优、**电池优化**、
充电控制以及任务与进程管理。


> [!TIP]
> 游戏相关的调优请参阅 [游戏](gaming.md)。CPU/GPU 管理请参阅 [内核管理](performance.md#内核管理)。内存优化请查看 [内存管理](performance.md#memory-ram)。

## 电池优化

- **[⭐ FROSTY](https://github.com/Drsexo/Frosty)** - 通过选择性地冻结 Google 移动服务（GMS）组件并应用系统级 Doze 增强来优化电池续航。`FOSS` `[M]` `[K]`
- **[Always Battery Saver](https://github.com/icepony/AlwaysBatterySaver)** - 防止 Android 在设备充电时自动关闭省电模式。`FOSS` `[LSP]`
- **[AntiWakeLock](https://github.com/binarynoise/XposedModulets/releases?q=AntiWakeLock)** - 禁用 WAKE_LOCK 和 FLAG_KEEP_SCREEN_ON 以节省电量。`FOSS` `[LSP]`
- **[Auto Sleep](https://github.com/The-First-King/Auto-Sleep)** - 定时睡眠模式，通过 root 开启飞行模式、关闭 Wi-Fi/蓝牙并强制进入 Doze，之后恢复先前状态。`FOSS`
- **[BatStats](https://github.com/mlm-games/BatStats)** - 通过 Shizuku/root 查看带统计数据的电池监控。`FOSS`
- **[Battery Guru](https://play.google.com/store/apps/details?id=com.paget96.batteryguru)** - 电池优化与监控。`Proprietary`
- **[Battery Honey](https://github.com/kaminarich/BatteryHoney)** - 在息屏时优化省电效果。`FOSS` `[M]`
- **[Battery Info Enabler](https://github.com/klab7/BatteryInfoEnabler)** - 解锁并增强 Pixel 6+ 设备的原生电池信息。`FOSS` `[LSP]`
- **[Battery Monitor](https://github.com/tswistak/Battery-Monitor)** - 一目了然地查看电池状态，获取有意义的通知，并长期追踪电池表现。`FOSS` | [🌱](https://f-droid.org/packages/codes.swistak.batterymonitor/)
- **[BatteryRemapper](https://github.com/Dhangofa/BatteryRemapper)** - 自定义状态栏电池百分比。`FOSS` `[LSP]`
- **[Doze Disabler](https://github.com/draumaz/dozedisabler)** - 一个在开机时禁用 Doze 电池优化的 Magisk 模块。`FOSS` `[M]`
- **[Drowser](https://gitlab.com/juanitobananas/drowser)** - Drowser 是一款简单的应用，会在息屏时杀死你选定的应用。`FOSS` | [🌱](https://f-droid.org/app/com.jarsilio.android.drowser)
- **[EnforceDoze](https://github.com/farfromrefug/EnforceDoze)** - 在息屏后立即启用 Doze 模式并关闭运动感应，以获得最佳电池续航。`FOSS` | [🌱](https://f-droid.org/packages/com.akylas.enforcedoze/)
- **[Extreme GMS Doze](https://github.com/Skyghost090/Extreme-Gms-Doze)** - 在息屏时智能杀死 Google Play 服务，大幅提升电池续航。`FOSS` `[M]`
- **[GhostGMS](https://github.com/kaushikieeee/GhostGMS)** - 优化 Google 移动服务，带来更好的续航、隐私和性能。`FOSS` `[M]`
- **[Hyper Optimize](https://github.com/TatshSiow/HyperOptimize)** - 调整 HyperOS 系统与内核参数以降低功耗。`FOSS` `[M]`
- **[LSPDoze](https://github.com/Xposed-Modules-Repo/com.op.lspdoze)** - 优化你的待机续航。`Proprietary` `[LSP]`
- **[NoWakeLock](https://github.com/NoWakeLock/NoWakeLock)** - 一款控制 Android wakelock 的应用，可在 Android N 及更高版本上运行。`FOSS` `[LSP]`
- **[OOSGMS-OPTIMISER](https://github.com/epicmann24/OOSGMS-OPTIMISER)** - 为 GMS 和 OOS 进行优化并移除跟踪器。`FOSS` `[M]`
- **[Plus Plus Battery](https://github.com/dijia1124/plusplusbattery)** - 适用于 OnePlus/Oppo/Realme 手机的实时电池统计与健康度估算工具。`FOSS` | [🌱](https://f-droid.org/en/packages/com.dijia1124.plusplusbattery/)
- **[Realme-GT3-neo5-CPU-limiter](https://github.com/Quantom2/Realme-GT3-neo5-CPU-limiter)** - 基于 Magisk/KSU 的模块，通过降低 CPU 速度来改善你的屏幕使用体验。`FOSS` `[M]` `[K]`
- **[SaverTuner](https://codeberg.org/s1m/savertuner)** - 让你充分利用系统内置的省电模式。现在可以设置不同档案，以更激进或更保守的方式省电。[在小米设备上不可用](https://codeberg.org/s1m/savertuner/issues/98#issuecomment-5777054)。`FOSS` | [🌱](https://f-droid.org/packages/s1m.savertuner/)
- **[Universal GMS Doze Fork](https://github.com/MarsPatrick/universal-gms-doze)** - 修补 Google Play 服务应用及特定进程/服务，使其能够使用电池优化。`FOSS` `[M]`
- **[Xtreme-Battery-Saver](https://github.com/Magisk-Modules-Alt-Repo/Xtreme-Battery-Saver)** - 面向想真正榨干电池续航用户的极限省电 Magisk 模块。`FOSS` `[M]`

> [!TIP]
> 关于减少 Google 服务活动带来的隐私收益，另请参阅[隐私工具](privacy.md#隐私工具)。

## 充电与电源

- **[AccA](https://github.com/VR-25/acc)** - 高级充电控制器应用。`FOSS`
- **[Charging Bypass](https://github.com/AbhishekTor55/charging-bypass-magisk)** - 亮屏时禁用充电，息屏时恢复充电。对游戏/开发用途很有用。`FOSS` `[M]`
- **[FastCharge Next](https://github.com/Dev97633/Fastcharge-next)** - 通过智能调优提升充电速度。`FOSS` `[M]`

## 内核管理

- **[EX Kernel Manager](https://play.google.com/store/apps/details?id=flar2.exkernelmanager)** - 用于备份和刷入内核、调整色彩、声音、手势及其他内核设置的 root 工具。`Proprietary`
- **[Franco Kernel Manager](https://play.google.com/store/apps/details?id=com.franco.kernel)** - 面向所有设备的完整工具箱，界面丰富，集管理、调优和赋能设备所需的一切于一身。`Proprietary`
- **[iUnlocker GLTool](https://github.com/i-Taylo/iUnlockerGL)** - 用于伪造 GPU 信息，允许用户修改 GPU 信息以解锁游戏画质和进行测试。`FOSS` `[M]`
- **[Kernel Enhancer](https://github.com/RAAJK20Pro/KernelEnhancer)** - 面向所有设备的简单内核参数优化。`Proprietary` `[M]`
- **[Kernel Flasher](https://github.com/fatalcoder524/KernelFlasher)** - 用于刷入（AK3 文件）、备份和还原内核的 Android 应用。`FOSS`
- **[KonaBess](https://github.com/libxzr/KonaBess)** - 一款简单直接的应用，无需重新编译内核即可自定义 GPU 频率和电压表。`FOSS` 
- **[KonaBess Next](https://github.com/KonaBess-Next/KonaBess-Next)** - KonaBess 的分支，面向已 root 的高通骁龙 Android 设备的 GPU 超频与降压工具，支持细粒度电压调节。`FOSS`
- **[Minimal Kernel Manager](https://github.com/abhay-byte/mkm)** - Android 内核管理与系统监控应用。`FOSS` | [🌱](https://f-droid.org/packages/com.ivarna.fluxlinux/)
- **[PerfMTK](https://github.com/JUANIMAN/PerfMTK)** - 专为搭载 Mali GPU 的联发科设备优化性能与能效而设计。`FOSS` `[M]`
- **[Rv Kernel Manager](https://github.com/Rve27/RvKernel-Manager)** - 采用 Material 3 Expressive 设计的现代内核管理器。`FOSS` | [🌱](https://apt.izzysoft.de/fdroid/index/apk/com.rve.rvkernelmanager)
- **[Zuan Kernel Manager](https://github.com/ZUANVFX01/ZKM/)** - 高级 Android 内核管理工具，基于 Rve Kernel Manager 项目重构，采用 Material 3 Expressive 现代风格。`FOSS`

## 内存与 RAM

- **[Magisk Swapspace](https://github.com/chickendrop89/magisk-swapspace)** - 该模块可在 Android 上创建持久化交换空间。`FOSS` `[M]`
- **[SkyScene Add-on](https://github.com/WeirdMidas/SkySceneAddon)** - 针对大多数内存管理子系统的优化，并集成了智能内存扩展——一种类似 Ram Plus 等 OEM 方案的内存扩展方式。`FOSS` `[M]` `[K]`
- **[Swap Disabler](https://github.com/rompelhd/Swap-Disabler)** - 在系统启动时禁用 swap。`FOSS` `[M]`
- **[SwapBoost Pro](https://github.com/yadavnikhil03/SwapBoost-Pro)** - 通过持久的 zRAM + 交换文件优化及 VM 调优，提升设备的内存性能。`FOSS` `[M]`
- **[ZRAM Module](https://github.com/FurLC/ZRAM-Module)** - 为 Android 设备提供 ZRAM 压缩算法支持的 Magisk/KernelSU 模块。`FOSS` `[M]` `[K]`

## 性能优化

- **[⭐ 3C All-in-One Toolbox](https://play.google.com/store/apps/details?id=ccc71.at.free)** - 一款功能全面的实用工具，以友好的界面提供监视、控制和优化设备性能的多种工具。`Proprietary`
- **[Androoster](https://github.com/cioccarellia/androoster)** - Android root 调优工具箱。旨在帮助你调优设备，让它保持冷静、快速和流畅。`FOSS` | [🌱](https://apt.izzysoft.de/fdroid/index/apk/com.andreacioccarelli.androoster)
- **[AZenith](https://github.com/Liliya2727/AZenith)** - 旨在提升 Android 性能的一体化（AIO）系统优化模块。`FOSS` `[M]` `[K]`
- **[COPG](https://github.com/AlirezaParsi/COPG)** - 伪造你的设备身份，享受高级功能、极致性能和专属权益。`FOSS` `[M]`
- **[COPG-VD](https://github.com/VD171/COPG-VD)** - COPG 的分支，带有附加功能和优化。`FOSS` `[M]` `[K]`
- **[Dynamic System Tweaks Magisk Module](https://github.com/PS2ClassicsVault/Dynamic-System-Tweaks-Magisk-Module)** - 在不导致过热和耗电的前提下提升 armeabi-v7a 设备的整体系统性能。`FOSS` `[M]`
- **[FDE.AI](https://github.com/feravolt/FDE.AI-docs)** - 面向所有 Android OS 设备的一体化终极优化器。`Proprietary` `[LSP]`
- **[Hydrostellaire](https://github.com/AestasBritannia/Hydro-Br-leur)** - 面向天玑旗舰平台设备以及 OnePlus、Realme 设备的 Magisk 模块。`FOSS` `[M]`
- **[MAGNETAR](https://github.com/Kyliekyler/MAGNETAR)** - 设备性能优化器 - 旨在为每种使用场景提供最佳体验。`FOSS` `[M]`
- **[SpeedCool](https://github.com/Llucs/SpeedCool-Magisk-Module)** - 用 SpeedCool 为你的 Android 提速、降温和优化：更少卡顿、更多性能、更凉快的系统。`FOSS` `[M]`
- **[Stellar Tweaks](https://github.com/kanaodnd/Stellar-Tweaks)** - 精巧的调度器，旨在协调设备性能与能效。`Proprietary` `[M]` `[K]` `[A]`
- **[TNF Tweaker](https://github.com/topnotchfreaks/tnf_tweaker)** - 专为运行 TopNotchFreaks 和 Zephyr 内核的设备设计的优化工具。`FOSS` `[K]`

## 任务与进程管理

- **[Appzuku](https://github.com/northmendo/Appzuku)** - 通过停止后台应用提升性能的简单应用，依赖 Root/Shizuku 权限。`FOSS`
- **[Background App Slayer (BAS)](https://github.com/UNKNUW/Background-App-Slayer)** - 自动杀死后台应用。`FOSS` `[M]`
- **[DeepSuppressor](https://github.com/Aurora-Nasa-1/DeepSuppressor)** - 用于监控和控制应用进程的后台进程管理工具。`FOSS` `[M]`
- **[Greenify4Magisk/KSU Reborn](https://github.com/Drsexo/Greenify4Magisk-KSU-Reborn)** - 将 Greenify 集成为特权系统应用以启用加速模式，在不修改 ROM 的情况下增强休眠效果。`FOSS` `[M]` `[K]`
- **[KillMyApps](https://github.com/dedeadend/KillMyApps)** - 通过 root 或 Shizuku 终止后台进程以释放内存并节省电量，支持定时自动查杀和快速设置磁贴。`FOSS`
- **[No More Background](https://github.com/adil192/no_more_background)** - 一款一次设置即可高枕无忧的工具，阻止 Android 应用在后台运行。`FOSS` | [🌱](https://f-droid.org/en/packages/com.adilhanney.no_more_background/)
- **[Operator](https://github.com/by-architect/Operator)** - 受《黑客帝国》启发的 Android 任务管理器，可直接在设备上监控、管理和终止进程。`FOSS` | [🌱](https://apt.izzysoft.de/fdroid/index/apk/com.byarchitect.operator)
- **[Shappky](https://github.com/YasserNull/shappky)** - 通过停止后台应用提升性能的简单应用，依赖 Root/Shizuku 权限。`FOSS` `[M]`
- **[TaskManager](https://github.com/RohitKushvaha01/TaskManager)** - 受 GNOME 系统监视器启发的 Android 任务管理器。必读 [F-Droid 收录说明](https://github.com/RohitKushvaha01/TaskManager/issues/24) `FOSS` | [▶️](https://play.google.com/store/apps/details?id=com.rk.taskmanager)
