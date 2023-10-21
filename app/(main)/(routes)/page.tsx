import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <p className="text-3xl font-bold text-indigo-500">Hello Discord Clone</p>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
