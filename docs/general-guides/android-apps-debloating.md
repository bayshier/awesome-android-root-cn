---
title: "Android 精简预装"
description: "使用 App Manager 和 Canta 安全移除 Android 预装软件。包含安全提示的分步教程。"
head:
  - - meta
    - name: author
      content: Awesome Android Root
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: "完整指南：使用 App Manager 与 Canta 安全移除 Android 预装软件"
  - - meta
    - property: og:description
      content: "使用 App Manager 和 Canta 安全移除 Android 预装软件。包含安全提示的分步教程。"
  - - meta
    - property: og:image
      content: https://awesome-android-root.zhoe.org/images/og/android-debloating.png
  - - meta
    - property: og:url
      content: https://awesome-android-root.zhoe.org/general-guides/android-apps-debloating
  - - meta
    - property: og:site_name
      content: Awesome Android Root
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: "完整指南：使用 App Manager 与 Canta 安全移除 Android 预装软件"
  - - meta
    - name: twitter:description
      content: "了解如何使用 App Manager 和 Canta 安全移除 Android 预装软件。包含截图、安全提示和替代应用推荐的分步教程。"
  - - meta
    - name: twitter:site
      content: "@awsm_and_root"
  - - meta
    - name: twitter:creator
      content: "@awsm_and_root"
  - - meta
    - name: twitter:image
      content: https://awesome-android-root.zhoe.org/images/og/android-debloating.png
  - - meta
    - name: twitter:image:alt
      content: Android 精简预装指南 - 安全移除预装软件
  - - meta
    - property: article:published_time
      content: 2026-09-27T00:00:00Z
  - - meta
    - property: article:modified_time
      content: 2026-09-27T00:00:00Z
  - - link
    - rel: canonical
      href: https://awesome-android-root.zhoe.org/general-guides/android-apps-debloating
---

# 如何使用 App Manager 或 Canta 安全移除预装软件

Android 设备通常预装了大量不必要的应用（预装软件/bloatware），它们占用存储空间、消耗电量，还可能侵犯你的隐私。本指南介绍两款安全移除预装软件的强大工具：**App Manager** 和 **Canta**。

## 什么是预装软件（Bloatware）？

预装软件是指那些：
- 由厂商随机附带的应用
- 无法通过常规方式轻松卸载
- 通常包含追踪、广告或无用功能
- 即使未被主动使用也会消耗系统资源
- 可能包括 Google 应用、社交媒体应用、运营商应用和 OEM 工具

## 重要安全信息

⚠️ **警告**：精简预装前务必备份，并了解以下风险：

- **并非真正删除**：系统应用仍保留在 `/system` 分区中，只是对用户禁用
- **恢复出厂设置会还原**：所有被精简的应用在恢复出厂设置后会重新出现
- **依赖风险**：某些系统功能可能依赖这些应用
- **可以恢复**：大多数更改都可以用同样的工具撤销

## 方法 1：App Manager 精简工具

