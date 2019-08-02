/**
 * 整体layout布局
 */
import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import SiderMenu from '@/components/SiderMenu';
import styles from './index.less';

const { Header, Content, Sider } = Layout;

class BasicLayout extends React.Component {
  componentDidMount() {
    const {
      dispatch,
      route: { routes },
    } = this.props;
    // 全部routes window.g_routes
    dispatch({
      type: 'menu/getMenuData',
      payload: {
        routes,
      },
    });
  }

  render() {
    const { menuData } = this.props;
    return (
      <Layout className={styles.wrapper}>
        <Header className={styles.header}>
          header
        </Header>
        <Layout className={styles.body}>
          <Sider 
            width={280}
            className={styles.sider}
          >
            <SiderMenu
              theme="light"
              onCollapse={() => {}}
              menuData={menuData}
              {...this.props}
            />
          </Sider>
          <Layout className={styles.main}>
            <Content className={styles.content}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect(({ global, menu: menuModel }) => ({
  collapsed: global.collapsed,
  menuData: menuModel.menuData,
  breadcrumbNameMap: menuModel.breadcrumbNameMap,
}))(BasicLayout);
