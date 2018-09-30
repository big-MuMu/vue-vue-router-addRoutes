export default (name) => (resolve) => 
require ([`@/pages/${name}.vue`], resolve)
 

/* import('../../pages/stock/whOutputDetail') // 返回promise
reqiure('../../pages/stock/whOutputDetail') // 返回组件对象 */