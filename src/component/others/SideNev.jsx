import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate, replace, useLocation } from "react-router-dom";
import AppContext from "../../context/AuthContext";
import QuizIcon from "@mui/icons-material/Quiz";
import HomeIcon from "@mui/icons-material/Home";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ManageHistoryOutlinedIcon from "@mui/icons-material/ManageHistoryOutlined";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function SideNev() {
  const theme = useTheme();
  const context = React.useContext(AppContext);
  const navigate = useNavigate();

  const location = useLocation(); // Get current route
  const isActive = (path) => {
    console.log(location.pathname);
    console.log(path);
    return location.pathname === path;
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={context.navOpen}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {context.userData.role === "admin" ? (
            <>
              <ListItem
                disablePadding
                sx={[
                  { display: "block" },
                  isActive("/AdminDashboard")
                    ? {
                        backgroundColor: "#EDF4FB", // Active background color
                      }
                    : {
                        backgroundColor: "transparent", // Default background color
                      },
                ]}
                onClick={() => {
                  navigate("");
                }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Home"
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={[
                  { display: "block" },
                  isActive("/AdminDashboard/AllQuestionAdmin")
                    ? {
                        backgroundColor: "#EDF4FB", // Active background color
                      }
                    : {
                        backgroundColor: "transparent", // Default background color
                      },
                ]}
                onClick={() => {
                  navigate("AllQuestionAdmin");
                }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <QuizIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="All Question"
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={[
                  { display: "block" },
                  isActive("/AdminDashboard/CreateQuestion")
                    ? {
                        backgroundColor: "#EDF4FB", // Active background color
                      }
                    : {
                        backgroundColor: "transparent", // Default background color
                      },
                ]}
                onClick={() => {
                  navigate("CreateQuestion");
                }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <LibraryAddIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Add Question"
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={[
                  { display: "block" },
                  isActive("/AdminDashboard/AllQuizDetails")
                    ? {
                        backgroundColor: "#EDF4FB", // Active background color
                      }
                    : {
                        backgroundColor: "transparent", // Default background color
                      },
                ]}
                onClick={() => {
                  navigate("AllQuizDetails");
                }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <ManageHistoryOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="All Result"
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem
                disablePadding
                sx={[
                  { display: "block" },
                  isActive("/EmployeeDashboard")
                    ? {
                        backgroundColor: "#EDF4FB", // Active background color
                      }
                    : {
                        backgroundColor: "transparent", // Default background color
                      },
                ]}
                onClick={() => {
                  navigate("");
                }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Home"
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={[
                  { display: "block" },
                  isActive("/EmployeeDashboard/TakeQuiz")
                    ? {
                        backgroundColor: "#EDF4FB", // Active background color
                      }
                    : {
                        backgroundColor: "transparent", // Default background color
                      },
                ]}
                onClick={() => {
                  navigate("TakeQuiz");
                }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <QuizIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Take Quiz"
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={[
                  { display: "block" },
                  isActive("/EmployeeDashboard/FinalResult")
                    ? {
                        backgroundColor: "#EDF4FB", // Active background color
                      }
                    : {
                        backgroundColor: "transparent", // Default background color
                      },
                ]}
                onClick={() => {
                  navigate("FinalResult");
                }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <BackupTableIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Final Result"
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </>
          )}{" "}
        </List>
      </Drawer>
    </Box>
  );
}
