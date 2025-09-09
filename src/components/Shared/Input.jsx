export default function Input({ ...props }) {
  return (
    <input
      className="w-full rounded-md border border-[#272727] bg-[#1c1c1c] 
            px-2 py-1 md:px-3 md:py-2 text-white outline-2 outline-transparent 
             outline-offset-2 transition-all duration-200 ease-in-out focus:border-[#5f93e7]"
      {...props}
      
    />
  );
}
