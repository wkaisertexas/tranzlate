<h1 align="center">
   <img src="https://github.com/wkaisertexas/tranzlate/assets/27795014/2d8ab420-12de-422b-bfd2-b6a27bc936f7" alt="tranzlate logo"/>
</h1>

<h4 align="center">
   Una herramienta de interfaz de línea de comandos para traducir automáticamente catálogos de <code>.xcstring</code> utilizando OpenAI.
</h4>

<p align="center">
  <a href="https://github.com/wkaisertexas/tranzlate"><strong>English</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.zh-Hans.md"><strong>Chinese (Simplified)</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.fr.md"><strong>French</strong></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.es.md"><strong>Español</string></a> ·
  <a href="https://github.com/wkaisertexas/tranzlate/blob/main/README.de.md"><strong>German</strong></a>
</p>

<p align="center">
  <a href="#setup"><strong>Configuración</strong></a> ·
  <a href="#usage"><strong>Uso</strong></a> ·
  <a href="#configuration"><strong>Configuración</strong></a> ·
  <a href="#markdown"><strong>Markdown</string></a> ·
  <a href="#common-issues"><strong>Problemas Comunes</strong></a> ·
  <a href="#motivation"><strong>Motivación</strong></a> ·
  <a href="#contributing"><strong>Contribuyendo</strong></a> ·
  <a href="#contributors"><strong>Colaboradores</strong></a>
</p>

https://github.com/wkaisertexas/tranzlate/assets/27795014/6702dc3c-7f4b-4619-b792-e47949c5b373

<br>

# Tranzlate Interfaz CLI

<h2 id="setup">Configuración</h2>

> La versión mínima soportada de Node.js es v14

1. Instala _tranzlate_ globalmente:

   ```sh
   npm install -g tranzlate.js
   ```

