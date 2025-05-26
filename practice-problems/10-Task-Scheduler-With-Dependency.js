class TaskSchedulerWithDependencies {
  constructor() {
    this.adjList = {};
    this.indegree = {};
  }

  addTask(taskId, dependencies) {
    this.indegree[taskId] = dependencies.length;
    for (const item of dependencies) {
      if (this.adjList.hasOwnProperty(item)) {
        this.adjList[item].push(taskId);
      } else {
        this.adjList[item] = [taskId];
      }
    }
    if (!this.adjList.hasOwnProperty(taskId)) {
      this.adjList[taskId] = [];
    }
  }

  execute() {
    let queue = [];
    let topo = [];
    const nodes = Object.keys(this.indegree);
    for (const node of nodes) {
      if (this.indegree[node] === 0) {
        queue.push(node);
      }
    }

    while (queue.length > 0) {
      const front = queue[0];
      topo.push(front);
      queue.shift();

      const list = this.adjList[front];
      for (const node of list) {
        this.indegree[node] = this.indegree[node] - 1;
        if (this.indegree[node] === 0) {
          queue.push(node);
        }
      }
    }

    if (nodes.length !== topo.length) {
      throw new Error("Error: Circular dependency detected!");
    }

    return topo;
  }
}