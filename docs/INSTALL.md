# 安装指南

## 前提

- 已安装 DeepSeek Harness 桌面端（DSH Desktop）或 CLI（`dsh web`）。
- 插件通过皮肤中心注册到 DSH 的 `<profile>`（默认 `desktop`）目录。

## 一键部署

```sh
git clone https://github.com/0928OYX/dash-free-skins-Owner-0928OYX
cd dsh-free-skins
node scripts/deploy.mjs desktop     # 默认 profile 为 desktop
```

`deploy.mjs` 幂等地完成：

1. 把 `skins/*` 复制进 `~/.dsh/profiles/<profile>/node_modules/@linxin666/dsh-client-ui-skin-<id>`（皮肤中心注册表扫描位置）。
2. 把 `skin-gallery` junction 进 `~/.dsh/profiles/<profile>/node_modules/@dsh-external/dsh-client-ui-skin-gallery`。
3. 在 profile 的 `cordis.patch.yml` 追加画廊插件的 insert 行。

部署后**重启 DSH Desktop 一次**（或刷新页面）即可在
设置 → 界面皮肤 中看到皮肤画廊。

## 懒人版（对 DSH 说）

> 安装一下这个皮肤插件：https://github.com/0928OYX/dash-free-skins-Owner-0928OYX

## 皮肤互斥与应用

- 皮肤之间互斥：由皮肤中心 `dsh-skin use <id>` 统一管理。
- 应用皮肤后**无需重启**：桌面端由画廊现场挂载即时生效；CLI 表面自动热重载。
- 每个皮肤包也可单独作为 bundle 安装（见各 `skins/<id>/cordis.patch.yml`）。

## 开发脚本

```sh
npm install                     # 安装 jsdom/react（仅运行冒烟测试需要）
node scripts/generate-skins.mjs # 从 skins/*/definition.mjs 重新生成皮肤包
node scripts/smoke-skin.mjs shorekeeper
node scripts/smoke-gallery.mjs
node scripts/check-css.mjs
node scripts/generate-previews.mjs   # 生成 preview/*.svg 宣传图
```
