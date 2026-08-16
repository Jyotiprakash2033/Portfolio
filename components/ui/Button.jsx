export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-zinc-700 text-white hover:bg-zinc-900",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}