<h1 align="center">
   <img src="https://github.com/wkaisertexas/tranzlate/assets/27795014/2d8ab420-12de-422b-bfd2-b6a27bc936f7" alt="tranzlate logo"/>
</h1>

<h4 align="center">
   Ein Kommandozeilen-Tool zur automatischen Übersetzung von <code>.xcstring</code> Katalogen mit Hilfe von OpenAI.
</h4>

<p align="center">
  <a href="https://github.com/wkaisertexas/tranzlate"><strong>English</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.zh-Hans.md"><strong>Chinesisch (Vereinfacht)</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.fr.md"><strong>Französisch</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.es.md"><strong>Spanisch</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.de.md"><strong>Deutsch</strong></a>
</p>

<p align="center">
  <a href="#setup"><strong>Einrichtung</strong></a> ·
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

<h2 id="setup">Einrichtung</h2>

> Die minimal unterstützte Version von Node.js ist v14

1. Installiere _tranzlate_ global:

   ```sh
   npm install -g tranzlate.js
   ```

2. Erhalte deinen API-Schlüssel von [OpenAI](https://platform.openai.com/account/api-keys)

   > Hinweis: Wenn du noch keinen Account hast, musst du einen erstellen und die Abrechnung einrichten.

3. Setze den Schlüssel, damit tranzlate ihn nutzen kann. Du kannst dies tun, indem du folgenden Befehl ausführst:

   ```sh
   echo export OPENAI_API_KEY=<your token> >> ~/.bashrc
   ```

   oder alternativ den Schlüssel beim Ausführen des Befehls angeben

<h2 id="usage">Verwendung</h2>

```bash
tranzlate
```

Dann erhältst du eine Ausgabe wie diese, die dich durch den Prozess der Übersetzung eines String-Katalogs führt:

```bash
┌   tranzlate: automatische String-Übersetzung
│
◇  Eingabedatei angeben
│  Localizable.xcstrings
│
◇  Ausgabedatei angeben
│  Localizable.xcstrings
│
◆  Zu übersetzende Sprachen auswählen.
│  ◻ Arabisch
│  ◻ Katalanisch
│  ◻ Chinesisch (Vereinfacht)
│  ◻ Chinesisch (Traditionell)
│  ◻ Kroatisch
│  ◼ Tschechisch
│  ◼ Dänisch
│  ◻ Niederländisch
│  ◻ Englisch
│  ◻ Englisch (Australien)
│  ◻ Englisch (Kanada)
│  ◻ Englisch (Vereinigtes Königreich)
│  ◻ Englisch (USA)
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
│  ◻ Malaiisch
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
│  ◻ Thai
│  ◻ Türkisch
│  ◼ Ukrainisch
└  ◻ Vietnamesisch
```

<h2 id="configuration">Konfiguration</h2>

https://github.com/wkaisertexas/tranzlate/assets/27795014/5ae6ca30-d030-4ec8-8c59-e2d1593084dc

Da es ironisch wäre, nur eine Sprache zu unterstützen, bieten wir die Möglichkeit, deine Konfigurationssprache zu ändern. Du kannst deine Sprache einstellen, indem du den folgenden Befehl ausführst:

```bash
tranzlate set-language <language>
```

Wobei `<language>` eines der Folgenden ist:

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

Zum Beispiel, wenn du zu Vereinfachtem Chinesisch wechseln möchtest, kannst du den LANGUAGE-Wert auf zh-Hans setzen:

```sh
tranzlate set-language zh-Hans
```

Dies setzt deine Sprache auf Vereinfachtes Chinesisch.

<h2 id="markdown">Markdown</h2>

Unterstützung für Markdown-Übersetzungen ist gegeben. Um den Markdown-Modus zu aktivieren, führe aus:

```sh
tranzlate markdown
```

Du wirst nach einer Markdown-Datei oder einem Glob zur Übersetzung gefragt. Übersetzte Ausgaben hängen den ISO-Sprachcode an das Ende jedes Dateinamens an. **Beispielsweise**, wenn du `README.md` ins Vereinfachte Chinesisch (zh-Hans) übersetzt, wird die Ausgabedatei `README.zh-Hans.md` sein.

```console
┌   tranzlate: automatische Markdown-Übersetzung
│
◇  Gib eine Markdown-Datei oder einen Glob an
│  ./README.md
│
◇  Wähle Sprachen zur Übersetzung aus
│  fi - Finnisch, hu - Ungarisch, pl - Polnisch, ru - Russisch
│
◇  Wähle ein Modell
│  gpt-3.5-turbo
◆  Übersetze README.md...
```

> [!HINWEIS]
> Die Markdown-Übersetzung befindet sich in der Beta-Phase. Bitte melde etwaige Probleme, auf die du stößt.

<h2 id="common-issues">Häufige Probleme</h2>

### 429 Fehler

Einige Nutzer berichten von einem 429-Fehler von OpenAI. Dies liegt an einer falschen Abrechnungseinstellung oder übermäßigem Kontingentverbrauch. Befolge bitte [diese Anleitung](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details), um dies zu beheben.

Du kannst die Abrechnung unter [diesem Link](https://platform.openai.com/account/billing/overview) aktivieren. Stelle sicher, dass du eine Zahlungsmethode hinzufügst, wenn du kein aktives Stipendium von OpenAI hast.

<h2 id="motivation">Motivation</h2>

Ich bin kein Sprachexperte. Meine Übersetzungskenntnisse beschränken sich auf das Mittelstufenniveau in Spanisch. Doch ich glaube an Software und ihre Bedeutung. Für wen Software entwickelt wird, ist wichtig. Lokalisierung sollte nie als nachträgliche Überlegung betrachtet werden. Durch die Nutzung von KI-Übersetzungstools können Gespräche über den Einfluss von Software auf verschiedene Gemeinschaften früher in der Produktentwicklung geführt werden, nicht später.

Gespräche über den Einfluss von Software zu beschleunigen, führt zu bedeutenden Veränderungen, bevor der Funktionsumfang festgelegt ist. Deshalb glaube ich an die Kraft von, oft unvollkommenen, KI-Übersetzungstools. Lass das Perfekte nicht der Feind des Guten sein.

Einfache Übersetzung von String-Katalogen und hoffentlich vielen weiteren Dateiformaten ist der Grund, warum ich _tranzlate_ erstellt habe.

<h2 id="contributing">Mitwirken</h2>

Wenn du helfen möchtest, einen Fehler zu beheben oder ein Feature in [Issues](https://github.com/wkaisertexas/tranzlate) zu implementieren, dann tu das bitte. Die Swift-Entwicklung ist für mich relativ neu, daher würde ich Rückmeldungen aus der Community schätzen.

<a href="https://github.com/wkaisertexas/tranzlate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wkaisertexas/tranzlate" />
</a>

<h2 id="contributors">Mitwirkende</h2>

![Alt](https://repobeats.axiom.co/api/embed/74c05a15a0f3020ab2d6113b7bd0667dbe4d1ad4.svg "Repobeats analytics image")

> Danke an die [ai-shell](https://github.com/BuilderIO/ai-shell) für ihr README, welches ich als Vorlage verwendet habe.