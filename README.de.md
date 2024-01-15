<h1 align="center">
   <img src="https://github.com/wkaisertexas/tranzlate/assets/27795014/2d8ab420-12de-422b-bfd2-b6a27bc936f7" alt="tranzlate logo"/>
</h1>

<h4 align="center">
   Ein Befehlszeilen-Interface-Tool zur automatischen Übersetzung von <code>.xcstring</code> Katalogen mit OpenAI.
</h4>

<p align="center">
  <a href="https://github.com/wkaisertexas/tranzlate"><strong>Englisch</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.zh-Hans.md"><strong>Chinesisch (vereinfacht)</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.fr.md"><strong>Französisch</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.es.md"><strong>Spanisch</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.de.md"><strong>Deutsch</strong></a>
</p>

<p align="center">
  <a href="#setup"><strong>Setup</strong></a> ·
  <a href="#usage"><strong>Verwendung</strong></a> ·
  <a href="#configuration"><strong>Konfiguration</strong></a> ·
  <a href="#markdown"><strong>Markdown</strong></a> ·
  <a href="#common-issues"><strong>Häufige Probleme</strong></a> ·
  <a href="#motivation"><strong>Motivation</strong></a> ·
  <a href="#contributing"><strong>Mitwirken</strong></a> ·
  <a href="#contributors"><strong>Mitwirkende</strong></a>
</p>

https://github.com/wkaisertexas/tranzlate/assets/27795014/6702dc3c-7f4b-4619-b792-e47949c5b373

<br>

# Tranzlate CLI Interface

<h2 id="setup">Setup</h2>

> Die Minimum unterstützte Version von Node.js ist v14

1. Installiere _tranzlate_ global:

   ```sh
   npm install -g tranzlate.js
   ```

