/**
 * 404 NoFoundPage
 * created by ADMIN on 2019-07-10 14:53
 */

import { Button, Result } from 'antd';
import React from 'react';
import router from 'umi/router';
// 但是还没发布，先来个简单的。

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => router.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
