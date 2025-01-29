import SideBar from "./Components/SideBar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./utils/Store";
function App() {
  return (
    <div className=" flex flex-col">
      <Provider store={store}>
        <div className=" flex h-screen overflow-y-scroll bg-slate-400">
          <SideBar />
          <Outlet />
        </div>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
