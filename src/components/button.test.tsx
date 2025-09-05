import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./button"

describe("Button Component", () => {
    it("should render a button with disabled props", () => {
        render(<Button disabled>click me</Button>)

        const button = screen.getByRole("button", { name: /click me/i })

        expect(button).toBeInTheDocument()
        expect(button).toBeDisabled()
    })

    it("should call a especialFunction when button is clicked", () => {
        const especialFunction = jest.fn()

        render(
            <Button onClick={especialFunction}>
                click me
            </Button>,
        )

        const button = screen.getByRole("button", { name: /click me/i })
        fireEvent.click(button)

        expect(especialFunction).toHaveBeenCalled()
    })
})