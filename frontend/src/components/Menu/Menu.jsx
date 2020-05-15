import React from 'react'

import MenuItem from './MenuItem/MenuItem'
import MenuTree from './MenuTree/MenuTree'

export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='/' icon='dashboard' label='Dashboard' />
    <MenuTree label='Cadastro' icon='edit'>
      <MenuItem path='billingCycles' icon='usd' label='Ciclos de Pagamentos' />
    </MenuTree>
  </ul>
)
