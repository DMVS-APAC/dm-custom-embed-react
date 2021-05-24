# dm-custom-embed-react

> Dailymotion custom embed solution

[![NPM](https://img.shields.io/npm/v/dm-custom-embed-react.svg)](https://www.npmjs.com/package/dm-custom-embed-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dm-custom-embed-react
```

## Usage

```jsx
mport React, { Component } from 'react'

import DmCustomEmbedm from 'dm-custom-embed-react'

class Example extends Component {
  render() {
    return <DmCustomEmbedm playerid="{PLAYER_ID}" sort="relevance" owners="{YOUR_CHANNEL_NAME}" /> />
  }
}
```
---
**NOTE**

All the attributes should be lowercase for ReactJs. Check out all the attributes availble here [Parameters Available](https://dmvs-apac.github.io/custom-embed-v2/#parameters-available)

---

[Example page](https://dmvs-apac.github.io/dm-custom-embed-react/)

## License

MIT © [DMVS-APAC](https://github.com/DMVS-APAC)


