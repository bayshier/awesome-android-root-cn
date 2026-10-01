---
layout: doc
title: "音频"
description: "面向已 root Android 的音频应用与模块：系统级音频增强（Viper 风格处理、Dolby 等）、音频控制与音效工具。"
head:
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/apps-and-modules/audio
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
      content: "音频 | Awesome Android Root"
  - - meta
    - property: og:description
      content: "面向已 root Android 的音频应用与模块：系统级音频增强（Viper 风格处理、Dolby 等）、音频控制与音效工具。"
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/apps-and-modules/audio
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
      content: "音频 | Awesome Android Root"
  - - meta
    - name: twitter:description
      content: "面向已 root Android 的音频应用与模块：系统级音频增强（Viper 风格处理、Dolby 等）、音频控制与音效工具。"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og.png
---

# 音频

面向已 root Android 设备的**音频**应用与模块 - 系统级**音频增强**（Viper 风格
处理、Dolby 等）、音频控制工具与音效。以下所有条目不分应用、Magisk 模块、KernelSU 模块还是
LSPosed 模块，均合并列出。


## 音频控制

- **[Audio jitter silencer](https://github.com/Magisk-Modules-Alt-Repo/audio-jitter-silencer)** - 为避免所有数字音频输出出现失真，它会禁用音频抖动发生器（涉及耗电与优化，以及无线连接）。`FOSS` `[M]`
- **[DisableAudioFocus](https://github.com/auag0/DisableAudioFocus)** - 允许你禁用音频焦点，从而同时播放多个视频和音频。`FOSS` `[LSP]`
- **[HuaweiPods](https://github.com/Nshpiter/HuaweiPods)** - 面向 Xiaomi HyperOS 的华为音频设备集成。`FOSS` `[LSP]`
- **[LibrePods](https://github.com/kavishdevar/librepods)** - 在非 Apple 设备上解锁 Apple 独占的高级 AirPods 功能。`FOSS` `[LSP]` `[M]` `[K]`
- **[SonyPods](https://github.com/Mercury000/SonyPods)** - 面向 HyperOS 设备的系统级 Sony 耳机控制。`FOSS` `[LSP]`

## 音效

- **[Audio Misc Settings](https://github.com/Magisk-Modules-Alt-Repo/audio-misc-settings)** - 用于设置各种音频配置值（媒体音量步进（100 步）、提高重采样质量、禁用音效框架等）`FOSS` `[M]`
- **[Audio SampleRate Changer](https://github.com/Magisk-Modules-Alt-Repo/audio-samplerate-changer)** - 在系统级混音器上更改音频采样率的 Magisk 模块，带来最佳 Hi-Fi 体验。`FOSS` `[M]`
- **[DSP AudioFix](https://github.com/ahmed-alnassif/DSP-AudioFix)** - 修复搭载 Awinic 智能功放的小米/联发科设备音频失真的简单方案。`FOSS` `[M]` `[K]`
- **[Hi-Res Audio Enabler](https://github.com/reiryuki/Hi-Res-Audio-Enabler-Magisk-Module)** - 如果设备支持，则启用 24 或 32 位宽的高分辨率音频输出。`FOSS` `[M]`
- **[Hifi-maximizer-mod](https://github.com/yzyhk904/hifi-maximizer-mod)** - 通过减少音频输出（USB DAC、蓝牙 a2dp、DLNA 等）上的抖动，最大化数字音频保真度。`FOSS` `[M]`
- **[High Performance DAC](https://github.com/ahkehra/high_perf_dac)** - 面向高通设备的内核级音频调校模块，提供更佳的音质与性能。`FOSS` `[K]`

## 音频增强

- **[⭐ ViPERFX_RE](https://github.com/likelikeslike/ViPERFX_RE)** - ViPER4Android FX 的分支，拥有重新设计的界面和附加功能。`FOSS` `[M]` `[K]`
- **[Audio Modification Library Ryuki Mod](https://github.com/reiryuki/Audio-Modification-Library-Ryuki-Mod-Magisk-Module)** - 让受支持的音频模块共享所需的相同文件，例如 audio_effects。`FOSS` `[M]`
- **[Equalizer314](https://github.com/bearinmindcat/Equalizer314)** - 系统级均衡器，带多频段压缩、限制器和音频可视化反馈。`FOSS` `[M]`
- **[JamesDSP](https://github.com/james34602/JamesDSPManager)** - 构建在 Android 系统框架层之上的音频 DSP 音效。该仓库包含一套专为音频处理打造的高质量 DSP 算法。`FOSS` `[M]`
- **[NLSound](https://github.com/Briclyaz/NLSound_module_QCom)** - 改善骁龙（Snapdragon）SoC 设备音频与麦克风音质的 Magisk 模块。`FOSS` `[M]`
- **[ViPER4Android FX Redesign](https://github.com/WSTxda/ViperFX-RE-Releases)** - 通过均衡器设置、环绕声音效、低音增强等特性提升音质。`Proprietary` `[M]`
