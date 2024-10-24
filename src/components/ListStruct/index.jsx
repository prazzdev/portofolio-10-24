export default function ListStruct(props) {
  const { title, children } = props;
  return (
    <>
      <div className="w-fit flex flex-col my-3">
        <h3 className="max-w-fit font-semibold text-xl mb-4">{title}</h3>
        <div className="w-[100%] flex flex-wrap flex-row justify-around lg:justify-normal">
          {children}
        </div>
      </div>
    </>
  );
}
