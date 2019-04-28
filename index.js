/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

// For every app created, one component MUST be registered
// All code written by me is put in SRC Folder

AppRegistry.registerComponent(appName, () => App);
