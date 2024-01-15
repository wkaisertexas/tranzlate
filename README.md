<h1 align="center">
   <img src="https://github.com/wkaisertexas/tranzlate/assets/27795014/2d8ab420-12de-422b-bfd2-b6a27bc936f7" alt="tranzlate logo"/>
</h1>

<h4 align="center">
   A command line interface tool to automatically translate <code>.xcstring</code> catalogs using OpenAI.
</h4>

<p align="center">
  <a href="https://github.com/wkaisertexas/tranzlate"><strong>English</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.zh-Hans.md"><strong>Chinese Simplified</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.fr.md"><strong>French</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.es.md"><strong>Spanish</string></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.de.md"><strong>German</strong></a>
</p>

<p align="center">
  <a href="#setup"><strong>Setup</strong></a> ·
  <a href="#usage"><strong>Usage</strong></a> ·
  <a href="#configuration"><strong>Configuration</strong></a> ·
  <a href="#markdown"><strong>Markdown</string></a> ·
  <a href="#common-issues"><strong>Common Issues</strong></a> ·
  <a href="#motivation"><strong>Motivation</string></a> ·
  <a href="#contributing"><strong>Contributing</strong></a> ·
    <a href="#contributors"><strong>Contributors</strong></a>
</p>

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

Then you will get a output like this, which takes you through the process of translating a string catalog:

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
└  ◻ Vietnamese
```

### Configuration

https://github.com/wkaisertexas/tranzlate/assets/27795014/5ae6ca30-d030-4ec8-8c59-e2d1593084dc

Because only supporting a single language would be ironic as a translation utility, we support changing your configuration language. You can set your language by running:

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
    <tr><td>Japanese</td><td>ja</td></tr>
    <tr><td>Korean</td><td>ko</td></tr>
    <tr><td>French</td><td>fr</td></tr>
    <tr><td>German</td><td>de</td></tr>
    <tr><td>Russian</td><td>ru</td></tr>
    <tr><td>Ukrainian</td><td>uk</td></tr>
    <tr><td>Vietnamese</td><td>vi</td></tr>
    <tr><td>Arabic</td><td>ar</td></tr>
    <tr><td>Portuguese</td><td>pt-BR</td></tr>
    <tr><td>Turkish</td><td>tr</td></tr>
  </tbody>
</table>

For instance, if you want to switch to Simplified Chinese, you can do so by setting the LANGUAGE value to zh-Hans:

```sh
tranzlate set-language zh-Hans
```

This will set your language to Simplified Chinese.

## Markdown 

Support for markdown translations is supported. To enter markdown mode, run:

```sh
tranzlate markdown
```

You will be prompted for a markdown file or glob to translate. Output translations append the ISO language code to the end of each file name. **For instance,** if you translate `README.md` to Simplified Chinese (zh-Hans), the output file will be `README.zh-Hans.md`.

```console
┌   tranzlate: automatic markdown translation 
│
◇  Enter a markdown file or glob
│  ./README.md
│
◇  Select languages to translate to
│  fi - Finnish, hu - Hungarian, pl - Polish, ru - Russian
│
◇  Select a model
│  gpt-3.5-turbo
◆  Translating README.md...
```

> Note: Markdown translation is in beta. Please report any issues you encounter.

## Common Issues

### 429 error

Some users are reporting a 429 from OpenAI. This is due to incorrect billing setup or excessive quota usage. Please follow [this guide](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details) to fix it.

You can activate billing at [this link](https://platform.openai.com/account/billing/overview). Make sure to add a payment method if not under an active grant from OpenAI.

## Motivation

I am not a language expert. My proficiency in translation extends only to middle-school level Spanish. However, I believe in software and its importance. Who software is developed for matters. Localization is not nor never should be an afterthought. By utilizing AI translation tools, conversations about the impact software has on different communities can be had earlier in product development, not later. 

Accelerating conversations about software's impact leads to meaningful change before feature sets are locked in. This is why I believe in the power of, often imperfect, AI translation tools. Do not let perfect be the enemy of good. 

Easy translation, of string catalogs, and hopefully many more file formats to come is why I created *tranzlate*. 

## Contributing

If you want to help fix a bug or implement a feature in [Issues](https://github.com/wkaisertexas/tranzlate), please do so. Swift development is somewhat new to me, so I would appreciate community feedback.

<a href="https://github.com/wkaisertexas/tranzlate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wkaisertexas/tranzlate" />
</a>

## Contributors

![Alt](https://repobeats.axiom.co/api/embed/74c05a15a0f3020ab2d6113b7bd0667dbe4d1ad4.svg "Repobeats analytics image")

> Thanks to the [ai-shell](https://github.com/BuilderIO/ai-shell) for their README which I used as a template.
