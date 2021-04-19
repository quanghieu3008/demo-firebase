import PageTest from '@components/uitest';
import MainLayout from '@layouts/main';
import { withAuthSSP } from '@utils/auth';
import React from 'react';
// import { useRouter } from 'next/router';

export default function Estimate({ user, dataUser }) {
  // const router = useRouter();
  return (
    <>
      <MainLayout user={user} dataUser={dataUser}>
        <PageTest />
      </MainLayout>
    </>
  );
}
export const getServerSideProps = withAuthSSP();
