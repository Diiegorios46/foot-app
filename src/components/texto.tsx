
type ContentProps = {
    content: string;
}

export const Text = ({content} : ContentProps) => {
    return (
        <div className="px-4 py-6">           
            <h1 className="text-3xl font-bold text-gray-800 text-center">
                {content}🍳
            </h1>
        </div>
    )
}
