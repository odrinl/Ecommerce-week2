import Catalog from './components/Catalog';

function App() {
  return (
    <div>
      <Catalog />
      <footer className='bg-body-secondary text-light py-5'>
        <div className='container text-center'>
          <a
            href='https://github.com/odrinl/Ecommerce-week2'
            className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'
          >
            &copy; Audrey 2023
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
