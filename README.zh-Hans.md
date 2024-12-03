<h1 align="center">
   <img src="https://github.com/wkaisertexas/tranzlate/assets/27795014/2d8ab420-12de-422b-bfd2-b6a27bc936f7" alt="tranzlate logo"/>
</h1>

<h4 align="center">
   一个命令行界面工具，用于使用OpenAI自动翻译<code>.xcstring</code>目录。
</h4>

<p align="center">
  <a href="https://github.com/wkaisertexas/tranzlate"><strong>英语</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.zh-Hans.md"><strong>简体中文</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.fr.md"><strong>法语</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.es.md"><strong>西班牙语</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.de.md"><strong>德语</strong></a>
</p>

<p align="center">
  <a href="#setup"><strong>安装</strong></a> ·
  <a href="#usage"><strong>使用</strong></a> ·
  <a href="#configuration"><strong>配置</strong></a> ·
  <a href="#markdown"><strong>Markdown</strong></a> ·
  <a href="#common-issues"><strong>常见问题</strong></a> ·
  <a href="#motivation"><strong>动机</strong></a> ·
  <a href="#contributing"><strong>贡献</strong></a> ·
  <a href="#contributors"><strong>贡献者</strong></a>
</p>

https://github.com/wkaisertexas/tranzlate/assets/27795014/6702dc3c-7f4b-4619-b792-e47949c5b373

<br>

# Tranzlate CLI 界面

<h2 id="setup">安装</h2>

> 支持的最低 Node.js 版本为 v14

1. 全局安装 _tranzlate_：

   ```sh
   npm install -g tranzlate.js
   ```

