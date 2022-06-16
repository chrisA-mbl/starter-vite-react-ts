import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import LogoSvg from '../util/images/datakwip_logo_v2.svg?component';
import navbarList from '../navigation/RouteConstants';

const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
  (paddingIconButton + marginIconButton) * 2 + iconFontSize;

const SideNavbar = ({ signOut }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function toogleOpen() {
    setOpen(!open);
  }

  const drawerContent = (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '42px',
          width: 'auto',
          backgroundColor: 'transparent',
          margin: '14px 14px',
          padding: '12px 0px',
          borderBottom: '1px solid lightGrey',
          alignItems: 'flex-end',
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            display: open ? 'none' : { xs: 'none', sm: 'initial' },
            marginBottom: '9px',
          }}
        >
          <LogoSvg style={{ width: 160 }} />
        </Box>

        <Button
          onClick={toogleOpen}
          sx={{
            minWidth: 'initial',
            padding: '10px',
            color: 'gray',
            borderRadius: '8px',
            backgroundColor: open ? 'transparent' : 'transparent',
            '&:hover': {
              backgroundColor: '#26284687',
            },
          }}
        >
          <MenuIcon
            sx={{ fontSize: '20px', color: open ? 'black' : 'black' }}
          />
        </Button>
      </Box>

      <List dense>
        {navbarList.map((key, index) => (
          <Tooltip
            key={index}
            title={open ? key.desc : ''}
            placement="right"
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: 'gray',
                  color: 'white',
                  marginLeft: '22px !important',
                  boxShadow: '0px 0px 22px -2px rgba(0,0,0,0.20)',
                },
              },
            }}
          >
            <ListItemButton
              onClick={() => navigate(key.routeNames)}
              sx={{
                margin: '6px 14px',
                padding: '10px',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#26284687',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: '46px' }}>
                <Badge badgeContent={key.badge} color="secondary" variant="dot">
                  <key.icon sx={{ fontSize: '20px', color: 'black' }} />
                </Badge>
              </ListItemIcon>

              <ListItemText
                primary={key.desc}
                secondary={key.secondDesc}
                primaryTypographyProps={{
                  variant: 'body2',
                }}
                secondaryTypographyProps={{
                  variant: 'body2',
                }}
                sx={{
                  display: 'inline',
                  margin: '0px',
                  overflowX: 'hidden',
                  color: 'black',
                  whiteSpace: 'nowrap',
                  minWidth: '126px',
                }}
              />
              {key.badge > 0 && (
                <Chip
                  label={key.badge}
                  color="secondary"
                  size="small"
                  sx={{ height: 'auto' }}
                />
              )}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
      <Box
        sx={{
          flexGrow: 1,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignContents: 'center',
          margin: '14px 14px',
          padding: '12px 4px',
          borderTop: '1px solid lightgray',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            marginRight: '18px',
            paddingLeft: '0px',
            alignItems: 'center',
            alignContent: 'center',
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Typography
            component="span"
            variant="body2"
            sx={{
              fontFamily: 'inherit',
              display: 'block',
              whiteSpace: 'nowrap',
              lineHeight: 'inherit',
              fontWeight: 500,
              color: 'lightGrey',
            }}
          >
            © 2022 Datakwip
          </Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{
              display: 'block',
              whiteSpace: 'nowrap',
              lineHeight: 'inherit',
              color: 'lightGrey',
            }}
          >
            All Rights Reserved
          </Typography>
        </Box>
        <IconButton
          variant="contained"
          onClick={signOut}
          sx={{ color: 'lightGray' }}
        >
          <ExitToAppIcon />
        </IconButton>
      </Box>
    </>
  );

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open
          ? { xs: '0px', sm: drawerWidthClose }
          : { xs: drawerWidthClose, sm: drawerWidthOpen },
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: open
            ? theme.transitions.duration.leavingScreen
            : theme.transitions.duration.enteringScreen,
        }),
        '& .MuiDrawer-paper': {
          overflowX: 'hidden',
          margin: 2,

          width: open
            ? { xs: '0px', sm: drawerWidthClose }
            : { xs: drawerWidthClose, sm: drawerWidthOpen },
          borderRight: '0px',
          borderRadius: '16px',
          boxShadow: theme.shadows[8],
          backgroundColor: open ? 'white' : 'white',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default SideNavbar;
