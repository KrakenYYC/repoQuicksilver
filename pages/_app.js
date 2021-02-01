import '../styles/globals.css'
import * as Realm from "realm-web";

const REALM_APP_ID = "repoquicksilver-app"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
