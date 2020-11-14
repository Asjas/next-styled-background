const colors = {
  clrPrimary: '211, 12, 132',
  opacity: '0.6'
}

function HomePage() {
  return (
    <>
      <div className="toggle">Welcome to Next.js!<style jsx>{`
        .toggle {
          background: rgba(${colors.clrPrimary}, 0.3);
          padding: 20px;
        }
      `}</style></div>
      <div className="toggle2">Welcome to Next.js!<style jsx>{`
        .toggle2 {
          background: rgba(${colors.clrPrimary}, ${colors.opacity});
          padding: 20px;
        }
      `}</style></div>
    </>
  )
}

export default HomePage
