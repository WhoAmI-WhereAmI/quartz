import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  mapFn: (node) => {
    if (node.isFolder) {
      node.displayName = "📁 " + node.displayName
    }
    return node
  },
} as Partial<ExternalPlugin.ExplorerOptions>)

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
