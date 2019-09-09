## Why this repo?

In some cases, if we develop a spa-project contains `20~100` pages. We may use `cache-loader` and `thread-loader` speed-up webpack build.

But when I develop a `30~40` pages spa-project, it still costs more than `30s` in first `development-mode` build.

Most of the time, I care about the current development page, not the other pages.

**So it's possiable that webpack only build current page, not all pages in project**, `webpack-eliminate-loader` works with `webpack` to speed-up webpack build.

`webpack-eliminate-loader` speed-up webpack build by route-code-spliting. if you only care about `page-a`, `webpack-eliminate-loader` will only build-up `page-a`

**`30~40` pages's project**

| cache-loader + thread-loader | cache-loader + thread-loader + webpack-eliminate-loader |
| :--------------------------- | ------------------------------------------------------: |
| costs `35s`                  |                                             costs `15s` |