2. 从 [OpenAI](https://platform.openai.com/account/api-keys) 获取您的 API 密钥

   > 注意：如果您还没有账户，您需要创建一个账户并设置计费。

3. 设置密钥，以便 tranzlate 可以使用它。 可以通过运行以下命令实现：

   ```sh
   echo export OPENAI_API_KEY=<your token> >> ~/.bashrc
   ```

   或者，在运行命令时提供密钥

<h2 id="usage">使用</h2>

```bash
tranzlate
```

然后你会得到如下输出，它会引导你完成翻译字符串目录的过程：

```bash
┌   tranzlate: 自动字符串翻译
│
◇  输入文件
│  Localizable.xcstrings
│
◇  输出文件
│  Localizable.xcstrings
│
◆  选择要翻译的语言。
│  ◻ 阿拉伯语
│  ◻ 加泰罗尼亚语
│  ◻ 中文（简体）
│  ◻ 中文（繁体）
│  ◻ 克罗地亚语
│  ◼ 捷克语
│  ◼ 丹麦语
│  ◻ 荷兰语
│  ◻ 英语
│  ◻ 英语（澳大利亚）
│  ◻ 英语（加拿大）
│  ◻ 英语（英国）
│  ◻ 英语（美国）
│  ◻ 芬兰语
│  ◻ 法语
│  ◻ 法语（加拿大）
│  ◻ 德语
│  ◻ 希腊语
│  ◻ 希伯来语
│  ◻ 印地语
│  ◻ 匈牙利语
│  ◼ 印度尼西亚语
│  ◻ 意大利语
│  ◻ 日语
│  ◻ 韩语
│  ◻ 马来语
│  ◻ 挪威语
│  ◻ 波兰语
│  ◼ 葡萄牙语（巴西）
│  ◻ 葡萄牙语（葡萄牙）
│  ◻ 罗马尼亚语
│  ◻ 俄语
│  ◻ 斯洛伐克语
│  ◻ 西班牙语（墨西哥）
│  ◼ 西班牙语（西班牙）
│  ◻ 瑞典语
│  ◻ 泰语
│  ◻ 土耳其语
│  ◼ 乌克兰语
└  ◻ 越南语
```

<h2 id="configuration">配置</h2>

https://github.com/wkaisertexas/tranzlate/assets/27795014/5ae6ca30-d030-4ec8-8c59-e2d1593084dc

由于翻译工具只支持单一语言显得有些讽刺，所以我们支持更改配置语言。您可以通过运行以下命令设置语言：

```bash
tranzlate set-language <language>
```

其中 `<language>` 是以下之一：

<table align="center">
  <thead>
    <tr>
      <th>语言</th>
      <th>键</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>英语</td><td>en</td></tr>
    <tr><td>简体中文</td><td>zh-Hans</td></tr>
    <tr><td>繁体中文</td><td>zh-Hant</td></tr>
    <tr><td>西班牙语</td><td>es</td></tr>
    <tr><td>日语</td><td>ja</td></tr>
    <tr><td>韩语</td><td>ko</td></tr>
    <tr><td>法语</td><td>fr</td></tr>
    <tr><td>德语</td><td>de</td></tr>
    <tr><td>俄语</td><td>ru</td></tr>
    <tr><td>乌克兰语</td><td>uk</td></tr>
    <tr><td>越南语</td><td>vi</td></tr>
    <tr><td>阿拉伯语</td><td>ar</td></tr>
    <tr><td>葡萄牙语</td><td>pt-BR</td></tr>
    <tr><td>土耳其语</td><td>tr</td></tr>
  </tbody>
</table>

例如，如果你想切换到简体中文，你可以通过将 LANGUAGE 值设置为 zh-Hans 来做到这一点：

```sh
tranzlate set-language zh-Hans
```

这将您的语言设置为简体中文。

<h2 id="markdown">Markdown</h2>

支持对 Markdown 的翻译。要进入 Markdown 模式，请运行：

```sh
tranzlate markdown
```

系统会提示您输入要翻译的 Markdown 文件或文件模式。输出翻译会在每个文件名末尾附加ISO语言代码。**例如，** 如果您将 `README.md` 翻译为简体中文（zh-Hans），输出文件将为 `README.zh-Hans.md`。

```console
┌   tranzlate: 自动 Markdown 翻译
│
◇  输入 Markdown 文件或文件模式
│  ./README.md
│
◇  选择要翻译的语言
│  fi - 芬兰语, hu - 匈牙利语, pl - 波兰语, ru - 俄语
│
◇  选择一个模型
│  gpt-3.5-turbo
◆  正在翻译 README.md...
```

> [!NOTE]
> Markdown 翻译处于测试阶段。如有任何问题，请及时反馈。

<h2 id="common-issues">常见问题</h2>

### 429 错误

有些用户报告从 OpenAI 收到 429 错误。这是由于错误的计费设置或超出配额使用导致的。请按照[这个指南](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)来解决。

您可以在[这个链接](https://platform.openai.com/account/billing/overview)上激活计费。如果没有 OpenAI 的有效资助，请确保添加支付方式。

<h2 id="motivation">动机</h2>

我不是一名语言专家。我的翻译能力仅限于中学水平的西班牙语。然而，我相信软件及其重要性。软件的开发对象很重要。本地化不应也永远不应是事后考虑。通过利用 AI 翻译工具，可以更早地在产品开发期间就软件对不同社区的影响进行对话，而不是在后期进行。

加速有关软件影响的对话，使在功能集锁定之前实现有意义的改变。这就是我相信常常不完美的 AI 翻译工具的力量的原因。不要让完美成为良好的敌人。

简单翻译字符串目录，以及希望未来会有更多的文件格式，是我创建 _tranzlate_ 的原因。

<h2 id="contributing">贡献</h2>

如果您想帮助修复错误或实现 [Issues](https://github.com/wkaisertexas/tranzlate) 中的功能，请随时进行。Swift 开发对我来说还是个新领域，因此我很赞赏社区的反馈。

<a href="https://github.com/wkaisertexas/tranzlate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wkaisertexas/tranzlate" />
</a>

<h2 id="contributors">贡献者</h2>

![Alt](https://repobeats.axiom.co/api/embed/74c05a15a0f3020ab2d6113b7bd0667dbe4d1ad4.svg "Repobeats 分析图")

> 感谢 [ai-shell](https://github.com/BuilderIO/ai-shell) 提供的 README 模板。
