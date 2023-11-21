import blogPlugin, { PluginOptions } from "@docusaurus/plugin-content-blog";
import { LoadContext, Plugin } from "@docusaurus/types";

const blogPluginExtended: Plugin = async (
  context: LoadContext,
  options: PluginOptions
) => {
  const blogPluginInstance = await blogPlugin(context, options);

  return {
    // Add all properties of the default blog plugin so existing functionality is preserved
    ...blogPluginInstance,
    /**
     * Override the default `contentLoaded` hook to access blog posts data
     */
    contentLoaded: async function (data) {
      // Get the 2 latest blog posts
      const recentPosts = [...data.content.blogPosts].splice(0, 2);

      data.actions.setGlobalData({
        recentPosts,
      });

      // Call the default overridden `contentLoaded` implementation
      return blogPluginInstance.contentLoaded(data);
    },
  };
};

export * from "@docusaurus/plugin-content-blog";
export default blogPluginExtended;
