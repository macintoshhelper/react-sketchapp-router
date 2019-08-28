// flow-typed signature: 05a12fcb0c16de36a2e664662a400b45
// flow-typed version: <<STUB>>/history_v4.9.0/flow_v0.105.2

/**
 * This is an autogenerated libdef stub for:
 *
 *   'history'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'history' {
  declare type Location = {
    key?: string,
    pathname: string,
    search?: string,
    hash?: string,
    state?: {
      [string]: mixed,
    },
  };

  declare export function createLocation(
    path: string | Location,
  ): Location;
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'history/cjs/history' {
  declare module.exports: any;
}

declare module 'history/cjs/history.min' {
  declare module.exports: any;
}

declare module 'history/createBrowserHistory' {
  declare module.exports: any;
}

declare module 'history/createHashHistory' {
  declare module.exports: any;
}

declare module 'history/createMemoryHistory' {
  declare module.exports: any;
}

declare module 'history/createTransitionManager' {
  declare module.exports: any;
}

declare module 'history/DOMUtils' {
  declare module.exports: any;
}

declare module 'history/es/createBrowserHistory' {
  declare module.exports: any;
}

declare module 'history/es/createHashHistory' {
  declare module.exports: any;
}

declare module 'history/es/createMemoryHistory' {
  declare module.exports: any;
}

declare module 'history/es/createTransitionManager' {
  declare module.exports: any;
}

declare module 'history/es/DOMUtils' {
  declare module.exports: any;
}

declare module 'history/es/ExecutionEnvironment' {
  declare module.exports: any;
}

declare module 'history/es/LocationUtils' {
  declare module.exports: any;
}

declare module 'history/es/PathUtils' {
  declare module.exports: any;
}

declare module 'history/es/warnAboutDeprecatedESMImport' {
  declare module.exports: any;
}

declare module 'history/esm/history' {
  declare module.exports: any;
}

declare module 'history/ExecutionEnvironment' {
  declare module.exports: any;
}

declare module 'history/LocationUtils' {
  declare module.exports: any;
}

declare module 'history/PathUtils' {
  declare module.exports: any;
}

declare module 'history/umd/history' {
  declare module.exports: any;
}

declare module 'history/umd/history.min' {
  declare module.exports: any;
}

declare module 'history/warnAboutDeprecatedCJSRequire' {
  declare module.exports: any;
}

// Filename aliases
declare module 'history/cjs/history.js' {
  declare module.exports: $Exports<'history/cjs/history'>;
}
declare module 'history/cjs/history.min.js' {
  declare module.exports: $Exports<'history/cjs/history.min'>;
}
declare module 'history/createBrowserHistory.js' {
  declare module.exports: $Exports<'history/createBrowserHistory'>;
}
declare module 'history/createHashHistory.js' {
  declare module.exports: $Exports<'history/createHashHistory'>;
}
declare module 'history/createMemoryHistory.js' {
  declare module.exports: $Exports<'history/createMemoryHistory'>;
}
declare module 'history/createTransitionManager.js' {
  declare module.exports: $Exports<'history/createTransitionManager'>;
}
declare module 'history/DOMUtils.js' {
  declare module.exports: $Exports<'history/DOMUtils'>;
}
declare module 'history/es/createBrowserHistory.js' {
  declare module.exports: $Exports<'history/es/createBrowserHistory'>;
}
declare module 'history/es/createHashHistory.js' {
  declare module.exports: $Exports<'history/es/createHashHistory'>;
}
declare module 'history/es/createMemoryHistory.js' {
  declare module.exports: $Exports<'history/es/createMemoryHistory'>;
}
declare module 'history/es/createTransitionManager.js' {
  declare module.exports: $Exports<'history/es/createTransitionManager'>;
}
declare module 'history/es/DOMUtils.js' {
  declare module.exports: $Exports<'history/es/DOMUtils'>;
}
declare module 'history/es/ExecutionEnvironment.js' {
  declare module.exports: $Exports<'history/es/ExecutionEnvironment'>;
}
declare module 'history/es/LocationUtils.js' {
  declare module.exports: $Exports<'history/es/LocationUtils'>;
}
declare module 'history/es/PathUtils.js' {
  declare module.exports: $Exports<'history/es/PathUtils'>;
}
declare module 'history/es/warnAboutDeprecatedESMImport.js' {
  declare module.exports: $Exports<'history/es/warnAboutDeprecatedESMImport'>;
}
declare module 'history/esm/history.js' {
  declare module.exports: $Exports<'history/esm/history'>;
}
declare module 'history/ExecutionEnvironment.js' {
  declare module.exports: $Exports<'history/ExecutionEnvironment'>;
}
declare module 'history/index' {
  declare module.exports: $Exports<'history'>;
}
declare module 'history/index.js' {
  declare module.exports: $Exports<'history'>;
}
declare module 'history/LocationUtils.js' {
  declare module.exports: $Exports<'history/LocationUtils'>;
}
declare module 'history/PathUtils.js' {
  declare module.exports: $Exports<'history/PathUtils'>;
}
declare module 'history/umd/history.js' {
  declare module.exports: $Exports<'history/umd/history'>;
}
declare module 'history/umd/history.min.js' {
  declare module.exports: $Exports<'history/umd/history.min'>;
}
declare module 'history/warnAboutDeprecatedCJSRequire.js' {
  declare module.exports: $Exports<'history/warnAboutDeprecatedCJSRequire'>;
}
