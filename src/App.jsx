import RootRoute from "./Route/RootRoute";
import store from "./store/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <RootRoute />
    </Provider>
  );
}
export default App;
