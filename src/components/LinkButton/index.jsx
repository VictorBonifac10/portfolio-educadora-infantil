
import { Link } from "./styles"

export function LinkButton({ children, ...props }) {
    return (
        <>
            <Link {...props}>
                {children}
            </Link>
        </>
    )
}