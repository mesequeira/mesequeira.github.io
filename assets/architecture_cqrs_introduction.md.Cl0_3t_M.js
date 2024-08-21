import{_ as e,c as a,o as s,a4 as i}from"./chunks/framework.DpC1ZpOZ.js";const n="/assets/cqrs.9SClqX2x.png",g=JSON.parse('{"title":"CQRS","description":"","frontmatter":{},"headers":[],"relativePath":"architecture/cqrs/introduction.md","filePath":"architecture/cqrs/introduction.md"}'),o={name:"architecture/cqrs/introduction.md"},l=i('<h1 id="cqrs" tabindex="-1">CQRS <a class="header-anchor" href="#cqrs" aria-label="Permalink to &quot;CQRS&quot;">​</a></h1><h2 id="introduccion" tabindex="-1">Introducción <a class="header-anchor" href="#introduccion" aria-label="Permalink to &quot;Introducción&quot;">​</a></h2><p>CQRS hace referencia a <code>Command and Query Responsibility Segregation</code>, que como su nombre lo indica, es un patrón que separa las operaciones de lectura y actualización. La implementación de CQRS en la aplicación puede maximizar el rendimiento, la escalabilidad y la seguridad. La flexibilidad creada al migrar a CQRS permite que un sistema evolucione mejor con el tiempo y evita que los comandos de actualización provoquen conflictos de combinación en el nivel de dominio.</p><h2 id="contexto-y-problema" tabindex="-1">Contexto y problema <a class="header-anchor" href="#contexto-y-problema" aria-label="Permalink to &quot;Contexto y problema&quot;">​</a></h2><p>En las arquitecturas tradicionales, se utiliza el mismo modelo de datos para consultar y actualizar una base de datos. Es sencillo y funciona bien para las operaciones CRUD básicas. Sin embargo, en aplicaciones más complejas, este enfoque puede resultar difícil de manejar. Por ejemplo, en el lado de lectura, la aplicación puede realizar muchas consultas diferentes y devolver objetos de transferencia de datos (DTO) con distintas formas. La asignación de objetos puede llegar a ser algo complicado. En el lado de escritura, el modelo puede implementar una validación y una lógica de negocios complejas. En consecuencia, puede acabar con un modelo excesivamente complejo que haga demasiado.</p><p>Las cargas de trabajo de lectura y escritura suelen ser asimétricas, con requisitos de rendimiento y escalabilidad muy diferentes.</p><p><img src="'+n+`" alt="Gráfico de CQRS" loading="lazy"></p><ul><li><p>A menudo hay una incoherencia entre las representaciones de lectura y escritura de los datos, como columnas o propiedades adicionales que se deben actualizar correctamente incluso aunque no sean necesarias como parte de una operación.</p></li><li><p>La contención de datos puede producirse cuando las operaciones se realizan en paralelo en el mismo conjunto de datos.</p></li><li><p>El enfoque tradicional puede tener un impacto negativo en el rendimiento debido a la carga en el almacén de datos y al nivel de acceso a los datos, y la complejidad de las consultas necesarias para recuperar la información.</p></li><li><p>Esto puede hacer que la administración de la seguridad y los permisos se vuelva más compleja ya que cada entidad está sujeta a operaciones de lectura y de escritura, lo cual podría exponer los datos en el contexto equivocado.</p></li></ul><h2 id="solucion" tabindex="-1">Solución <a class="header-anchor" href="#solucion" aria-label="Permalink to &quot;Solución&quot;">​</a></h2><p>CQRS separa las lecturas y las escrituras en diferentes modelos, usa comandos para actualizar los datos y consultas para leer los datos.</p><ul><li>Los comandos se deben basar en tareas, en lugar de centrarse en los datos. (&quot;Book hotel room&quot;, no &quot;set ReservationStatus to Reserved&quot;). Esto puede requerir algunos cambios correspondientes en el estilo de interacción del usuario. La otra parte de esto es examinar la modificación de la lógica de negocios que procesa esos comandos para que se realicen correctamente con más frecuencia. Una técnica que admite esto es ejecutar algunas reglas de validación en el cliente incluso antes de enviar el comando, posiblemente deshabilitar botones, explicando por qué en la interfaz de usuario (&quot;no quedan salas&quot;). De esta manera, la causa de los errores de comandos del lado servidor se puede restringir a las condiciones de carrera (dos usuarios que intentan reservar la última sala), e incluso las que a veces se pueden solucionar con algunos datos y lógicas más (colocando a un invitado en una lista de espera).</li><li>Los comandos se pueden colocar en una cola para su procesamiento asincrónico, en lugar de procesarse sincrónicamente.</li><li>Las consultas nunca modifican la base de datos. Una consulta devuelve un DTO que no encapsula ningún conocimiento del dominio. Posteriormente, se pueden aislar los modelos, como se indica en este diagrama, aunque eso no es un requisito imprescindible.</li></ul><h2 id="implementacion" tabindex="-1">Implementación <a class="header-anchor" href="#implementacion" aria-label="Permalink to &quot;Implementación&quot;">​</a></h2><p>Para implementar CQRS con <code>MediatR</code> tenemos que tener en cuenta dos componentes:</p><ul><li>Definir nuestra clase command o query.</li><li>Implementar el respectivo handler para nuestro command o query.</li></ul><p>Vamos a hacer uso de la clase <code>Sender</code> para enviar el command o query. <code>MediatR</code> se va a encargar de dirigirlo al respectivo handler.</p><p>La solicitud va a viajar a través del <em>request pipeline</em>, el cual no es más que un wrapper que envuelve a todas las solicitudes que se realizan. Este concepto se ve más a profundidad con los <a href="./pipeline-behavior.html">Pipeline Behavior</a>.</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ApiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UsersController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ApiBaseController</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Task</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FromBody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateUserCommand</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Sender.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(command));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="referencias" tabindex="-1">Referencias <a class="header-anchor" href="#referencias" aria-label="Permalink to &quot;Referencias&quot;">​</a></h2><p><a href="https://learn.microsoft.com/es-es/azure/architecture/patterns/cqrs" target="_blank" rel="noreferrer">Microsoft - Patrón CQRS</a></p><p><a href="https://www.milanjovanovic.tech/blog/cqrs-pattern-with-mediatr" target="_blank" rel="noreferrer">Milan Jovanović - CQRS Pattern With MediatR</a></p>`,20),r=[l];function t(c,d,p,u,h,m){return s(),a("div",null,r)}const E=e(o,[["render",t]]);export{g as __pageData,E as default};
