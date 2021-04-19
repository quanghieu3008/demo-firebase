import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, ReactNode, useMemo } from 'react';
import { ROUTES } from '@configs/router';

import type { MenuDataItem } from '@ant-design/pro-layout/lib/typings';
import { ProSettings } from '@ant-design/pro-layout';

import { MoneyBag } from '@components/Icons/index';
import Autoset from '@components/logout';
import { StrongName, DivUser } from '@components/forms/register/styles';

const SettingDrawer = dynamic(
  () => import('@ant-design/pro-layout/lib/components/SettingDrawer'),
  {
    ssr: false,
  }
);
const ProLayout = dynamic(() => import('@ant-design/pro-layout'), {
  ssr: false,
});

const DefautFooter = dynamic(
  () => import('@ant-design/pro-layout/lib/Footer'),
  {
    ssr: false,
  }
);

const footerRender = () => (
  <DefautFooter
    links={[]}
    copyright={`${new Date().getFullYear()} Personal Finance Management`}
  />
);

const Main = ({ children, user, dataUser }) => {
  const router = useRouter();
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    title: 'PFM',
  });
  const [pathname, setPathname] = useState(router.pathname);

  const menuHeaderRender = useMemo(
    () => (logo: ReactNode, title: ReactNode) => (
      <>
        <div onClick={() => router.push('/')} aria-hidden="true">
          {logo}
        </div>
        <Link href="/">
          <a>{title}</a>
        </Link>
      </>
    ),
    []
  );

  const menuItemRender = useMemo(
    () => (options: MenuDataItem, element: React.ReactNode) => (
      <Link href={options.path}>
        <a onClick={() => setPathname(options.path || '/')} aria-hidden="true">
          {element}
        </a>
      </Link>
    ),
    []
  );
  const logOut = useMemo(
    () => () => (
      <DivUser>
        <Autoset data={user} dataUser={dataUser} />
        <StrongName>{user.username}</StrongName>
      </DivUser>
    ),
    []
  );
  return (
    <>
      <ProLayout
        location={{ pathname }}
        title="PFM"
        logo={<MoneyBag width="32" height="32" />}
        style={{ minHeight: '100vh' }}
        route={ROUTES}
        menuItemRender={menuItemRender}
        menuHeaderRender={menuHeaderRender}
        footerRender={footerRender}
        // rightContentRender={Div}
        {...settings}
        rightContentRender={logOut}
      >
        {children}
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.getElementById('__next')}
        settings={settings}
        onSettingChange={(changeSetting) => setSetting(changeSetting)}
        disableUrlParams
      />
    </>
  );
};

export default Main;