App Manager 内置精简工具，使用全面的 [Android Debloat List](https://github.com/MuntashirAkon/android-debloat-list) 项目提供智能推荐。可在我们的[应用管理合集](../apps-and-modules/system#app-package-management)中找到。

### 系统要求

- 已安装 **App Manager v4.0.0+**
- **root 权限**（[root 教程](../rooting-guides/)）或启用 **ADB 调试**（[设置指南](../rooting-guides/how-to-unlock-bootloader.md#步骤-5测试-adb-连接)）
- Android 5.0+（推荐 Android 7.0+）

### 设置说明

#### root 用户
1. 从 [F-Droid](https://f-droid.org/packages/io.github.muntashirakon.AppManager) 或 [GitHub](https://github.com/MuntashirAkon/AppManager/releases) 安装 App Manager
2. 在提示时授予 root 权限
3. 打开 App Manager - 它会自动检测 root 权限

#### ADB 用户
1. 启用**开发者选项**和 **USB 调试**
2. 将设备连接到电脑并运行：
   ```bash
   adb tcpip 5555
   adb connect <device-ip>:5555
   ```
3. 将 App Manager 的操作模式设置为 **ADB over TCP**

### 使用 App Manager 精简工具

#### 第 1 步：进入精简工具
1. 打开 App Manager
2. 点击右上角的**三点菜单**
3. 选择 **Debloater**

#### 第 2 步：查看预装软件分类
App Manager 按安全级别对应用进行分类：

- **🟢 安全（推荐）**：可以移除，不会出问题
- **🟡 谨慎（进阶）**：可能导致次要功能失效
- **🟠 专家**：可能导致重要功能失效
- **🔴 不安全**：系统不稳定风险高

#### 第 3 步：选择要移除的应用
1. **查看描述**：点击任意应用查看详细信息
2. **检查替代方案**：许多条目会推荐替代应用
3. **从保守开始**：先只处理"安全"类别
4. **使用过滤器**：按 OEM、Google 或运营商应用排序

#### 第 4 步：移除预装软件
1. 使用复选框选择应用
2. 点击底部的**卸载**按钮
3. 选择移除方式：
   - **卸载**：对所有用户移除（推荐）
   - **禁用**：保留应用但阻止其运行

#### 第 5 步：创建备份配置（可选）
1. 前往 **Profiles** 页面
2. 用选定的精简应用创建新配置
3. 保存以便需要时轻松恢复

### 高级功能

#### 批量操作
- 同时移除多个应用
- 导出/导入精简配置
- 在多台设备上应用配置

#### 组件拦截
对于无法完全移除的应用：
1. 在**应用详情**中打开该应用
2. 前往 **Components** 标签页
3. 拦截特定**追踪器**或**服务**
4. 应用规则以阻止后台活动

## 方法 2：Canta（基于 Shizuku）

Canta 是一款现代、易用的精简工具，借助 Shizuku 框架无需 root 即可工作。

### 系统要求

- **Android 9.0+**（API 级别 28+）
- 已安装并激活 **Shizuku** 应用
- 已安装 **Canta** 应用

### 设置说明

#### 第 1 步：安装 Shizuku
1. 从 Play Store 下载 [Shizuku](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api)
2. 启用**开发者选项**和 **USB 调试**
3. 连接电脑并运行：`adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh`
4. 或在 Android 11+ 上使用**无线 ADB**

#### 第 2 步：安装 Canta  
下载来源：
- [F-Droid](https://f-droid.org/en/packages/io.github.samolego.canta/)
- [GitHub Releases](https://github.com/samolego/Canta/releases)
- [Google Play Store](https://play.google.com/store/apps/details?id=io.github.samolego.canta)（测试中）

### 使用 Canta

#### 第 1 步：验证 Shizuku 连接
1. 打开 Canta
2. 确保已授予 Shizuku 权限
3. 检查是否显示绿色"已连接"状态

#### 第 2 步：浏览和筛选应用
1. **搜索**：使用搜索栏查找特定应用
2. **筛选**：在全部/系统/用户应用之间切换
3. **分类**：按应用类型或 OEM 查看

#### 第 3 步：查看应用信息
Canta 为每个应用显示详细信息：
- **包名**和**描述**
- 来自 Universal Debloat List 的**安全评级**
- **替代建议**（如有）
- **依赖关系**和**警告**

#### 第 4 步：移除预装软件
1. **长按**应用或使用**复选框选择**
2. 点击**垃圾桶/删除图标**
3. 在对话框中确认移除
4. 应用将对当前用户卸载

#### 第 5 步：监控已移除的应用
- **"查看已卸载"** 标签页会显示已移除的应用
- 如果出现问题，可**恢复**任意应用
- **自动检测**可发现之前移除的应用

### Canta 高级功能

#### 批量选择
- **全选**按钮用于批量操作
- **先筛选再选择**实现定向移除
- 使用复选框**多选**

#### 安全特性
- **没有无限重启风险** - 系统分区不会被改动
- **可恢复** - 轻松撤销更改
- **依赖警告** - 提示应用之间的关联

## 安全精简预装的最佳实践

### 精简前检查清单

1. **✅ 充分调研**：了解每个应用的用途
2. **✅ 从小着手**：初期只移除明显的预装软件
3. **✅ 创建备份**：记录已移除的应用以便恢复
4. **✅ 测试功能**：移除后验证核心功能正常
5. **✅ 保留工具**：保持 ADB/root 权限以便修复

### 推荐移除顺序

#### 阶段 1：明显安全的应用
- **社交媒体**（Facebook、Instagram、Twitter）
- **游戏**和**娱乐**应用
- **运营商预装软件**（运营商专属应用）
- **OEM 重复应用**（存在 Google 等价应用时）

#### 阶段 2：进阶移除
- 不使用的 **Google 应用**（Google 图书、Movies 等）
- **助手/AI 功能**（Google Assistant、Bixby）
- 不需要的**云服务**（如已使用替代品，则移除 Google Drive）

#### 阶段 3：专家级
- **系统 UI 元素**（某些主题、壁纸）
- **备份/同步服务**（如已使用替代品）
- **无障碍服务**（如未使用）

### 绝不可移除的应用

❌ **关键系统组件**：
- Android System/System UI
- 电话/拨号应用
- 设置应用
- 软件包安装器
- 核心 Google Play 服务（如果使用 Play Store）

## 常见问题故障排除

### 移除后应用仍然出现
**原因**：应用被禁用但未完全移除  
**解决方案**：
- 在 App Manager 中尝试"为所有用户卸载"
- 使用 ADB 命令：`adb shell pm uninstall --user 0 package.name`

### 功能停止工作
**原因**：移除了被依赖的应用
**解决方案**：
1. 检查最近移除的应用
2. 逐个恢复最近的移除项
3. 每次恢复后测试功能

### 无限重启（罕见）
**原因**：移除了关键系统应用
**解决方案**：
1. 启动到 Recovery 模式（电源键 + 音量键）
2. 执行恢复出厂设置
3. 所有被移除的应用将被还原

### ADB 连接问题
**原因**：网络或权限问题  
**解决方案**：
- 重启 ADB 守护进程：`adb kill-server && adb start-server`
- 重新启用 USB 调试
- 更换 USB 端口/数据线

## 替代应用与替换方案

移除 OEM 应用时，可以考虑以下开源替代品（在我们的[应用合集](../apps-and-modules/)中探索更多）：

### 核心应用
- **桌面启动器**：[Lawnchair](https://lawnchair.app/)、[Nova Launcher](https://novalauncher.com/)（参见[更多启动器](../apps-and-modules/customization#launchers-home-screen)）
- **相册**：[Fossify Gallery](https://github.com/FossifyOrg/Gallery)
- **文件管理器**：[Material Files](https://github.com/zhanghai/MaterialFiles)（参见[文件管理器](../apps-and-modules/file-management#文件管理器)）
- **相机**：[Open Camera](https://opencamera.sourceforge.io/)

### 通信
- **短信**：[QUIK SMS](https://github.com/quik-sms/quik)
- **邮件**：[FairEmail](https://email.faircode.eu/)、[K-9 Mail](https://k9mail.app/)
- **浏览器**：[Firefox](https://www.mozilla.org/en-US/firefox/mobile/)、[Brave](https://play.google.com/store/apps/details?id=com.brave.browser)

### 生产力
- **笔记**：[Standard Notes](https://standardnotes.com/)、[Joplin](https://joplinapp.org/)
- **日历**：[Simple Calendar](https://github.com/SimpleMobileTools/Simple-Calendar)
- **键盘**：[HeliBoard](https://github.com/HeliBorg/HeliBoard)

## 监控与维护

### 定期维护任务

1. **检查新增预装软件**：系统更新后进行检查
2. **监控电量消耗**：确保被移除的应用没有在运行
3. **更新精简列表**：保持 App Manager 为最新版本以获取最新推荐
4. **测试核心功能**：定期验证所有重要功能正常

### 性能收益

成功精简预装后，你应该会注意到：
- **开机更快**
- **续航提升**（另见[电池优化应用](../apps-and-modules/performance)）
- **可用存储更多**
- **后台流量减少**
- **垃圾通知更少**

如需进一步提升性能，请查看[性能优化应用](../apps-and-modules/performance#性能优化)。

## 高级技巧

### 在 App Manager 中使用配置

创建可复用的精简配置：

1. **创建配置**：前往 Profiles → New Profile
2. **添加应用**：选择预装软件包
3. **配置操作**：设为"卸载"或"禁用"
4. **保存并应用**：保存配置以备将来使用
5. **导出配置**：在多台设备间共享配置

### 命令行精简

面向高级用户的直接 ADB 命令：

```bash
# 列出所有软件包
adb shell pm list packages

# 卸载特定软件包
adb shell pm uninstall --user 0 com.example.bloatware

# 禁用软件包
adb shell pm disable-user --user 0 com.example.bloatware

# 恢复软件包
adb shell cmd package install-existing com.example.bloatware
```

## 结语

App Manager 和 Canta 都为安全的 Android 精简预装提供了出色的方案：

- 需要全面功能、是 root 用户或需要高级自定义时，**选择 App Manager**
- 追求简洁、现代界面且无需 root 时，**选择 Canta**

请记得：
- 从明显的预装软件开始，保守行事
- 移除前调研每个应用
- 保留恢复工具
- 精简后测试功能

只要谨慎操作并使用合适的工具，你就可以在保持系统稳定的同时，通过移除不必要的预装软件，显著提升 Android 设备的性能和隐私。

## 相关指南

- [Android 设备 Root 教程](../rooting-guides/) - 获取 root 权限以进行深度精简
- [ADB 设置指南](../rooting-guides/how-to-unlock-bootloader.md#步骤-5测试-adb-连接) - 启用 USB 调试
- [全系统广告拦截](./android-adblocking.md) - 精简后拦截广告
- [应用管理工具](../apps-and-modules/system#app-package-management) - 更多应用控制方案
- [性能优化应用](../apps-and-modules/performance#性能优化) - 进一步提速
- [备份方案](../apps-and-modules/backup#backup-restore) - 精简前保护你的数据
