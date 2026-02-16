//================================================
//  配置引入
//================================================
// 引入UI组件
import { Button, Space, Table, ConfigProvider } from "antd"
// 引入图标
import { PlusOutlined, CompassFilled } from '@ant-design/icons';
// 引入 数据类型

//================================================
//   定义接口类型
//================================================


//#region  数据
//================================================
//   数据
//================================================
const columns = [
  {
    title: "创建日期",
    dataIndex: "createAt",        //对应数据里面的字段名
    key: "createAt",
    width:150,
    fixed:"start",
    
  },
  {
    title: "问卷标题",
    dataIndex: "title",           //对应数据里面的字段名
    key: "title",
    

  },
  {
    title: "题目数",
    dataIndex: "count",           //对应数据里面的字段名
    key: "count",
    align:"center",
    width:150,
  },
  {
    title: "最新更新日期",
    dataIndex: "update",        //对应数据里面的字段名
    key: "update",
    align:"center",
    width:150,
  },
  {
    title: "操作",
    dataIndex: "operator",        //对应数据里面的字段名
    key: "operator",
    align:"center",
    width:300,
    fixed:"end",
    //
    render: (_, record) => (
      <Space>
        <a>查看问卷</a>
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
]

// 模拟数据
const dataSource = [
  {
    key: '1',
    createAt: '2026/02/16 10:07:39',
    title: '关于 AI 学习工具的调研',
    count: 10,
    update: '2026-02-16',
  },
]
//#endregion
//===================================
//   ....
//===================================
function App() {
  return (
    <>
      {/* 容器 */}
      <div style={{ padding: "20px" }}>
        {/* Header */}
        <h1 className="font-weight-100 text-center">低代码平台 - 启动</h1>
        {/* Body */}
        <div>
          {/* 按钮组 */}
          <Space >
            <Button type='primary' icon={<PlusOutlined />}>创建问卷</Button>
            <Button type='primary'
              icon={<CompassFilled />}
              style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
            >组件市场</Button>
          </Space>
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 0,
              },
              components: {
                Table: {
                  lineHeight:1,
                  headerColor: 'rgba(0, 0, 0, 0.45)',
                  headerBg: "#fff",
                }
              }
            }}
          >
            {/* 数据表格 */}
            <Table
              scroll={{ x: 'max-content' }}
              columns={columns}
              dataSource={dataSource}
              bordered               // 创建边框
              style={{
                marginTop: "15px",
              }}
              pagination={false}     // 不创建多页
            ></Table>
          </ConfigProvider>


        </div>

      </div>
    </>
  )
}

export default App 
