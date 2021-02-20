import './App.css';
import Header from  "./components/header";
import UserCard from  "./components/userCard";



 export const headerLinks = [
  {
    "id": 1,
    "title": "Ana Sayfa",
    "link": "/"
  },
  {
    "id": 2,
    "title": "Yazılar",
    "link": "/blog"
  },
  {
    "id": 3,
    "title": "Projeler",
    "link": "/projects"
  },
  {
    "id": 4,
    "title": "Hakkımda",
    "link": "/about"
  }
]



function App() {
  return (
    <>
      <Header headers={headerLinks} />
      <main>
        <UserCard />
      </main>
    </>
  );

}


export default App;
