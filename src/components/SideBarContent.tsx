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
        {entryStore &&
          entryStore.map((entry: Object[], index: number) => {
            return (
              <>
                <div
                  className="sidenavContentHeader px-4 py-2"
                  onClick={() => {
                    {
                      entry.submenu && setSubContainerEntries(entry.submenu);
                      setSubContainer((prevstate) => !prevstate);
                    }
                  }}
                >
                  <SideNavRow text={entry.label} entries={entry.submenu}/>
                </div>
                {/* {entry.submenu.map((subEntry:Object[], index:number) => {
                  return 
                })} */}
                {/* {
                  entry.submenu.map((subEntry, index) => {
                    return (<SideNavRow text={subEntry.label} entries={subEntry.submenu}/>)
                }) */}

                
                
                <hr />
              </>
            );
          })}
      </List>
    </div>
  );
};

export default SideBar;
