// import ListTaskComponent from "@/components/ListTaskComponent";
// import NavbarComponent from "@/components/NavbarComponent";
// import SidebarComponent from "@/components/SidebarComponent";

// export default function listTodo({ params: { id } }) {
//     return (
//       <main>
     
//         <div className="flex font-SFProDisplay">
//           <div className="w-[25%]">
//             <SidebarComponent/>
//           </div>
//           <div className="w-full ">
//             <NavbarComponent/>
//             <ListTaskComponent workspaceId={id}/>
//             {/* <ListTaskComponent  
//             status={task.status}
//              workspaceId={task.data.filter(
//                 (task) => task.status === status) />

//           </div> */}
//         </div>
  
//       </main>
     
//     );
//   }

import React from "react";
import ListTaskComponent from "@/components/ListTaskComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import { DeleteWorkspaceService } from '@/service/workplace.service';

export default function listTodo({ params: { id } }) {
  const status = 3; // Assuming you have the status here

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
          
        </div>
      </div>
    </main>
  );
}
