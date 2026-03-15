export const heroStats = [
  { label: '海产品分类', value: '28+' },
  { label: '供应信息', value: '126' },
  { label: '求购需求', value: '74' },
  { label: '学习订单', value: '312' },
]

export const categoryFilters = ['全部', '鱼类', '虾蟹', '贝类', '海藻', '冻品']
export const originFilters = ['全部产地', '舟山', '青岛', '厦门', '湛江', '大连']
export const orderTabs = ['全部', '待确认', '待发货', '待收货', '已完成', '已取消']
export const messageTabs = ['系统通知', '审核通知', '订单通知', '互动消息']

export const products = [
  {
    id: 'prawn-001',
    name: '深海白虾礼盒装',
    category: '虾蟹',
    origin: '湛江冷链仓',
    price: '¥128 / 盒',
    spec: '800g / 盒',
    stock: '库存充足',
    imageLabel: 'Deep Sea Prawn',
    summary: '鲜甜紧致，适合清蒸、白灼与家宴拼盘。',
    description: '精选深海白虾，采用低温锁鲜工艺处理，保留弹嫩肉质与自然鲜味，适合家庭餐桌和学习型下单演示。',
    features: ['48 小时冷链', '单盒独立包装', '适合家宴分享'],
    publishAt: '2026-03-10',
    merchant: '海湾优选供应社',
    comments: [
      { user: '海味研究社', content: '包装完整，详情说明清晰，适合演示订单流程。' },
      { user: '渔港笔记', content: '规格展示做得不错，适合课程答辩展示。' },
    ],
  },
  {
    id: 'salmon-002',
    name: '三文鱼排轻食装',
    category: '鱼类',
    origin: '青岛港鲜仓',
    price: '¥96 / 份',
    spec: '500g / 份',
    stock: '余量 24 份',
    imageLabel: 'Salmon Steak',
    summary: '纹理清晰，适合煎烤轻食与刺身演示。',
    description: '用于展示平台的精品海产品详情页，包含规格、产地、供应方、评论等完整信息结构。',
    features: ['色泽均匀', '适合轻食餐', '支持订单留言'],
    publishAt: '2026-03-12',
    merchant: '北纬海鲜实验室',
    comments: [
      { user: '轻食社团', content: '详情页结构非常完整，适合展示商品信息组织能力。' },
    ],
  },
  {
    id: 'scallop-003',
    name: '大连扇贝柱精选',
    category: '贝类',
    origin: '大连海域',
    price: '¥88 / 袋',
    spec: '600g / 袋',
    stock: '库存充足',
    imageLabel: 'Scallop Select',
    summary: '适合蒜蓉烤制、砂锅焖煮和节日拼盘。',
    description: '以学习型商品展示为目标，突出品类标签、产地、库存状态和相关推荐等信息。',
    features: ['真空锁鲜', '适合蒸烤', '分类清晰'],
    publishAt: '2026-03-08',
    merchant: '海上鲜货联盟',
    comments: [
      { user: '餐饮设计课', content: '卡片摘要简洁，适合快速浏览。' },
    ],
  },
  {
    id: 'kelp-004',
    name: '即食脆爽海带丝',
    category: '海藻',
    origin: '舟山近海',
    price: '¥29 / 包',
    spec: '300g / 包',
    stock: '库存充足',
    imageLabel: 'Kelp Salad',
    summary: '低脂爽口，适合轻餐和内容展示搭配。',
    description: '海藻类商品用于丰富平台品类分布，体现筛选、分类和推荐模块的完整性。',
    features: ['轻食友好', '即食包装', '口感脆爽'],
    publishAt: '2026-03-09',
    merchant: '海藻生活家',
    comments: [
      { user: '用户研究组', content: '适合在首页做轻量推荐。' },
    ],
  },
  {
    id: 'cod-005',
    name: '鳕鱼块家庭装',
    category: '冻品',
    origin: '厦门冻鲜中心',
    price: '¥75 / 盒',
    spec: '700g / 盒',
    stock: '余量 12 盒',
    imageLabel: 'Cod Cube',
    summary: '适合煎炸焖煮，家庭备菜友好。',
    description: '用于订单模块和商品详情联动展示，强化购物与配送说明页面。',
    features: ['烹饪方便', '家庭装', '适合展示库存标签'],
    publishAt: '2026-03-05',
    merchant: '海鲜冷鲜站',
    comments: [
      { user: '界面评审组', content: '库存、规格和按钮层级较清楚。' },
    ],
  },
  {
    id: 'crab-006',
    name: '梭子蟹鲜活礼盒',
    category: '虾蟹',
    origin: '舟山码头',
    price: '¥168 / 箱',
    spec: '4 只 / 箱',
    stock: '限量供应',
    imageLabel: 'Swimming Crab',
    summary: '适合海鲜礼赠与高端菜肴演示。',
    description: '高辨识度的视觉商品，用于首页主推区与详情页大图区域展示。',
    features: ['礼盒包装', '节日推荐', '高端展示'],
    publishAt: '2026-03-11',
    merchant: '东海礼赠馆',
    comments: [
      { user: '毕业设计答辩组', content: '适合放到首屏推荐。' },
    ],
  },
]

