import { Suspense, useMemo } from 'react';
import { Grid, Text } from '@chakra-ui/react';
// import { Grid, Scrollbar } from '@tonic-ui/react';
import { Outlet } from 'react-router';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
// import { useTranslation } from 'react-i18next';
import * as routePath from '../../routes/routePath';

// import TopBar from '@/components/TopBar';
// import SideNavigation from '@/components/SideNavigation';
// import OverlaySpinner from '@/components/OverlaySpinner';
// import useNavigateToLogon from '@/hooks/navigators/useNavigateToLogon';
// import { useIsMutatingLogout } from '@/hooks/useLogout';
// import useCheckBasicAuth from '@/hooks/auth/useCheckBasicAuth';
// import usePollingSystemInfo from '@/hooks/usePollingSystemInfo';
// import UnsavedPromptModal from '@/components/Modal/UnsavedPromptModal';

export default function Console() {
  // const { t } = useTranslation();
  // const navigateToLogon = useNavigateToLogon();
  // useCheckBasicAuth((isAuth) => {
  //   if (!isAuth) {
  //     navigateToLogon();
  //   }
  // });
  // usePollingSystemInfo();
  // const isMutatingLogout = useIsMutatingLogout();

  const navItems = useMemo(() => [
    { label: "Dashboard", to: routePath.CONSOLE_DASHBOARD },
    { label: "Motion", to: routePath.CONSOLE_COLLECTION_MOTION },
    { label: "Story", to: routePath.CONSOLE_COLLECTION_STORY },
    { label: "Image", to: routePath.CONSOLE_COLLECTION_IMAGE },
    { label: "About", to: routePath.CONSOLE_COLLECTION_ABOUT },
    { label: "Partner", to: routePath.CONSOLE_COLLECTION_PARTNER },
  ], [])

  return (
    <Grid
      bgColor="black"
      templateColumns="min-content auto"
      height="100vh"
    >
      <Grid height="100vh">
        <Sidebar
          navItems={navItems}
        />
      </Grid>
      <Grid
        minWidth="1080px"
        height="100vh"
        templateRows="min-content auto"
      >
        <Grid>
          <Topbar />
        </Grid>
        <Grid>
          <Outlet />
          {/* <Scrollbar height="100%" overflow="scroll">
            <Suspense fallback={<OverlaySpinner />}>
              <Outlet />
            </Suspense>
          </Scrollbar> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
