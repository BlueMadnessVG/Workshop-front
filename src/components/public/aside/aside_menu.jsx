function Aside_menu({ text, children }) {
  return (
    <div className="pt-6">
      <h3 className="font-bold pb-2 text-[#c0c0c077]"> {text} </h3>
      {children}
    </div>
  );
}
export default Aside_menu;
