import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.CfbOou38.js";const n="/assets/access-token.Z7IdKyBt.gif",t="/assets/nuget-source.CdQs2CRo.gif",y=JSON.parse('{"title":"Configuración de Nuget Sources","description":"","frontmatter":{},"headers":[],"relativePath":"packages/configuration.md","filePath":"packages/configuration.md"}'),l={name:"packages/configuration.md"},r=e('<h1 id="configuracion-de-nuget-sources" tabindex="-1">Configuración de Nuget Sources <a class="header-anchor" href="#configuracion-de-nuget-sources" aria-label="Permalink to &quot;Configuración de Nuget Sources&quot;">​</a></h1><h2 id="crear-access-token" tabindex="-1">Crear Access Token <a class="header-anchor" href="#crear-access-token" aria-label="Permalink to &quot;Crear Access Token&quot;">​</a></h2><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>El token <strong>sólo se podrá ver en el momento que se genera</strong>. Si lo perdemos, tendremos que repetir el proceso, por lo que se recomienda guardarlo en un lugar seguro.</p></div><p>Para poder autenticarnos contra el Feed que contiene desplegado el Nuget Package con nuestro CLI Tool necesitamos generar un access token.</p><ol><li><p>Acceder a la opcion de <strong>Personal access tokens</strong> disponible en el menú desplegado junto a nuestra foto de perfil dentro de Azure DevOps.</p></li><li><p>Generaremos un nuevo token apretando sobre el botón <strong>New Token</strong></p></li><li><p>Rellenaremos la información brindando el nombre que deseemos, una fecha de expiración del token y una autorización de <strong>Full access</strong>.</p></li><li><p>Finalmente se nos generará un token que será el que utilicemos para autenticarnos contra el Feed.</p></li></ol><p><img src="'+n+`" alt="Create Access Token" loading="lazy"></p><h2 id="configurar-nuget-source" tabindex="-1">Configurar Nuget Source <a class="header-anchor" href="#configurar-nuget-source" aria-label="Permalink to &quot;Configurar Nuget Source&quot;">​</a></h2><div class="info custom-block github-alert"><p class="custom-block-title">INFO</p><p>Nota: Es recomendable usar mecanismos de seguridad adicionales para proteger las credenciales almacenadas en el archivo NuGet.Config.</p></div><p>Para poder realizar la instalación de los paquetes y el CLI Tool, es necesario configurar el origen de dónde vendrán. Para eso hay que modificar el archivo <strong>NuGet.Config</strong> global de nuestro sistema operativo.</p><ol><li>Apretar <strong>Windows + R</strong>.</li><li>Escribir <strong>%appdata%</strong>.</li><li>Buscar la carpeta <strong>NuGet</strong>.</li><li>Buscar y abrir el archivo <strong>NuGet.Config</strong>.</li><li>Para agregar una nueva fuente de paquetes, debes editar el archivo NuGet.Config y agregar un nuevo <code>&lt;add&gt;</code> bajo la sección <code>&lt;packageSources&gt;</code>.</li></ol><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">packageSources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- Agrega tu nueva fuente aquí --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">add</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyCustomSource&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://my-custom-source-url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">packageSources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol start="6"><li>Ya que nuestra nueva fuente de paquetes requiere autenticación, deberás agregar credenciales en la sección <code>&lt;packageSourceCredentials&gt;</code> del archivo NuGet.Config.</li></ol><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">packageSources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- Tu fuente agregada previamente --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">add</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyCustomSource&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://my-custom-source-url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">packageSources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">packageSourceCredentials</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- El nombre del tag corresponde al mismo que ingresaste en el key del &lt;add&gt; de arriba --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MyCustomSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- Cambia los values por tú email broxel y el access token generado anteriormente --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">add</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Username&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your-broxel-email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">add</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ClearTextPassword&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your-access-token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MyCustomSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">packageSourceCredentials</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><img src="`+t+'" alt="Add Nuget Source" loading="lazy"></p>',14),p=[r];function o(k,h,g,c,d,E){return a(),i("div",null,p)}const m=s(l,[["render",o]]);export{y as __pageData,m as default};
