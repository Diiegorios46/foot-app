
type ContentProps = {
    content: string;
}

export const Text = ({content} : ContentProps) => {
    return (
        <div className="text-white text-2xl p-4 pt-10 font-bold text-center">
            {content}
        </div>
    )
}
