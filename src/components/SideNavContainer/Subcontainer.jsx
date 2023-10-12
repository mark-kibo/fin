import { SideBarContext } from '@/context/SideBarContext';
import React, { useContext } from 'react'
import SideNavRow from '@/components/SideNavContainer/SideNavRowcopy'
const SubSideBar = () => {

  const {subContainerEntries, setSubContainer, setSubContainerEntries} = useContext(SideBarContext);
  
  
  return (
      <div >
            <div className="sub-header" onClick={() => setSubContainer(false)}>
            <i className="fas fa-chevron-left"></i> MAIN MENU
            </div>
            
            {subContainerEntries.map(subEntry => (
                
            <>
      
              <div>{!subEntry.submenu && subEntry.label}</div>
              { subEntry.submenu?.map(menuItems=>{
                return(
                  <SideNavRow key={menuItems.id} text={menuItems.label} entries={subEntry.submenu}/>
                )
              }) }
                
              </> 
          
                
            ))}
        </div>
  )
}

export default SubSideBar
