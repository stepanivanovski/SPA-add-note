import './app-header.css'

const AppHeader = ({total, liked}) => {
  return (
    <div className="app-header d-flex">
      <h1>Spepan Ivanov</h1>
      <h2>{total} записей, из них понравилось {liked}</h2>  
    </div>
  )
}

export default AppHeader