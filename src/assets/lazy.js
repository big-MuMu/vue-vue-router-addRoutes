export default (name) => (resolve) => 
require ([`@/pages/${name}.vue`], resolve)
 