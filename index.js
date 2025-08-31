/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Script, ScriptManager } from '@callstack/repack/client';

ScriptManager.shared.addResolver(async (scriptId, caller) => {

  console.log("scriptId", scriptId)
  console.log("caller", caller)

  // In dev mode, resolve script location to dev server.
  if (__DEV__) {
    return {
      url: Script.getDevServerURL(scriptId),
      cache: false, 
    };
  }

  return {
    url: Script.getRemoteURL(
      `http://somewhere-on-the-internet.com/${scriptId}`
    ),
  };
});

AppRegistry.registerComponent(appName, () => App);
