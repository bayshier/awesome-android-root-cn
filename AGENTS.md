# AGENTS.md

本指南面向在 `awesome-android-root` 中工作的编码代理与自动化贡献者。

## 1. 仓库基础

* 这是一个由社区精心维护的 Android root 知识库和 VitePress 文档站点。
* 主要内容位于 `docs/`。
* `docs/apps-and-modules/` 中的应用与模块列表是唯一事实来源。
* `README.md` 是索引和落地页，不是重复的数据库。
* 站点配置和主题代码位于 `docs/.vitepress/` 之下。
* 校验工具位于 `scripts/` 之下。
* 贡献指南见 `CONTRIBUTING.md`。
* 优先做小而聚焦、易于审查的修改。
* 除非有明确理由，否则保留现有约定。
* 绝不编造事实、链接、兼容性声明、许可证、发布版本、CVE 或项目状态。

## 2. 编辑之前

1. 阅读相关文件及其上下文内容。
2. 搜索重复项、别名、引用和受影响的标题。
3. 检查现有的分类体系和格式约定。
4. 根据权威的上游来源核实重要的技术声明。
5. 做出能完全解决任务的最小修改。

除非被明确要求，否则不要重写无关内容或进行大范围清理。

## 3. 应用与模块

对于 `docs/apps-and-modules/` 中的条目：

* 将每个项目放入与其用途最匹配的分类。
* 优先使用现有分类，而不是新建分类。
* 不要重复收录已有项目。
* 保持分类、子分类和条目的排序一致。
* 遵循现有约定：推荐条目在前，其后按字母顺序排列。
* 优先使用权威链接，通常为：

  1. GitHub
  2. F-Droid
  3. 官方网站
  4. Google Play
* 保持描述简短、客观且具技术性。
* 避免宣传性语言和缺乏依据的最高级形容。
* 仅在经过核实后使用框架标签：
  `[M]` Magisk、`[K]` KernelSU、`[A]` APatch、`[LSP]` LSPosed/Xposed。
* 仅当源码和许可证支持时才标记 `FOSS`。
* 应用商店徽章必须指向正确的应用。
* 在未理解 `⭐` 现有含义的情况下，不要添加或删除它。

典型格式：

```markdown
- **[Name](link)** - Short factual description. `FOSS` `[M]`
```

## 4. 技术与 root 内容

root 操作说明可能导致数据丢失、bootloop（无限重启）或设备损坏。

核实涉及以下内容的声明：

* Android 与设备兼容性
* Bootloader 与分区要求
* `boot`、`init_boot`、`vendor_boot` 和固件
* Magisk、KernelSU、APatch、Zygisk、LSPosed/Xposed
* Play Integrity、SafetyNet、root 隐藏、Knox、OTA 和加密
* 漏洞利用、CVE、安全行为和维护状态

对于特定设备的指南，请核实确切的机型、Android 版本、分区布局、Bootloader 状态、镜像类型、刷入方法和 Recovery 操作流程。

没有依据时，绝不要将特定设备的操作说明泛化。

不要弱化有关备份、数据丢失、变砖、固件不匹配或安全影响的警告。

命令必须先被充分理解且确实相关，才能添加。

## 5. Markdown、链接与导航

* 除非任务要求变更，否则保留 frontmatter 和元数据。
* 不要随意修改 SEO、JSON-LD、canonical URL 或社交元数据。
* 将标题和生成的锚点视为公开接口。
* 在重命名或移动标题之前，先搜索其锚点的引用。
* 保持 VitePress 导航和侧边栏与页面结构同步。
* 删除资源、脚本或配置之前，先检查是否存在引用。
* 保留自定义 Markdown 插件及其预期行为。
* 不要在 Markdown 渲染中引入共享的可变状态。

对于内部链接：

```bash
python3 scripts/check_links.py
```

外部链接应当权威，并在相关时经过核实。

## 6. 站点与代码变更

本项目使用 Node.js、VitePress、Markdown/YAML、JavaScript、Python 和 Bash。

使用 `package.json` 中的现有命令：

```bash
bun run docs:dev
bun run docs:build
bun run docs:preview
```

修改 JavaScript 时：

* 使用现代 ECMAScript 语法。
* 优先使用 `const` 和 `let`。
* 保持函数聚焦且行为确定。
* 避免不必要的依赖和抽象。
* 除非确需变更，否则保留现有行为。

变更依赖时，先检查现有依赖再添加新依赖。

## 7. 校验

对于文档变更：

```bash
python3 scripts/check_links.py
bun run docs:build
```

对于 Cloudflare Pages，使用 `bun run docs:build` 作为构建命令，
`docs/.vitepress/dist` 作为输出目录。构建环境固定为
Bun 1.4.2 和 Node.js 22 或更新版本。

对于应用/模块的新增或重新排序，相关时也请运行：

```bash
bash scripts/counter.sh
```

对于站点配置或主题变更，请构建站点，并在可行时手动检查受影响的行为。

仅有构建成功并不能证明事实正确性或外部链接的有效性。

## 8. 贡献

保持每一次贡献聚焦且易于审查。

一个好的 PR 应当说明：

* 改了什么
* 为什么改
* 验证了什么
* 任何相关的不确定性

提交信息应描述实际的变更，例如：

```text
add Battery Monitor to performance tools
fix broken customization link
sort app-modification categories
update KernelSU guide links
```

避免使用 `update stuff` 或 `changes` 这类含糊的信息。

遵循现有的 issue 和 PR 模板。

## 9. AI 辅助工作

AI 可用于辅助实现、格式化、校对和机械性维护。

以下事项需要人类判断：

* 项目收录
* 分类归属
* 推荐
* 技术声明
* 兼容性
* 可信度
* 许可证
* 关于上游行为的表述

不要将生成的文本当作证据。

不要生成凑数内容、虚假的完整性、重复的摘要或程式化的文字。

## 10. 范围与安全

不要自动执行以下操作：

* 重写无关的描述
* 重新格式化无关的文件
* 升级依赖
* 重新设计导航
* 更改 SEO 元数据
* 无理由替换链接
* 为单个条目新增分类
* 引入框架或工具
* 执行无关的重构

对于大规模结构性变更，请在适用时核验重要的不变量，例如条目数量、链接、锚点、分类以及应保持不变的内容。

绝不提交密钥、凭据、令牌或私有认证数据。

在 GitHub Actions 中保持最小权限。

## 11. 风格

* 行文简洁、自然、客观。
* 避免营销语言和缺乏依据的说法，例如“通用”“无法检测”“100% 兼容”或“完全安全”。
* 仅在表情符号已有既定语义用途的地方使用它们。
* 不要添加装饰性格式。
* 绝不使用破折号字符（`—`）。

## 12. 完成的定义

收尾之前：

* 修改位于正确的位置。
* 未引入重复或缺乏依据的声明。
* 链接、分类、标签和徽章正确无误。
* 相关锚点和导航仍然有效。
* 所需的校验已通过。
* 最终 diff 中不包含无关的编辑。
* 结果简洁、可维护，且与整个仓库保持一致。

**核心原则：** 相比大规模、臆测性或看似惊艳的变更，优先选择准确、简洁、有出处且可维护的变更。
