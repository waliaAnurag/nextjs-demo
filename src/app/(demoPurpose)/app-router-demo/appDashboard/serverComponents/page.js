export default function Settings(){
    return(
        <div>
            <h2>Server Components in App Router</h2>
  <p>Server Components within an app router represent components that are executed on the server-side, similar to SSR (Server-Side Rendering).</p>
  <p>However, they differ in their approach by allowing specific components to be rendered on the server and sent to the client as needed, rather than rendering the entire page.</p>
  <p>Key differences between Server Components and traditional SSR include:</p>
  <ol>
    <li><strong>Granular Rendering:</strong> Server Components enable rendering specific components on the server, reducing data sent to the client and improving performance.</li>
    <li><strong>Incremental Adoption:</strong> They can be incrementally adopted within an existing app router setup, providing flexibility and compatibility.</li>
    <li><strong>Dynamic Loading:</strong> Server Components support dynamic loading, fetching components on-demand for enhanced user experience and faster page loads.</li>
  </ol>
        </div>
    )
}

  