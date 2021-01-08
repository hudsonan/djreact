import React from 'react';

import { List, Avatar } from 'antd';

const Articles = (props) => {
    return (
      <List
        itemLayout="vertical"
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={item.title}
              description={item.content}
            />
          </List.Item>
        )}
      />
        )
    }

export default Articles;