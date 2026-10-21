# La Viora｜2026-10-22 保存版

このフォルダはGitHubのCodeに追加保存した版です。既存のpreview.htmlとXサーバーは変更していません。

## 表示確認

| 状態 | パターン | ファイル |
|---|---|---|
| 公開中版・軽量化前 | 共感なし | [preview-20261022-public-without-empathy.html](https://shusukesekitani-bit.github.io/laviora-lp-preview/archive-20261022/preview-20261022-public-without-empathy.html) |
| 公開中版・軽量化前 | 共感あり | [preview-20261022-public-with-empathy.html](https://shusukesekitani-bit.github.io/laviora-lp-preview/archive-20261022/preview-20261022-public-with-empathy.html) |
| 軽量化版・本番未反映 | 共感なし | [preview-20261022-optimized-without-empathy.html](https://shusukesekitani-bit.github.io/laviora-lp-preview/archive-20261022/preview-20261022-optimized-without-empathy.html) |
| 軽量化版・本番未反映 | 共感あり | [preview-20261022-optimized-with-empathy.html](https://shusukesekitani-bit.github.io/laviora-lp-preview/archive-20261022/preview-20261022-optimized-with-empathy.html) |

一覧URL：https://shusukesekitani-bit.github.io/laviora-lp-preview/archive-20261022/

確認用HTMLはLINE遷移・GTM・Meta・Clarity送信を停止した表示専用です。本番用として流用しないでください。
表示用の画像・動画・ローカルフォントは同じフォルダのmedia-20261022-*です。画像や動画を再圧縮せず、保存元のバイト列をそのまま保存しています。公開中版のGoogle Fonts読込は従来と同じです。
ファイルの配置と計測停止が元のLPとは異なるため、速度比較は既存の計測レポートを参照してください。

## 復元用の元データ

本番用設定を保持したHTML・CSS・画像・動画・フォント・JSの全ファイルを、source-20261022-{状態}-{番号}-of-{総数}.zipに保存しています。
ブラウザーからCodeへ追加できるサイズに合わせて、独立した通常のZIPに分けています。分割ZIP形式ではないので、連結処理は不要です。

1. public（公開中・軽量化前）またはoptimized（軽量化・本番未反映）の、同じ状態のZIPをすべてダウンロードします。
2. 同じ空の保存先フォルダに、ZIPをすべて展開します（LPフォルダを統合）。
3. LP/index.htmlが共感なし、LP/story/index.htmlが共感ありです。assets・imagesなどもLP内にそろいます。
4. source-manifest-20261022.jsonのSHA256と照合できます。

この保存に伴う本番反映は行っていません。GTM・Meta・Clarityの管理画面側設定やXサーバーのサーバー設定は別管理で、このZIPには含みません。
外部更新担当者へ渡す際は、確認用HTMLではなく復元した元データをもとに更新用一式を用意してください。
