# 脚本

本目录包含 awesome-android-root 项目中使用的实用脚本。

## counter.sh

统计应用与模块分类页面（`docs/apps-and-modules/*.md`）中的条目数量，显示分类汇总，并将一个可复制的 Markdown 表格写入 `docs/count.md`。文档构建会在 VitePress 之前运行此脚本，将表格发布到 `/count` 页面。

### 用法

```bash
cd scripts && bash counter.sh
```

## check_links.py

依据 VitePress 的精确 slugify 规则，校验 `docs/` 中所有内部 Markdown 链接和标题锚点（确保锚点的解析方式与站点渲染结果一致）。
跳过代码块内的链接，忽略外部 URL，并放行 `/images/` 资源。

### 用法

```bash
python3 scripts/check_links.py
```
