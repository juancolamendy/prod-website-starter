const Logo = ({extClass}) => {
  return (
  <div className="flex items-center">
    <img src="images/logo.jpg" alt="Logo" className={extClass} />
		<span className="text-lg font-bold text-gray-900">DomainName</span>
  </div>
  )
}

export default Logo;
