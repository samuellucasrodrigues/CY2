export function Input({ label, type = "text", ...props }) {
  return (
    <div className="flex flex-col w-full max-w-[500px] px-4">
      <label className="text-white font-semibold text-2xl mb-2 text-left">
        {label}
      </label>
      <input
        type={type}
        className="w-full pl-4 py-4 bg-input rounded-2xl text-black text-sm focus:outline-none mb-[35px]"
        {...props}
      />
    </div>
  );
}