2. Hole deinen API-Schlüssel von [OpenAI](https://platform.openai.com/account/api-keys)

   > Hinweis: Wenn du noch kein Konto hast, musst du dich registrieren und die Rechnungsstellung einrichten.

3. Setze den Schlüssel, damit tranzlate ihn verwenden kann. Du kannst dies tun, indem du folgenden Befehl ausführst:

   ```sh
   echo export OPENAI_API_KEY=<Dein Token> >> ~/.bashrc
   ```

   Alternativ kannst du den Schlüssel angeben, wenn du den Befehl ausführst

<h2 id="usage">Verwendung</h2>

```bash
tranzlate
```

Dann erhältst du eine Ausgabe wie diese, die dich durch den Prozess der Übersetzung eines String-Katalogs führt:

```bash
┌   tranzlate: automatische String-Übersetzung
│
◇  Gib die Eingabe-Datei ein
│  Localizable.xcstrings
│
◇  Gib die Ausgabe-Datei ein
│  Localizable.xcstrings
│
◆  Wähle die zu übersetzenden Sprachen aus.
│  ◻ Arabisch
│  ◻ Katalanisch
│  ◻ Chinesisch (vereinfacht)
│  ◻ Chinesisch (traditionell)
│  ◻ Kroatisch
│  ◼ Tschechisch
│  ◼ Dänisch
│  ◻ Holländisch
│  ◻ Englisch
│  ◻ Englisch (Australien)
│  ◻ Englisch (Kanada)
│  ◻ Englisch (U.K.)
│  ◻ Englisch (U.S.)
│  ◻ Finnisch
│  ◻ Französisch
│  ◻ Französisch (Kanada)
│  ◻ Deutsch
│  ◻ Griechisch
│  ◻ Hebräisch
│  ◻ Hindi
│  ◻ Ungarisch
│  ◼ Indonesisch
│  ◻ Italienisch
│  ◻ Japanisch
│  ◻ Koreanisch
│  ◻ Malay
│  ◻ Norwegisch
│  ◻ Polnisch
│  ◼ Portugiesisch (Brasilien)
│  ◻ Portugiesisch (Portugal)
│  ◻ Rumänisch
│  ◻ Russisch
│  ◻ Slowakisch
│  ◻ Spanisch (Mexiko)
│  ◼ Spanisch (Spanien)
│  ◻ Schwedisch
│  ◻ Thailändisch
│  ◻ Türkisch
│  ◼ Ukrainisch
└  ◻ Vietnamesisch
```

<h2 id="configuration">Konfiguration</h2>

https://github.com/wkaisertexas/tranzlate/assets/27795014/5ae6ca30-d030-4ec8-8c59-e2d1593084dc

Da es ironisch wäre, als Übersetzungstool nur eine einzige Sprache zu unterstützen, unterstützen wir das Ändern Ihrer Konfigurationssprache. Du kannst deine Sprache einstellen, indem du folgendes ausführst:

```bash
tranzlate set-language <Sprache>
```

Wo `<Sprache>` eine der folgenden ist:

<table align="center">
  <thead>
    <tr>
      <th>Sprache</th>
      <th>Schlüssel</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Englisch</td><td>en</td></tr>
    <tr><td>Vereinfachtes Chinesisch</td><td>zh-Hans</td></tr>
    <tr><td>Traditionelles Chinesisch</td><td>zh-Hant</td></tr>
    <tr><td>Spanisch</td><td>es</td></tr>
    <tr><td>Japanisch</td><td>ja</td></tr>
    <tr><td>Koreanisch</td><td>ko</td></tr>
    <tr><td>Französisch</td><td>fr</td></tr>
    <tr><td>Deutsch</td><td>de</td></tr>
    <tr><td>Russisch</td><td>ru</td></tr>
    <tr><td>Ukrainisch</td><td>uk</td></tr>
    <tr><td>Vietnamesisch</td><td>vi</td></tr>
    <tr><td>Arabisch</td><td>ar</td></tr>
    <tr><td>Portugiesisch</td><td>pt-BR</td></tr>
    <tr><td>Türkisch</td><td>tr</td></tr>
  </tbody>
</table>

Zum Beispiel, wenn du auf Vereinfachtes Chinesisch wechseln möchtest, kannst du das tun, indem du den LANGUAGE-Wert auf zh-Hans setzt:

```sh
tranzlate set-language zh-Hans
```

Dadurch wird deine Sprache auf Vereinfachtes Chinesisch eingestellt.

<h2 id="markdown">Markdown</h2>

Die Unterstützung für Markdown-Übersetzungen wird unterstützt. Um in den Markdown-Modus zu wechseln, führe aus:

```sh
tranzlate markdown
```

Du wirst aufgefordert, eine Markdown-Datei oder eine Glob-Datei zur Übersetzung einzugeben. Die Ausgabeübersetzungen fügen den ISO-Sprachcode am Ende jedes Dateinamens an. **Zum Beispiel,** wenn du `README.md` ins Vereinfachte Chinesisch (zh-Hans) übersetzt, wird die Ausgabedatei `README.zh-Hans.md` sein.

```console
┌   tranzlate: automatische markdown Übersetzung
│
◇  Gib eine markdown Datei oder Glob ein
│  ./README.md
│
◇  Wähle die zu übersetzenden Sprachen aus
│  fi - Finnisch, hu - Ungarisch, pl - Polnisch, ru - Russisch
│
◇  Wähle ein Modell aus
│  gpt-3.5-turbo
◆  Übersetzung von README.md...
```

> Hinweis: Die Markdown-Übersetzung befindet sich in der Beta-Phase. Bitte melde alle Probleme, auf die du stößt.

<h2 id="common-issues">Häufige Probleme</h2>

### 429 Fehler

Einige Benutzer melden einen 429 von OpenAI. Dies liegt an einer falschen Rechnungsstellungseinstellung oder übermäßiger Quotennutzung. Bitte folgen Sie [dieser Anleitung](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details), um das zu beheben.

Sie können die Abrechnung unter [diesem Link](https://platform.openai.com/account/billing/overview) aktivieren. Stellen Sie sicher, dass Sie eine Zahlungsmethode hinzufügen, wenn Sie nicht unter einer aktiven Förderung von OpenAI stehen.

<h2 id="motivation">Motivation</h2>

Ich bin kein Sprachexperte. Meine Übersetzungskompetenz erstreckt sich nur auf Spanisch auf Mittelschulniveau. Aber ich glaube an Software und ihre Bedeutung. Für wen die Software entwickelt wird, ist wichtig. Lokalisierung ist kein und sollte nie ein nachträglicher Gedanke sein. Durch die Nutzung von KI-Übersetzungstools können Gespräche über die Auswirkungen von Software auf verschiedene Gemeinschaften früher in der Produktentwicklung und nicht später geführt werden.

Die Beschleunigung von Gesprächen über die Auswirkungen von Software führt zu bedeutenden Veränderungen, bevor die Merkmalssets festgelegt sind. Deshalb glaube ich an die Macht von, oft unvollkommenen, KI-Übersetzungstools. Lass das Perfekte nicht der Feind des Guten sein.

Einfache Übersetzung, von Zeichenketten-Katalogen, und hoffentlich noch vielen weiteren Dateiformaten ist der Grund, warum ich _tranzlate_ erstellt habe.

<h2 id="contributing">Mitwirken</h2>

Wenn Sie einen Bug beheben oder ein Feature in [Problemen](https://github.com/wkaisertexas/tranzlate) implementieren möchten, tun Sie das bitte. Swift-Entwicklung ist für mich etwas Neues, daher würde ich die Rückmeldung der Community zu schätzen wissen.

<a href="https://github.com/wkaisertexas/tranzlate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wkaisertexas/tranzlate" />
</a>

<h2 id="contributors">Mitwirkende</h2>

![Alt](https://repobeats.axiom.co/api/embed/74c05a15a0f3020ab2d6113b7bd0667dbe4d1ad4.svg "Repobeats Analytics Bild")

> Danke an [ai-shell](https://github.com/BuilderIO/ai-shell) für ihre README, die ich als Vorlage verwendet habe.