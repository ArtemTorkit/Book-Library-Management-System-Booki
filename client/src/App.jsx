import "./App.css";
import Header from "./components/Header";
import BookList from "./components/BookList";
import FunctionalBar from "./components/FunctionalBar";
import AuthorsProvider from "./contexts/AuthorContext";
import BookProvider from "./contexts/BookContext";
import { NotificationProvider } from "./hooks/NotificationContext";

function App() {
  return (
    <main>
      <Header />
      <div className="main-container">
        <NotificationProvider>
          {" "}
          {/* Custom Hook & Context API for managing notifications */}
          <BookProvider>
            {" "}
            {/* Context for stroring books data */}
            <AuthorsProvider>
              {" "}
              {/* Context for stroring authors data */}
              <div>
                <FunctionalBar />
                <BookList />
              </div>
            </AuthorsProvider>
          </BookProvider>
        </NotificationProvider>
      </div>
    </main>
  );
}

export default App;
