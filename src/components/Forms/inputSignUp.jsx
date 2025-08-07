export function InputSignUP({ label, type = "text", ...props }) {
  return (
    <div className="flex flex-col w-full max-w-[550px] px-4">
      <label className="text-white font-medium text-xl mb-2 text-left">
        {label}
      </label>
      <input
        type={type}
        className="w-full pl-4 py-3 bg-input-signup rounded-lg text-black text-sm focus:outline-none mb-[40px]"
        {...props}
      />
    </div>
  );
}