
import React from "react";
import ListTaskComponent from "@/components/ListTaskComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import { DeleteWorkspaceService } from '@/service/workplace.service';

export default function listTodo({ params: { id } }) {

  return (
    <main>
      <div className="flex font-SFProDisplay">
        <div className="w-[25%]">
          <SidebarComponent />
        </div>
        
        <div className="w-full ">
          <NavbarComponent />
          <div className="">
          <ListTaskComponent workspaceId={id} />   
          </div>

          <div className="mt-[400px]"><AddNewTaskComponent id={id}/></div>
          
        </div>
      </div>
    </main>
  );
}
