import { navigation } from "@/data/navigation";
export default function Navbar() {
  return (
    <nav className="p-4 border-b">
      <h1 className="text-xl font-bold">Jyoti Prakash</h1>
      <div>
        {navigation.map((item) => (
          <a
           key={item.href}
           href={item.href}
           className="ml-4"
           >
            {item.label}
            </a>
        ))}
      </div>
    </nav>
  );
}