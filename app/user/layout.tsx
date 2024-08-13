interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className='flex flex-col gap-y-4'>
      <nav className='bg-gray-800 text-white p-4'>Im nav</nav>
      {children}
    </div>
  )
}

export default Layout
