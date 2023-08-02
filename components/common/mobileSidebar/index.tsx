import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/common/sidebar";
import { Menu } from "lucide-react";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu />
        <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
          <Sidebar />
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  );
};

export default MobileSidebar;
