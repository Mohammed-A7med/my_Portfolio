export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-700">
      <p className="text-center text-gray-400 text-xs tracking-wide font-story">
        &copy; {new Date().getFullYear()} Mohamed Ahmed . All rights reserved.
      </p>
    </footer>
  );
}
