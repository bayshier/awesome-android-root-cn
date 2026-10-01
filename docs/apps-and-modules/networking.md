---
layout: doc
title: "网络"
description: "面向已 root Android 的 VPN、代理、Wi‑Fi、蓝牙与移动数据工具，实现流量控制与网络管理。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/apps-and-modules/networking
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
      content: "网络 | Awesome Android Root"
  - - meta
    - property: og:description
      content: "面向已 root Android 的 VPN、代理、Wi‑Fi、蓝牙与移动数据工具，实现流量控制与网络管理。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/apps-and-modules/networking
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
      content: "网络 | Awesome Android Root"
  - - meta
    - name: twitter:description
      content: "面向已 root Android 的网络工具：VPN 与代理模块（Clash、sing-box、v2ray）、网络工具、Wi-Fi 与移动数据实用程序，以及蓝牙与 NFC 应用和模块。"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
---

# 网络

面向已 root Android 设备的**网络**工具 - VPN 与透明代理模块（Clash、sing-box、v2ray 等）、网络诊断、
Wi-Fi 与移动数据实用程序，以及蓝牙与 NFC 应用和模块。

> [!TIP]
> 相关页面：[广告拦截](/apps-and-modules/ad-blocking.md)涵盖 DNS 级过滤；
> [安全](/apps-and-modules/security.md)涵盖按应用防火墙。


## 蓝牙与 NFC

