import React, { useContext, useEffect, useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import SubSideBar from "./SideNavContainer/Subcontainer";
import { SideBarContext } from "@/context/SideBarContext";
import SideNavRow from "./SideNavContainer/SideNavRowcopy";

interface MenuData {
  title: string;
}

const SideBar: React.FC = () => {
  const { entryStore, setSubContainer, setSubContainerEntries } =
    useContext(SideBarContext);

  return (
    <div>
      <List>
        {entryStore && entryStore.map(menus=>{



          return(
           <div className="mx-4">
           <div className="p-2 text-center font-semibold">{menus.label}</div>
           {
            menus.submenu.map(subEntry=>{
              return(
                <SideNavRow text={subEntry.label} entries={subEntry.submenu}/>
              )
            })
           }
           
           <hr />
           </div>
            
          )
        })}
       
      </List>
    </div>
  );
};

export default SideBar;
