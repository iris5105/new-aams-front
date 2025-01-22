import React from 'react';
import { Layout, Menu} from 'antd';
import { MailOutlined,AppstoreOutlined,SettingOutlined,LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {useNavigate, Link } from 'react-router-dom';
const items = [
  {
    key: '10',
    label: '자문일일일',
    icon: <MailOutlined />,
    children: [
                {
                    key: '00',
                    label: '시스템 수정 및 개발 의회',
                    value :'Menu'
                },
                {
                    type: 'divider'
                },                
                {
                    key: '01',
                    label: '회사 기본정보 관리',
                    value : 'Menu1'
                },
                {
                   type: 'divider'
                },   
                {
                    key: '10',
                    label: '계좌 관리그룹 등록',
                    value : 'Menu2'
                },
                {
                    key: '11',
                    label: '계좌 계약정보 관리',
                    value : 'Menu3'
                },
                {
                    key: '12',
                    label: '입,출금등록',
                },
                {
                    type: 'divider'
                },   
                {
                    key: '21',
                    label: '현금 매입(종목)등록',
                },
                {
                    key: '22',
                    label: '체권 매입등록',
                },
            ],
},
  {
    key: '20',
    label: '공모청약(권리)',
    icon: <AppstoreOutlined />,
    children: [
                {
                    key: '5',
                    label: 'Option 5',
                },
                {
                    key: '6',
                    label: 'Option 6',
                },
                {
                key: '7',
                label: 'Option 7',
                },
                {
                key: '8',
                label: 'Option 8',
                },
            ],
  },
  {
    type: 'divider',
  },
  {
    key: '30',
    label: '자산운용용',
    icon: <SettingOutlined />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: '11',
        label: 'Option 11',
      },
      {
        key: '12',
        label: 'Option 12',
      },
    ],
  },
  {
    key: '40',
    label: '외화자산운용',
    type: 'group',
    children: [
      {
        key: '13',
        label: 'Option 13',
      },
      {
        key: '14',
        label: 'Option 14',
      },
    ],
  },
];
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(10).fill(null).map((_, j) => {
      const subKey = index * 10 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
console.log(items2)
export default function Sider(){
    const navigate = useNavigate();  // useNavigate 훅 사용

    const goMenu = ( item) => {
      const value = item.props.value
      // console.log('value : ', value.item.value)
      navigate(value);  // navigate 함수로 '/Menu' 경로로 이동
    };
  return (
    <Layout
          style={{
            overflow: 'auto',
            height: '93vh',
            insetInlineStart: 0,
            top: 0,
            bottom: 0,
            scrollbarWidth: 'thin',
            scrollbarGutter: 'stable',
            backgroundColor : 'white'
          }}
    >
        <Menu
            mode="inline"
            style={{
            borderRight: 0,
            }}
            items={items}
            onSelect={(item) => goMenu(item.item)}
        />
        <Link to=''></Link>
        <button onClick={goMenu}>go menu</button>
    </Layout>

  )
}
;
