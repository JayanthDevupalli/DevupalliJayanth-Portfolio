const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Devupalli Jayanth. All rights reserved.</p>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/devupalli-jayanth-37b22b257/" className="text-gray-400 hover:text-white mx-2">
              LinkedIn
            </a>
            <a href="https://github.com/JayanthDevupalli"  className="text-gray-400 hover:text-white mx-2">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  