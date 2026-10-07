/**
 * Ping IndexNow after a successful production deploy.
 *
 * onSuccess rather than onPostBuild: the URLs are only worth submitting once
 * they are actually live. Submitting mid-build would hand engines URLs that a
 * failed deploy then never publishes.
 *
 * ESM works here because site/package.json sets "type": "module". Netlify
 * resolves the plugin path in netlify.toml against the build base, which is
 * site/, and runs onSuccess with that same directory as cwd — so the relative
 * path to the script below is correct from there.
 */
export const onSuccess = async () => {
  if (process.env.CONTEXT !== 'production') {
    // Deploy previews and branch deploys live on *.netlify.app. Submitting
    // those would declare a host outside brandure.io and come back 422.
    console.log(`indexnow: skipping, CONTEXT=${process.env.CONTEXT}`);
    return;
  }

  const { execSync } = await import('node:child_process');
  try {
    execSync('node scripts/indexnow.mjs', { stdio: 'inherit' });
  } catch {
    console.log('indexnow: submission failed, continuing');
  }
};
