<h1 align="center">
   <img src="https://github.com/wkaisertexas/tranzlate/assets/27795014/2d8ab420-12de-422b-bfd2-b6a27bc936f7" alt="Logo de tranzlate"/>
</h1>

<h4 align="center">
   Un outil d'interface en ligne de commande pour traduire automatiquement des catalogues <code>.xcstring</code> à l'aide d'OpenAI.
</h4>

<p align="center">
  <a href="https://github.com/wkaisertexas/tranzlate"><strong>Anglais</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.zh-Hans.md"><strong>Chinois (Simplifié)</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.fr.md"><strong>Français</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.es.md"><strong>Espagnol</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.de.md"><strong>Allemand</strong></a>
</p>

<p align="center">
  <a href="#setup"><strong>Installation</strong></a> ·
  <a href="#usage"><strong>Utilisation</strong></a> ·
  <a href="#configuration"><strong>Configuration</strong></a> ·
  <a href="#markdown"><strong>Markdown</strong></a> ·
  <a href="#common-issues"><strong>Problèmes Courants</strong></a> ·
  <a href="#motivation"><strong>Motivation</strong></a> ·
  <a href="#contributing"><strong>Contribuer</strong></a> ·
  <a href="#contributors"><strong>Contributeurs</strong></a>
</p>

https://github.com/wkaisertexas/tranzlate/assets/27795014/6702dc3c-7f4b-4619-b792-e47949c5b373

<br>

# Interface CLI de Tranzlate

<h2 id="setup">Installation</h2>

> La version minimale supportée de Node.js est v14

1. Installez _tranzlate_ globalement :

   ```sh
   npm install -g tranzlate.js
   ```

