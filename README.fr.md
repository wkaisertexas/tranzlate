<h1 align="center">
   <img src="https://github.com/wkaisertexas/tranzlate/assets/27795014/2d8ab420-12de-422b-bfd2-b6a27bc936f7" alt="logo tranzlate"/>
</h1>

<h4 align="center">
   Un outil d'interface de ligne de commande pour traduire automatiquement les catalogues <code>.xcstring</code> en utilisant OpenAI.
</h4>

<p align="center">
  <a href="https://github.com/wkaisertexas/tranzlate"><strong>Anglais</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.zh-Hans.md"><strong>Chinois (Simplifié)</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.fr.md"><strong>Français</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.es.md"><strong>Espagnol</string></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.de.md"><strong>Allemand</strong></a>
</p>

<p align="center">
  <a href="#setup"><strong>Configuration</strong></a> ·
  <a href="#usage"><strong>Utilisation</strong></a> ·
  <a href="#configuration"><strong>Paramétrage</strong></a> ·
  <a href="#markdown"><strong>Markdown</string></a> ·
  <a href="#common-issues"><strong>Problèmes courants</strong></a> ·
  <a href="#motivation"><strong>Motivation</string></a> ·
  <a href="#contributing"><strong>Contribution</strong></a> ·
  <a href="#contributors"><strong>Contributeurs</strong></a>
</p>

https://github.com/wkaisertexas/tranzlate/assets/27795014/6702dc3c-7f4b-4619-b792-e47949c5b373

<br>

# Interface de ligne de commande Tranzlate

<h2 id="setup">Configuration</h2>

> La version minimale prise en charge de Node.js est v14

1. Installez _tranzlate_ globalement :

   ```sh
   npm install -g tranzlate.js
   ```

2. Récupérez votre clé API de [OpenAI](https://platform.openai.com/account/api-keys)

   > Remarque : Si vous ne l'avez pas déjà fait, vous devrez créer un compte et configurer la facturation.

3. Définissez la clé pour que tranzlate puisse l'utiliser. Vous pouvez le faire en exécutant :

   ```sh
   echo export OPENAI_API_KEY=<votre token> >> ~/.bashrc
   ```

   ou alternativement, fournir la clé lors de l'exécution de la commande

<h2 id="usage">Utilisation</h2>

```bash
tranzlate
```

Ensuite, vous obtiendrez une sortie comme celle-ci, qui vous guide tout au long du processus de traduction d'un catalogue de chaînes :

```bash
┌   tranzlate: traduction automatique de chaînes
│
◇  Entrer le fichier d'entrée
│  Localizable.xcstrings
│
◇  Entrer le fichier de sortie
│  Localizable.xcstrings
│
◆  Sélectionnez les langues vers lesquelles traduire.
│  ◻ Arabe
│  ◻ Catalan
│  ◻ Chinois (Simplifié)
│  ◻ Chinois (Traditionnel)
│  ◻ Croate
│  ◼ Tchèque
│  ◼ Danois
│  ◻ Néerlandais
│  ◻ Anglais
│  ◻ Anglais (Australie)
│  ◻ Anglais (Canada)
│  ◻ Anglais (R.U.)
│  ◻ Anglais (U.S.)
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

<h2 id="configuration">Paramétrage</h2>

https://github.com/wkaisertexas/tranzlate/assets/27795014/5ae6ca30-d030-4ec8-8c59-e2d1593084dc

Parce que ne soutenir qu'une seule langue serait ironique pour un utilitaire de traduction, nous soutenons la modification de votre langue de configuration. Vous pouvez établir votre langue en exécutant :

```bash
tranzlate set-language <langue>
```

Où `<langue>` est l'un des termes suivants :

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

Par exemple, si vous voulez passer au chinois simplifié, vous pouvez le faire en définissant la valeur de LANGUAGE à zh-Hans :

```sh
tranzlate set-language zh-Hans
```

Cela définira votre langue en chinois simplifié.

<h2 id="markdown">Markdown</h2>

Le support pour les traductions en markdown est assuré. Pour entrer en mode markdown, exécutez :

```sh
tranzlate markdown
```

On vous demandera un fichier markdown ou glob à traduire. Les traductions de sortie ajoutent le code ISO de la langue à la fin de chaque nom de fichier. **Par exemple,** si vous traduisez `README.md` en chinois simplifié (zh-Hans), le fichier de sortie sera `README.zh-Hans.md`.

```console
┌   tranzlate: traduction automatique de markdown
│
◇  Entrer un fichier markdown ou glob
│  ./README.md
│
◇  Sélectionnez les langues vers lesquelles traduire
│  fi - Finnois, hu - Hongrois, pl - Polonais, ru - Russe
│
◇  Sélectionnez un modèle
│  gpt-3.5-turbo
◆  Traduction de README.md...
```

> Remarque : la traduction en markdown est en version bêta. Merci de signaler tout problème que vous rencontrez.

<h2 id="common-issues">Problèmes courants</h2>

### Erreur 429

Certains utilisateurs signalent une erreur 429 de la part d'OpenAI. Ceci est dû à une configuration incorrecte de la facturation ou à une utilisation excessive du quota. Veuillez suivre [ce guide](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details) pour le corriger.

Vous pouvez activer la facturation à [ce lien](https://platform.openai.com/account/billing/overview). Assurez-vous d'ajouter un mode de paiement si vous n'êtes pas sous une bourse active de OpenAI.

<h2 id="motivation">Motivation</h2>

Je ne suis pas un expert en langues. Mon aptitude à la traduction se limite au niveau espagnol du collège. Cependant, je crois au logiciel et à son importance. Pour qui le logiciel est développé compte. La localisation n'est ni ne devrait jamais être une réflexion après coup. En utilisant des outils de traduction par IA, on peut parler plus tôt dans le développement du produit de l'impact du logiciel sur différentes communautés, et non plus tard.

Accélérer les conversations sur l'impact du logiciel conduit à un changement significatif avant que les éléments fonctionnels ne soient verrouillés. C'est pourquoi je crois en la puissance des outils de traduction par IA, souvent imparfaits. Ne laissez pas la perfection être l'ennemie du bien.

La facilité de traduction, des catalogues de chaînes, et j'espère de nombreux autres formats de fichiers à venir est la raison pour laquelle j'ai créé _tranzlate_.

<h2 id="contributing">Contribution</h2>

Si vous voulez aider à corriger un bug ou à implémenter une fonctionnalité dans [Issues](https://github.com/wkaisertexas/tranzlate), n'hésitez pas. Le développement avec Swift est quelque chose de nouveau pour moi, donc j'apprécierais les commentaires de la communauté.

<a href="https://github.com/wkaisertexas/tranzlate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wkaisertexas/tranzlate" />
</a>

<h2 id="contributors">Contributeurs</h2>

![Alt](https://repobeats.axiom.co/api/embed/74c05a15a0f3020ab2d6113b7bd0667dbe4d1ad4.svg "Image d'analyse des réponses")

> Merci à [ai-shell](https://github.com/BuilderIO/ai-shell) pour leur README que j'ai utilisé comme modèle.
