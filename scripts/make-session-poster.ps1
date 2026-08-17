﻿# Generate the "new conversation page" promotional poster:
# DSH UI mockup composited over the official Wuthering Waves "Shorekeeper" wallpaper.
# Usage: powershell -File scripts/make-session-poster.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$wallPath = 'C:/Users/28974/Desktop/【哲风壁纸】守岸人-游戏角色.jpg'
$outPath = Join-Path (Split-Path -Parent $PSScriptRoot) 'preview/session-shorekeeper-poster.jpg'
$wall = [System.Drawing.Image]::FromFile($wallPath)

$W = 1280; $H = 720
$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# 1) wallpaper, cover-cropped
$scale = [Math]::Max($W / $wall.Width, $H / $wall.Height)
$dw = [int]($wall.Width * $scale); $dh = [int]($wall.Height * $scale)
$g.DrawImage($wall, [int](($W - $dw) / 2), [int](($H - $dh) / 2), $dw, $dh)

function C($r,$g,$b,$a){ [System.Drawing.Color]::FromArgb($a,$r,$g,$b) }
function Brush($c){ New-Object System.Drawing.SolidBrush($c) }
$veil = Brush (C 238 245 252 92)
$g.FillRectangle($veil, 0, 0, $W, $H)

# 2) sidebar
$g.FillRectangle((Brush (C 232 242 252 235)), 0, 0, 200, $H)
$g.FillRectangle((Brush (C 143 180 228 120)), 200, 0, 2, $H)
$g.FillEllipse((Brush (C 95 127 224 255)), 20, 22, 28, 28)
$fontDsh = New-Object System.Drawing.Font('Microsoft YaHei', 12, [System.Drawing.FontStyle]::Bold)
$fontNav = New-Object System.Drawing.Font('Microsoft YaHei', 12)
$fontTitle = New-Object System.Drawing.Font('Microsoft YaHei', 15, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font('Microsoft YaHei', 12)
$fontSmall = New-Object System.Drawing.Font('Microsoft YaHei', 10)
$white = Brush ([System.Drawing.Color]::White)
$ink = Brush (C 28 51 85 255)
$inkSoft = Brush (C 74 100 136 255)
$inkFaint = Brush (C 128 152 184 255)
$accent = Brush (C 95 127 224 255)
$accentBright = Brush (C 79 116 232 255)
$g.DrawString('DSH', $fontDsh, $white, 22, 26)
$g.DrawString('DeepSeek Harness', $fontTitle, $ink, 58, 26)
$nav = @(@('会话',$true),@('工作区',$false),@('模型',$false),@('皮肤',$false),@('插件',$false))
for ($i=0; $i -lt $nav.Count; $i++) {
  $y = 84 + $i * 44
  if ($nav[$i][1]) { $g.FillRectangle((Brush (C 219 233 251 255)), 12, $y, 176, 34) }
  $c = if ($nav[$i][1]) { $accent } else { $inkSoft }
  $g.DrawString($nav[$i][0], $fontNav, $c, 28, $y + 7)
}

# 3) hero title + subtitle (centered over main area x=740)
$sf1 = New-Object System.Drawing.StringFormat
$sf1.Alignment = [System.Drawing.StringAlignment]::Center
$sf1.LineAlignment = [System.Drawing.StringAlignment]::Center
$fontHero = New-Object System.Drawing.Font('Microsoft YaHei', 30, [System.Drawing.FontStyle]::Bold)
$rectTitle = New-Object System.Drawing.RectangleF(300, 210, 880, 64)
$g.DrawString('守岸人 · 新会话', $fontHero, $ink, $rectTitle, $sf1)
$fontGreet = New-Object System.Drawing.Font('Microsoft YaHei', 15)
$rectGreet = New-Object System.Drawing.RectangleF(300, 292, 880, 40)
$g.DrawString('你好，我是 DeepSeek，有什么可以帮你？', $fontGreet, $inkSoft, $rectGreet, $sf1)

# 4) suggestion chips
$chips = @('帮我写代码','总结文档','皮肤设置','分析数据')
for ($i=0; $i -lt $chips.Count; $i++) {
  $x = 447 + $i * 150
  $g.FillRectangle((Brush (C 247 251 254 235)), $x, 356, 136, 34)
  $g.DrawRectangle((New-Object System.Drawing.Pen((C 143 180 228 150), 1)), $x, 356, 136, 34)
  $g.DrawString($chips[$i], $fontNav, $inkSoft, $x + 8, 363)
}

# 5) chat bubbles (two samples over the wallpaper)
$bubble = Brush (C 255 255 255 230)
$bubbleHi = Brush (C 219 233 251 235)
$g.FillRectangle($bubble, 330, 430, 420, 52)
$g.FillRectangle($bubbleHi, 780, 498, 300, 46)
$g.DrawString('桌面的守岸人壁纸已经铺进对话区，固定不随滚动。', $fontNav, $ink, 344, 446)
$g.DrawString('很好看，海雾蓝紫主题也很搭 ~', $fontNav, $ink, 794, 512)

# 6) composer
$g.FillRectangle((Brush (C 255 255 255 240)), 460, 590, 560, 46)
$g.DrawRectangle((New-Object System.Drawing.Pen((C 143 180 228 160), 1)), 460, 590, 560, 46)
$g.DrawString('输入消息，Ctrl+Enter 发送…', $fontNav, $inkFaint, 478, 604)
$g.FillRectangle($accentBright, 940, 596, 68, 34)
$g.DrawString('发送', $fontNav, $white, 956, 604)

# 7) credit
$g.DrawString('0928OYX · CC BY-NC-SA 4.0 · 壁纸：鸣潮「守岸人」官方宣传图（版权归库洛游戏，仅展示用）', $fontSmall, $inkFaint, 300, 684)

# save jpeg q88
$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]88)
$bmp.Save($outPath, $enc, $ep)

$g.Dispose(); $bmp.Dispose(); $wall.Dispose()
Write-Host ('poster saved: ' + (Get-Item $outPath).Length + ' bytes')
