# Publish dsh-free-skins to GitHub (run after: gh auth login)
$ErrorActionPreference = 'Stop'
Set-Location 'C:/Users/28974/Desktop/dsh-free-skins'

gh auth status | Out-Null
if ($LASTEXITCODE -ne 0) { throw '未登录 GitHub。请先运行: gh auth login' }

# 1) create the public repo and push the local main branch
$repo = '0928OYX/dsh-free-skins'
gh repo view $repo --json nameWithOwner 2>$null | Out-Null
if ($LASTEXITCODE -ne 0) {
  gh repo create $repo --public --source . --remote origin --push --description 'DSH 界面皮肤插件：7 款原创免费皮肤 + 皮肤画廊 + 一键应用免重启 + 自定义对话区背景（CC BY-NC-SA 4.0）'
} else {
  git remote remove origin 2>$null
  git remote add origin "https://github.com/$repo.git"
  git push -u origin main
}
gh repo edit $repo --enable-issues --enable-wiki=false

# 2) publish release v1.0.0 with notes + zip asset
gh release create v1.0.0 --repo $repo --title 'dsh-free-skins v1.0.0' --notes-file docs/RELEASE-NOTES-v1.0.0.md 'C:/Users/28974/Desktop/dsh-free-skins-v1.0.0.zip'

Write-Host 'DONE: https://github.com/' + $repo
