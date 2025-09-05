type ButtonProps = {
    especialFunction?: (name: string) => void;
} & React.ComponentProps<"button">;

export default function Button({ especialFunction, children, ...props }: ButtonProps) {
    return <button
        onClick={() => especialFunction && especialFunction("button clicked")}
        className="cursor-pointer border border-blue-500 bg-blue-500 text-white px-2 py-3 rounded-sm hover:bg-blue-600" {...props}>
        {children}
    </button>
}