export const supplyItems = [
  {
    id: 's-001',
    title: '舟山鲜活梭子蟹稳定供应',
    subtitle: '海湾优选供应社',
    category: '虾蟹',
    quantity: '日供 180 箱',
    price: '¥158 - ¥188 / 箱',
    location: '浙江 舟山',
    updatedAt: '2 小时前更新',
  },
  {
    id: 's-002',
    title: '青岛三文鱼排批量发售',
    subtitle: '北纬海鲜实验室',
    category: '鱼类',
    quantity: '周供 240 份',
    price: '¥86 / 份起',
    location: '山东 青岛',
    updatedAt: '今天 10:24',
  },
  {
    id: 's-003',
    title: '大连扇贝柱冷链直发',
    subtitle: '海上鲜货联盟',
    category: '贝类',
    quantity: '可供 560 袋',
    price: '¥82 / 袋',
    location: '辽宁 大连',
    updatedAt: '昨天 18:40',
  },
  {
    id: 's-004',
    title: '轻食海带丝新批次上线',
    subtitle: '海藻生活家',
    category: '海藻',
    quantity: '现货 320 包',
    price: '¥24 / 包',
    location: '浙江 舟山',
    updatedAt: '昨天 09:12',
  },
]

export const demandItems = [
  {
    id: 'd-001',
    title: '求购宴会用深海白虾',
    subtitle: '校园餐饮交流社',
    category: '虾蟹',
    quantity: '计划采购 60 盒',
    price: '预算 ¥100 - ¥130 / 盒',
    location: '安徽 合肥',
    updatedAt: '3 小时前发布',
    status: '待响应',
  },
  {
    id: 'd-002',
    title: '寻找稳定三文鱼排供应',
    subtitle: '轻食课堂项目组',
    category: '鱼类',
    quantity: '每周 80 份',
    price: '预算 ¥80 - ¥95 / 份',
    location: '江苏 南京',
    updatedAt: '今天 09:30',
    status: '沟通中',
  },
  {
    id: 'd-003',
    title: '求购节日扇贝礼盒方案',
    subtitle: '海鲜礼品策划课',
    category: '贝类',
    quantity: '30 组',
    price: '预算 ¥90 - ¥120 / 组',
    location: '上海',
    updatedAt: '昨天 14:15',
    status: '待响应',
  },
  {
    id: 'd-004',
    title: '低脂海藻类产品采购意向',
    subtitle: '轻食品牌研究站',
    category: '海藻',
    quantity: '试单 100 包',
    price: '预算 ¥20 - ¥28 / 包',
    location: '福建 厦门',
    updatedAt: '昨天 11:00',
    status: '待响应',
  },
]

export const articles = [
  {
    id: 'n-001',
    title: '如何在学习型海产品平台中设计商品详情结构',
    category: '平台设计',
    publishAt: '2026-03-13',
    coverLabel: 'Article Cover 01',
    summary: '围绕图片、规格、评价、相关推荐四个部分，分析商品详情页如何服务浏览与下单路径。',
    content: [
      '商品详情页承担了浏览转化与信息解释的双重职责。对于海产品平台而言，图片、规格、产地、存储方式和库存状态属于高优先级信息。',
      '在学习型系统里，不必设计过于复杂的交易细节，但应把用户决策过程中最重要的字段组织清楚，包括价格、规格、供应方、推荐商品和评论。',
      '如果前端页面能通过标签页或分区卡片承载这些内容，就能兼顾视觉层级与开发可维护性。',
    ],
  },
  {
    id: 'n-002',
    title: '冷链展示信息应该怎样出现在海产品商品卡片中',
    category: '行业知识',
    publishAt: '2026-03-11',
    coverLabel: 'Article Cover 02',
    summary: '卡片展示不需要塞满所有字段，但冷链、产地和规格应是海产品类目中的高价值信息。',
    content: [
      '海产品商品卡片与普通快消商品不同，用户通常会更关注产地、冷链说明和规格包装。',
      '因此在卡片层建议保留简短摘要，把更完整的信息放到详情页中承接。',
    ],
  },
  {
    id: 'n-003',
    title: '供应广场与求购广场为什么要区分展示结构',
    category: '交互设计',
    publishAt: '2026-03-09',
    coverLabel: 'Article Cover 03',
    summary: '供给信息强调库存与价格，求购信息强调预算与需求量，两者的信息重心不同。',
    content: [
      '供应广场与求购广场虽然都是信息广场，但核心字段并不一致。',
      '供应信息侧重谁在供货、供什么、多少钱；求购信息侧重谁在找货、需要多少、预算多少。',
      '前端应分别设计卡片字段和操作按钮，而不是强行复用同一套模板。',
    ],
  },
  {
    id: 'n-004',
    title: '学习型订单系统如何简化又不失完整度',
    category: '系统规划',
    publishAt: '2026-03-08',
    coverLabel: 'Article Cover 04',
    summary: '保留待确认、待发货、待收货、已完成、已取消五类状态即可呈现完整流程。',
    content: [
      '如果系统不接入真实支付，订单流程仍然可以保留基本状态机，用于展示微服务间的数据流转与页面交互。',
      '前端可以通过时间轴、状态标签和按钮控制把订单流程解释清楚。',
    ],
  },
]

