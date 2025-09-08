export default function Section({ children, title, className = "", ...props }) {
  return (
    <section className={`py-10 ${className}`} {...props}>
      <h2 className="text-center text-white text-xl md:text-3xl font-bold subtitle relative pb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
