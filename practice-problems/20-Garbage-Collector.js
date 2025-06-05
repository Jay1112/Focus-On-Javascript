function dfs(node, graph, vis) {
    vis[node] = 1;

    if (!graph.hasOwnProperty(node)) {
        return;
    }

    for (const item of graph[node]) {
        if (!vis.hasOwnProperty(item)) {
            dfs(item, graph, vis);
        }
    }
}

function garbageCollector(graph, roots) {
    if (Object.keys(graph).length === 0 || roots.length === 0) {
        graph = {};
        return graph;
    }
    let vis = {};
    for(const root of roots){
        dfs(root, graph, vis);
    }

    const graphKeys = Object.keys(graph);
    for (const key of graphKeys) {
        if (!vis.hasOwnProperty(key)) {
            delete graph[key];
        }
    }

    return graph;
}