<h1 align="center">
   <img src="https://github.com/wkaisertexas/tranzlate/assets/27795014/2d8ab420-12de-422b-bfd2-b6a27bc936f7" alt="tranzlate logo"/>
</h1>

<h4 align="center">
   使用OpenAI自动翻译<code>.xcstring</code>目录的命令行界面工具。
</h4>

<p align="center">
  <a href="https://github.com/wkaisertexas/tranzlate"><strong>英文</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.zh-Hans.md"><strong>简体中文</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.fr.md"><strong>法文</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.es.md"><strong>西班牙文</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.de.md"><strong>德文</strong></a>
</p>

<p align="center">
  <a href="#setup"><strong>设置</strong></a> ·
  <a href="#usage"><strong>使用方法</strong></a> ·
  <a href="#configuration"><strong>配置</strong></a> ·
  <a href="#markdown"><strong>Markdown</strong></a> ·
  <a href="#common-issues"><strong>常见问题</strong></a> ·
  <a href="#motivation"><strong>动机</strong></a> ·
  <a href="#contributing"><strong>贡献</strong></a> ·
  <a href="#contributors"><strong>贡献者</strong></a>
</p>

https://github.com/wkaisertexas/tranzlate/assets/27795014/6702dc3c-7f4b-4619-b792-e47949c5b373

<br>

# Tranzlate CLI界面

<h2 id="setup">设置</h2>

> Node.js的最低支持版本为v14

1. 全局安装*tranzlate*:

   ```sh
   npm install -g tranzlate.js
   ```

2. 从[OpenAI](https://platform.openai.com/account/api-keys)获取你的API密钥。

   > 注意：如果您还没有，您将需要创建一个帐户并设置付费方式。

3. 设置密钥以便tranzlate可以使用。你可以通过运行以下命令来实现:

   ```sh
   echo export OPENAI_API_KEY=<你的密钥> >> ~/.bashrc
   ```

   或者，执行命令时提供密钥

<h2 id="usage">使用方法</h2>

```bash
tranzlate
```

然后你会看到如下的输出，它将带你走过翻译一个字符串目录的过程：

```bash
┌   tranzlate: 自动字符串翻译
│
◇  输入源文件
│  Localizable.xcstrings
│
◇  输入输出文件
│  Localizable.xcstrings
│
◆  选择要翻译的语言。
│  ◻ 阿拉伯语
│  ◻ 加泰罗尼亚语
│  ◻ 简体中文
│  ◻ 繁体中文
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
│  ◻ 匈牙利语
│  ◼ 印尼语
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

因为只支持单一语言对一个翻译工具来说将是讽刺，所以我们支持更改您的配置语言。您可以通过运行以下命令设置您的语言：

```bash
tranzlate set-language <语言>
```

其中`<语言>`为以下选项之一：

<table align="center">
  <thead>
    <tr>
      <th>语言</th>
      <th>密钥</th>
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

例如，如果你想切换到简体中文，你可以通过设置LANGUAGE值为zh-Hans来实现：

```sh
tranzlate set-language zh-Hans
```

这会将您的语言设置为简体中文。

<h2 id="markdown">Markdown</h2>

支持Markdown翻译。要进入markdown模式，运行：

```sh
tranzlate markdown
```

您将被提示输入要翻译的markdown文件或glob。输出翻译在每个文件名称的末尾附加ISO语言代码。**例如，**如果你将`README.md`翻译成简体中文 (zh-Hans)，输出文件将为`README.zh-Hans.md`。

```console
┌   tranzlate: 自动Markdown翻译
│
◇  输入Markdown文件或glob
│  ./README.md
│
◇  选择要翻译的语言
│  fi - 芬兰语, hu - 匈牙利语, pl - 波兰语, ru - 俄语
│
◇  选择模型
│  gpt-3.5-turbo
◆  翻译中README.md...
```

> 注意：Markdown翻译目前处于测试阶段。请报告您遇到的任何问题。

<h2 id="common-issues">常见问题</h2>

### 429错误

一些用户报告了来自OpenAI的429错误。这是由于错误的计费设置或过度使用配额。请按照[此指南](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)修复。

您可以在[此链接](https://platform.openai.com/account/billing/overview)激活计费。请确保添加了付款方式，除非您正在接受OpenAI的活动资助。

<h2 id="motivation">动机</h2>

我不是语言专家。我的翻译能力只达到了中学级别的西班牙语。然而，我相信软件的重要性。软件的开发对象影响着软件。本地化不应该是也从不应该是一种附带思考的事务。通过利用AI 翻译工具，可以在产品开发的早期阶段就开始讨论软件对不同社区的影响，而不是晚期。

加速关于软件影响的讨论会在功能集锁定之前带来有意义的变化。这就是为什么我相信尽管不完美，但AI 翻译工具的力量。不要让完美成为我们取得进步的障碍。

易于翻译，字符串目录，希望有更多文件格式在未来供我创建*tranzlate*使用。

<h2 id="contributing">贡献</h2>

如果你想帮忙修复一些[问题](https://github.com/wkaisertexas/tranzlate)中的错误或实现一些功能，欢迎如此。对我来说，Swift的开发相对较新，所以我非常欢迎社区的反馈。

<a href="https://github.com/wkaisertexas/tranzlate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wkaisertexas/tranzlate" />
</a>

<h2 id="contributors">贡献者</h2>

![Alt](https://repobeats.axiom.co/api/embed/74c05a15a0f3020ab2d6113b7bd0667dbe4d1ad4.svg "Repobeats分析图像")

> 感谢[ai-shell](https://github.com/BuilderIO/ai-shell)的README模板，在此模板的基础上我创建了这个文档。
