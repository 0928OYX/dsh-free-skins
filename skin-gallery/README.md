# skin-gallery · 界面皮肤画廊插件

在 DSH Web GUI 的设置栏「模型」与「插件」之间注册「界面皮肤」栏目，统一管理皮肤：

| # | 皮肤 | 说明 |
|---|---|---|
| 1 | DeepSeek Harness 默认 | 官方默认外观，不应用任何皮肤 |
| 2-8 | 原创免费皮肤 | 樱歌（巫女）/ 星语（魔女）/ 凛霜（剑姬）/ 绯月（千金）/ 薄荷（猫娘）/ 琥珀（炼金）/ 守岸人（海岸主题），见 [`skins/`](../skins/) |

## 能力

- **试穿**：通过皮肤中心的真实 bundle 路由（`/api/skin-center/bundle/<id>`）现场挂载皮肤，退出即完全还原；也支持「试穿官方默认」。关闭设置对话框后试穿保持生效。
- **应用**：调用皮肤中心的 `/api/skin-center/apply`，等价于 `dsh-skin use <id>` / `use official`——写入 `~/.dsh/cordis.patch.yml` 的 managed 区段。支持 Cordis HMR 的表面（CLI）热重载后刷新；**桌面端由画廊现场挂载皮肤即时生效，无需重启**——每次打开页面也会按 patch 自动恢复已应用皮肤。
- **皮肤不透明度**：0-100% 滑块调节当前选中皮肤的整体不透明度（背景、角落装饰、飘落动画与对话区壁纸联动）：100% 为原图，50% 为半透明，0% 为全透明。
- **对话区背景**：选择本机任意图片作为对话区背景（任何皮肤通用，自动保存），壁纸**固定不随对话滚动**（类似桌面壁纸）；支持「框选裁剪」——按对话区画幅比例拖动白色选框自由选择图片区域，适配不同屏幕大小；未选择时保持皮肤默认。
- 皮肤只做呈现：只改变浏览器 DOM 与样式，不触及模型请求。

## 安装与部署

```sh
node scripts/deploy.mjs desktop
```

`deploy.mjs` 做三件事（幂等）：

1. 把 `skins/*` 包复制进 `<profile>/node_modules/@linxin666/dsh-client-ui-skin-<id>`（皮肤中心的注册表扫描位置，必须是真实目录，符号链接会被跳过）。
2. 把本插件 junction 进 `<profile>/node_modules/@dsh-external/dsh-client-ui-skin-gallery`（供 Loader 解析）。
3. 在 profile 的 `cordis.patch.yml` 追加 insert 行（`ui-app-skin-gallery`）——**不**写入 `dsh.profile.bundles`，避免与 bundle 补丁重复注册。

皮肤本身不进 profile 清单：它们只通过皮肤中心的 managed 区段互斥激活。

## 结构

- `lib/index.js` — 宿主入口（no-op，纯浏览器插件）。
- `lib/client.js` — 手写 bundle（零构建依赖）：注册 `settings.section`（id `skin-gallery`，order 12），内含卡片缩略图、试穿/应用控制器、皮肤不透明度与对话区背景（选图/裁剪/固定壁纸）功能。

## 许可

CC BY-NC-SA 4.0。卡片缩略图与全部界面美术为本仓库原创（见 `NOTICE`）。
