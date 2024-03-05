import { useMediaQuery, Box, Drawer } from "@mui/material";
import SidebarItems from "./SidebarItems";

const Sidebar = (props) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const sidebarWidth = "270px";
  const customScrollbarStyles = {
    height: "100%", // Adjust the height as needed
    overflowY: "auto",
    overflowX: "auto",
    scrollbarWidth: "none",
    scrollbarColor: "transparent transparent",
  };
  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open={props.isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
              padding:"5px"
            },
          }}
        >
          <Box
          className='border-2'
            sx={{
              height: "100%",
              // border:"2px solid #f4f5f6 ",
              borderRadius:"10px"
            }}

          >
            <Box px={3}></Box>
            <div className=" " style={customScrollbarStyles}>
              <SidebarItems />
            </div>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
     
      {/* Sidebar For Mobile */}
     
      <SidebarItems />
    </Drawer>
  );
};

export default Sidebar;
