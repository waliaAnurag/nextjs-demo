const AccountPage = () => {
    return (
      <div>
  <h2>Migration from Page to App Routers</h2>
  
  <h3>Server-Side Rendering (SSR)</h3>
  <p>In the pages directory, <code>getServerSideProps</code> is used to fetch data on the server and forward props to the default exported React component in the file. The initial HTML for the page is prerendered from the server, followed by "hydrating" the page in the browser (making it interactive).</p>

  <p>In the app directory, we can colocate our data fetching inside our React components using Server Components. This allows us to send less JavaScript to the client, while maintaining the rendered HTML from the server.</p>

  <p>By setting the cache option to <code>no-store</code>, we can indicate that the fetched data should never be cached. This is similar to <code>getServerSideProps</code> in the pages directory.</p>

  <h3>Static Site Generation (SSG)</h3>
  <p><strong>getStaticProps:</strong> In the pages directory, the <code>getStaticProps</code> function is used to pre-render a page at build time. This function can be used to fetch data from an external API or directly from a database, and pass this data down to the entire page as it's being generated during the build.</p>

  <p>In the app directory, data fetching with <code>fetch()</code> will default to <code>cache: 'force-cache'</code>, which will cache the request data until manually invalidated. This is similar to <code>getStaticProps</code> in the pages directory.</p>

  <p><strong>getStaticPaths:</strong> In the pages directory, the <code>getStaticPaths</code> function is used to define the dynamic paths that should be pre-rendered at build time.</p>

  <p>In the app directory, <code>getStaticPaths</code> is replaced with <code>generateStaticParams</code>.</p>

  <p><code>generateStaticParams</code> behaves similarly to <code>getStaticPaths</code>, but has a simplified API for returning route parameters and can be used inside layouts. The return shape of <code>generateStaticParams</code> is an array of segments instead of an array of nested param objects or a string of resolved paths.</p>

  <h3>Incremental Static Regeneration (ISR)</h3>
  <p>In the pages directory, the <code>getStaticProps</code> function allows you to add a <code>revalidate</code> field to automatically regenerate a page after a certain amount of time.</p>

  <p>In the app directory, data fetching with <code>fetch()</code> can use <code>revalidate</code>, which will cache the request for the specified amount of seconds.</p>

</div>

    );
  };
  
  export default AccountPage;
  