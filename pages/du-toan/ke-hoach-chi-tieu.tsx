import React from 'react';
import MainLayout from '@layouts/main';
import { withAuthSSP } from '@utils/auth';
import PageTest from '@components/uitest';

export default function Estimate({ user, dataUser }) {
  return (
    <>
      <MainLayout user={user} dataUser={dataUser}>
        <h1>Chi tiêu thiết yếu</h1>
        <PageTest />
      </MainLayout>
    </>
  );
}
export const getServerSideProps = withAuthSSP();
