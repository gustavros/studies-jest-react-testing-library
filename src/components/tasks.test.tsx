import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Tasks from "./tasks"
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  http.get('https://jsonplaceholder.typicode.com/todos', () => {
    return HttpResponse.json([
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      }
    ])
  })
)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe("Tasks Component with MSW", () => {
    it("should fetch and show tasks on button click", async () => {
        render(<Tasks />)

        const button = screen.getByRole("button", { name: /load tasks/i })

        expect(button).toBeInTheDocument()
        expect(button).not.toBeDisabled()

        fireEvent.click(button)

        await waitFor(() => {
            const items = screen.getAllByRole("listitem")
            expect(items).toHaveLength(5)
        })

        expect(button).toBeInTheDocument()  
        expect(button).not.toBeDisabled()
    })

    it("show error message on screen when api fails", async () => {
        server.use(
            http.get('https://jsonplaceholder.typicode.com/todos', () => {
                return HttpResponse.json({ message: "Internal Server Error" }, { status: 500 })
            })
        )

        render(<Tasks />)

        const button = screen.getByRole("button", { name: /load tasks/i })

        fireEvent.click(button)

        await waitFor(() => {
            const alert = screen.getByRole("alert")
            expect(alert).toBeInTheDocument()
            expect(alert).toHaveTextContent("Failed to load tasks. Please try again.")
        })
    })
})
