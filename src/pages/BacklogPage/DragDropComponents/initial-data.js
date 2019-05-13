const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Task 1'},
    'task-2': {id: 'task-2', content: 'Task 2'},
    'task-3': {id: 'task-3', content: 'Task 3'},
    'task-4': {id: 'task-4', content: 'Task 4'},
  },
  columns: {
    'sprint-1': {
      id: 'sprint-1',
      title: 'Sprint 1',
      taskIds: ['task-2', 'task-3', 'task-4']
    },
    'sprint-2': {
      id: 'sprint-2',
      title: 'Sprint 2',
      taskIds: ['task-1',]
    },
    'sprint-3': {
      id: 'sprint-3',
      title: 'Srpint 3',
      taskIds: []
    },
    'last-sprint': {
      id: 'last-column',
      title: 'Backlog',
      taskIds: []
    },
  },
  columnOrder: ['sprint-1', 'sprint-2', 'sprint-3', 'last-column']
};

export default initialData;