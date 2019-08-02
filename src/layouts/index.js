/**
 * 整体layout布局
 */
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from './index.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class BasicLayout extends React.Component {
  componentDidMount() {
    const {
      dispatch,
      route: { routes, path },
    } = this.props;
    console.log('router', routes, window.g_routes)
    dispatch({
      type: 'menu/getMenuData',
      payload: {
        routes: window.g_routes,
      },
    });
  }

  render() {
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
