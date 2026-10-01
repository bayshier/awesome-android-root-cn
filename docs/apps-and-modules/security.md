---
layout: doc
title: "安全"
description: "Root 防火墙、网络过滤器与安全模块，控制应用访问权限并加固已 root 的 Android 设备。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/apps-and-modules/security
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
      content: "安全 | Awesome Android Root"
  - - meta
    - property: og:description
      content: "Root 防火墙、网络过滤器与安全模块，控制应用访问权限并加固已 root 的 Android 设备。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/apps-and-modules/security
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
      content: "安全 | Awesome Android Root"
  - - meta
    - name: twitter:description
      content: "面向已 root Android 的安全工具：安全应用、防火墙与过滤类应用及模块（Magisk、KernelSU、LSPosed），控制应用的网络访问并加固你的设备。"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
---

# 安全

**安全**工具适用于已 root 的 Android 设备——root 应用、Magisk 模块、KernelSU 模块、LSPosed 模块以及
防火墙，用于加固你的设备、控制哪些应用可以访问网络，并审计设备上运行的内容。

> [!TIP]
> 相关页面：[隐私](/apps-and-modules/privacy.md) 介绍数据访问控制与伪装；
> [网络](/apps-and-modules/networking.md) 介绍 VPN、代理与连接工具。


## Firewalls & Filtering

