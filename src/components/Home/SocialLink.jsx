export default function SocialLink({ link, label, color, icon: Icon }) {
  return (
    <a
      href={link}
      target="_blank"
      aria-label={label}
      style={{ "--hover-color": color }}
      className="hover:text-[var(--hover-color)] hover:scale-110 transition-transform duration-300"
    >
      {Icon}
    </a>
  );
}

