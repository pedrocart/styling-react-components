export default function Button({ children, ...props }) {
    return (
        <button {...props} className="px-4 py-2 rounded font-semibold text-stone-900 bg-amber-400 hover:bg-amber-500 transition-colors">{children}</button>
    )
}