2. Récupérez votre clé API depuis [OpenAI](https://platform.openai.com/account/api-keys)

   > Remarque : Si vous ne l'avez pas déjà fait, vous devrez créer un compte et configurer la facturation.

3. Définissez la clé pour que tranzlate puisse l'utiliser. Vous pouvez faire cela en exécutant :

   ```sh
   echo export OPENAI_API_KEY=<votre jeton> >> ~/.bashrc
   ```

   ou alternativement, fournissez la clé lors de l'exécution de la commande

<h2 id="usage">Utilisation</h2>

```bash
tranzlate
```

Vous obtiendrez alors une sortie comme celle-ci, qui vous guide à travers le processus de traduction d'un catalogue de chaînes :

```bash
┌   tranzlate: traduction automatique de chaînes
│
◇  Entrez le fichier d'entrée
│  Localizable.xcstrings
│
◇  Entrez le fichier de sortie
│  Localizable.xcstrings
│
◆  Sélectionnez les langues à traduire.
│  ◻ Arabe
│  ◻ Catalan
│  ◻ Chinois (Simplifié)
│  ◻ Chinois (Traditionnel)
│  ◻ Croate
│  ◼ Tcheque
│  ◼ Danois
│  ◻ Néerlandais
│  ◻ Anglais
│  ◻ Anglais (Australie)
│  ◻ Anglais (Canada)
│  ◻ Anglais (R.-U.)
│  ◻ Anglais (É.-U.)
│  ◻ Finnois
│  ◻ Français
│  ◻ Français (Canada)
│  ◻ Allemand
│  ◻ Grec
│  ◻ Hébreu
│  ◻ Hindi
│  ◻ Hongrois
│  ◼ Indonésien
│  ◻ Italien
│  ◻ Japonais
│  ◻ Coréen
│  ◻ Malais
│  ◻ Norvégien
│  ◻ Polonais
│  ◼ Portugais (Brésil)
│  ◻ Portugais (Portugal)
│  ◻ Roumain
│  ◻ Russe
│  ◻ Slovaque
│  ◻ Espagnol (Mexique)
│  ◼ Espagnol (Espagne)
│  ◻ Suédois
│  ◻ Thaï
│  ◻ Turc
│  ◼ Ukrainien
└  ◻ Vietnamien
```

<h2 id="configuration">Configuration</h2>

https://github.com/wkaisertexas/tranzlate/assets/27795014/5ae6ca30-d030-4ec8-8c59-e2d1593084dc

Parce que ne supporter qu'une seule langue serait ironique pour un utilitaire de traduction, nous supportons le changement de langue de votre configuration. Vous pouvez définir votre langue en exécutant :

```bash
tranzlate set-language <language>
```

Où `<language>` est l'une des suivantes :

<table align="center">
  <thead>
    <tr>
      <th>Langue</th>
      <th>Clé</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Anglais</td><td>en</td></tr>
    <tr><td>Chinois Simplifié</td><td>zh-Hans</td></tr>
    <tr><td>Chinois Traditionnel</td><td>zh-Hant</td></tr>
    <tr><td>Espagnol</td><td>es</td></tr>
    <tr><td>Japonais</td><td>ja</td></tr>
    <tr><td>Coréen</td><td>ko</td></tr>
    <tr><td>Français</td><td>fr</td></tr>
    <tr><td>Allemand</td><td>de</td></tr>
    <tr><td>Russe</td><td>ru</td></tr>
    <tr><td>Ukrainien</td><td>uk</td></tr>
    <tr><td>Vietnamien</td><td>vi</td></tr>
    <tr><td>Arabe</td><td>ar</td></tr>
    <tr><td>Portugais</td><td>pt-BR</td></tr>
    <tr><td>Turc</td><td>tr</td></tr>
  </tbody>
</table>

Par exemple, si vous souhaitez passer au Chinois Simplifié, vous pouvez le faire en définissant la valeur LANGUAGE sur zh-Hans :

```sh
tranzlate set-language zh-Hans
```

Cela définira votre langue sur le Chinois Simplifié.

<h2 id="markdown">Markdown</h2>

La prise en charge des traductions markdown est supportée. Pour entrer en mode markdown, exécutez :

```sh
tranzlate markdown
```

Vous serez invité à indiquer un fichier markdown ou un motif global à traduire. Les traductions de sortie ajoutent le code de langue ISO à la fin de chaque nom de fichier. **Par exemple,** si vous traduisez `README.md` en Chinois Simplifié (zh-Hans), le fichier de sortie sera `README.zh-Hans.md`.

```console
┌   tranzlate: traduction automatique de markdown
│
◇  Entrez un fichier markdown ou un motif global
│  ./README.md
│
◇  Sélectionnez les langues à traduire
│  fi - Finnois, hu - Hongrois, pl - Polonais, ru - Russe
│
◇  Sélectionnez un modèle
│  gpt-3.5-turbo
◆  Traduction de README.md...
```

> [!NOTE]
> La traduction de markdown est en version bêta. Veuillez signaler tout problème rencontré.

<h2 id="common-issues">Problèmes Courants</h2>

### Erreur 429

Certains utilisateurs signalent une erreur 429 d'OpenAI. Cela est dû à une configuration incorrecte de la facturation ou à une utilisation excessive du quota. Veuillez suivre [ce guide](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details) pour le résoudre.

Vous pouvez activer la facturation à [ce lien](https://platform.openai.com/account/billing/overview). Assurez-vous d'ajouter un moyen de paiement si vous ne bénéficiez pas d'une subvention active d'OpenAI.

<h2 id="motivation">Motivation</h2>

Je ne suis pas un expert en langues. Ma maîtrise de la traduction se limite à un niveau de collégien en espagnol. Cependant, je crois au logiciel et à son importance. Pour qui le logiciel est développé compte. La localisation ne doit pas, et ne devrait jamais être une réflexion après coup. En utilisant les outils de traduction IA, des conversations sur l'impact du logiciel sur différentes communautés peuvent se tenir plus tôt dans le développement du produit, pas plus tard.

Accélérer les conversations sur l'impact des logiciels conduit à des changements significatifs avant que les ensembles de fonctionnalités ne soient verrouillés. C'est pourquoi je crois au pouvoir des outils de traduction IA, souvent imparfaits. Ne laissez pas le parfait être l'ennemi du bien.

La traduction facile de catalogues de chaînes, et nous l'espérons de nombreux autres formats de fichiers à venir, est la raison pour laquelle j'ai créé _tranzlate_.

<h2 id="contributing">Contribuer</h2>

Si vous voulez aider à corriger un bug ou à implémenter une fonctionnalité dans [Issues](https://github.com/wkaisertexas/tranzlate), n'hésitez pas. Le développement sur Swift est quelque peu nouveau pour moi, donc j'apprécierais les retours de la communauté.

<a href="https://github.com/wkaisertexas/tranzlate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wkaisertexas/tranzlate" />
</a>

<h2 id="contributors">Contributeurs</h2>

![Alt](https://repobeats.axiom.co/api/embed/74c05a15a0f3020ab2d6113b7bd0667dbe4d1ad4.svg "Image d'analyse Repobeats")

> Merci à [ai-shell](https://github.com/BuilderIO/ai-shell) pour leur README que j'ai utilisé comme modèle.