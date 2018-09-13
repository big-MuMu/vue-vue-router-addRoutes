/* export default (name) => () => 
require (`@/pages/${name}.vue`) */

export default (name) => (resolve) => 
require ([`@/pages/${name}.vue`], resolve)
