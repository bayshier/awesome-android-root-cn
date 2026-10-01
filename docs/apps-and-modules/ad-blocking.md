---
layout: doc
title: "广告拦截"
description: "基于 hosts 的广告拦截器、Magisk/KernelSU 模块以及 DNS 工具，在整个 Android 系统范围内拦截应用中的广告、跟踪器与恶意软件。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/apps-and-modules/ad-blocking
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
      content: "广告拦截 | Awesome Android Root"
  - - meta
    - property: og:description
      content: "基于 hosts 的广告拦截器、Magisk/KernelSU 模块以及 DNS 工具，在整个 Android 系统范围内拦截应用中的广告、跟踪器与恶意软件。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/apps-and-modules/ad-blocking
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
      content: "广告拦截 | Awesome Android Root"
  - - meta
    - name: twitter:description
      content: "面向已 root Android 的广告拦截：hosts 文件广告拦截器、广告拦截 Magisk 与 KernelSU 模块、LSPosed 广告拦截器以及 DNS 级过滤工具，可在系统范围内拦截广告与跟踪器。"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
---

# 广告拦截

面向已 root Android 设备的**广告拦截** - root 应用、Magisk 模块、KernelSU 模块、LSPosed 模块以及
基于 hosts/DNS 的工具，可在系统范围内的每个应用和浏览器中拦截广告、跟踪器与恶意软件。

> [!TIP]
> 先阅读我们的 [Android 完整广告拦截教程](/general-guides/android-adblocking.md)，再从下方挑选
> 工具。应用与模块在此合并列出，因为它们解决的是同一个问题——拦截广告。


## 广告与跟踪器拦截

- **[⭐ AdAway](https://github.com/AdAway/AdAway)** - 使用 hosts 文件的开源广告拦截器。无需权限即可拦截广告。`FOSS` | [🌱](https://f-droid.org/packages/org.adaway)
- **[⭐ Bindhosts](https://github.com/bindhosts/bindhosts)** - 适用于 APatch、KernelSU 和 Magisk 的无系统修改 hosts 方案，完全独立并可自我更新。`FOSS` `[M]` `[K]`
- **[AdAway Helper](https://github.com/DEMONNICA/AdAway-Helper)** - 通过 bind mount 和 overlay 管理 /system/etc/hosts，使 AdAway 能在 KernelSU 及其衍生方案上工作。`FOSS` `[M]` `[K]`
- **[AdClose](https://github.com/Xposed-Modules-Repo/com.close.hook.ads/)** - 阻止应用内广告 SDK 的初始加载，并拦截应用的广告请求以屏蔽广告。`Proprietary` `[LSP]`
- **[AdGuard](https://adguard.com/en/adguard-android/overview.html)** - 全面的广告拦截解决方案。`Proprietary` 
- **[BlockAds](https://github.com/pass-with-high-score/blockads-android)** - 系统级广告、跟踪器与恶意软件过滤，自定义拦截列表、按应用控制等。`FOSS` | [🌱](https://f-droid.org/packages/app.pwhs.blockads)
- **[BlockAds Module](https://github.com/pantsufan/BlockAds)** - BlockAds 是一个广告拦截 Magisk 模块。`FOSS` `[M]` `[K]`
- **[Blokada](https://blokada.org/)** - 带 VPN 功能的高级广告拦截器。`Proprietary`
- **[Cubic-AdBlock](https://github.com/Vaz15k/Cubic-AdBlock)** - 基于 hosts 文件的简单广告拦截模块。`FOSS` `[M]`
- **[Discover Ads Filter](https://github.com/hxreborn/discover-ads-filter)** - 在 Pixel Launcher 的 -1 屏幕和 Google 应用内隐藏 Google Discover 信息流中的赞助卡片与广告。`FOSS` `[LSP]`
- **[F*ck AD](https://github.com/hujiayucc/Fuck-AD)** - 广告拦截 Xposed 模块。`FOSS` `[LSP]`
- **[Magical Protection](https://github.com/programminghoch10/MagicalProtection)** - 仅限 Magisk 的完全无系统修改广告拦截。`FOSS` `[M]`
- **[Magisk Ad Blocking Module](https://github.com/pantsufan/Magisk-Ad-Blocking-Module)** - 在 Android 上拦截广告。`FOSS` `[M]`
- **[Marketing Notification Blocker](https://github.com/lm060719/io.mo.mnblocker)** - 拦截并屏蔽烦人的营销广告与垃圾推送通知。`FOSS` `[LSP]`
- **[Re-Malwack](https://github.com/ZG089/Re-Malwack)** - 功能齐全的广告拦截模块，满足你的所有需求。`FOSS` `[M]`
- **[StevenBlock](https://github.com/mikropsoft/StevenBlock)** - 支持 Magisk、KernelSU 和 APatch 的 Android 广告拦截模块。`FOSS` `[M]`
- **[Systemless hosts KernelSU module](https://github.com/symbuzzer/systemless-hosts-KernelSU-module)** - 在 KernelSU 和 APatch 上使用 AdAway 等应用所需的模块。`FOSS` `[K]`
- **[systemless-adblocker](https://github.com/Magisk-Modules-Alt-Repo/systemless-adblocker)** - 源自 gloeyisk/systemless-hosts 的终极广告拦截模块。`FOSS` `[M]`

> [!TIP]
> **相关指南**：[Android 完整广告拦截教程 ↗](../general-guides/android-adblocking.md)  
> 若要在网络层面拦截，另请查看 [DNS 工具](#dns-network-filtering)与[防火墙工具](security.md#firewalls-filtering)

## DNS 与网络过滤

- **[AdGuardHome for Root](https://github.com/twoone-3/AdGuardHomeForRoot/blob/main/README_en.md#adguardhome-for-root)** - 在 Android 上轻松运行 AdGuardHome 的模块。`FOSS` `[M]`
- **[DNS Toggle](https://github.com/ELowry/DNSToggle)** - 一款小巧的 Android 应用，可通过快捷设置面板轻松切换手机的私人 DNS。`FOSS`
- **[ForceDNS Cloudflare](https://github.com/LuferOS/forcedns_Magisk-kernelsu)** - 通过 iptables 强制所有标准 DNS 流量（53 端口）使用 1.1.1.1。覆盖网络 DNS。`FOSS` `[M]` `[K]`
- **[personalDNSfilter](https://github.com/IngoZenz/personaldnsfilter)** - 一款 DNS 过滤代理，可在本地过滤广告、恶意软件与跟踪服务器，支持 DOH、DOT 等安全 DNS 协议以增强隐私。`FOSS` | [🌱](https://f-droid.org/packages/dnsfilter.android/)
- **[Pi-hole-for-Android](https://github.com/DesktopECHO/Pi-hole-for-Android)** - 面向 Android 5.0+ 设备的 Pi-hole/Unbound Raspbian APK 安装器。`FOSS`

> [!TIP]
> 若要在网络层面拦截广告，请将这些工具与我们的[广告拦截器](#ad-tracker-blocking)结合使用。参见[广告拦截指南](../general-guides/android-adblocking.md)。
