"use client"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Tooltip from '@mui/material/Tooltip';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DescriptionIcon from '@mui/icons-material/Description'
import PeopleIcon from '@mui/icons-material/People'
import PaymentsIcon from '@mui/icons-material/Payments'
import PublicIcon from '@mui/icons-material/Public'
import BarChartIcon from '@mui/icons-material/BarChart'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StreamIcon from '@mui/icons-material/Stream';
import { useState } from "react";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import Groups2Icon from '@mui/icons-material/Groups2';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import ReceiptLongRoundedicon from "@mui/icons-material/ReceiptLongOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const SideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken } = useProSidebar();
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [activeSubMenuLevel1, setActiveSubMenuLevel1] = useState("");// State to track the active submenu
  const iconClass = "text-black";
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [display, setDisplay] = useState("flex");
  const submenustyle = {
    color: '#1F5780',
    '&:hover': {
      backgroundColor: '#1F5780',
    },
    button: ({ level, active, disabled }) => {
      if (level === 0) {
        return {
          display: activeSubMenu ? "none" : "flex", // Hide submenus when one is active
          color: active ? "white" : "black",
          alignItems: "center",
          backgroundColor: active ? "#1F5780" : undefined,
          "&:hover": {
            backgroundColor: "#5a5a5a !important",
            color: "white !important",
            fontWeight: "bold !important",
          },
        };
      } else if (level === 1) {
        return {
          display: activeSubMenuLevel1 ? "none":"flex"  // Hide level 1 submenus when another level 1 submenu is active
          // Rest of the styles
        };
      }
    },
  
  };

  const handleSubMenuClick = (subMenuKey: string, level: number) => {
    if (level === 0) {
      if (activeSubMenu === subMenuKey) {
        // If the clicked submenu is already active, deactivate it
        setActiveSubMenu("");
      } else {
        // Otherwise, set the clicked submenu as active
        setActiveSubMenu(subMenuKey);
      }
    } else if (level === 1) {
      if (activeSubMenuLevel1 === subMenuKey) {
        // If the clicked submenu is already active, deactivate it
        setActiveSubMenuLevel1("");
        setDisplay("flex")
      } else {
        // Otherwise, set the clicked submenu as active
        setActiveSubMenuLevel1(subMenuKey);
        setDisplay("flex")
      }
    }
  };
  const handleBackClick = (level:number) => {
    if (level === 1) {
      setActiveSubMenuLevel1("");
      setDisplay("hidden")
    } else if (level === 0) {
      setActiveSubMenu("");
      setIsSubMenuOpen(false);
       // Close the submenu when going back
    }
  };


  return (
    <div className="flex">
      <div className="min-h-fit">
        <Sidebar
          rootStyles={{
            opacity: 1,
            width: "100%",
            color: "black",
            fontSize: "15px",
            fontWeight: "bold",
          }}

          transitionDuration={300}
        >


          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                if (level === 0) {
                  return {
                    display: activeSubMenu ? "none" : "flex", // Hide submenus when one is active
                    color: active ? "white" : "black",
                    alignItems: "center",
                    backgroundColor: active ? "#1F5780" : undefined,
                    "&:hover": {
                      backgroundColor: "#5a5a5a !important",
                      color: "white !important",
                      fontWeight: "bold !important",
                    },
                  };
                } else if (level === 1) {
                  return {
                    display: activeSubMenuLevel1 ? "none": "flex"  // Hide level 1 submenus when another level 1 submenu is active
                    // Rest of the styles
                  };
                }
              },
            
            }}
            
          >
            {/* Submenu for Finfinancials */}
            <SubMenu
              active={activeSubMenu === "Finfinancials"}
              rootStyles={submenustyle}
              label={
                <div className="flex items-center">
                  <div className="flex items-center"> {/* Container for icon, label, and arrow */}
                    <HomeOutlinedIcon className={iconClass} />
                    <span className="ml-2">Finfinancials</span>
                  </div>
                  {activeSubMenu === "Finfinancials" ? (
                    <ArrowDropDownIcon /> // Display arrow when submenu is active
                  ) : null}
                </div>
              }
              onClick={() =>{ 
                handleSubMenuClick("Finfinancials", 0)
                // setIsSubMenuOpen(true); 
            }}
            >
              <SubMenu open={isSubMenuOpen} onClick={() => handleSubMenuClick("Membership", 1)} icon={<PeopleOutlinedIcon className={iconClass} />} label="Membership">
                <button className={`${display} w-full bg-gray-200 justify-center text-black shadow-md rounded-md capitalize`} style={{
                  cursor:"pointer"
                }} onClick={() => handleBackClick(1)}>previous menu</button>
                <MenuItem className={`${display}`} >Change Account Status</MenuItem>
                <MenuItem className={`${display}`}>Open Product Account</MenuItem>
                <MenuItem className={`${display}`}>Change Membership Type</MenuItem>
                <MenuItem className={`${display}`}>Membership Withdrawal</MenuItem>
                <MenuItem className={`${display}`}>Blocked Saving</MenuItem>

                <SubMenu className={`${display}`} icon={<Groups2Icon className={iconClass} />} label="Group Management">
                  <MenuItem >Group Management Parameters</MenuItem>
                  <MenuItem >Group Transfers</MenuItem>

                </SubMenu>
                <SubMenu className={`${display}`} icon={<FolderSharedIcon className={iconClass} />} label="Directory Management">
                  <MenuItem>Non-Account Holders Management</MenuItem>
                  <MenuItem>Account Holders Management</MenuItem>
                  <MenuItem>Biometrics Manager</MenuItem>
                  <MenuItem>Account Holder Upload</MenuItem>
                </SubMenu>
                <SubMenu className={`${display}`} icon={<DriveEtaIcon className={iconClass} />} label="Vehicle Operations">
                  <MenuItem>Vehicle Registration</MenuItem>
                  <MenuItem>Authorize Vehicle Registration</MenuItem>
                  <MenuItem>Vehicle Transfers</MenuItem>
                  <MenuItem>Authorize Vehicle Transfers</MenuItem>
                  <MenuItem>Vehicle Ticketing</MenuItem>
                </SubMenu>

              </SubMenu>
              <SubMenu icon={<AccessibilityIcon className={iconClass} />} label="Authorization">
                <MenuItem>Non-Transactional Item</MenuItem>
                <SubMenu icon={<AccessibilityIcon className={iconClass} />} label="Authorize Teller Transaction">
                  <MenuItem>Authorise Other Teller Transaction</MenuItem>
                  <MenuItem>Authorise Direct Receipts</MenuItem>
                  <MenuItem>Authorise sale of Cheques</MenuItem>
                </SubMenu>

                <MenuItem>Group Management Authorization</MenuItem>
                <MenuItem>Group Transfers Authorization</MenuItem>
                <MenuItem>Overdraft Authorization</MenuItem>
                <MenuItem>Biometric Authorization </MenuItem>
                <MenuItem>Directory Authorization</MenuItem>
                <SubMenu icon={<AccessibilityIcon className={iconClass} />} label="Financial Instruments Authorization">
                  <MenuItem>Authorize Contract</MenuItem>
                  <MenuItem>Authorize Schedule</MenuItem>
                </SubMenu>
                <MenuItem>Creditors and Debtors Authorization</MenuItem>
                <MenuItem>Debt collection stage setup Authorizations</MenuItem>
                <MenuItem>Guarantor Parameterization</MenuItem>
                <MenuItem>Approve Facility Disburment Options</MenuItem>
                <SubMenu icon={<QuizRoundedIcon className={iconClass} />} label="Atm Cards Management">
                  <MenuItem>Authorize Card Request</MenuItem>
                  <MenuItem>Authorize Card Mappings</MenuItem>
                </SubMenu>
                <SubMenu icon={<QuizRoundedIcon className={iconClass} />} label="Loan Eligibility Authorization">
                  <MenuItem>Authorize Eligibility Defination</MenuItem>
                </SubMenu>

              </SubMenu>

              <SubMenu icon={<QuizRoundedIcon className={iconClass} />} label="Enquiries">

                <MenuItem>Member Enquiries</MenuItem>
                <MenuItem>Batches</MenuItem>
                <MenuItem>Statements</MenuItem>
                <MenuItem>Facility Quote</MenuItem>
                <MenuItem>Transactions View</MenuItem>
                <MenuItem>Accounts Lookup</MenuItem>
                <MenuItem>Dashboard</MenuItem>

              </SubMenu>

              <SubMenu icon={<EventBusyIcon className={iconClass} />} label="Transactions">
                <MenuItem>Journals</MenuItem>
                <MenuItem>Tellering</MenuItem>
                <MenuItem>Check off</MenuItem>
                <MenuItem>Pay out</MenuItem>
                <SubMenu icon={<EventBusyIcon className={iconClass} />} label="Term deposit">
                  <MenuItem>Capture Term deposit</MenuItem>
                  <MenuItem>Approve Term Deposit</MenuItem>
                </SubMenu>

                <MenuItem>Overdraft</MenuItem>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Standing orders">
                  <MenuItem>Dividends</MenuItem>
                  <MenuItem>Data Extraction</MenuItem>
                  <MenuItem>Manual Charges Accrual</MenuItem>
                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Vault Management">
                  <MenuItem>Clear cheques</MenuItem>
                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Allowance Transactions">
                  <MenuItem>Capture Direct Receipt</MenuItem>
                  <MenuItem>Group Statements</MenuItem>
                </SubMenu>


              </SubMenu>
              <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Loans">
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Loan Variations">

                  <MenuItem>Capture Reschedule</MenuItem>
                  <MenuItem>Approve Reschedule</MenuItem>

                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Debt Collection">
                  <MenuItem>Debt Collection Queue</MenuItem>
                  <MenuItem>Debt Collection Setup</MenuItem>
                </SubMenu>


                <MenuItem>Loan view</MenuItem>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Collateral Management">
                  <MenuItem>Capture Collateral</MenuItem>
                  <MenuItem>Approve Collateral</MenuItem>
                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Group Applications">
                  <MenuItem>Application Register</MenuItem>
                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Loan Workflow stages ">
                  <MenuItem>Manage Stages</MenuItem>
                  <MenuItem>Authorize Stage Operations</MenuItem>
                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Facility WorkFlow Process">
                  <MenuItem>Capture Application</MenuItem>
                  <MenuItem>Appraise Application</MenuItem>
                  <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Application Disbursements">
                    <MenuItem>Capture Disbursement</MenuItem>
                    <MenuItem>Authorize Disbursement</MenuItem>
                  </SubMenu>
                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Facility Schedules">
                  <MenuItem>Create Schedules</MenuItem>
                  <MenuItem>Authorize Schedules</MenuItem>
                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Loan Write off">
                  <MenuItem>Capture Write Off</MenuItem>
                  <MenuItem>Approve Write Off</MenuItem>
                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Guarantor Administartion">
                  <MenuItem>Guarantor Release</MenuItem>
                  <MenuItem>Guarantor Authorization</MenuItem>
                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Mass Intrest Change">
                  <MenuItem>Capture Interest Charge</MenuItem>
                  <MenuItem>Authorise Interest Charge</MenuItem>
                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Facility Manual Billing">
                  <MenuItem>Capture Billing Options</MenuItem>
                  <MenuItem>Authorize Billing options</MenuItem>

                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Default Loan Transfers">
                  <MenuItem>Initiate Transfer to Guarantors</MenuItem>
                  <MenuItem>Authorize Transfer to Guarantor</MenuItem>
                </SubMenu>

              </SubMenu>
              <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Accounts">
                <MenuItem>Office Accounts</MenuItem>
                <MenuItem>Office Journals</MenuItem>
                <MenuItem>Account Statement</MenuItem>
                <MenuItem>Cash Bank Setup</MenuItem>

                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Budgetting">
                  <MenuItem>Manage Budget Types</MenuItem>
                  <MenuItem>Authorize Budget types</MenuItem>
                  <MenuItem>Capture Budget</MenuItem>
                  <MenuItem>Authorize Budget</MenuItem>
                </SubMenu>
                <MenuItem>Bank Reconciliation</MenuItem>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Accounts Transaction Reversal">
                  <MenuItem>Capture Reversals</MenuItem>
                  <MenuItem>Approve Revsersals</MenuItem>
                </SubMenu>

                <MenuItem>Maintain GL Classes</MenuItem>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Financial Periods">
                  <MenuItem>Manage Financial Periods</MenuItem>
                  <MenuItem>Authorize Financial Periods</MenuItem>
                </SubMenu>
                <SubMenu icon={<CardMembershipRoundedIcon className={iconClass} />} label="Project Management">
                  <MenuItem>Define Project</MenuItem>
                  <MenuItem>Authorize Project Definition</MenuItem>
                </SubMenu>
                <SubMenu icon={<DescriptionIcon className={iconClass} />} label="Invoice Management">
                  <MenuItem>Capture Invoice</MenuItem>
                  <MenuItem>Authorize Invoice</MenuItem>
                </SubMenu>
                <MenuItem>Vendor Management</MenuItem>
                <SubMenu icon={<DescriptionIcon className={iconClass} />} label="Allowance Configuration">
                  <MenuItem>Configure Allowances</MenuItem>
                  <MenuItem>Authorize Allowances</MenuItem>
                </SubMenu>
                <MenuItem>Channels Reconciliation</MenuItem>
                <MenuItem>Channels Reconciliation B2C</MenuItem>

              </SubMenu>
              <SubMenu icon={<DescriptionIcon className={iconClass} />} label="Reports">
                <MenuItem>Report List</MenuItem>
                <MenuItem>Custom Reports</MenuItem>
                <MenuItem>User Defined Reports</MenuItem>
              </SubMenu>
              <SubMenu icon={<EventBusyIcon className={iconClass} />} label="End of Period">
                <MenuItem>End of Day</MenuItem>
              </SubMenu>
              <SubMenu icon={<HomeRepairServiceIcon className={iconClass} />} label="View">
                <MenuItem>Change Password</MenuItem>
                <MenuItem>Log Out Users</MenuItem>
              </SubMenu>

              <SubMenu icon={<HomeRepairServiceIcon className={iconClass} />} label="Tools/Maintnance">
                <MenuItem>System Charges</MenuItem>
                <MenuItem>Savings Schemes</MenuItem>
                <MenuItem>Shares Schemes</MenuItem>
                <MenuItem>Tellers</MenuItem>
                <MenuItem>Term Deposit Setup</MenuItem>
                <MenuItem>Holidays</MenuItem>
                <MenuItem>Transaction Codes</MenuItem>
                <MenuItem>Branches</MenuItem>
                <MenuItem>Membership Types</MenuItem>
                <MenuItem>Sectors</MenuItem>
                <MenuItem>Banks and Branches</MenuItem>
                <MenuItem>Regions</MenuItem>
                <MenuItem>Login Image</MenuItem>
                <MenuItem>Employers</MenuItem>
                <MenuItem>Administrative Locations</MenuItem>
                <MenuItem>FinFinancials Parameters</MenuItem>
                <MenuItem>Income Deduction Setup</MenuItem>
                <MenuItem>Maintain Coinage</MenuItem>
                <MenuItem>Maintain Teller Code</MenuItem>
                <MenuItem>Statuory Deductions</MenuItem>
                <MenuItem>Guarantor Parameterization</MenuItem>
                <MenuItem>Facility Disbursement Options</MenuItem>
                <SubMenu icon={<HomeRepairServiceIcon className={iconClass} />} label="Channels Transaction Types">

                  <MenuItem>Add/Modify Transaction Types</MenuItem>
                  <MenuItem>Operation Authorization</MenuItem>
                </SubMenu>
                <SubMenu icon={<HomeRepairServiceIcon className={iconClass} />} label="Alert Types">
                  <MenuItem>Capture Alert Types</MenuItem>
                </SubMenu>
                <MenuItem>Manage ATM Cards</MenuItem>
                <SubMenu icon={<HomeRepairServiceIcon className={iconClass} />} label="Loan Eligibility">
                  <MenuItem>Define Eligibility Formular</MenuItem>
                  <MenuItem>Define Eligibility</MenuItem>
                </SubMenu>
              </SubMenu>
              <SubMenu icon={<SettingsSuggestIcon className={iconClass} />} label="setup">
                <MenuItem>General Setup</MenuItem>

              </SubMenu>
              <SubMenu icon={<HomeRepairServiceIcon className={iconClass} />} label="Financial Instruments">
                <MenuItem>Capture Contract</MenuItem>
                <MenuItem>Capture Schedule</MenuItem>
              </SubMenu>
            </SubMenu>



            {/* Submenu for Fixed Assets */}
            <SubMenu
              active={activeSubMenu === "FixedAssets"}
              rootStyles={submenustyle}
              label={
                <div className="flex items-center">
                  <div className="flex items-center"> {/* Container for icon, label, and arrow */}
                    <AccountBalanceIcon className={iconClass} />
                    <span className="ml-2">Fixed Assets</span>
                  </div>
                  {activeSubMenu === "FixedAssets" ? (
                    <ArrowDropDownIcon /> // Display arrow when submenu is active
                  ) : null}
                </div>
              }
              onClick={() => handleSubMenuClick("FixedAssets", 0)}
            >
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Asset Register</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Depreciation</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Fixed Asset Setup</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Revaluation</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Asset disposal</MenuItem>
            </SubMenu>

            {/* Submenu for Inventory */}
            <SubMenu
              active={activeSubMenu === "Inventory"}
              rootStyles={submenustyle}
              label={
                <div className="flex items-center">
                  <div className="flex items-center"> {/* Container for icon, label, and arrow */}
                    <Inventory2Icon className={iconClass} />
                    <span className="ml-2">Inventory</span>
                  </div>
                  {activeSubMenu === "Inventory" ? (
                    <ArrowDropDownIcon /> // Display arrow when submenu is active
                  ) : null}
                </div>
              }
              onClick={() => handleSubMenuClick("Inventory", 0)}
            >
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Stock Request</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Stores</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Purchases</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Stock Items</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Authorization</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Inventory Setup</MenuItem>
            </SubMenu>

            {/* Submenu for File Tracker */}
            <SubMenu
              active={activeSubMenu === "FileTracker"}
              rootStyles={submenustyle}
              label={
                <div className="flex items-center">
                  <div className="flex items-center"> {/* Container for icon, label, and arrow */}
                    <DescriptionIcon className={iconClass} />
                    <span className="ml-2">File Tracker</span>
                  </div>
                  {activeSubMenu === "FileTracker" ? (
                    <ArrowDropDownIcon /> // Display arrow when submenu is active
                  ) : null}
                </div>
              }
              onClick={() => handleSubMenuClick("FileTracker", 0)}
            >
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Managment</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Movement</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Authorization</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Tracker Reports</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Tracker Setup</MenuItem>

            </SubMenu>

            {/* Submenu for Human Resource */}
            <SubMenu
              active={activeSubMenu === "HumanResource"}
              rootStyles={submenustyle}
              label={
                <div className="flex items-center">
                  <div className="flex items-center"> {/* Container for icon, label, and arrow */}
                    <PeopleIcon className={iconClass} />
                    <span className="ml-2">Human Resource</span>
                  </div>
                  {activeSubMenu === "HumanResource" ? (
                    <ArrowDropDownIcon /> // Display arrow when submenu is active
                  ) : null}
                </div>
              }
              onClick={() => handleSubMenuClick("HumanResource", 0)}
            >
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Employee Details</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Leave</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Hr Setup</MenuItem>
            </SubMenu>

            {/* Submenu for Payroll */}
            <SubMenu
              active={activeSubMenu === "Payroll"}
              rootStyles={submenustyle}
              label={
                <div className="flex items-center">
                  <div className="flex items-center"> {/* Container for icon, label, and arrow */}
                    <PaymentsIcon className={iconClass} />
                    <span className="ml-2">Payroll</span>
                  </div>
                  {activeSubMenu === "Payroll" ? (
                    <ArrowDropDownIcon /> // Display arrow when submenu is active
                  ) : null}
                </div>
              }
              onClick={() => handleSubMenuClick("Payroll", 0)}
            >
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Payroll Setup</MenuItem>

            </SubMenu>

            {/* Submenu for Global Administration */}
            <SubMenu
              active={activeSubMenu === "GlobalAdministration"}
              rootStyles={submenustyle}
              label={
                <div className="flex items-center">
                  <div className="flex items-center"> {/* Container for icon, label, and arrow */}
                    <PublicIcon className={iconClass} />
                    <span className="ml-2">Global Administration</span>
                  </div>
                  {activeSubMenu === "GlobalAdministration" ? (
                    <ArrowDropDownIcon /> // Display arrow when submenu is active
                  ) : null}
                </div>
              }
              onClick={() => handleSubMenuClick("GlobalAdministration", 0)}
            >
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Global Setup</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Impact Data</MenuItem>
            </SubMenu>

            {/* Submenu for Consolidated Reports */}
            <SubMenu
              active={activeSubMenu === "ConsolidatedReports"}
              rootStyles={submenustyle}
              label={
                <div className="flex items-center">
                  <div className="flex items-center"> {/* Container for icon, label, and arrow */}
                    <Tooltip title="Consolidated reports">
                      <BarChartIcon className={iconClass} />
                    </Tooltip>
                    <span className="ml-2">Consolidated Reports</span>
                  </div>
                  {activeSubMenu === "ConsolidatedReports" ? (
                    <ArrowDropDownIcon /> // Display arrow when submenu is active
                  ) : null}
                </div>
              }
              onClick={() => handleSubMenuClick("ConsolidatedReports", 0)}
            >
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Cosolidated Reports List</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Maintain Reports Mapping</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default SideBar;
