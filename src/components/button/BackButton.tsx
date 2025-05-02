import { ArrowLeft } from "iconsax-react";

export function BackButton({
    onClick,
    color = "primary",
}: {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    color?: string;
}) {
    return (
        <button
            onClick={onClick}
            className={`group w-10 h-10 rounded-lg md:w-10 md:h-10 md:rounded-xl border-[1px] border-${color}/50 shadow-sm flex items-center justify-center transition-colors`}
        >
            <ArrowLeft
                variant={"Linear"}
                color={`hsl(var(--${color}))`}
                size={20}
                className="w-4 h-4 md:w-5 md:h-5 transform group-hover:-translate-x-[2px] transition-all"
            />
        </button>
    );
}
