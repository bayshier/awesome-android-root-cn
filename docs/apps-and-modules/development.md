---
layout: doc
title: "开发与自动化"
description: "面向开发者和高级 root 用户的 ADB、Shell、自动化、Linux 环境与硬件工具。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/apps-and-modules/development
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
      content: "开发与自动化 | Awesome Android Root"
  - - meta
    - property: og:description
      content: "面向开发者和高级 root 用户的 ADB、Shell、自动化、Linux 环境与硬件工具。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/apps-and-modules/development
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
      content: "开发与自动化 | Awesome Android Root"
  - - meta
    - name: twitter:description
      content: "面向已 root Android 的开发、自动化和高级用户工具：终端与 Shell、ADB 与调试工具、开发者实用程序、Linux 环境（chroot/容器）、自动化应用以及硬件/传感器工具。"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
---

# 开发与自动化

面向已 root Android 设备的**开发与自动化**工具 - 终端与 Shell 环境（**Termux**）、
**ADB 与调试**辅助工具、开发者工具（**Shizuku** 等）、完整的 **Linux 环境**、
自动化应用（**Tasker、MacroDroid、Automate**）以及硬件/传感器实用工具。


## ADB 与调试

- **[ADB Root](https://github.com/evdenis/adb_root)** - 以 root 身份运行 adbd 守护进程并跳过 USB 身份验证的 Magisk 模块。`FOSS` `[M]`
- **[Android-ADB-over-WiFi](https://github.com/warren-bank/Android-ADB-over-WiFi)** - 在 USB 和 WiFi 模式之间切换已 root 设备的 Android 调试桥守护进程（adbd）。`FOSS` `[LSP]`
- **[Debug Assistant](https://github.com/ThePedroo/DebugAssistant)** - 以 Magisk 模块形式提供的最简单却强大的 logcat 捕获系统。`FOSS` `[M]`
- **[Hotspot Wireless Debugging](https://github.com/droserasprout/io.drsr.hotspotadb)** - 允许通过 Wi-Fi 热点进行无线调试的 Xposed 模块。`FOSS` `[LSP]`
- **[LADB](https://github.com/tytydraco/LADB)** - 本地 ADB shell。`FOSS` | [▶️](https://play.google.com/store/apps/details?id=com.draco.ladb)
- **[Log Catcher](https://github.com/hxreborn/Log-Catcher)** - 在启动过程中捕获 logcat 和内核消息，解锁后将其归档为带时间戳的 tar 包。`FOSS` `[M]` `[K]`
- **[Logcat Extreme](https://play.google.com/store/apps/details?id=scd.lcex)** - 面向已 root Android 设备的 logcat 阅读和捕获工具。`Proprietary`
- **[Loki](https://github.com/trinadhthatakula/Loki)** - 使用 root 或 Shizuku 捕获、保存和分享其他应用日志的 logcat 阅读器。`FOSS`
- **[Magisk-WiFiADB](https://github.com/mrh929/magisk-wifiadb)** - 自动启用 WiFi ADB。`FOSS` `[M]`
- **[Wireless ADB Switch](https://github.com/Smooth-E/wireless-adb-switch)** - 快速启用或禁用 Android 的无线调试功能，并提供小部件和快捷设置磁贴以便使用。`FOSS` | [🌱](https://f-droid.org/ru/packages/com.smoothie.wirelessDebuggingSwitch)

## 自动化

- **[⭐ MacroDroid](https://play.google.com/store/search?q=macrodroid&c=apps)** - 易用的自动化应用。`Proprietary`
- **[⭐ Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm)** - 高级而强大的自动化应用。`Proprietary`
- **[Automate](https://play.google.com/store/apps/details?id=com.llamalab.automate)** - 使用流程图创建自定义自动化工作流，无缝管理任务、文件和设备设置。`Proprietary`
- **[crond4Android](https://github.com/powerAn2020/crond4android)** - 面向 KernelSU、APatch 和 Magisk 的定时任务 Cron 守护进程。`FOSS` `[M]` `[K]`
- **[FIRERPA (lamda)](https://github.com/firerpa/lamda)** - 由 Python 客户端驱动的设备端控制平台：远程桌面串流、UI/OCR 自动化、流量捕获、内置 Frida 与代理/VPN 组网。有无 root 均可运行。`FOSS`
- **[Geto](https://github.com/T31n/Geto)** - 在选定应用启动时自动应用设备设置，使用通过 Shizuku 或 root 授予的 `WRITE_SECURE_SETTINGS`。`FOSS` | [🌱](https://f-droid.org/en/packages/com.android.geto/)

## 开发者工具

- **[⭐ Shizuku Fork](https://github.com/thedjchi/Shizuku)** - 具有自动启动 Shizuku、自动化和恢复功能的 Shizuku 分支。`FOSS`
- **[AndroidSpect](https://github.com/thecybersandeep/androidspect)** - 对已安装的 Android 应用进行实时运行时审计，并提供浏览器仪表板。`FOSS` `[LSP]`
- **[Bluetooth Hook](https://github.com/jingyu233/bluetoothhook#english)** - 向 Android 系统蓝牙扫描结果中注入虚拟 BLE 设备，方便开发者调试蓝牙应用。`FOSS` `[LSP]`
- **[Dhizuku API for Xposed](https://github.com/iamr0s/Dhizuku-API-Xposed)** - 强制应用支持 Dhizuku。`FOSS` `[LSP]`
- **[DuckPolicy](https://github.com/Xposed-Modules-Repo/com.strawing.duckdevicepolicy)** - 让应用在你的设备上感知不到设备策略限制。`Proprietary` `[LSP]`
- **[KSU Toolkit](https://github.com/backslashxx/ksu_toolkit)** - 在 KernelSU 之上构建的小型扩展，用于测试和调试。`FOSS` `[K]`
- **[Nano for Android NDK](https://github.com/Magisk-Modules-Repo/nano-ndk)** - 允许临时在 recovery 中使用，因此你可以从 adb shell 或 TWRP 终端调用它。`FOSS` `[M]`
- **[Py2Droid](https://github.com/Mrakorez/py2droid)** - 在 Android 上安装 Python 3，包括标准库（STDLIB）。`FOSS` `[M]`
- **[SELinux Permissive](https://github.com/evdenis/selinux_permissive)** - 将 SELinux 切换为宽容模式的 Magisk 模块。`FOSS` `[M]`
- **[Shevery](https://github.com/HmnDev-Tech/shevery)** - 基于 Shizuku，采用 Jetpack Compose 与 Material 3，并增强了兼容性。`FOSS`
- **[Shizuku](https://github.com/RikkaApps/Shizuku)** - 使用 ADB/root 权限直接调用系统 API。`FOSS` | [🌱](https://apt.izzysoft.de/fdroid/index/apk/moe.shizuku.privileged.api) | [▶️](https://play.google.com/store/search?q=shizuku&c=apps)
- **[SideWire](https://github.com/mzggr0914/SideWire-KernelSU)** - 从 Windows、macOS 或 Linux 控制已 root Android 设备的原生桥接工具。`FOSS` `[K]`
- **[SQLite3 for Android](https://github.com/rojenzaman/sqlite3-magisk-module)** - 为 arm64-v8a、armeabi-v7a、x86 和 x86_64 提供静态链接的 `sqlite3` 二进制文件。`Proprietary` `[M]`
- **[Zygisk-Loader](https://github.com/HanSoBored/Zygisk-Loader)** - 无需重启即可将原生库热插入 Android 应用的模块。`FOSS` `[K]`

### Frida 与逆向工程

<details><summary>什么是 Frida？</summary>

Frida 允许你将自己的脚本注入黑盒进程，从而 hook 函数调用、修改参数和返回值，并对应用执行其他运行时操作。

</details><br>

- **[Florida](https://github.com/Ylarod/Florida)** - Android 版 frida-server 的反检测构建，基于 Frida 上游自动修补和构建。`FOSS`
- **[Jezail](https://github.com/zahidaz/jezail)** - 设备端渗透测试工具包，提供 REST API 和 Web 界面，用于在已 root 手机上进行设备控制、应用管理、Frida、ADB 和 logcat 操作。`FOSS`
- **[MagiskFrida](https://github.com/ViRb3/magisk-frida)** - 让 frida-server 随开机自启，支持多种 root 方案。`FOSS` `[M]` `[K]`
- **[MagiskHluda](https://github.com/Exo1i/MagiskHluda)** - 开机启动基于 Florida 的更难被检测的 frida-server，并提供 Web UI 用于启动、停止和配置。`Proprietary` `[M]` `[K]` `[A]`
- **[Undetected Frida](https://github.com/zer0def/undetected-frida)** - 应用了社区反检测补丁的 Frida 构建，同时以 Magisk/KernelSU 模块形式发布。`FOSS` `[M]` `[K]`
- **[ZygiskFrida](https://github.com/lico-n/ZygiskFrida)** - 通过 Zygisk 将 Frida gadget 注入应用，避开用于检测 frida-server 的 ptrace 和 APK 完整性检查。`FOSS` `[M]` `[K]`


## 硬件与传感器

- **[GyroHook Project](https://github.com/AFan4724/GyroHook)** - 允许用户修改 Android 设备的陀螺仪传感器数据。`FOSS` `[M]`
- **[HID Gadget Module](https://github.com/kelexine/hid-gadget-module)** - 在 Android 设备上启用人机接口设备（HID）模拟/支持。`FOSS` `[M]`
- **[OnePlus Flash Control](https://github.com/Bartixxx32/Opflashcontrol-app)** - 精确控制 OnePlus 设备双色温和四色温 LED 闪光灯的亮度。`FOSS`
- **[USB HID Client](https://github.com/Arian04/android-hid-client)** - 将你的手机用作键盘和鼠标，另一端无需安装任何软件。`FOSS` | [🌱](https://apt.izzysoft.de/packages/me.arianb.usb_hid_client)

## Linux 环境

- **[⭐ Droidspaces](https://github.com/ravindu644/Droidspaces-OSS)** - 在 Android 之上运行完整的 Linux 环境，提供完整的 init 系统支持。`FOSS`
- **[Auto-Linux](https://github.com/HanSoBored/Auto-Linux)** - 在已 root Android 设备上安装和管理 Linux（chroot）环境的 TUI 应用。`FOSS`
- **[Boot Nethunter](https://github.com/cipherswami/boot-nethunter)** - 在 Termux 中启动 Kali Chroot（通过 Nethunter apk 安装的版本）。`FOSS` 
- **[Chroot Distro](https://github.com/Magisk-Modules-Alt-Repo/chroot-distro)** - 在 Android 上安装 GNU/Linux 发行版。`FOSS` `[M]`
- **[DebDroid](https://github.com/NICUP14/DebDroid)** - 面向 Android 的 Debian 容器运行时。`FOSS` 
- **[Magisk Docker](https://github.com/mgksu/dockerd)** - 用于在已 root Android 设备上运行 Docker 的 Magisk 和 KernelSU 模块。`FOSS` `[M]` `[K]`
- **[Trixie.apk](https://github.com/DesktopECHO/trixie.apk)** - 面向已 root Android 5.0+ 设备的 Debian 13（Trixie）服务器/桌面容器。`FOSS`
- **[Ubuntu Chroot](https://github.com/ravindu644/Ubuntu-Chroot)** - 在 Android 上运行 Ubuntu 24.04，拥有完整硬件访问权限和纯命名空间隔离。`FOSS` `[M]` `[K]`

## 终端与 Shell

- **[⭐ Termux](https://github.com/termux/termux-app)** - 面向 Android OS 的终端模拟器应用，可通过多种软件包扩展功能。`FOSS` | [🌱](https://f-droid.org/en/packages/com.termux)
- **[Android 16 Linux Terminal VM Persistence](https://github.com/DigijEth/VM_Magisk_Module)** - 让 Android 的 Linux 终端在后台持续运行。`FOSS` `[M]` 
- **[aShell You](https://github.com/DP-Hridayan/aShellYou)** - 采用 Material Design 3 UI 的 Android shell 实用工具应用，可运行 ADB、root 和 shell 命令。`FOSS` | [🌱](https://apt.izzysoft.de/fdroid/index/apk/in.hridayan.ashell)
- **[ReTerminal](https://github.com/RohitKushvaha01/ReTerminal)** - 基于 Termux 的 TerminalView 构建的 Material 3 终端模拟器，支持多会话、虚拟按键和 Alpine Linux。`FOSS`
- **[Termux-Root-Recovery-Tool](https://github.com/Ishu43642/Termux-Root-Recovery-Tool)** - 安装 GSI ROM、刷入 Fastboot ROM、安装 TWRP recovery 以及 Boot.img 和 vbmeta.img 文件。`FOSS` 
- **[TermuxRootMods](https://github.com/rompelhd/TermuxRootMods)** - 为已 root 设备增强 Termux 体验的 Magisk 模块。`FOSS` `[M]`
