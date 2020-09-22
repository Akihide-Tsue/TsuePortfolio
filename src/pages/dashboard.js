import React from 'react';
import styled from 'styled-components';
import NavHeader from './COVID19/NavHeader';
import NavContent from './COVID19/NavContent';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  // HeaderMockUp,
  // NavHeaderMockUp,
  // NavContentMockUp,
  // ContentMockUp,
  // FooterMockUp,
} from '@mui-treasury/mockup/layout';
import {
  Root,
  getHeader,
  getContent,
  getDrawerSidebar,
  getSidebarContent,
  // getFooter,
  getSidebarTrigger,
  // getCollapseBtn,
  getMuiTreasuryScheme,
} from '@mui-treasury/layout';

const Header = getHeader(styled);
const Content = getContent(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarContent = getSidebarContent(styled);
// const Footer = getFooter(styled);
const SidebarTrigger = getSidebarTrigger(styled);
// const CollapseBtn = getCollapseBtn(styled);

const muiTreasuryScheme = getMuiTreasuryScheme();

const MuiTreasuryLayout = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Root scheme={muiTreasuryScheme}>
        {({ state: { sidebar } }) => (
          <>
            {/* <Header>
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar" />
                ヘッダー
                <HeaderMockUp />
              </Toolbar>
            </Header> */}

            <DrawerSidebar sidebarId="primarySidebar">
              <SidebarContent>
                {/* <NavHeaderMockUp collapsed={sidebar.primarySidebar.collapsed} /> */}
                <NavHeader collapsed={sidebar.primarySidebar.collapsed} />
                <NavContent />
                {/* <NavContentMockUp /> */}
              </SidebarContent>
              {/* <CollapseBtn /> */}
            </DrawerSidebar>

            <Content>
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar" />
              </Toolbar>
              {/* <ContentMockUp /> */}
            </Content>
            {/* <Footer>
              <FooterMockUp />
            </Footer> */}
          </>
        )}
      </Root>
    </StylesProvider>
  );
};

export default MuiTreasuryLayout;