export default function ContactItem({ icon: Icon, text }) {
  const isEmail = text?.includes("@");
  return (
    <p className="flex items-center gap-x-2  text-gray-300">
      {Icon && <Icon />}
      {isEmail ? (
        <a href={`mailto:${text}`} className="hover:underline">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </p>
  );
}


