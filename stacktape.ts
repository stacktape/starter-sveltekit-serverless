import { SvelteKitWeb, defineConfig } from 'stacktape';

export default defineConfig(() => {
  const web = new SvelteKitWeb({
    appDirectory: './'
  });

  return {
    resources: { web }
  };
});
