import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('https://jsonplaceholder.typicode.com/todos?_limit=5', () => {
        return HttpResponse.json([
            { id: '1', title: 'Task 1' },
            { id: '2', title: 'Task 2' },
            { id: '3', title: 'Task 3' },
            { id: '4', title: 'Task 4' },
            { id: '5', title: 'Task 5' },
        ])
    }),
]