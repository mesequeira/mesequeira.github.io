import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.CfbOou38.js";const m=JSON.parse('{"title":"Comando platform create","description":"","frontmatter":{},"headers":[],"relativePath":"platform/commands/create.md","filePath":"platform/commands/create.md"}'),p={name:"platform/commands/create.md"},i=e(`<h1 id="comando-platform-create" tabindex="-1">Comando platform create <a class="header-anchor" href="#comando-platform-create" aria-label="Permalink to &quot;Comando platform create&quot;">​</a></h1><h2 id="sinopsis" tabindex="-1">Sinopsis <a class="header-anchor" href="#sinopsis" aria-label="Permalink to &quot;Sinopsis&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">platform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PROJECT_NAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">platform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--help</span></span></code></pre></div><h2 id="descripcion" tabindex="-1">Descripción <a class="header-anchor" href="#descripcion" aria-label="Permalink to &quot;Descripción&quot;">​</a></h2><p>El comando <code>platform create</code> permite crear un proyecto de .NET 8 que sigue una orientación de Clean Architecture.</p><h3 id="opciones" tabindex="-1">Opciones <a class="header-anchor" href="#opciones" aria-label="Permalink to &quot;Opciones&quot;">​</a></h3><ul><li><p><code>--name</code></p><p>El nombre de la salida creada el nombre que tendrá el proyecto, junto al <code>Root.Namespace</code> y <code>Assembly</code>. Si no se</p></li></ul><h2 id="ejemplos" tabindex="-1">Ejemplos <a class="header-anchor" href="#ejemplos" aria-label="Permalink to &quot;Ejemplos&quot;">​</a></h2><ul><li>Crear un proyecto de WebApi con .NET 8.0.</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">platform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Iceberg</span></span></code></pre></div><h2 id="estructura-de-la-aplicacion" tabindex="-1">Estructura de la aplicación <a class="header-anchor" href="#estructura-de-la-aplicacion" aria-label="Permalink to &quot;Estructura de la aplicación&quot;">​</a></h2><h3 id="proyecto-webapi" tabindex="-1">Proyecto WebApi <a class="header-anchor" href="#proyecto-webapi" aria-label="Permalink to &quot;Proyecto WebApi&quot;">​</a></h3><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>📂 Solution Items</span></span>
<span class="line"><span>├── 📄 .env</span></span>
<span class="line"><span>├── 📄 .gitignore</span></span>
<span class="line"><span>📂 src</span></span>
<span class="line"><span>├── 📂 Core</span></span>
<span class="line"><span>│   ├── 📂 Iceberg.Application</span></span>
<span class="line"><span>│   │   ├── 📂 Abstractions</span></span>
<span class="line"><span>│   │   ├── 📂 Users</span></span>
<span class="line"><span>│   │   ├── 📄 ApplicationAssemblyReference.cs</span></span>
<span class="line"><span>│   │   └── 📄 ApplicationServiceRegistration.cs</span></span>
<span class="line"><span>│   │   └── 📄 GlobalUsings.cs</span></span>
<span class="line"><span>│   ├── 📂 Iceberg.Contracts</span></span>
<span class="line"><span>│   │   └── 📂 Users</span></span>
<span class="line"><span>│   ├── 📂 Iceberg.Domain</span></span>
<span class="line"><span>│   │   └── 📂 Users</span></span>
<span class="line"><span>│   │   └── 📄 GlobalUsings.cs</span></span>
<span class="line"><span>├── 📂 Infrastructure</span></span>
<span class="line"><span>│   ├── 📂 Iceberg.Infrastructure</span></span>
<span class="line"><span>│   │   ├── 📄 InfrastructureAssemblyReference.cs</span></span>
<span class="line"><span>│   │   └── 📄 InfrastructureServicesRegistration.cs</span></span>
<span class="line"><span>│   ├── 📂 Iceberg.Persistence</span></span>
<span class="line"><span>│   │   ├── 📂 Configurations</span></span>
<span class="line"><span>│   │   ├── 📂 Contexts</span></span>
<span class="line"><span>│   │   ├── 📂 Migrations</span></span>
<span class="line"><span>│   │   ├── 📂 Repositories</span></span>
<span class="line"><span>│   │   ├── 📄 PersistenceAssemblyReference.cs</span></span>
<span class="line"><span>│   │   └── 📄 PersistenceServicesRegistration.cs</span></span>
<span class="line"><span>├── 📂 WebApi</span></span>
<span class="line"><span>│   ├── 📂 Iceberg.WebApi</span></span>
<span class="line"><span>│   │   ├── 📂 Configurations</span></span>
<span class="line"><span>│   │   ├── 📂 Controllers</span></span>
<span class="line"><span>│   │   ├── 📂 Middlewares</span></span>
<span class="line"><span>│   │   ├── 📂 Models</span></span>
<span class="line"><span>│   │   ├── 📄 appsettings.json</span></span>
<span class="line"><span>│   │   ├── 📄 appsettings.Development.json</span></span>
<span class="line"><span>│   │   ├── 📄 Dockerfile</span></span>
<span class="line"><span>│   │   └── 📄 Program.cs</span></span>
<span class="line"><span>📄 docker-compose.yml</span></span>
<span class="line"><span>📄 docker-compose.override.yml</span></span></code></pre></div><h3 id="proyectos-de-testing" tabindex="-1">Proyectos de Testing <a class="header-anchor" href="#proyectos-de-testing" aria-label="Permalink to &quot;Proyectos de Testing&quot;">​</a></h3><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>📂 tests</span></span>
<span class="line"><span>├── 📂 Iceberg.Application.UnitTests</span></span>
<span class="line"><span>│   ├── 📂 TestsUtils</span></span>
<span class="line"><span>│   ├── 📂 Users</span></span>
<span class="line"><span>│   └── 📄 GlobalUsings.cs</span></span>
<span class="line"><span>├── 📂 Iceberg.Architecture.Tests</span></span>
<span class="line"><span>│   ├── 📂 Domain</span></span>
<span class="line"><span>│   ├── 📄 BaseTest.cs</span></span>
<span class="line"><span>│   ├── 📄 GlobalUsings.cs</span></span>
<span class="line"><span>│   └── 📄 LayerTests.cs</span></span>
<span class="line"><span>├── 📂 Iceberg.Domain.UnitTests</span></span>
<span class="line"><span>│   ├── 📂 TestsUtils</span></span>
<span class="line"><span>│   ├── 📂 Users</span></span>
<span class="line"><span>│   └── 📄 GlobalUsings.cs</span></span>
<span class="line"><span>├── 📂 Iceberg.WebApi.FunctionalTests</span></span>
<span class="line"><span>│   ├── 📂 Abstractions</span></span>
<span class="line"><span>│   ├── 📂 Contracts</span></span>
<span class="line"><span>│   ├── 📂 Extensions</span></span>
<span class="line"><span>│   ├── 📂 TestsUtils</span></span>
<span class="line"><span>│   └── 📂 Users</span></span></code></pre></div>`,15),l=[i];function t(c,o,r,h,d,k){return n(),a("div",null,l)}const u=s(p,[["render",t]]);export{m as __pageData,u as default};
