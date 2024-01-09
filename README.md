<h1 align="center">
   <strong>tranzlate</strong>
</h1>

<h4 align="center">
   A CLI command which uses OpenAI to automatically translate <code>.xcstring</code> catalogs
</h4>

<br>

https://github.com/wkaisertexas/tranzlate/assets/27795014/6702dc3c-7f4b-4619-b792-e47949c5b373

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
tranzlate set-language <language>
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

<a href="https://github.com/wkaisertexas/tranzlate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wkaisertexas/tranzlate" />
</a>

## Contributors

![Alt](https://repobeats.axiom.co/api/embed/74c05a15a0f3020ab2d6113b7bd0667dbe4d1ad4.svg "Repobeats analytics image")

> Thanks to the [ai-shell](https://github.com/BuilderIO/ai-shell) for letting me rip off their README template. After all, imitation is the sincerest form of flattery.
