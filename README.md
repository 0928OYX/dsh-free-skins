# 🎨 DSH 免费皮肤插件 · dsh-free-skins

**人人有免费皮肤 · 自定义皮肤界面** —— DeepSeek Harness 界面皮肤插件：7 款原创免费皮肤 + 皮肤画廊 + 一键应用（无需重启）+ 自定义对话区背景。

> 只做呈现：只改变浏览器 DOM 与样式，不触及模型请求。

## ✨ 皮肤一览

| | 皮肤 | 说明 |
|---|---|---|
| ![樱歌 · 神社巫女](preview/sakura-miko.svg) | **樱歌 · 神社巫女** | 樱粉朱红 · 垂樱神社 · 花瓣飘落 |
| ![星语 · 星尘魔女](preview/stella-witch.svg) | **星语 · 星尘魔女** | 深紫星夜 · 金色月牙 · 星尘漂浮 |
| ![凛霜 · 苍雪剑姬](preview/azure-blade.svg) | **凛霜 · 苍雪剑姬** | 冰蓝银白 · 雪山雪原 · 飘雪动画 |
| ![绯月 · 蔷薇千金](preview/scarlet-noir.svg) | **绯月 · 蔷薇千金** | 绯红黑金 · 哥特庄园 · 烛台血月 |
| ![薄荷 · 猫娘茶会](preview/mint-catgirl.svg) | **薄荷 · 猫娘茶会** | 薄荷奶油 · 花园茶会 · 肉垫铃铛 |
| ![琥珀 · 炼金少女](preview/gold-alchemist.svg) | **琥珀 · 炼金少女** | 琥珀青铜 · 炼金工房 · 齿轮炼成阵 |
| ![守岸人](preview/shorekeeper.svg) | **守岸人** | 海雾蓝紫 · 浪纹晶光 · 冰晶飘落 |



## 🖥️ 新会话页预览

「守岸人」主题下的新会话页面实景效果：桌面壁纸铺进对话区 + 海雾蓝紫界面 + 漂浮晶光。

![守岸人新会话页（实景合成）](preview/session-shorekeeper-poster.jpg)

> 上图壁纸为《鸣潮》（Wuthering Waves，库洛游戏）官方宣传图「守岸人」，版权归原权利方所有，仅用于本仓库宣传展示。

矢量示意图：[preview/session-shorekeeper.svg](preview/session-shorekeeper.svg)

## 🌈 主题实景预览

每款皮肤的界面效果（亮色主题）：

| 樱歌 · 神社巫女 | 星语 · 星尘魔女 | 凛霜 · 苍雪剑姬 |
|---|---|---|
| ![樱歌](preview/theme/sakura-miko.svg) | ![星语](preview/theme/stella-witch.svg) | ![凛霜](preview/theme/azure-blade.svg) |

| 绯月 · 蔷薇千金 | 薄荷 · 猫娘茶会 | 琥珀 · 炼金少女 |
|---|---|---|
| ![绯月](preview/theme/scarlet-noir.svg) | ![薄荷](preview/theme/mint-catgirl.svg) | ![琥珀](preview/theme/gold-alchemist.svg) |

| 守岸人 |
|---|
| ![守岸人](preview/theme/shorekeeper.svg) |

> 第 1 项皮肤为 **DeepSeek Harness 官方默认**（不应用任何皮肤，版权归 DeepSeek）。其余 7 款为 0928OYX 原创免费皮肤。

## 🚀 功能特性

- **界面皮肤画廊**：设置 → 界面皮肤，卡片式管理，先「试穿」后「应用」。
- **一键应用，无需重启**：桌面端现场挂载即时生效；CLI 表面自动热重载；每次打开页面自动恢复已应用皮肤。
- **皮肤不透明度**：0-100% 滑块调节整体不透明度 —— 100% 为原图，50% 半透明，0% 全透明。
- **自定义对话区背景**：选择本机任意图片作为对话区壁纸，固定不随对话滚动；支持按对话区画幅「框选裁剪」，适配不同屏幕；自动保存。
- **原创免费皮肤**：全部界面美术、装饰与动画为本仓库原创，不含任何第三方角色形象素材。
- **右键输入菜单**：聊天/输入框支持右键「粘贴 / 复制 / 剪切 / 全选」（桌面端原生右键菜单被禁用时的替代方案）。

## 📦 安装

### 懒人版

对你的 dsh 说：

```text
安装一下这个皮肤插件：https://github.com/0928OYX/dsh-free-skins
```

### 手动部署（推荐）

```sh
git clone https://github.com/0928OYX/dsh-free-skins
cd dsh-free-skins
node scripts/deploy.mjs desktop     # 默认部署到 desktop profile
```

部署后重启一次 DSH Desktop（或刷新页面），打开 设置 → 界面皮肤 即可使用。详见 [docs/INSTALL.md](docs/INSTALL.md)。

## 🛠 开发

```sh
npm install
node scripts/generate-skins.mjs        # 从 skins/*/definition.mjs 重新生成皮肤包
node scripts/smoke-skin.mjs shorekeeper
node scripts/smoke-gallery.mjs
node scripts/check-css.mjs
node scripts/generate-previews.mjs    # 重新生成 preview/*.svg 宣传图
```

皮肤包由 `scripts/generate-skins.mjs` 从 `skins/<id>/definition.mjs` 生成；`lib/` 与 `skin.json` 是提交产物，请勿手动修改。

## 📄 许可与署名

- 本仓库（插件、皮肤画廊、7 款原创皮肤与工具脚本）作者：**0928OYX**，以 **CC BY-NC-SA 4.0**（署名-非商业性使用-相同方式共享）发布，详见 [LICENSE](LICENSE) 与 [NOTICE](NOTICE)。
- 「DeepSeek Harness 默认」为官方默认外观，版权归 DeepSeek（其官方仓库为 MIT 许可）。
- 守岸人皮肤的设计灵感来自游戏《鸣潮》（库洛游戏）的角色「守岸人」；本仓库**不内置任何第三方角色形象、宠物形象或图片素材**，角色版权归原权利方所有。
- 皮肤工程思路参考 [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)（致谢）。

## 🧑‍💻 给开发者的启发

这套皮肤系统特意做得**极简可扩展**，欢迎 fork、借鉴与二次创作：

- **皮肤 = 一个文件**：每个皮肤就是一个 `skins/<id>/definition.mjs`（配色、背景、角落装饰、粒子动画全声明式），运行 `node scripts/generate-skins.mjs` 即生成完整皮肤包（lib/、skin.json、NOTICE）。
- **零构建依赖**：画廊插件 `skin-gallery/lib/client.js` 是手写 bundle，无任何构建链，可直接阅读与修改。
- **可插拔接入**：通过 DSH 皮肤中心注册（`@linxin666/dsh-client-ui-skin-*` 注册表 + managed 区段互斥），不做任何侵入式改动。
- 想贡献？欢迎提 [Issues](https://github.com/0928OYX/dsh-free-skins/issues) 或 PR。

## 📬 反馈

皮肤体验问题或建议请在 [Issues](https://github.com/0928OYX/dsh-free-skins/issues) 提出。

