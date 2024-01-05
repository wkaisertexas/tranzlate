<h2 align="center">
   <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fb5b9997cec2c4fffb3e5c5e9bb4fed7d">
      <img width="300" alt="AI Shell logo" src="[https://user-images.githubusercontent.com/844291/230786555-a58479e4-75f3-4222-a6eb-74c5af953eac.png](https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fb7f9d2d9911a4199a9d26f8ba210b3f8)">
    </picture>
</h2>

<h4 align="center">
   A CLI command which uses OpenAI to automatically translate your string catalogs
</h4>
<p align="center">
   <a href="https://www.npmjs.com/package/@builder.io/ai-shell"><img src="https://img.shields.io/npm/v/@builder.io/ai-shell" alt="Current version"></a>
</p>

<p align="center">
   <img alt="Gif Demo" src="https://user-images.githubusercontent.com/844291/230413167-773845e7-4c9f-44a5-909c-02802b5e49f6.gif" >
<p>

<p align="center">
   Inspired by the <a href="https://githubnext.com/projects/copilot-cli">GitHub Copilot X CLI</a>, but open source for everyone.
</p>

<br>

# Tranzlate CLI Interface

## Setup

> The minimum supported version of Node.js is v14

1. Install _tranzlate_ globally:

   ```sh
   npm install -g tranzlate.js
   ```

2. Retrieve your API key from [OpenAI](https://platform.openai.com/account/api-keys)

   > Note: If you haven't already, you'll have to create an account and set up billing.

3. Set the key so tranzlate can use it. You can do this by running:

   ```sh
   echo export OPENAI_API_KEY=<your token> >> ~/.bashrc
   ```

   or alternatively, provide the key when running the command

## Usage

```bash
tranzlate
```

Then you will get an output like this, which takes you through the process of creating a translation:

```bash
┌   tranzlate: automatic string translation
│
◇  Enter input file
│  Localizable.xcstrings
│
◇  Enter the output file
│  Localizable.xcstrings
│
◆  Select languages to translate to.
│  ◻ Arabic
│  ◻ Catalan
│  ◻ Chinese (Simplified)
│  ◻ Chinese (Traditional)
│  ◻ Croatian
│  ◼ Czech
│  ◼ Danish
│  ◻ Dutch
│  ◻ English
│  ◻ English (Australia)
│  ◻ English (Canada)
│  ◻ English (U.K.)
│  ◻ English (U.S.)
│  ◻ Finnish
│  ◻ French
│  ◻ French (Canada)
│  ◻ German
│  ◻ Greek
│  ◻ Hebrew
│  ◻ Hindi
│  ◻ Hungarian
│  ◼ Indonesian
│  ◻ Italian
│  ◻ Japanese
│  ◻ Korean
│  ◻ Malay
│  ◻ Norwegian
│  ◻ Polish
│  ◼ Portuguese (Brazil)
│  ◻ Portuguese (Portugal)
│  ◻ Romanian
│  ◻ Russian
│  ◻ Slovak
│  ◻ Spanish (Mexico)
│  ◼ Spanish (Spain)
│  ◻ Swedish
│  ◻ Thai
│  ◻ Turkish
│  ◼ Ukrainian
│  ◻ Vietnamese
└
```

### Multiple Languages

![Language UI](https://user-images.githubusercontent.com/1784873/235330029-0a3b394c-d797-41d6-8717-9a6b487f1ae8.gif)

Because a translation utility only supporting a single language would be ironic, we support multiple languages. You can set your language by running:

```bash
tranzlate set-language <language<
```

Where `<language>` is one of the following:

<table align="center">
  <thead>
    <tr>
      <th>Language</th>
      <th>Key</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>English</td><td>en</td></tr>
    <tr><td>Simplified Chinese</td><td>zh-Hans</td></tr>
    <tr><td>Traditional Chinese</td><td>zh-Hant</td></tr>
    <tr><td>Spanish</td><td>es</td></tr>
    <tr><td>Japanese</td><td>jp</td></tr>
    <tr><td>Korean</td><td>ko</td></tr>
    <tr><td>French</td><td>fr</td></tr>
    <tr><td>German</td><td>de</td></tr>
    <tr><td>Russian</td><td>ru</td></tr>
    <tr><td>Ukrainian</td><td>uk</td></tr>
    <tr><td>Vietnamese</td><td>vi</td></tr>
    <tr><td>Arabic</td><td>ar</td></tr>
    <tr><td>Portuguese</td><td>pt</td></tr>
    <tr><td>Turkish</td><td>tr</td></tr>
  </tbody>
</table>

For instance, if you want to switch to Simplified Chinese, you can do so by setting the LANGUAGE value to zh-Hans:

```sh
tranzlate set-language zh-Hans
```

This will set your language to Simplified Chinese.

## Common Issues

### 429 error

Some users are reporting a 429 from OpenAI. This is due to incorrect billing setup or excessive quota usage. Please follow [this guide](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details) to fix it.

You can activate billing at [this link](https://platform.openai.com/account/billing/overview). Make sure to add a payment method if not under an active grant from OpenAI.

## Motivation

Anything beyond middle-school Spanish is lost on me. I believe the future of software is a decentralized lingua france, powered by AI. Though machine translations are not perfect, good enough translations give the opportunity for software to be developed with a global audience rather than internationalized as an afterthought.

## Contributing

If you want to help fix a bug or implement a feature in [Issues](https://github.com/wkaisertexas/tranzlate), please do so. Swift development is somewhat new to me, so I would much appreciate community feedback.

## Contributors

> Thanks to the [ai-shell](https://github.com/BuilderIO/ai-shell) for letting me rip off their README template. After all, imitation is the sincerest form of flattery.
