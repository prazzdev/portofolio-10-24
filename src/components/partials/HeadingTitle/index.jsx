export default function HeadingTitle(props) {
  const { text } = props;
  return (
    <>
      <h1 className="max-w-fit text-gray-600 font-bold text-[1.8em] lg:text-[2.2em] py-1 lg:py-0">
        {text}
      </h1>
    </>
  );
}