- **[KonamikU](https://github.com/C-F0x/KonamikU)** - 扩展设备的 NFC 功能。`FOSS` `[LSP]`
- **[NFC Card Emulator Pro (Root)](https://play.google.com/store/apps/details?id=com.yuanwofei.cardemulator.pro)** - NFC 卡模拟器，支持门禁卡、电梯卡、饭卡、校园卡、图书馆卡及其他 IC 卡。`Proprietary`
- **[NFCGate](https://github.com/nfcgate/nfcgate)** - 用于捕获、分析或修改 NFC 流量的 Android 应用。`FOSS` `[LSP]` | [🌱](https://f-droid.org/packages/de.tu_darmstadt.seemoo.nfcgate/)
- **[onHit](https://github.com/0penPublic/onHit)** - 通过 Xposed 在没有实体标签的情况下触发 Android NFC 事件。`FOSS` `[LSP]`

## 网络工具

- **[Hosts Manager Lite](https://play.google.com/store/apps/details?id=awais.hostsmanager.lite)** - 高级 /etc/hosts 编辑器。`Proprietary`
- **[MagicNet](https://github.com/LIghtJUNction/MagicNet#english-summary)** - 设备侧流量治理模块，在应用层之下强制执行网络规则，而不是依赖每个应用自觉遵守代理设置。`FOSS` `[M]` `[K]`
- **[Magisk LAN Auto Switch](https://github.com/NewFuture/magisk-modules/tree/main/magisk-lan-auto-switch)** - 根据 eth0 连接状态自动切换局域网和 WiFi。`FOSS` `[M]`
- **[Network Utilities](https://play.google.com/store/apps/details?id=com.myprog.netutils)** - 包含一套网络诊断工具的应用。`Proprietary`
- **[SimbaDroid](https://github.com/buttercookie42/SimbaDroid)** - 一款简单的 Android SMB 文件服务器。`FOSS` | [🌱](https://f-droid.org/packages/de.buttercookie.simbadroid)
- **[TCP Optimiser Module](https://github.com/fatalcoder524/TCP_Optimiser_Module)** - 根据当前活动的网络类型更改 TCP 拥塞控制算法，并提供一些网络增强功能。`FOSS` `[M]` `[K]`
- **[Unlock AI & EN Services for Russia](https://github.com/AvenCores/Unlock_AI_and_EN_Services_for_Russia)** - 为俄罗斯解锁 AI 和英文服务。`Proprietary` `[M]` `[K]`

## VPN 与代理

- **[AsteriskBOX](https://github.com/Asterisk4Magisk/AsteriskBOX)** - Android 上的 sing-box GUI 客户端，支持 VPN 服务、TPROXY(ROOT)、TUN(ROOT)、eBPF(ROOT)、TUN2SOCKS(ROOT) 和 BPF2SOCKS(ROOT)。`FOSS` `[M]` `[K]`
- **[AsteriskMETA](https://github.com/Asterisk4Magisk/AsteriskMETA)** - Android 上的 Mihomo GUI 客户端，支持 VPN 服务、TPROXY(ROOT)、TUN(ROOT)、TUN2SOCKS(ROOT) 和 BPF2SOCKS(ROOT)。`FOSS` `[M]` `[K]`
- **[AsteriskNG](https://github.com/Asterisk4Magisk/AsteriskNG)** - Android 上的 Xray GUI 客户端，支持 VPN 服务、TPROXY(ROOT)、TUN2SOCKS(ROOT) 和 BPF2SOCKS(ROOT)。`FOSS` `[M]` `[K]`
- **[Aurora](https://github.com/Tkocean/Aurora)** - 该项目通过 Magisk、KernelSU 或 APatch 部署 sing-box、mihomo 代理。`FOSS` `[M]` `[K]`
- **[Box for Root](https://github.com/taamarin/box_for_magisk)** - Box for Root（BFR）是一个 Magisk、KernelSU、APatch 模块，提供一套代理工具，包括 clash、sing-box、v2ray、hysteria 和 xray。它让你可以在具有 root 权限的 Android 设备上配置透明代理。`FOSS` `[M]` `[K]`
- **[Box4Magisk / KernelSU / APatch](https://github.com/CHIZI-0618/box4magisk)** - 在 Android 设备上部署多种代理内核，包括 clash、mihomo、sing-box、v2ray、xray 和 hysteria。`FOSS` `[M]` `[K]`
- **[FlClash](https://github.com/chen08209/FlClash)** - 基于 ClashMeta 的多平台代理客户端，简单易用，开源且无广告。`FOSS`
- **[Happwner](https://github.com/Omegaplexx/Happwner)** - 将 Happ 订阅导出到其他 VPN 客户端。`FOSS` `[LSP]`
- **[NetProxy-Magisk](https://github.com/Fanju6/NetProxy-Magisk)** - 基于 Xray 内核的 Magisk 代理模块，支持一键启停透明代理。`FOSS` `[M]`
- **[NoVPNDetect](https://github.com/RuslanUC/NoVPNDetect)** - 防止某些应用检测到你的手机连接了 VPN。`FOSS` `[LSP]`
- **[NoVPNDetect Enhanced](https://github.com/BlueCat300/NoVPNDetectEnhanced/)** - NoVPNDetect 的增强版，通过修改系统属性和网络配置来防止应用检测 VPN 的使用。`FOSS` `[LSP]`
- **[SAM](https://github.com/5MayRain/SAM)** - 一个整合 SmartDNS、AdGuardHome 和 mihomo 的模块，适用于 Magisk 和 KernelSU。`FOSS` `[M]` `[K]`
- **[Surfing](https://github.com/GitMetaio/Surfing)** - 用于 Clash/mihomo、sing-box、v2ray、xray、hysteria 服务的 Magisk 和 KernelSU 模块。`FOSS` `[M]` `[K]`
- **[VPN Hide](https://github.com/okhsunrog/vpnhide)** - 对选定的 Android 应用隐藏活动的 VPN（内核模块 + LSPosed + Zygisk）`FOSS` `[M]` `[K]`
- **[VPN Hotspot](https://github.com/Mygod/VPNHotspot)** - 通过热点或中继分享你的 VPN 连接。`FOSS`
- **[zapret for Magisk](https://github.com/sevcator/zapret-magisk)** - 在 Android 上绕过 DPI，并带有附加功能。`FOSS` `[M]`
- **[ZDT-D Root Module](https://github.com/GAME-OVER-op/ZDT-D)** - 用于流量路由、DPI 绕过、代理链、DNS 控制和按应用网络管理的模块。`FOSS` `[M]` `[K]`
- **[ZeroTier for Magisk](https://github.com/eventlOwOp/zerotier-magisk)** - 开机后在后台运行 zerotier，不与其他 Android VPN 服务冲突。使用 Android 应用控制 ZeroTier。`FOSS` `[M]`

## Wi-Fi 与移动数据

- **[Hyper 5G Switch](https://github.com/buffcow/Hyper5GSwitch)** - 在移动网络面板中添加 5G 开关，仅适用于支持 5G 网络并搭载 HyperOS 的设备。`FOSS` `[LSP]`
- **[NetToggle](https://github.com/Dhangofa/NetToggle)** - 快速设置磁贴，通过 root 或 Shizuku 切换蜂窝网络模式（仅 5G、仅 4G/LTE、首选 5G/4G/3G、仅 2G），支持指定双卡中的某一张。`FOSS` | [🌱](https://f-droid.org/packages/com.dhangofa.networktoggle)
- **[Network Switch](https://github.com/aunchagaonkar/NetworkSwitch#installation)** - 用于 4G/5G 网络模式切换的现代 Android 应用。`FOSS` | [🌱](https://apt.izzysoft.de/packages/com.supernova.networkswitch)
- **[Nothing EUICC Force Enabler](https://github.com/reindex-ot/nothing-euicc#note-english)** - 在官方不支持 eSIM 的 Nothing 设备上强制启用 eSIM。`FOSS` `[M]`
- **[VirtualAP](https://github.com/ravindu644/VirtualAP)** - 将已 root 的 Android 手机变成 Wi-Fi 接入点，支持静态网关、可选上游（移动数据、Wi-Fi、以太网或 VPN 隧道）等。`FOSS` `[LSP]`
- **[WiFi Password Manager](https://github.com/Khh-vu/wifi-password-manager)** - 管理 WiFi 密码的简单应用。`FOSS` | [🌱](https://apt.izzysoft.de/packages/io.github.wifi_password_manager)
- **[WiFi Password Viewer for MMRL](https://github.com/Googlers-Repo/wpd)** - 适用于 MMRL 的 WiFi 密码查看器。`FOSS`
- **[Wi‑Fi Passwords Exporter](https://github.com/mlm-games/wifi-exporter)** - 导出 WiFi 密码的 Android 应用。`FOSS`
