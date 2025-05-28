class WorkerPool {
  constructor(maxWorkers) {
    this.limit = maxWorkers;
    this.queue = [];
    this.currentRunningTasks = 0;
  }

  run(taskFunction) {
    return new Promise((resolve, reject) => {
      const executeTask = async () => {
        try {
          this.currentRunningTasks++;
          const result = await taskFunction();
          resolve(result);
        } catch (error) {
          reject(error);
        } finally {
          this.currentRunningTasks--;
          if (this.queue.length > 0) {
            const nextTask = this.queue.shift();
            nextTask();
          }
        }
      };

      if (this.currentRunningTasks < this.limit) {
        executeTask();
      } else {
        this.queue.push(executeTask);
      }
    });
  }
}

module.exports = WorkerPool;
