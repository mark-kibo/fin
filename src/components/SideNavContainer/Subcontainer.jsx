import { SideBarContext } from '@/context/SideBarContext';
import React, { useContext } from 'react'
import SideNavRow from '@/components/SideNavContainer/SideNavRowcopy'
const SubSideBar = () => {

  const {subContainerEntries,setSubContainer,setSubContainerEntries} = useContext(SideBarContext);
  
  
  return (
      <div >
            <div className="sub-header" onClick={() => setSubContainer(false)}>
            <i class="fas fa-chevron-left"></i> MAIN MENU
            </div>
            
            {subContainerEntries.map(subEntry => (
                <>
                <div className="py-2 px-4" onClick={() => {
                    {
                      subEntry.submenu && setSubContainerEntries(subEntry.submenu);
                      SubSideBar()
                    }
                  }}>{subEntry.submenu && 
                    <>
                      <SideNavRow text={subEntry.label}  entries={subEntry.submenu}/>
                    </>
                 }</div>
                
                </>
            ))}
        </div>
  )
}

export default SubSideBar
