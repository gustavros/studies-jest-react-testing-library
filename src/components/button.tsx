type ButtonProps = {
    especialFunction?: (name: string) => void;
} & React.ComponentProps<"button">;

export default function Button({ especialFunction, children, onClick, ...props }: ButtonProps) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (especialFunction) {
            especialFunction("button clicked");
        }
        if (onClick) {
            onClick(event);
        }
    };

    return <button
        onClick={handleClick}
        className="cursor-pointer border border-blue-500 bg-blue-500 text-white px-2 py-3 rounded-sm hover:bg-blue-600" 
        {...props}>
        {children}
    </button>
}
