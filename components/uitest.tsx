import { Button, Col, Row } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState, useMemo } from 'react';
import Breadcrumb from '@components/breadcrumb';
import Diaolog from './popupForm';
import { BoxIcon, BtnAdd, BtnEdit, CustomCard, CustomTable } from './uitestCss';

const columns = [
  {
    title: '#',
    dataIndex: 'name',
  },
  {
    title: 'Thu nhập',
    dataIndex: 'input',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: '1 / 2021',
    dataIndex: '1',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: '2 / 2021',
    dataIndex: '2',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: '3 / 2021',
    dataIndex: '3',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: '4 / 2021',
    dataIndex: '4',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: '5 / 2021',
    dataIndex: '5',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: '6 / 2021',
    dataIndex: '6',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: '7/ 2021',
    dataIndex: '7',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: '8 / 2021',
    dataIndex: '8',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: '9 / 2021',
    dataIndex: '9',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: '10 / 2021',
    dataIndex: '10',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: '11 / 2021',
    dataIndex: '11',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: '12 / 2021',
    dataIndex: '12',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: '1',
    name: '1',
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: '2',
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: '3',
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: '4',
    math: 99,
    english: 89,
  },
];

// function onChange(pagination, filters, sorter, extra) {
//   console.log('params', pagination, filters, sorter, extra);
// }
const PageTest = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState('Thêm tài nguyên');
  const showModalAdd = () => {
    setIsModalVisible(true);
    setText('Thêm tài nguyên');
  };
  const showModalEdit = () => {
    setIsModalVisible(true);
    setText('Sửa tài nguyên');
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const routes: Routes[] = useMemo(
    () => [
      {
        path: '/',
        breadcrumbName: 'Trang chủ',
      },
      {
        path: '/du-toan',
        breadcrumbName: 'Dự toán',
      },
      {
        path: '/phan-bo-thu-nhap',
        breadcrumbName: 'Phân bổ thu nhập',
      },
    ],
    []
  );
  return (
    <>
      <Breadcrumb routes={routes} />
      <CustomCard title="Bảng">
        <BoxIcon>
          <BtnAdd type="primary" onClick={showModalAdd}>
            Thêm
          </BtnAdd>
          <BtnEdit onClick={showModalEdit}>Sửa</BtnEdit>
          <Button type="primary" danger>
            Xóa
          </Button>
        </BoxIcon>
        <Modal
          title={text}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Row justify="space-around">
            <Col span={16}>
              <Diaolog />
            </Col>
          </Row>
        </Modal>
        <CustomTable
          columns={columns}
          dataSource={data}
          scroll={{ x: 1500 }}
          pagination={false}
          bordered
        />
      </CustomCard>
    </>
  );
};

export default PageTest;
