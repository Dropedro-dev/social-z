type Props = {
    placeHolder: string;
    rows: number;
    value?: string;
}
export const Textarea = ({ placeHolder, rows, value }: Props) => {
    return (
        <div className="has-[:focus]:border-white flex items-center rounded-3xl border-2 bord-gray-600">
            <textarea
                className="flex-1 outline-none bg-transparent h-full p-5 resize-none"
                placeholder={placeHolder}
                value={value}
                rows={rows}
            ></textarea>
        </div>
    )
}