export const notices = [
  '平台当前为学习演示环境，所有订单均为模拟订单。',
  '供应者发布的商品与供应信息需经过平台审核后展示。',
  '建议在个人中心完成供应者申请后再发布供应内容。',
]

export const orders = [
  {
    id: 'o-20260315-001',
    title: '深海白虾礼盒装',
    amount: '¥256',
    quantity: '2 盒',
    status: '待发货',
    timeline: ['提交订单', '供应方确认', '待发货'],
    consignee: '张同学',
    address: '合肥市滨湖新区学习交流街 18 号',
    createdAt: '2026-03-15 09:24',
    supplier: '海湾优选供应社',
    note: '用于课堂答辩展示，请保留礼盒外观。',
  },
  {
    id: 'o-20260314-006',
    title: '三文鱼排轻食装',
    amount: '¥192',
    quantity: '2 份',
    status: '待收货',
    timeline: ['提交订单', '供应方确认', '已发货', '待收货'],
    consignee: '李同学',
    address: '南京市江宁区海鲜实验室 3 层',
    createdAt: '2026-03-14 16:10',
    supplier: '北纬海鲜实验室',
    note: '偏向轻食菜单演示。',
  },
  {
    id: 'o-20260312-018',
    title: '大连扇贝柱精选',
    amount: '¥88',
    quantity: '1 袋',
    status: '已完成',
    timeline: ['提交订单', '供应方确认', '已发货', '已收货', '已完成'],
    consignee: '王同学',
    address: '芜湖市课程设计中心 A 楼',
    createdAt: '2026-03-12 13:45',
    supplier: '海上鲜货联盟',
    note: '页面流程体验良好。',
  },
]

export const messages = [
  {
    category: '系统通知',
    title: '平台公告更新',
    summary: '学习环境新增“供应者申请”引导说明。',
    time: '今天 09:00',
    unread: true,
  },
  {
    category: '审核通知',
    title: '供应者申请已通过',
    summary: '你已获得供应者身份，可发布商品与供应信息。',
    time: '昨天 17:30',
    unread: false,
  },
  {
    category: '订单通知',
    title: '订单状态已更新为待发货',
    summary: '订单 o-20260315-001 已被供应方确认。',
    time: '昨天 15:20',
    unread: true,
  },
  {
    category: '互动消息',
    title: '你的商品收到新评论',
    summary: '“深海白虾礼盒装”收到 1 条新的体验反馈。',
    time: '2026-03-13 20:15',
    unread: false,
  },
]

export const profile = {
  name: '林海同学',
  role: '普通用户 / 供应者',
  bio: '关注海产品信息展示、供需交流与前后端协同设计。',
  stats: [
    { label: '收藏商品', value: '18' },
    { label: '发布求购', value: '6' },
    { label: '发布供应', value: '9' },
    { label: '完成订单', value: '24' },
  ],
  favorites: ['三文鱼排轻食装', '深海白虾礼盒装', '梭子蟹鲜活礼盒'],
  myDemand: demandItems.slice(0, 2),
  mySupply: supplyItems.slice(0, 2),
}

export function getProductById(id) {
  return products.find((item) => item.id === id)
}

export function getArticleById(id) {
  return articles.find((item) => item.id === id)
}

export function getOrderById(id) {
  return orders.find((item) => item.id === id)
}
