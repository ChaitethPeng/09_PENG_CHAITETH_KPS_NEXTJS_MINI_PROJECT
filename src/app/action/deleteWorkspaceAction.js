"use server";

import { revalidateTag } from "next/cache";
import { DeleteWorkspaceService } from "../../service/workplace.service";

async function deleteWorkspace(workspace) {
  console.log("workspace in action", workspace);
  const data = await DeleteWorkspaceService(workspace);
  revalidateTag("workspace");
}
export default deleteWorkspace;
