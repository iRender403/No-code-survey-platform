import {
  ConfigProvider,
  Button,
  Flex
} from "antd"
// 引入图标
import {
  PlusOutlined,
  CompassFilled,

} from '@ant-design/icons';


function App() {
  return (
    <>
      <div className="container">
        <h1 className="font-weight-100 text-center">低代码平台 - 启动</h1>
        {/* 按钮组 */}
        <ConfigProvider >
          <Flex gap="small">
            <Button color="blue" variant="solid" icon={<PlusOutlined />}>创建问卷</Button>
            <Button color="green" variant="solid" icon={<CompassFilled />}>组件市场</Button>
          </Flex>
        </ConfigProvider>

        {/* 数据表格 */}
        <ConfigProvider>
            <Flex>
              
            </Flex>
        </ConfigProvider>

      </div>
    </>
  )
}

export default App 
