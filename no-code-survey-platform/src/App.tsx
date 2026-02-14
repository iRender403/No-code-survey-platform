//===================================
//  配置引入
//===================================

// 引入UI组件
import { Button, Flex, Table } from "antd"
// 引入图标
import { PlusOutlined, CompassFilled } from '@ant-design/icons';
// 引入
//===================================
//   定义接口类型
//===================================

// 定义数据接口
interface DataType{
  id:string,
  date:string,
  title:string,
  count:number,
  updateTime:string,
  operator:string,
}

//=======================================
//   数据
//=======================================
const columns: any[] = [
  {
    title: '创建日期',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '问卷标题',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '题目数',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '最近更新日期',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '操作',
    dataIndex: 'name',
    key: 'name'
  },
]

const tableData: Array<DataType> = [];

//===================================
//   ....
//===================================
function App() {
  return (
    <>
      <div className="container">
        <h1 className="font-weight-100 text-center">低代码平台 - 启动</h1>
        {/* 按钮组 */}
        <Flex gap="small">
          <Button color="blue" variant="solid" icon={<PlusOutlined />}>创建问卷</Button>
          <Button color="green" variant="solid" icon={<CompassFilled />}>组件市场</Button>
        </Flex>
        {/* 数据表格 */}
        <Flex>
          <Table
            dataSource={tableData}
            columns={columns}
          >
          </Table>
        </Flex>
      </div>
    </>
  )
}

export default App 
