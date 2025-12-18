import { TitleContainer } from "./styles"

export function Title({ icon, children }) {
    return (
        <TitleContainer>
            <div class="divider">
                {icon}
            </div>
            <h2 className="jump">
                {children.split("").map((char, i) =>
                    char === " " ? (
                        <span key={i} className="space">
                            &nbsp;
                        </span>
                    ) : (
                        <span key={i} style={{ "--i": i }}>
                            {char}
                        </span>
                    )
                )}
            </h2>
        </TitleContainer>
    )
}