- **[AFWall+](https://github.com/ukanth/afwall)** - 基于 Iptables 的防火墙。 `FOSS` | [🌱](https://f-droid.org/packages/dev.ukanth.ufirewall/) | [▶️](https://play.google.com/store/apps/details?id=dev.ukanth.ufirewall)
- **[Athena](https://github.com/Kin69/Athena)** - Material You（Material 3）防火墙与广告拦截器，在已 root 和未 root 设备上都能无缝工作。 `FOSS` | [▶️](https://play.google.com/store/apps/details?id=com.kin.athena)
- **[De1984 Firewall](https://github.com/dorumrr/de1984)** - 一款面向 Android 设备、注重隐私的防火墙与包管理器。 `FOSS` | [🌱](https://apt.izzysoft.de/fdroid/index/apk/io.github.dorumrr.de1984)
- **[Fyrypt](https://github.com/mirfatif/Fyrypt)** - Android 防火墙，支持 UID + PID 规则、dnscrypt-proxy 管理以及按应用的实时网络监控。 `Proprietary`
- **[Net Switch](https://github.com/Rem01Gaming/net-switch)** - 将任意应用与互联网访问隔离。 `FOSS` `[M]`
- **[NetGuard](https://github.com/M66B/NetGuard)** - 阻止访问互联网。可逐个允许或拒绝应用与地址访问你的 Wi-Fi 和/或移动网络。 `FOSS`
- **[PCAPdroid](https://github.com/emanuele-f/PCAPdroid#pcapdroid)** - 让你跟踪、分析并阻止设备上其他应用发起的连接。 `FOSS` | [🌱](https://f-droid.org/packages/com.emanuelef.remote_capture) | [▶️](https://play.google.com/store/apps/details?id=com.emanuelef.remote_capture)
- **[ShizuWall](https://github.com/AhmetCanArslan/ShizuWall)** - 基于 Shizuku / 本地 ADB 守护进程 / Root 的无 VPN Android 防火墙。 `FOSS` | [🌱](https://f-droid.org/packages/com.arslan.shizuwall/) | [▶️](https://play.google.com/store/apps/details?id=com.arslan.shizuwall)

## Security Tools

> [!NOTE]
> 
> **FLAG_SECURE** 是 Android 中的窗口级安全标志，**可防止窗口内容出现在截图中**或在屏幕录制时被捕获。

- **[⭐ Enable Screenshot](https://github.com/LSPosed/DisableFlagSecure)** - 在通常不允许截图的应用中启用截图，并禁用截图（Android 14+）与屏幕录制（Android 15+）检测。 `FOSS` `[LSP]`
- **[⭐ Flag Secure Patcher](https://github.com/j-hc/FlagSecurePatcher)** - 直接在设备上修补 service.jar，禁用安全标志与截图监听器。 `FOSS` `[M]`
- **[⭐ Move Certificate](https://github.com/ys1231/MoveCertificate)** - 将用户证书移动为系统证书。支持 Android 7-16。 `FOSS` `[M]` `[K]`
- **[⭐ SSL Killer](https://github.com/Xposed-Modules-Repo/com.simo.ssl.killer)** - 绕过多种 SSL 证书固定（SSL pinning）实现。 `Proprietary` `[LSP]`
- **[AlternativeUnlockXposed](https://github.com/leohearts/AlternativeUnlockXposed)** - 使用备用 PIN 解锁你的 Android 手机。 `FOSS` `[LSP]`
- **[Always Trust User Certs](https://github.com/NVISOsecurity/AlwaysTrustUserCerts)** - 一个 Magisk/KernelSU 模块，自动将用户证书添加到系统根 CA 存储中。 `FOSS` `[M]` `[K]`
- **[Android-FlagSecure-Disabler](https://github.com/BlassGO/Android-FlagSecure-Disabler)** - FlagSecure 禁用器、截图观察器禁用器与 DRM 禁用器。 `FOSS` `[M]` `[K]`
- **[Anti SafetyCore](https://github.com/Astoritin/AntiSafetyCore)** - 通过使用不同签名的占位应用占用包名，阻止 Google 悄然安装 Android System SafetyCore 与 Android System Key Verifier。 `FOSS` `[M]` `[K]` `[A]`
- **[Biometric App Lock](https://github.com/hxreborn/biometric-app-lock)** - 为你选择的应用加锁，需通过指纹或面部解锁。 `FOSS` `[LSP]`
- **[Biometric Bypass Module](https://github.com/hxreborn/biometric-bypass)** - 在 Android 10+ 上跳过 System UI 中的生物识别确认步骤，加快面部解锁速度。 `FOSS` `[LSP]` | [🌱](https://f-droid.org/packages/eu.rafareborn.biometricbypass)
- **[CaptureSposed](https://github.com/99keshav99/CaptureSposed)** - 禁用 Android 14 新引入的截图检测 API。 `FOSS` `[LSP]`
- **[Cert-Fixer](https://github.com/pwnlogs/cert-fixer)** - 将自定义 CA 证书安装到 Android 系统证书存储中。 `FOSS` `[M]`
- **[Custom Certificate Authorities](https://github.com/Magisk-Modules-Alt-Repo/custom-certificate-authorities)** - 将用户安装的证书颁发机构移入系统信任存储，使其被所有应用信任。 `FOSS` `[M]`
- **[Custom Certificates](https://github.com/YujiaCheng1996/custom-certificates)** - 一个 Magisk/KernelSU 模块，将自定义证书添加到系统信任存储。 `FOSS` `[M]` `[K]`
- **[Disable usb debugging](https://github.com/Aakif17/disable_usb_debugging)** - 每次重启后自动禁用 USB 调试。 `FOSS` `[M]`
- **[DriFiCrack](https://github.com/ZeltNamizake/DriFiCrack)** - 暴力破解 Wi-Fi 密码的工具。 `FOSS` `[M]`
- **[ih8SecureLock](https://github.com/j-hc/ih8SecureLock)** - 使用 Zygisk 阻止应用拦截并监听你的截图。 `FOSS` `[M]` `[K]`
- **[Just Trust Me Pro](https://github.com/hang666/JustTrustMePro)** - 禁用 SSL 证书校验，用于审计带证书固定的应用。 `FOSS` `[M]`
- **[OneShot Extended](https://github.com/chickendrop89/OneShot-Extended)** - 无需监听模式即可执行多种 WPS 攻击。 `FOSS` `[M]` `[K]`
- **[PinGuard](https://github.com/khiqwq/PinGuard/blob/main/README_EN.md)** - LSPosed 模块，解除屏幕固定应用时需验证指纹 / 密码。 `FOSS` `[LSP]`
- **[SafetyCore Placeholder](https://github.com/daboynb/Safetycore-placeholder)** - 占位 APK，利用签名不匹配阻止 Google SafetyCore 再次安装或更新。 `FOSS`
- **[Simple Flag Secure](https://github.com/ShivamXD6/Simple-Flag-Secure)** - 禁用安全标志（Secure Flag），允许在应用中截图/录屏，支持 KSU/APatch。 `FOSS` `[M]` `[K]`
- **[StrykerOSS](https://github.com/zalexdev/strykerapp)** - 将一套精选的网络、无线与 Web 安全工具打包进单个已 root Android 应用，用于渗透测试。 `FOSS`
- **[TapDucky](https://github.com/iodn/tap-ducky)** - 面向已 root Android 的开源 DuckyScript 运行器，支持 USB Gadget（ConfigFS）。 `FOSS`  | [🌱](https://f-droid.org/en/packages/org.kaijinlab.tap_ducky/)
- **[Zygisk Cacerts](https://github.com/vvb2060/zygisk_cacerts)** - Zygisk 模块，用 AOSP CA 证书列表替换本地根证书存储。 `Proprietary` `[M]` `[K]`
