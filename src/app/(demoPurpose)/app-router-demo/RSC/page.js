import rscStyles from "../../../../styles/rscStyles.module.css"

export default function RSCDetails() {
    return (
        <div className={rscStyles.rscContainer}>

            <h1>Server Components in Next.js</h1>
            <div>Server Components in Next.js are a feature that allows you to write UI components that are rendered on the server side. This means that the server can perform tasks like data fetching, computations, and rendering of components before sending the final HTML to the client.</div>
            

            <h2>React Server Components</h2>
            <p>React Server Components share similar concepts but are part of the React ecosystem. They enable server-side rendering and the execution of component logic, such as data fetching and database mutations, exclusively on the server.</p>
            <p>In essence, both Next.js Server Components and React Server Components aim to improve performance and user experience by leveraging server-side capabilities. However, they are implemented within their respective frameworks and ecosystems. Next.js has further optimized this concept by integrating it deeply into its architecture, making server rendering a default and streamlined part of the development process.</p>

        </div>
    )
}