2. Obtén tu clave de API de [OpenAI](https://platform.openai.com/account/api-keys)

   > Nota: Si aún no lo has hecho, tendrás que crear una cuenta y configurar la facturación.

3. Configura la clave para que tranzlate pueda usarla. Puedes hacer esto ejecutando:

   ```sh
   echo export OPENAI_API_KEY=<your token> >> ~/.bashrc
   ```

   o alternativamente, proporciona la clave al ejecutar el comando

<h2 id="usage">Uso</h2>

```bash
tranzlate
```

Entonces obtendrás una salida como esta, que te guía a través del proceso de traducir un catálogo de cadenas:

```bash
┌   tranzlate: traducción automática de cadenas
│
◇  Introduce el archivo de entrada
│  Localizable.xcstrings
│
◇  Introduce el archivo de salida
│  Localizable.xcstrings
│
◆  Selecciona los idiomas a los que traducir.
│  ◻ Árabe
│  ◻ Catalán
│  ◻ Chino (Simplificado)
│  ◻ Chino (Tradicional)
│  ◻ Croata
│  ◼ Checo
│  ◼ Danés
│  ◻ Holandés
│  ◻ Inglés
│  ◻ Inglés (Australia)
│  ◻ Inglés (Canadá)
│  ◻ Inglés (Reino Unido)
│  ◻ Inglés (EE.UU.)
│  ◻ Finés
│  ◻ Francés
│  ◻ Francés (Canadá)
│  ◻ Alemán
│  ◻ Griego
│  ◻ Hebreo
│  ◻ Hindi
│  ◻ Húngaro
│  ◼ Indonesio
│  ◻ Italiano
│  ◻ Japonés
│  ◻ Coreano
│  ◻ Malayo
│  ◻ Noruego
│  ◻ Polaco
│  ◼ Portugués (Brasil)
│  ◻ Portugués (Portugal)
│  ◻ Rumano
│  ◻ Ruso
│  ◻ Eslovaco
│  ◻ Español (México)
│  ◼ Español (España)
│  ◻ Sueco
│  ◻ Tailandés
│  ◻ Turco
│  ◼ Ucraniano
└  ◻ Vietnamita
```

<h2 id="configuration">Configuración</h2>

https://github.com/wkaisertexas/tranzlate/assets/27795014/5ae6ca30-d030-4ec8-8c59-e2d1593084dc

Dado que soportar un solo idioma sería irónico para una herramienta de traducción, ofrecemos la posibilidad de cambiar el idioma de configuración. Puedes configurar tu idioma ejecutando:

```bash
tranzlate set-language <language>
```

Donde `<language>` es uno de los siguientes:

<table align="center">
  <thead>
    <tr>
      <th>Idioma</th>
      <th>Clave</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Inglés</td><td>en</td></tr>
    <tr><td>Chino Simplificado</td><td>zh-Hans</td></tr>
    <tr><td>Chino Tradicional</td><td>zh-Hant</td></tr>
    <tr><td>Español</td><td>es</td></tr>
    <tr><td>Japonés</td><td>ja</td></tr>
    <tr><td>Coreano</td><td>ko</td></tr>
    <tr><td>Francés</td><td>fr</td></tr>
    <tr><td>Alemán</td><td>de</td></tr>
    <tr><td>Ruso</td><td>ru</td></tr>
    <tr><td>Ucraniano</td><td>uk</td></tr>
    <tr><td>Vietnamita</td><td>vi</td></tr>
    <tr><td>Árabe</td><td>ar</td></tr>
    <tr><td>Portugués</td><td>pt-BR</td></tr>
    <tr><td>Turco</td><td>tr</td></tr>
  </tbody>
</table>

Por ejemplo, si deseas cambiar a Chino Simplificado, puedes hacerlo configurando el valor de LANGUAGE a zh-Hans:

```sh
tranzlate set-language zh-Hans
```

Esto establecerá tu idioma en Chino Simplificado.

<h2 id="markdown">Markdown</h2>

Se admite soporte para traducciones de markdown. Para entrar en modo markdown, ejecuta:

```sh
tranzlate markdown
```

Se te pedirá un archivo o patrón de markdown para traducir. Las traducciones de salida añaden el código de idioma ISO al final de cada nombre de archivo. **Por ejemplo,** si traduces `README.md` a Chino Simplificado (zh-Hans), el archivo de salida será `README.zh-Hans.md`.

```console
┌   tranzlate: traducción automática de markdown
│
◇  Introduce un archivo o patrón de markdown
│  ./README.md
│
◇  Selecciona los idiomas a los que traducir
│  fi - Finés, hu - Húngaro, pl - Polaco, ru - Ruso
│
◇  Selecciona un modelo
│  gpt-3.5-turbo
◆  Traduciendo README.md...
```

> [!NOTA]
> La traducción de markdown está en beta. Por favor, informa de cualquier problema que encuentres.

<h2 id="common-issues">Problemas Comunes</h2>

### Error 429

Algunos usuarios están reportando un 429 de OpenAI. Esto se debe a una configuración incorrecta de facturación o uso excesivo de la cuota. Por favor, sigue [esta guía](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details) para solucionarlo.

Puedes activar la facturación en [este enlace](https://platform.openai.com/account/billing/overview). Asegúrate de añadir un método de pago si no estás bajo una subvención activa de OpenAI.

<h2 id="motivation">Motivación</h2>

No soy un experto en idiomas. Mi competencia en traducción se extiende solo al nivel de español de la escuela secundaria. Sin embargo, creo en el software y su importancia. Para quién se desarrolla el software importa. La localización no es ni nunca debería ser una idea de última hora. Al utilizar herramientas de traducción de IA, se pueden tener conversaciones sobre el impacto que el software tiene en diferentes comunidades desde el principio en el desarrollo del producto, no después.

Acelerar las conversaciones sobre el impacto del software conduce a cambios significativos antes de que los conjuntos de características se cierren. Por eso creo en el poder de las herramientas de traducción de IA, a menudo imperfectas. No dejes que lo perfecto sea enemigo de lo bueno.

La traducción fácil de catálogos de cadenas, y con suerte de muchos más formatos de archivo en el futuro es la razón por la que creé _tranzlate_.

<h2 id="contributing">Contribuyendo</h2>

Si deseas ayudar a corregir un error o implementar una función en [Issues](https://github.com/wkaisertexas/tranzlate), por favor, hazlo. El desarrollo en Swift es algo nuevo para mí, por lo que agradecería los comentarios de la comunidad.

<a href="https://github.com/wkaisertexas/tranzlate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wkaisertexas/tranzlate" />
</a>

<h2 id="contributors">Colaboradores</h2>

![Alt](https://repobeats.axiom.co/api/embed/74c05a15a0f3020ab2d6113b7bd0667dbe4d1ad4.svg "Imagen de analítica de Repobeats")

> Gracias al [ai-shell](https://github.com/BuilderIO/ai-shell) por su README que utilicé como plantilla.