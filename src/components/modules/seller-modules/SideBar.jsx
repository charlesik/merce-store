import Logo from '/assets/icons/merce-logo.svg'
import SidebarContent from '../../ui-components/seller-ui/dashboard/SidebarContent'

export default function SideBar() {
  return (
    <div className='hidden lg:block side-bar fixed lg:w-[340px] bg-soft-black h-screen'>
      <img className='hidden md:block mx-6 mt-10 mb-12' src={Logo} alt="" />
      <SidebarContent />
    </div>
  )
}
