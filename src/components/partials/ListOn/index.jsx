export default function ListOn(props) {
    const { title, sub1, sub2, date } = props
    return (
        <>
        <h3 className="text-md lg:text-xl font-extrabold text-gray-700 tracking-wide mb-1 lg:mb-2">{title}</h3>
        <h3 className="text-[14px] lg:text-xl font-semibold text-gray-600 tracking-wide">{sub1}</h3>
        <h3 className="text-[16px] lg:text-xl font-semibold text-gray-600 tracking-wide">{sub2}</h3>
        <time className="text-[12px] lg:text-xs text-gray-600 tracking-wide mt-2 uppercase dark:text-gray-400">{date}</time>
        </>
    )
}