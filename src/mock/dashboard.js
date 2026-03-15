export const statCards = [
  { label: '模块分层', value: '10+', help: '布局、路由、页面、服务、状态等' },
  { label: '基础页面', value: '2', help: '当前保留 dashboard 与 login 占位页' },
  { label: '公共组件', value: '4', help: '布局壳、标题、统计卡片与区块容器' },
  { label: '工程状态', value: 'Ready', help: '已去除模板内容，可继续扩展业务' },
]

export const structureGroups = [
  {
    title: 'src 分层',
    items: [
      'api: 对接后端接口的模块入口',
      'components: 公共基础组件与布局组件',
      'layouts: 全局布局容器',
      'pages: 页面级业务视图',
      'router: 路由配置与权限映射',
      'services: 请求封装与业务服务',
      'store: 全局状态管理预留层',
      'styles: 主题变量与全局样式',
      'utils: 通用工具方法',
    ],
  },
  {
    title: '当前约定',
    items: [
      '页面目录统一使用 index.jsx 作为入口',
      '样式先集中在全局主题层，后续再按模块拆分',
      '路由先保留配置文件，接入 react-router-dom 后可直接扩展',
      '模拟数据统一放在 mock 目录，避免散落到页面中',
    ],
  },
]
