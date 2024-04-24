import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default function listTodo() {
    return (
      <main>
     
        <div className="flex font-SFProDisplay">
          <div className="w-[25%]">
            <SidebarComponent/>
          </div>
          <div className="w-full ">
            <NavbarComponent/>
          </div>
        </div>
  
      </main>
     
    );
  }