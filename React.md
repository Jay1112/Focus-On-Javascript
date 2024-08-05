## Code Splitting

### Bundling
- Bundling is the process of following imported files and merging them into a single file.
- as app grows, bunding size also increases and it will slow down our app and affects our core web-vitals.

to tackle this issue,
there is a concept called lazy-loading.

### Lazy Loading
- by lazy loading, We make our component to load lazy so it will not impact our web app performance.
- we show loading type of ui, until component gets fully ready to render.
- there is a possiblity to fail our Lazy Loading of Component due to some error, to there we will use Error Boundary

example : 

const OtherComponent = React.lazy(() => import('./OtherComponent'));

<ErrorBoundary 
    fallbackRender={fallbackRender} 
    onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
    }}
>
    <Suspense fallback={<div>loading....</div>}>
        <OtherComponent />
    </Suspense>
</ErrorBoundary>

